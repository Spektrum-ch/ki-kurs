import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { readEvents, type AnalyticsEvent } from '@/lib/analytics';
import { getAllUsers } from '@/lib/users';
import { ALL_COURSES } from '@/data/courses';
import type { Progress, User } from '@/types';

export const dynamic = 'force-dynamic';

/**
 * Admin-Summary für das SPEKTRUM-Dashboard (Sektion «Tool-Admin»).
 * Einheitlicher Vertrag über alle Tools (siehe andi-dashboard/docs/tool-admin.md):
 * Kern-KPIs, neueste Registrierungen, letzte Aktivitäten, Kosten (hier keine),
 * Deep-Links und kurs-spezifische Zusatzwerte in `extra`.
 *
 * Auth: Authorization: Bearer <COURSE_STATS_API_KEY> (alternativ x-api-key wie
 * /api/admin/course-stats). Antwort wird 60 s gecacht.
 */

const CACHE_TTL_MS = 60_000;
let cache: { at: number; days: number; data: unknown } | null = null;

const COURSE_LABEL: Record<string, string> = Object.fromEntries(
  ALL_COURSES.map(c => [c.slug, c.course.title]),
);
// Gratiskurse aus der Kursliste (Preis 0) – bewusst nicht aus @/lib/stripe importiert,
// weil das Modul den Stripe-Client instanziiert (Webpack zieht das SDK in die Route).
const FREE_COURSES: string[] = ALL_COURSES.filter(c => !c.price).map(c => c.slug);

function dataDir(): string {
  return process.env.DATA_DIR || path.join(process.cwd(), 'data');
}

function readJson<T>(file: string, fallback: T): T {
  try {
    return JSON.parse(fs.readFileSync(path.join(dataDir(), file), 'utf-8')) as T;
  } catch {
    return fallback;
  }
}

function seit(tage: number): number {
  return Date.now() - tage * 86_400_000;
}

function zeit(iso: string | undefined | null): number {
  const t = iso ? new Date(iso).getTime() : NaN;
  return Number.isFinite(t) ? t : 0;
}

// Bezahlte Käufe: Stripe-Kurse (ohne Gratiskurse) oder Lehrgänge
function istZahlend(u: User): boolean {
  const kurse = Object.keys(u.purchasedCourses ?? {}).filter(s => !FREE_COURSES.includes(s));
  return kurse.length > 0 || Object.keys(u.purchasedLehrgaenge ?? {}).length > 0;
}

function planVon(u: User): string {
  const lehrgaenge = Object.keys(u.purchasedLehrgaenge ?? {});
  if (lehrgaenge.length) return `Lehrgang ${lehrgaenge[0]}`;
  const kurse = Object.keys(u.purchasedCourses ?? {}).filter(s => !FREE_COURSES.includes(s));
  if (kurse.length) return COURSE_LABEL[kurse[0]] ? `Gekauft: ${COURSE_LABEL[kurse[0]]}` : 'gekauft';
  return u.verified ? 'gratis' : 'unverifiziert';
}

function eventDetail(ev: AnalyticsEvent): string {
  const label = COURSE_LABEL[ev.courseSlug] ?? ev.courseSlug;
  if (ev.event === 'lesson_completed' && ev.lessonNumber) {
    return ev.totalLessons ? `${label} · Lektion ${ev.lessonNumber}/${ev.totalLessons}` : `${label} · Lektion ${ev.lessonNumber}`;
  }
  return label;
}

export async function GET(req: NextRequest) {
  const expected = process.env.COURSE_STATS_API_KEY;
  const bearer = req.headers.get('authorization')?.replace(/^Bearer\s+/i, '');
  const provided = bearer || req.headers.get('x-api-key');
  if (!expected || provided !== expected) {
    return NextResponse.json({ error: 'Nicht autorisiert' }, { status: 401 });
  }

  let days = parseInt(req.nextUrl.searchParams.get('days') || '30', 10);
  if (!Number.isFinite(days) || days < 1) days = 30;
  days = Math.min(days, 365);

  if (cache && cache.days === days && Date.now() - cache.at < CACHE_TTL_MS) {
    return NextResponse.json(cache.data, { headers: { 'Cache-Control': 'no-store' } });
  }

  const users = getAllUsers();
  const progress = readJson<Progress[]>('progress.json', []);
  const events = readEvents();
  const errors = readJson<Array<{ ts?: string; timestamp?: string; createdAt?: string }>>('errors.json', []);

  const t7 = seit(7), t30 = seit(30), t1 = seit(1);

  // Aktiv = Fortschritt (lastActivity) oder Event im Zeitraum, pro E-Mail einmal
  const aktiv = (ab: number): number => {
    const mails = new Set<string>();
    for (const p of progress) if (zeit(p.lastActivity) >= ab) mails.add(p.email.toLowerCase());
    for (const e of events) if (zeit(e.ts) >= ab) mails.add(e.email.toLowerCase());
    return mails.size;
  };

  const ev30 = events.filter(e => zeit(e.ts) >= t30);
  const zertifikate = progress.reduce((n, p) => {
    const slugs = new Set(p.certificateIssuedCourses ?? []);
    if (p.certificateIssued) slugs.add('ki-planungswelt');
    return n + slugs.size;
  }, 0);

  const registrations = [...users]
    .filter(u => zeit(u.createdAt) >= seit(days))
    .sort((a, b) => zeit(b.createdAt) - zeit(a.createdAt))
    .slice(0, 50)
    .map(u => ({
      at: new Date(zeit(u.createdAt) || 0).toISOString(),
      email: u.email,
      name: u.name || null,
      plan: planVon(u),
      source: istZahlend(u) ? 'stripe' : (u.verified ? 'magic-link' : 'unverifiziert'),
    }));

  const recent = [...events]
    .sort((a, b) => zeit(b.ts) - zeit(a.ts))
    .slice(0, 20)
    .map(e => ({ at: e.ts, type: e.event, actor: e.email, detail: eventDetail(e) }));

  const base = (process.env.NEXT_PUBLIC_BASE_URL || 'https://kurs.spekt.ch').replace(/\/$/, '');

  const data = {
    tool: 'kurs',
    label: 'KI-Kurs',
    version: 1,
    asOf: new Date().toISOString(),
    kpis: {
      usersTotal: users.length,
      usersNew7d: users.filter(u => zeit(u.createdAt) >= t7).length,
      usersNew30d: users.filter(u => zeit(u.createdAt) >= t30).length,
      active7d: aktiv(t7),
      active30d: aktiv(t30),
      paying: users.filter(istZahlend).length,
      pendingSignups: users.filter(u => !u.verified).length,
      errors24h: errors.filter(e => zeit(e.ts || e.timestamp || e.createdAt) >= t1).length,
    },
    registrations,
    events: recent,
    costs: null, // der Kurs ruft kein Sprachmodell auf
    links: {
      admin: `${base}/admin`,
      analytics: `${base}/admin/analytics`,
      errors: `${base}/admin/errors`,
    },
    extra: {
      kursStarts30d: ev30.filter(e => e.event === 'course_started').length,
      lektionen30d: ev30.filter(e => e.event === 'lesson_completed').length,
      abschluesse30d: ev30.filter(e => e.event === 'course_completed').length,
      zertifikate,
      kurseMitStarts: new Set(events.filter(e => e.event === 'course_started').map(e => e.courseSlug)).size,
    },
  };

  cache = { at: Date.now(), days, data };
  return NextResponse.json(data, { headers: { 'Cache-Control': 'no-store' } });
}
