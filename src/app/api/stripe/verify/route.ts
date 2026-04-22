import { NextRequest, NextResponse } from 'next/server';
import { getUserFromCookie } from '@/lib/auth';
import { getUserByEmail, updateUser } from '@/lib/users';
import { getStripe } from '@/lib/stripe';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const auth = getUserFromCookie();
    if (!auth) {
      return NextResponse.json({ error: 'Nicht eingeloggt.' }, { status: 401 });
    }

    const { sessionId } = await req.json();
    if (!sessionId) {
      return NextResponse.json({ error: 'Session-ID fehlt.' }, { status: 400 });
    }

    const session = await getStripe().checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== 'paid') {
      return NextResponse.json({ error: 'Zahlung nicht abgeschlossen.' }, { status: 400 });
    }

    const courseSlug = session.metadata?.courseSlug;
    if (!courseSlug) {
      return NextResponse.json({ error: 'Kurs nicht gefunden.' }, { status: 400 });
    }

    // Kurs für User freischalten (mit Kaufdatum für 90-Tage-Zugang)
    const user = getUserByEmail(auth.email);
    if (!user) {
      return NextResponse.json({ error: 'User nicht gefunden.' }, { status: 404 });
    }

    const purchased = (user.purchasedCourses as Record<string, string>) || {};
    if (!purchased[courseSlug]) {
      updateUser(auth.email, {
        purchasedCourses: { ...purchased, [courseSlug]: new Date().toISOString() },
      });
    }

    return NextResponse.json({ success: true, courseSlug });
  } catch (err) {
    console.error('[STRIPE VERIFY]', err);
    return NextResponse.json({ error: 'Verifizierung fehlgeschlagen.' }, { status: 500 });
  }
}
