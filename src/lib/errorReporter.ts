import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { sendErrorAlert, sendUserIncidentEmail } from './email';

/**
 * Tier-1-Errorreporter: Fehler auf Disk schreiben, Admin alarmieren,
 * betroffenen User bei blockierenden Fehlern informieren.
 *
 * Kein autonomer Fix, kein LLM-Call — reines Capture + Alert.
 */

const DATA_DIR = path.join(process.cwd(), 'data');
const ERRORS_FILE = path.join(DATA_DIR, 'errors.json');
const RATE_FILE = path.join(DATA_DIR, 'errors-rate.json');

// Rate-Limits, damit ein Error-Loop die Inbox (und Brevo-Quota) nicht flutet
const MAX_ADMIN_MAILS_PER_HOUR = 20;
const MAX_USER_MAILS_PER_HOUR = 50;

export type ErrorSeverity = 'low' | 'medium' | 'high';

export interface ErrorContext {
  /** Kategorisierung – erlaubt Admin-Filterung */
  source: 'api' | 'page' | 'client' | 'middleware' | 'cron';
  /** Route oder Datei wo der Fehler auftrat (z.B. '/api/stripe/checkout') */
  location: string;
  /** Betroffene E-Mail (falls bekannt) */
  userEmail?: string;
  /** Zusätzliche Metadaten (request body auszug, params etc.) */
  meta?: Record<string, unknown>;
  /** Soll der betroffene User benachrichtigt werden? Nur bei blockierenden Fehlern. */
  notifyUser?: boolean;
  /** Schweregrad */
  severity?: ErrorSeverity;
}

interface StoredError {
  id: string;
  timestamp: string;
  message: string;
  stack: string | null;
  source: string;
  location: string;
  userEmail: string | null;
  meta: Record<string, unknown>;
  severity: ErrorSeverity;
  notifiedAdmin: boolean;
  notifiedUser: boolean;
}

function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
}

function readErrors(): StoredError[] {
  ensureDataDir();
  if (!fs.existsSync(ERRORS_FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(ERRORS_FILE, 'utf8'));
  } catch {
    return [];
  }
}

function writeErrors(errors: StoredError[]): void {
  ensureDataDir();
  // Letzte 1000 Errors behalten – älter: rotieren
  const trimmed = errors.slice(-1000);
  fs.writeFileSync(ERRORS_FILE, JSON.stringify(trimmed, null, 2));
}

interface RateState {
  adminMails: string[];  // ISO Timestamps in letzter Stunde
  userMails: string[];
}

function readRate(): RateState {
  ensureDataDir();
  if (!fs.existsSync(RATE_FILE)) return { adminMails: [], userMails: [] };
  try {
    return JSON.parse(fs.readFileSync(RATE_FILE, 'utf8'));
  } catch {
    return { adminMails: [], userMails: [] };
  }
}

function writeRate(state: RateState): void {
  ensureDataDir();
  fs.writeFileSync(RATE_FILE, JSON.stringify(state));
}

function pruneOldTimestamps(ts: string[]): string[] {
  const cutoff = Date.now() - 60 * 60 * 1000;
  return ts.filter(t => new Date(t).getTime() > cutoff);
}

function canSendAdminMail(): boolean {
  const state = readRate();
  state.adminMails = pruneOldTimestamps(state.adminMails);
  if (state.adminMails.length >= MAX_ADMIN_MAILS_PER_HOUR) {
    writeRate(state);
    return false;
  }
  state.adminMails.push(new Date().toISOString());
  writeRate(state);
  return true;
}

function canSendUserMail(): boolean {
  const state = readRate();
  state.userMails = pruneOldTimestamps(state.userMails);
  if (state.userMails.length >= MAX_USER_MAILS_PER_HOUR) {
    writeRate(state);
    return false;
  }
  state.userMails.push(new Date().toISOString());
  writeRate(state);
  return true;
}

function extractErrorDetails(err: unknown): { message: string; stack: string | null } {
  if (err instanceof Error) {
    return { message: err.message, stack: err.stack || null };
  }
  if (typeof err === 'string') return { message: err, stack: null };
  try {
    return { message: JSON.stringify(err), stack: null };
  } catch {
    return { message: String(err), stack: null };
  }
}

/**
 * Zentrale Fehlermelde-Funktion. Fire-and-forget — wirft nie selbst.
 */
export async function reportError(err: unknown, ctx: ErrorContext): Promise<void> {
  try {
    const { message, stack } = extractErrorDetails(err);
    const adminEmail = process.env.ADMIN_EMAIL || 'andreas.rupf@spekt.ch';

    const stored: StoredError = {
      id: crypto.randomBytes(6).toString('hex'),
      timestamp: new Date().toISOString(),
      message,
      stack,
      source: ctx.source,
      location: ctx.location,
      userEmail: ctx.userEmail || null,
      meta: ctx.meta || {},
      severity: ctx.severity || 'medium',
      notifiedAdmin: false,
      notifiedUser: false,
    };

    // Schritt 1: persistieren
    const errors = readErrors();
    errors.push(stored);

    // Schritt 2: Admin-Mail (rate-limited)
    if (canSendAdminMail()) {
      try {
        await sendErrorAlert(adminEmail, {
          id: stored.id,
          message,
          stack,
          source: ctx.source,
          location: ctx.location,
          userEmail: ctx.userEmail,
          meta: ctx.meta,
          severity: stored.severity,
          timestamp: stored.timestamp,
        });
        stored.notifiedAdmin = true;
      } catch (mailErr) {
        console.error('[ErrorReporter] Admin-Mail fehlgeschlagen:', mailErr);
      }
    }

    // Schritt 3: User-Mail (nur blockierende Fehler + rate-limited)
    if (ctx.notifyUser && ctx.userEmail && canSendUserMail()) {
      try {
        await sendUserIncidentEmail(ctx.userEmail);
        stored.notifiedUser = true;
      } catch (mailErr) {
        console.error('[ErrorReporter] User-Mail fehlgeschlagen:', mailErr);
      }
    }

    writeErrors(errors);
    console.error(`[ErrorReporter ${stored.id}] ${ctx.source}/${ctx.location}: ${message}`);
  } catch (reportingErr) {
    // Niemals den Request killen, weil das Reporting selbst scheitert
    console.error('[ErrorReporter] Reporting selbst fehlgeschlagen:', reportingErr);
  }
}

export function getAllErrors(): StoredError[] {
  return readErrors().slice().reverse(); // neueste zuerst
}
