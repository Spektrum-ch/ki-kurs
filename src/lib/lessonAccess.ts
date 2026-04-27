import { redirect } from 'next/navigation';
import { getUserFromCookie } from '@/lib/auth';
import { getUserByEmail } from '@/lib/users';
import { hasCourseAccess } from '@/lib/courseAccess';
import type { Course } from '@/types';

/**
 * Prüft serverseitig den Zugang zu einer einzelnen Lektion.
 *
 * Zugriff wird gewährt, wenn:
 *  - User eingeloggt ist UND
 *    - der Kurs gekauft (oder gratis) ist, ODER
 *    - es die erste Lektion des ersten Moduls ist (Gratis-Vorschau)
 *
 * Andernfalls wird redirectet:
 *  - nicht eingeloggt → /login?redirect=<fullPath>
 *  - eingeloggt, aber keine Berechtigung → /<courseHref>
 *
 * @param course       Kurs-Daten (für Gratis-Vorschau-Check auf erste Lektion)
 * @param courseSlug   Slug für Access-Check, z.B. 'kurs-buero'
 * @param courseHref   URL-Segment zur Kursübersicht, z.B. '/kurs-buero'
 * @param params       Route-Params ({ modul, lektion })
 */
export function enforceLessonAccess(
  course: Course,
  courseSlug: string,
  courseHref: string,
  params: { modul?: string; lektion?: string },
): void {
  const auth = getUserFromCookie();
  const moduleSlug = params.modul ?? '';
  const lessonSlug = params.lektion ?? '';
  const fullPath = `${courseHref}/${moduleSlug}/${lessonSlug}`;

  if (!auth) {
    redirect(`/login?redirect=${encodeURIComponent(fullPath)}`);
  }

  const user = getUserByEmail(auth.email);

  // 1. Gekauft oder Gratis-Kurs
  if (hasCourseAccess(user, courseSlug)) return;

  // 2. Gratis-Vorschau: erste Lektion des ersten Moduls
  const firstModule = course.modules[0];
  const firstLesson = firstModule?.lessons[0];
  if (firstModule?.slug === moduleSlug && firstLesson?.slug === lessonSlug) {
    return;
  }

  // Weder gekauft noch Vorschau → zurück zur Übersicht
  redirect(courseHref);
}
