import { NextRequest, NextResponse } from 'next/server';
import { getUserFromCookie } from '@/lib/auth';
import { getUserByEmail } from '@/lib/users';
import { hasCourseAccess } from '@/lib/courseAccess';
import { ALL_COURSES } from '@/data/courses';

/**
 * Prüft, ob der aktuelle User Zugriff auf eine bestimmte Lektion eines Kurses hat.
 * Zugriff wird erteilt, wenn:
 *  - der Kurs gratis ist, oder
 *  - der User den Kurs gekauft hat und innerhalb der Zugangsdauer ist, oder
 *  - es sich um die erste Lektion des ersten Moduls handelt (Gratis-Vorschau).
 *
 * GET /api/check-access?course=kurs&module=einleitung&lesson=ki-geschichte
 */
export async function GET(req: NextRequest) {
  const courseSlug = req.nextUrl.searchParams.get('course') ?? '';
  const moduleSlug = req.nextUrl.searchParams.get('module') ?? '';
  const lessonSlug = req.nextUrl.searchParams.get('lesson') ?? '';

  const auth = getUserFromCookie();
  if (!auth) {
    return NextResponse.json({ allowed: false, reason: 'not_authenticated' }, { status: 401 });
  }

  const user = getUserByEmail(auth.email);

  // 1. Gekauft oder gratis-Kurs
  if (hasCourseAccess(user, courseSlug)) {
    return NextResponse.json({ allowed: true, reason: 'purchased' });
  }

  // 2. Gratis-Vorschau: erste Lektion des ersten Moduls
  // Wir identifizieren den Kurs anhand des href-Segments (z.B. /kurs → courseSlug 'kurs')
  const card = ALL_COURSES.find(c => c.href === '/' + courseSlug);
  if (card) {
    const firstModule = card.course.modules[0];
    const firstLesson = firstModule?.lessons[0];
    if (firstModule?.slug === moduleSlug && firstLesson?.slug === lessonSlug) {
      return NextResponse.json({ allowed: true, reason: 'preview' });
    }
  }

  return NextResponse.json({ allowed: false, reason: 'no_access' });
}
