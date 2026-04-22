import { NextRequest, NextResponse } from 'next/server';
import { getUserByLoginToken, updateUser } from '@/lib/users';
import { createToken, setAuthCookie, COOKIE_NAME } from '@/lib/auth';

export const dynamic = 'force-dynamic';

function getBaseUrl(request: NextRequest): string {
  const proto = request.headers.get('x-forwarded-proto') || 'https';
  const host = request.headers.get('host') || 'kurs.spekt.ch';
  return `${proto}://${host}`;
}

/** GET: Link aus E-Mail → direkt einloggen und weiterleiten */
export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token');
  const redirect = request.nextUrl.searchParams.get('redirect') || '/kurse';
  const safeRedirect = redirect.startsWith('/') ? redirect : '/kurse';

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

  // Token verbrauchen und direkt einloggen
  updateUser(user.email, { verified: true, login_token: null, login_token_expires: null });
  const jwt = createToken(user.email);

  const response = NextResponse.redirect(new URL(safeRedirect, getBaseUrl(request)));
  response.cookies.set(COOKIE_NAME, jwt, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 60, // 60 Tage
    path: '/',
  });
  return response;
}

/** POST: Nutzer klickt Bestätigen → Login durchführen */
export async function POST(request: NextRequest) {
  try {
    const { token, redirect } = await request.json();

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

    const safeRedirect = (typeof redirect === 'string' && redirect.startsWith('/')) ? redirect : '/kurse';
    return NextResponse.json({ success: true, redirect: safeRedirect });
  } catch (err) {
    console.error('[MAGIC-LINK POST]', err);
    return NextResponse.json({ error: 'Login fehlgeschlagen.' }, { status: 500 });
  }
}
