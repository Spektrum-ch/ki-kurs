/**
 * Handoff-Login aus dem SPEKTRUM-Dashboard (Tool-Admin, Etappe 5).
 *
 * Das Dashboard signiert serverseitig ein 60-Sekunden-JWT mit demselben
 * geteilten Schluessel wie /api/internal/* (COURSE_STATS_API_KEY) und leitet den
 * Browser hierher. Wir pruefen Signatur, Zweck, Ablauf und Admin-Recht, setzen
 * das normale Session-Cookie und leiten auf das Ziel (nur relative Pfade) weiter.
 * Kein neues Geheimnis, kein Passwort, kein Magic-Link noetig.
 */
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { createToken, isAdmin } from '@/lib/auth';

export const dynamic = 'force-dynamic';

const HANDOFF_AUDIENCE = 'tool-admin-handoff';
const COOKIE_NAME = 'kurs-auth';
const COOKIE_MAX_AGE = 60 * 24 * 60 * 60;

// Hinter Nginx zeigt nextUrl.origin auf «localhost:PORT» – Basis wie in magic-link aus den Headern.
function basisUrl(request: NextRequest): string {
  const proto = request.headers.get('x-forwarded-proto') || 'https';
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host') || 'kurse.spekt.ch';
  return `${proto}://${host}`;
}

function sicheresZiel(next: string | null, fallback: string): string {
  if (!next || !next.startsWith('/') || next.startsWith('//') || next.includes('://')) return fallback;
  return next;
}

export async function GET(request: NextRequest) {
  const key = process.env.COURSE_STATS_API_KEY || '';
  const token = request.nextUrl.searchParams.get('token') || '';
  const ziel = sicheresZiel(request.nextUrl.searchParams.get('next'), '/admin');
  const basis = basisUrl(request);
  const login = new URL('/login?error=handoff', basis);

  if (!key || !token) return NextResponse.redirect(login);

  let email: string;
  try {
    const payload = jwt.verify(token, key, { algorithms: ['HS256'], audience: HANDOFF_AUDIENCE, maxAge: '90s' }) as { email?: string; purpose?: string };
    if (payload.purpose !== 'handoff' || !payload.email) throw new Error('Zweck/E-Mail fehlt');
    email = payload.email.toLowerCase();
  } catch (e) {
    console.warn('[handoff] Token abgelehnt:', e instanceof Error ? e.message : e);
    return NextResponse.redirect(login);
  }

  if (!(isAdmin(email))) {
    console.warn('[handoff] Kein Admin:', email);
    return NextResponse.redirect(login);
  }

  const response = NextResponse.redirect(new URL(ziel, basis));
  response.cookies.set(COOKIE_NAME, createToken(email), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: COOKIE_MAX_AGE,
    path: '/',
  });
  return response;
}
