import { NextRequest, NextResponse } from 'next/server';
import { getUserByLoginToken, updateUser } from '@/lib/users';
import { createToken, setAuthCookie, COOKIE_NAME } from '@/lib/auth';

export const dynamic = 'force-dynamic';

function getBaseUrl(request: NextRequest): string {
  const proto = request.headers.get('x-forwarded-proto') || 'https';
  const host = request.headers.get('host') || 'kurs.spekt.ch';
  return `${proto}://${host}`;
}

/** GET: Link aus E-Mail → Bestätigungsseite (Token nicht verbrauchen wegen Mail-Scannern) */
export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token');

  if (!token) {
    return NextResponse.redirect(new URL('/login?error=invalid', getBaseUrl(request)));
  }

  const user = getUserByLoginToken(token);
  if (!user) {
    return NextResponse.redirect(new URL('/login?error=invalid', getBaseUrl(request)));
  }

  if (user.login_token_expires && new Date() > new Date(user.login_token_expires)) {
    updateUser(user.email, { login_token: null, login_token_expires: null });
    return NextResponse.redirect(new URL('/login?error=expired', getBaseUrl(request)));
  }

  // Zur Bestätigungsseite weiterleiten (Token noch nicht verbraucht)
  return NextResponse.redirect(new URL(`/magic-link?token=${token}`, getBaseUrl(request)));
}

/** POST: Nutzer klickt Bestätigen → Login durchführen */
export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json({ error: 'Token fehlt.' }, { status: 400 });
    }

    const user = getUserByLoginToken(token);
    if (!user) {
      return NextResponse.json({ error: 'Ungültiger oder abgelaufener Link.' }, { status: 400 });
    }

    if (user.login_token_expires && new Date() > new Date(user.login_token_expires)) {
      updateUser(user.email, { login_token: null, login_token_expires: null });
      return NextResponse.json({ error: 'Link abgelaufen. Bitte neu anfordern.' }, { status: 400 });
    }

    // Token verbrauchen, Nutzer als verifiziert markieren
    updateUser(user.email, {
      verified: true,
      login_token: null,
      login_token_expires: null,
    });

    // JWT-Cookie setzen
    const jwt = createToken(user.email);
    setAuthCookie(jwt);

    return NextResponse.json({ success: true, redirect: '/kurs' });
  } catch (err) {
    console.error('[MAGIC-LINK POST]', err);
    return NextResponse.json({ error: 'Login fehlgeschlagen.' }, { status: 500 });
  }
}
