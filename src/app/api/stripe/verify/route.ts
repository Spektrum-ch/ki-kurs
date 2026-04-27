import { NextRequest, NextResponse } from 'next/server';
import { getUserFromCookie } from '@/lib/auth';
import { getUserByEmail, updateUser } from '@/lib/users';
import { getStripe } from '@/lib/stripe';
import { LEHRGAENGE } from '@/data/zertifikatslehrgaenge';
import { LEHRGANG_ACCESS_DAYS } from '@/lib/courseAccess';
import { reportError } from '@/lib/errorReporter';

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

    const user = getUserByEmail(auth.email);
    if (!user) {
      return NextResponse.json({ error: 'User nicht gefunden.' }, { status: 404 });
    }

    const type = session.metadata?.type;
    const now = new Date().toISOString();
    const purchased = (user.purchasedCourses as Record<string, string>) || {};

    // --- Lehrgang-Kauf: alle enthaltenen Kurse + Lehrgang freischalten ---
    if (type === 'lehrgang') {
      const lehrgangSlug = session.metadata?.lehrgangSlug;
      if (!lehrgangSlug) {
        return NextResponse.json({ error: 'Lehrgang nicht gefunden.' }, { status: 400 });
      }
      const lehrgang = LEHRGAENGE.find(l => l.slug === lehrgangSlug);
      if (!lehrgang) {
        return NextResponse.json({ error: 'Unbekannter Lehrgang.' }, { status: 400 });
      }

      // Alle enthaltenen Einzelkurse als Slug `kurs-<xxx>` freischalten
      // courseSlugs sind die Daten-Slugs (z.B. "ki-einsteiger"), die tatsächlichen
      // Kurs-Slugs der Routes sind `kurs-allgemein`, `kurs-gemeinden` etc.
      // courseAccess.ts prüft die Routes-Slugs, darum nehmen wir das Mapping
      // aus LEHRGAENGE.courseSlugs über ALL_COURSES (siehe unten).
      const { ALL_COURSES } = await import('@/data/courses');
      const nextPurchased = { ...purchased };
      // Lehrgang-Kurse erhalten 180 Tage Zugang — Format: "<ISO-Datum>|<days>"
      const lehrgangEntry = `${now}|${LEHRGANG_ACCESS_DAYS}`;
      for (const dataSlug of lehrgang.courseSlugs) {
        const course = ALL_COURSES.find(c => c.slug === dataSlug);
        if (course && !nextPurchased[course.href.replace(/^\//, '')]) {
          nextPurchased[course.href.replace(/^\//, '')] = lehrgangEntry;
        }
      }

      const tier = (session.metadata?.tier as 'basis' | 'plus') || 'basis';
      // Format: "<ISO-Datum>|<tier>" – abwärtskompatibel zu reinen ISO-Strings
      const lehrgaenge = (user.purchasedLehrgaenge as Record<string, string>) || {};
      updateUser(auth.email, {
        purchasedCourses: nextPurchased,
        purchasedLehrgaenge: { ...lehrgaenge, [lehrgangSlug]: `${now}|${tier}` },
      });

      return NextResponse.json({ success: true, type: 'lehrgang', lehrgangSlug, tier });
    }

    // --- Einzelkurs-Kauf ---
    const courseSlug = session.metadata?.courseSlug;
    if (!courseSlug) {
      return NextResponse.json({ error: 'Kurs nicht gefunden.' }, { status: 400 });
    }

    if (!purchased[courseSlug]) {
      updateUser(auth.email, {
        purchasedCourses: { ...purchased, [courseSlug]: now },
      });
    }

    return NextResponse.json({ success: true, type: 'course', courseSlug });
  } catch (err) {
    const auth = getUserFromCookie();
    await reportError(err, {
      source: 'api',
      location: '/api/stripe/verify',
      userEmail: auth?.email,
      notifyUser: true,
      severity: 'high',
    });
    return NextResponse.json({ error: 'Verifizierung fehlgeschlagen.' }, { status: 500 });
  }
}
