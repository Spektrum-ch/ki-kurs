import { NextRequest, NextResponse } from 'next/server';
import { getUserFromCookie } from '@/lib/auth';
import { markLessonComplete, saveQuizResult, getProgress, getProgressPercent, isCourseComplete } from '@/lib/progress';
import { sendCertificateEmail } from '@/lib/email';
import { getUserByEmail } from '@/lib/users';

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
      markLessonComplete(user.email, body.lessonId);

      // Prüfen ob Kurs jetzt abgeschlossen → Zertifikat einmalig senden
      if (isCourseComplete(user.email)) {
        const dbUser = getUserByEmail(user.email);
        const progress = getProgress(user.email);
        if (dbUser && !progress.certificateIssued) {
          await sendCertificateEmail(user.email, dbUser.name);
          markLessonComplete(user.email, '__cert_sent__');
        }
      }

      return NextResponse.json({ success: true, percent: getProgressPercent(user.email) });
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
