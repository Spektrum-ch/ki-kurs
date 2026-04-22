import { NextRequest, NextResponse } from 'next/server';
import { getUserFromCookie } from '@/lib/auth';
import { getStripe, COURSE_PRICES } from '@/lib/stripe';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const auth = getUserFromCookie();
    if (!auth) {
      return NextResponse.json({ error: 'Nicht eingeloggt.' }, { status: 401 });
    }

    const { courseSlug } = await req.json();
    const priceId = COURSE_PRICES[courseSlug];

    if (!priceId) {
      return NextResponse.json({ error: 'Ungültiger Kurs.' }, { status: 400 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://kurse.spekt.ch';

    const session = await getStripe().checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: auth.email,
      success_url: `${baseUrl}/kurs-success?session_id={CHECKOUT_SESSION_ID}&course=${courseSlug}`,
      cancel_url: `${baseUrl}/${courseSlug}`,
      metadata: { email: auth.email, courseSlug },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('[STRIPE CHECKOUT]', err);
    return NextResponse.json({ error: 'Checkout fehlgeschlagen.' }, { status: 500 });
  }
}
