import type { Metadata } from 'next';

// Sichtbarkeit 2026-W42: eigener Titel, Description und Canonical statt des geerbten
// Standard-Titels (war auf /blog, /login und /register identisch). Die Seite liest
// useSearchParams in einer Client-Komponente; ohne dynamisches Rendern liefert der
// Server nur den Suspense-Fallback aus, also kein <h1> für Crawler.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Login per Magic-Link',
  description: 'Melde dich bei den SPEKTRUM KI-Kursen an: E-Mail eingeben, Magic-Link erhalten, weiterlernen. Kein Passwort nötig.',
  alternates: { canonical: 'https://kurse.spekt.ch/login' },
  openGraph: {
    title: 'Login per Magic-Link | SPEKTRUM KI-Kurse',
    description: 'E-Mail eingeben, Magic-Link erhalten, weiterlernen. Kein Passwort nötig.',
    url: 'https://kurse.spekt.ch/login',
  },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
