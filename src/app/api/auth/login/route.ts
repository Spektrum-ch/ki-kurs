import { NextRequest, NextResponse } from 'next/server';
import { getUserByEmail, updateUser } from '@/lib/users';
import { generateLoginToken, getLoginTokenExpiry } from '@/lib/auth';
import { sendMagicLink } from '@/lib/email';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const { email, redirect } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'E-Mail ist erforderlich.' }, { status: 400 });
    }

    const emailClean = email.toLowerCase().trim();
    const user = getUserByEmail(emailClean);

    // Immer gleiche Antwort (Sicherheit: kein User-Enumeration)
    if (!user) {
      return NextResponse.json({ message: 'Falls ein Konto existiert, erhältst du einen Login-Link.' });
    }

    const token = generateLoginToken();
    const expires = getLoginTokenExpiry();
    const safeRedirect = (typeof redirect === 'string' && redirect.startsWith('/')) ? redirect : '/kurse';

    updateUser(emailClean, { login_token: token, login_token_expires: expires });
    await sendMagicLink(emailClean, token, user.name, safeRedirect);

    return NextResponse.json({ message: 'Login-Link wurde gesendet. Prüfe deine E-Mails.' });
  } catch (err) {
    console.error('[LOGIN]', err);
    return NextResponse.json({ error: 'Fehler beim Login.' }, { status: 500 });
  }
}
