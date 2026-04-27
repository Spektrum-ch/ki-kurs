import { NextRequest, NextResponse } from 'next/server';
import { getUserFromCookie } from '@/lib/auth';
import { markLessonComplete, saveQuizResult, getProgress, getProgressPercent, isCourseComplete } from '@/lib/progress';
import { sendCertificateEmail } from '@/lib/email';
import { getUserByEmail } from '@/lib/users';
import { trackEvent } from '@/lib/analytics';
import { getCourseForLesson, getLessonsForCourse } from '@/lib/courseMap';

export const dynamic = 'force-dynamic';

/** GET: Fortschritt des eingeloggten Nutzers abrufen */
export async function GET() {
  const user = getUserFromCookie();
  if (!user) return NextResponse.json({ error: 'Nicht eingeloggt.' }, { status: 401 });

  const progress = getProgress(user.email);
  const percent = getProgressPercent(user.email);
  const complete = isCourseComplete(user.email);

  return NextResponse.json({ progress, percent, complete });
}

/** POST: Lektion abschliessen oder Quiz-Resultat speichern */
export async function POST(req: NextRequest) {
  const user = getUserFromCookie();
  if (!user) return NextResponse.json({ error: 'Nicht eingeloggt.' }, { status: 401 });

  try {
    const body = await req.json();

    if (body.action === 'complete_lesson' && body.lessonId) {
      const { lessonId, email } = { lessonId: body.lessonId as string, email: user.email };
      const progress = getProgress(email);
      const alreadyDone = progress.completedLessons.includes(lessonId);

      markLessonComplete(email, lessonId);

      // ── Analytics ──────────────────────────────────────────────
      if (!alreadyDone) {
        const courseInfo = getCourseForLesson(lessonId);
        if (courseInfo) {
          const { courseSlug, lessonNumber, totalLessons } = courseInfo;

          // Welche Lektionen dieses Kurses hat der User bereits abgeschlossen?
          const courseLessons = getLessonsForCourse(courseSlug);
          const doneBefore = progress.completedLessons.filter(id => courseLessons.includes(id));

          // Erste Lektion dieses Kurses → course_started
          if (doneBefore.length === 0) {
            trackEvent({ event: 'course_started', email, courseSlug });
          }

          // Lektion abgeschlossen
          trackEvent({ event: 'lesson_completed', email, courseSlug, lessonId, lessonNumber, totalLessons });

          // Letzte Lektion dieses Kurses → course_completed
          const doneAfter = [...doneBefore, lessonId].filter(id => courseLessons.includes(id));
          if (doneAfter.length === courseLessons.length) {
            trackEvent({ event: 'course_completed', email, courseSlug });
          }
        }
      }
      // ────────────────────────────────────────────────────────────

      // Hauptkurs (ki-planungswelt) abgeschlossen → Zertifikat senden
      if (isCourseComplete(email)) {
        const dbUser = getUserByEmail(email);
        const freshProgress = getProgress(email);
        if (dbUser && !freshProgress.certificateIssued) {
          await sendCertificateEmail(email, dbUser.name);
          markLessonComplete(email, '__cert_sent__');
        }
      }

      return NextResponse.json({ success: true, percent: getProgressPercent(email) });
    }

    if (body.action === 'quiz_result' && body.lessonId && body.score !== undefined) {
      saveQuizResult(user.email, {
        lessonId: body.lessonId,
        score: body.score,
        completedAt: new Date().toISOString(),
      });
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Ungültige Aktion.' }, { status: 400 });
  } catch (err) {
    console.error('[PROGRESS]', err);
    return NextResponse.json({ error: 'Fehler.' }, { status: 500 });
  }
}
