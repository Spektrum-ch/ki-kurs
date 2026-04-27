/**
 * Kurs-Analytics: Events werden als JSONL in data/events.jsonl gespeichert.
 * Eine Zeile = ein Event. Nie korrupt, einfach lesbar.
 */
import fs from 'fs';
import path from 'path';

export type EventType =
  | 'course_started'     // erste Lektion eines Kurses abgeschlossen
  | 'lesson_completed'   // Lektion abgeschlossen
  | 'course_completed';  // alle Lektionen des Kurses abgeschlossen

export interface AnalyticsEvent {
  ts: string;
  event: EventType;
  email: string;
  courseSlug: string;
  lessonId?: string;
  lessonNumber?: number;
  totalLessons?: number;
}

function getEventsFile(): string {
  const dir = process.env.DATA_DIR || path.join(process.cwd(), 'data');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  return path.join(dir, 'events.jsonl');
}

/** Event schreiben – wirft nie, damit kein Request scheitert */
export function trackEvent(ev: Omit<AnalyticsEvent, 'ts'>): void {
  try {
    const line = JSON.stringify({ ts: new Date().toISOString(), ...ev }) + '\n';
    fs.appendFileSync(getEventsFile(), line, 'utf-8');
  } catch (e) {
    console.error('[ANALYTICS] Schreiben fehlgeschlagen:', e);
  }
}

/** Alle Events lesen */
export function readEvents(): AnalyticsEvent[] {
  try {
    const raw = fs.readFileSync(getEventsFile(), 'utf-8');
    return raw
      .split('\n')
      .filter(Boolean)
      .map(l => JSON.parse(l) as AnalyticsEvent);
  } catch {
    return [];
  }
}

// ── Aggregierungen für das Admin-Dashboard ──────────────────────────

export interface CourseFunnel {
  courseSlug: string;
  started: number;
  completed: number;
  dropoutRate: number; // 0–100 %
  uniqueStarters: string[];
  uniqueCompleters: string[];
}

export interface LessonDropoff {
  lessonId: string;
  lessonNumber: number;
  reached: number;   // wie viele haben diese Lektion abgeschlossen
  reachedPct: number; // relativ zu Kurs-Startern
}

/** Funnel pro Kurs */
export function getCourseFunnels(events: AnalyticsEvent[]): CourseFunnel[] {
  const courses = Array.from(new Set(events.map(e => e.courseSlug)));
  return courses.map(slug => {
    const starters = events
      .filter(e => e.courseSlug === slug && e.event === 'course_started')
      .map(e => e.email);
    const completers = events
      .filter(e => e.courseSlug === slug && e.event === 'course_completed')
      .map(e => e.email);
    const uniqueStarters = Array.from(new Set(starters));
    const uniqueCompleters = Array.from(new Set(completers));
    const dropoutRate = uniqueStarters.length > 0
      ? Math.round((1 - uniqueCompleters.length / uniqueStarters.length) * 100)
      : 0;
    return { courseSlug: slug, started: uniqueStarters.length, completed: uniqueCompleters.length, dropoutRate, uniqueStarters, uniqueCompleters };
  });
}

/** Drop-off pro Lektion für einen Kurs */
export function getLessonDropoff(events: AnalyticsEvent[], courseSlug: string): LessonDropoff[] {
  const starters = events
    .filter(e => e.courseSlug === courseSlug && e.event === 'course_started')
    .map(e => e.email)
    .reduce((set, email) => { set.add(email); return set; }, new Set<string>());
  const completionEvents = events
    .filter(e => e.courseSlug === courseSlug && e.event === 'lesson_completed' && e.lessonId)
    .sort((a, b) => (a.lessonNumber ?? 0) - (b.lessonNumber ?? 0));

  const lessonMap = new Map<string, { num: number; emails: Set<string> }>();
  for (const ev of completionEvents) {
    if (!ev.lessonId) continue;
    if (!lessonMap.has(ev.lessonId)) {
      lessonMap.set(ev.lessonId, { num: ev.lessonNumber ?? 0, emails: new Set() });
    }
    lessonMap.get(ev.lessonId)!.emails.add(ev.email);
  }

  const total = starters.size || 1;
  return Array.from(lessonMap.entries())
    .map(([lessonId, { num, emails }]) => ({
      lessonId,
      lessonNumber: num,
      reached: emails.size,
      reachedPct: Math.round((emails.size / total) * 100),
    }))
    .sort((a, b) => a.lessonNumber - b.lessonNumber);
}
