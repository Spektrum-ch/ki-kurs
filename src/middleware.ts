import { NextRequest, NextResponse } from 'next/server';

const COOKIE_NAME = 'kurs-auth';

// Kursübersichtsseiten sind öffentlich (SEO) – nur Lektion-Unterseiten + Zertifikat + Admin schützen
function isProtectedRoute(pathname: string): boolean {
  // /kurs/modul/lektion – geschützt (hat trailing slash)
  const courseLessonPatterns = [
    '/kurs/', '/kurs-allgemein/', '/kurs-gemeinden/', '/kurs-buero/',
    '/kurs-agentic/', '/kurs-strategie/', '/kurs-interessenabwaegung/',
  ];
  if (courseLessonPatterns.some(p => pathname.startsWith(p))) return true;
  // Zertifikat + Admin komplett geschützt
  return pathname.startsWith('/zertifikat') || pathname.startsWith('/admin');
}

function base64UrlDecode(str: string): Uint8Array {
  const base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  const padded = base64 + '='.repeat((4 - (base64.length % 4)) % 4);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

/** JWT-Signatur via HMAC-SHA256 verifizieren (Edge-kompatibel) */
async function verifyJWT(token: string): Promise<{ email: string } | null> {
  const secret = process.env.JWT_SECRET;
  if (!secret) return null;

  const parts = token.split('.');
  if (parts.length !== 3) return null;

  try {
    const header = JSON.parse(new TextDecoder().decode(base64UrlDecode(parts[0])));
    if (header.alg !== 'HS256') return null;

    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode(secret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );

    const contentBytes = encoder.encode(`${parts[0]}.${parts[1]}`);
    const expectedSig = new Uint8Array(await crypto.subtle.sign('HMAC', key, contentBytes));
    const actualSig = base64UrlDecode(parts[2]);

    if (expectedSig.length !== actualSig.length) return null;
    let diff = 0;
    for (let i = 0; i < expectedSig.length; i++) {
      diff |= expectedSig[i] ^ actualSig[i];
    }
    if (diff !== 0) return null;

    const payload = JSON.parse(new TextDecoder().decode(base64UrlDecode(parts[1])));
    if (payload.exp && payload.exp * 1000 < Date.now()) return null;

    return { email: payload.email };
  } catch {
    return null;
  }
}

function getBaseUrl(request: NextRequest): string {
  const proto = request.headers.get('x-forwarded-proto') || 'https';
  const host = request.headers.get('host') || 'kurs.spekt.ch';
  return `${proto}://${host}`;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!isProtectedRoute(pathname)) {
    return NextResponse.next();
  }

  // Admin-Route: nur für Admin-E-Mail
  if (pathname.startsWith('/admin')) {
    const token = request.cookies.get(COOKIE_NAME)?.value;
    if (!token) {
      return NextResponse.redirect(new URL('/login?redirect=/admin', getBaseUrl(request)));
    }
    const payload = await verifyJWT(token);
    const adminEmail = process.env.ADMIN_EMAIL || 'andreas@spekt.ch';
    if (!payload || payload.email.toLowerCase() !== adminEmail.toLowerCase()) {
      return NextResponse.redirect(new URL('/', getBaseUrl(request)));
    }
    return NextResponse.next();
  }

  // Kurs & Zertifikat: nur für eingeloggte Nutzer
  const token = request.cookies.get(COOKIE_NAME)?.value;
  if (!token) {
    const loginUrl = new URL('/login', getBaseUrl(request));
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  const payload = await verifyJWT(token);
  if (!payload) {
    const response = NextResponse.redirect(new URL('/login', getBaseUrl(request)));
    response.cookies.delete(COOKIE_NAME);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  // :path+ = mindestens 1 Segment → Übersichtsseiten (/kurs etc.) werden NICHT erfasst
  matcher: [
    '/kurs/:path+',
    '/kurs-allgemein/:path+',
    '/kurs-gemeinden/:path+',
    '/kurs-buero/:path+',
    '/kurs-agentic/:path+',
    '/kurs-strategie/:path+',
    '/kurs-interessenabwaegung/:path+',
    '/zertifikat/:path*',  // /zertifikat selbst + Unterseiten geschützt
    '/admin/:path*',
  ],
};
