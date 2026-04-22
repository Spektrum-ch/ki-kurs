import { NextRequest, NextResponse } from 'next/server';
import { getUserFromCookie, isAdmin, generateLoginToken, getLoginTokenExpiry } from '@/lib/auth';
import { getUserByEmail, saveUser, updateUser } from '@/lib/users';
import { sendMagicLink } from '@/lib/email';
import { ALL_COURSES } from '@/data/courses';
import type { User } from '@/types';

interface TeamUnlockRequest {
  courseSlug: string;       // z.B. "ki-gemeinden"
  teamName: string;         // z.B. "Gemeinde Musterwil"
  sendEmails: boolean;      // Magic-Link automatisch versenden?
  entries: string;          // Textarea-Inhalt, eine Zeile pro Person
}

interface EntryResult {
  email: string;
  name: string;
  status: 'created' | 'updated' | 'error' | 'skipped';
  emailSent: boolean;
  error?: string;
}

/**
 * Zeile parsen – erlaubte Formate:
 *   - "email@example.com"
 *   - "email@example.com, Vorname Nachname"
 *   - "Vorname Nachname <email@example.com>"
 *   - "Vorname Nachname; email@example.com"
 */
function parseLine(line: string): { email: string; name: string } | null {
  const trimmed = line.trim();
  if (!trimmed) return null;

  // Format "Name <email>"
  const angleMatch = trimmed.match(/^(.+?)\s*<([^>]+)>$/);
  if (angleMatch) {
    return { name: angleMatch[1].trim(), email: angleMatch[2].trim().toLowerCase() };
  }

  // Trennung durch Komma oder Semikolon
  const parts = trimmed.split(/[,;]/).map(p => p.trim()).filter(Boolean);
  const emailPart = parts.find(p => p.includes('@'));
  if (!emailPart) return null;

  const namePart = parts.find(p => p !== emailPart);
  const email = emailPart.toLowerCase();
  // Grobe E-Mail-Validierung
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;

  const name = namePart || email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  return { email, name };
}

export async function POST(req: NextRequest) {
  // Admin-Check
  const auth = getUserFromCookie();
  if (!auth || !isAdmin(auth.email)) {
    return NextResponse.json({ error: 'Nicht autorisiert' }, { status: 401 });
  }

  const body = (await req.json()) as TeamUnlockRequest;
  const { courseSlug, teamName, sendEmails, entries } = body;

  // Validierung
  if (!courseSlug || !entries) {
    return NextResponse.json({ error: 'courseSlug und entries erforderlich' }, { status: 400 });
  }
  const course = ALL_COURSES.find(c => c.slug === courseSlug);
  if (!course) {
    return NextResponse.json({ error: `Kurs "${courseSlug}" existiert nicht` }, { status: 400 });
  }

  const lines = entries.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const results: EntryResult[] = [];
  const now = new Date().toISOString();

  for (const line of lines) {
    const parsed = parseLine(line);
    if (!parsed) {
      results.push({ email: line, name: '', status: 'error', emailSent: false, error: 'Ungültiges Format' });
      continue;
    }
    const { email, name } = parsed;

    try {
      const existing = getUserByEmail(email);
      const purchased = existing?.purchasedCourses || {};

      // Wenn der User den Kurs schon hat: nur Kaufdatum erneuern (verlängert 90-Tage-Zugang)
      const alreadyHas = !!purchased[courseSlug];
      const updatedPurchased = { ...purchased, [courseSlug]: now };

      let loginToken: string | null = null;
      let tokenExpires: string | null = null;
      if (sendEmails) {
        loginToken = generateLoginToken();
        tokenExpires = getLoginTokenExpiry();
      }

      if (existing) {
        const updates: Partial<User> = { purchasedCourses: updatedPurchased };
        if (sendEmails) {
          updates.login_token = loginToken;
          updates.login_token_expires = tokenExpires;
        }
        updateUser(email, updates);
        results.push({
          email,
          name: existing.name,
          status: alreadyHas ? 'updated' : 'updated',
          emailSent: false,
        });
      } else {
        const newUser: User = {
          email,
          name,
          createdAt: now,
          verified: true, // Team-Member gelten als verifiziert (Gemeinde hat sie bestätigt)
          login_token: loginToken,
          login_token_expires: tokenExpires,
          purchasedCourses: updatedPurchased,
        };
        saveUser(newUser);
        results.push({ email, name, status: 'created', emailSent: false });
      }

      // Magic-Link senden
      if (sendEmails && loginToken) {
        try {
          await sendMagicLink(email, loginToken, name, course.href);
          const r = results[results.length - 1];
          r.emailSent = true;
        } catch (mailErr) {
          const r = results[results.length - 1];
          r.error = `Freigeschaltet, aber E-Mail-Versand fehlgeschlagen: ${(mailErr as Error).message}`;
        }
      }
    } catch (err) {
      results.push({
        email,
        name,
        status: 'error',
        emailSent: false,
        error: (err as Error).message,
      });
    }
  }

  const summary = {
    team: teamName || '(ohne Name)',
    course: course.course.title,
    total: results.length,
    created: results.filter(r => r.status === 'created').length,
    updated: results.filter(r => r.status === 'updated').length,
    errors: results.filter(r => r.status === 'error').length,
    emailsSent: results.filter(r => r.emailSent).length,
  };

  return NextResponse.json({ summary, results });
}
