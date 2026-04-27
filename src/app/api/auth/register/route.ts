import { NextRequest, NextResponse } from 'next/server';
import { getUserByEmail, saveUser } from '@/lib/users';
import { generateLoginToken, getLoginTokenExpiry, createToken, setAuthCookie } from '@/lib/auth';
import { sendMagicLink, sendWelcomeEmail } from '@/lib/email';
import { reportError } from '@/lib/errorReporter';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json();

    if (!email || !name) {
      return NextResponse.json({ error: 'E-Mail und Name sind erforderlich.' }, { status: 400 });
    }

    const emailClean = email.toLowerCase().trim();
    const nameClean = name.trim();

    // E-Mail-Format prüfen
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailClean)) {
      return NextResponse.json({ error: 'Ungültige E-Mail-Adresse.' }, { status: 400 });
    }

    const existingUser = getUserByEmail(emailClean);

    if (existingUser) {
      // Bereits registriert → neuen Login-Link senden
      const token = generateLoginToken();
      const expires = getLoginTokenExpiry();
      const { updateUser } = await import('@/lib/users');
      updateUser(emailClean, { login_token: token, login_token_expires: expires });
      await sendMagicLink(emailClean, token, existingUser.name);
      return NextResponse.json({ message: 'Du bist bereits registriert. Wir haben dir einen neuen Login-Link gesendet.' });
    }

    // Neuer Nutzer anlegen
    const loginToken = generateLoginToken();
    const expires = getLoginTokenExpiry();

    saveUser({
      email: emailClean,
      name: nameClean,
      createdAt: new Date().toISOString(),
      verified: false,
      login_token: loginToken,
      login_token_expires: expires,
    });

    // Willkommens-E-Mail + Magic-Link senden
    await Promise.all([
      sendWelcomeEmail(emailClean, nameClean),
      sendMagicLink(emailClean, loginToken, nameClean),
    ]);

    return NextResponse.json({ message: 'Registrierung erfolgreich! Prüfe deine E-Mails für den Login-Link.' });
  } catch (err) {
    await reportError(err, {
      source: 'api',
      location: '/api/auth/register',
      notifyUser: false,
      severity: 'high',
    });
    return NextResponse.json({ error: 'Registrierung fehlgeschlagen.' }, { status: 500 });
  }
}
