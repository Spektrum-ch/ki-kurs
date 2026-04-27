import { NextRequest, NextResponse } from 'next/server';
import { getUserFromCookie } from '@/lib/auth';
import { getStripe, COURSE_PRICES, TIER_PRICE_IDS } from '@/lib/stripe';
import { LEHRGAENGE } from '@/data/zertifikatslehrgaenge';
import { reportError } from '@/lib/errorReporter';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const auth = getUserFromCookie();
    if (!auth) {
      return NextResponse.json({ error: 'Nicht eingeloggt.' }, { status: 401 });
    }

    const body = await req.json();
    const type: 'course' | 'lehrgang' = body.type === 'lehrgang' ? 'lehrgang' : 'course';
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://kurse.spekt.ch';

    if (type === 'lehrgang') {
      const lehrgangSlug: string | undefined = body.lehrgangSlug;
      const tier: 'basis' | 'plus' = body.tier === 'plus' ? 'plus' : 'basis';

      if (!lehrgangSlug || !LEHRGAENGE.find(l => l.slug === lehrgangSlug)) {
        return NextResponse.json({ error: 'Ungültiger Lehrgang.' }, { status: 400 });
      }
      const priceId = TIER_PRICE_IDS[tier];
      if (!priceId || priceId.startsWith('price_TODO')) {
        return NextResponse.json({ error: `Tier «${tier}» noch nicht konfiguriert.` }, { status: 503 });
      }

      const session = await getStripe().checkout.sessions.create({
        mode: 'payment',
        line_items: [{ price: priceId, quantity: 1 }],
        customer_email: auth.email,
        success_url: `${baseUrl}/kurs-success?session_id={CHECKOUT_SESSION_ID}&lehrgang=${lehrgangSlug}&tier=${tier}`,
        cancel_url: `${baseUrl}/zertifikatslehrgang#${lehrgangSlug}`,
        metadata: { email: auth.email, type: 'lehrgang', lehrgangSlug, tier },
      });

      return NextResponse.json({ url: session.url });
    }

    // Default: Einzelkurs-Kauf
    const courseSlug: string | undefined = body.courseSlug;
    const priceId = courseSlug ? COURSE_PRICES[courseSlug] : undefined;
    if (!courseSlug || !priceId) {
      return NextResponse.json({ error: 'Ungültiger Kurs.' }, { status: 400 });
    }

    const session = await getStripe().checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: auth.email,
      success_url: `${baseUrl}/kurs-success?session_id={CHECKOUT_SESSION_ID}&course=${courseSlug}`,
      cancel_url: `${baseUrl}/${courseSlug}`,
      metadata: { email: auth.email, type: 'course', courseSlug },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const auth = getUserFromCookie();
    await reportError(err, {
      source: 'api',
      location: '/api/stripe/checkout',
      userEmail: auth?.email,
      notifyUser: true,
      severity: 'high',
    });
    return NextResponse.json({ error: 'Checkout fehlgeschlagen.' }, { status: 500 });
  }
}
