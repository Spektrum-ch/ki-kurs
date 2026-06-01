/**
 * Mappt lessonIds (z.B. "ia-grundlagen/ia-planungsrecht") zu Kurs-Slugs.
 * Wird serverseitig genutzt, um Analytics-Events dem richtigen Kurs zuzuordnen.
 */
import { COURSE } from '@/data/course';
import { COURSE_ALLGEMEIN } from '@/data/course-allgemein';
import { COURSE_BUERO } from '@/data/course-buero';
import { COURSE_INTERESSENABWAEGUNG } from '@/data/course-interessenabwaegung';
import { COURSE_GEMEINDEN } from '@/data/course-gemeinden';
import { COURSE_AGENTIC } from '@/data/course-agentic';
import { COURSE_STRATEGIE } from '@/data/course-strategie';
import { COURSE_UVP } from '@/data/course-uvp';
import type { Course } from '@/types';

const COURSE_REGISTRY: Array<{ slug: string; course: Course }> = [
  { slug: 'ki-planungswelt',        course: COURSE },
  { slug: 'ki-einsteiger',          course: COURSE_ALLGEMEIN },
  { slug: 'ki-bueroalltag',         course: COURSE_BUERO },
  { slug: 'ki-interessenabwaegung', course: COURSE_INTERESSENABWAEGUNG },
  { slug: 'ki-gemeinden',           course: COURSE_GEMEINDEN },
  { slug: 'ki-agentic',             course: COURSE_AGENTIC },
  { slug: 'ki-strategie-gemeinden', course: COURSE_STRATEGIE },
  { slug: 'ki-uvp',                 course: COURSE_UVP },
];

/** Alle Lektions-IDs eines Kurses (Format: modul.slug/lektion.slug) */
function getLessonIds(course: Course): string[] {
  return course.modules.flatMap(m =>
    m.lessons.map(l => `${m.slug}/${l.slug}`)
  );
}

// Einmal aufbauen: Map lessonId → { courseSlug, lessonNumber, totalLessons }
const LESSON_MAP = new Map<string, { courseSlug: string; lessonNumber: number; totalLessons: number }>();

for (const { slug, course } of COURSE_REGISTRY) {
  const ids = getLessonIds(course);
  const total = ids.length;
  ids.forEach((id, idx) => {
    LESSON_MAP.set(id, { courseSlug: slug, lessonNumber: idx + 1, totalLessons: total });
  });
}

export function getCourseForLesson(lessonId: string) {
  return LESSON_MAP.get(lessonId) ?? null;
}

export function getLessonsForCourse(courseSlug: string): string[] {
  const entry = COURSE_REGISTRY.find(r => r.slug === courseSlug);
  if (!entry) return [];
  return getLessonIds(entry.course);
}

export function getTotalLessonsForCourse(courseSlug: string): number {
  return getLessonsForCourse(courseSlug).length;
}

/** Interner Kurs-Slug → Route-Slug (URL-Pfad ohne führendem /) */
const ROUTE_SLUG_MAP: Record<string, string> = {
  'ki-planungswelt':        'kurs',
  'ki-einsteiger':          'kurs-allgemein',
  'ki-bueroalltag':         'kurs-buero',
  'ki-interessenabwaegung': 'kurs-interessenabwaegung',
  'ki-gemeinden':           'kurs-gemeinden',
  'ki-agentic':             'kurs-agentic',
  'ki-strategie-gemeinden': 'kurs-strategie',
  'ki-uvp':                 'kurs-uvp',
};

export function getRouteSlugForCourse(courseSlug: string): string {
  return ROUTE_SLUG_MAP[courseSlug] ?? courseSlug;
}

/** Kurs-Titel aus internem Slug */
export function getCourseTitle(courseSlug: string): string {
  return COURSE_REGISTRY.find(r => r.slug === courseSlug)?.course.title ?? 'Kurs';
}
