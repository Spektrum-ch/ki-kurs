import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { readEvents, getCourseFunnels, getLessonDropoff } from '@/lib/analytics';
import { getAllUsers } from '@/lib/users';
import { ALL_COURSES } from '@/data/courses';
import type { Progress } from '@/types';

export const dynamic = 'force-dynamic';

/**
 * Aggregierte Kurs-Statistik für externe Admin-Dashboards (z.B. die
 * Interessenabwägung-Admin-Seite). Geschützt per API-Key-Header, weil der
 * Aufruf aus einer anderen App/Deployment kommt – kein Login-Cookie verfügbar.
 *
 * Aufruf:  GET /api/admin/course-stats   mit Header  x-api-key: <COURSE_STATS_API_KEY>
 */

// Kurs-Metadaten (Label + Emoji + Preis) aus der zentralen Kursliste
const COURSE_META: Record<string, { label: string; emoji: string; price: number }> =
  Object.fromEntries(
    ALL_COURSES.map(c => [c.slug, { label: c.course.title, emoji: c.emoji, price: c.price }]),
  );

function readAllProgress(): Progress[] {
  try {
    const dir = process.env.DATA_DIR || path.join(process.cwd(), 'data');
    const raw = fs.readFileSync(path.join(dir, 'progress.json'), 'utf-8');
    return JSON.parse(raw) as Progress[];
  } catch {
    return [];
  }
}

export async function GET(req: NextRequest) {
  // API-Key-Auth (cross-app Zugriff, kein Cookie verfügbar)
  const expected = process.env.COURSE_STATS_API_KEY;
  const provided = req.headers.get('x-api-key');
  if (!expected || provided !== expected) {
    return NextResponse.json({ error: 'Nicht autorisiert' }, { status: 401 });
  }

  const events = readEvents();
  const funnels = getCourseFunnels(events);
  const allProgress = readAllProgress();
  const registeredUsers = getAllUsers().length;

  // Zertifikate pro Kurs zählen (certificateIssuedCourses[] + Legacy-Flag)
  const certsByCourse: Record<string, number> = {};
  for (const p of allProgress) {
    const slugs = new Set(p.certificateIssuedCourses ?? []);
    if (p.certificateIssued) slugs.add('ki-planungswelt'); // Legacy: nur Hauptkurs
    slugs.forEach(s => { certsByCourse[s] = (certsByCourse[s] ?? 0) + 1; });
  }

  const courses = funnels
    .map(f => {
      const meta = COURSE_META[f.courseSlug];
      const completionRate = f.started > 0 ? Math.round((f.completed / f.started) * 100) : 0;
      return {
        slug: f.courseSlug,
        label: meta?.label ?? f.courseSlug,
        emoji: meta?.emoji ?? '📘',
        price: meta?.price ?? 0,
        started: f.started,
        completed: f.completed,
        completionRate,
        dropoutRate: f.dropoutRate,
        certificates: certsByCourse[f.courseSlug] ?? 0,
        dropoff: getLessonDropoff(events, f.courseSlug),
      };
    })
    .sort((a, b) => b.started - a.started);

  const totals = {
    events: events.length,
    starters: funnels.reduce((s, f) => s + f.started, 0),
    completers: funnels.reduce((s, f) => s + f.completed, 0),
    certificates: Object.values(certsByCourse).reduce((s, n) => s + n, 0),
    registeredUsers,
  };

  const recentEvents = [...events].reverse().slice(0, 20).map(ev => ({
    ts: ev.ts,
    event: ev.event,
    email: ev.email,
    courseSlug: ev.courseSlug,
    courseLabel: COURSE_META[ev.courseSlug]?.label ?? ev.courseSlug,
    lessonNumber: ev.lessonNumber ?? null,
  }));

  return NextResponse.json({
    generatedAt: new Date().toISOString(),
    totals,
    courses,
    recentEvents,
  });
}
