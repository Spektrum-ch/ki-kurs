import type { Metadata } from 'next';

// Sichtbarkeit 2026-W42: eigener Titel, Description und Canonical statt des geerbten
// Standard-Titels (war auf /blog, /login und /register identisch). Die Seite liest
// useSearchParams in einer Client-Komponente; ohne dynamisches Rendern liefert der
// Server nur den Suspense-Fallback aus, also kein <h1> für Crawler.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Kostenlos registrieren',
  description: 'Kostenlos bei den SPEKTRUM KI-Kursen registrieren: Name und E-Mail genügen, der Magic-Link kommt per Mail. Kurse für Raumplanung und Verwaltung sofort starten.',
  alternates: { canonical: 'https://kurse.spekt.ch/register' },
  openGraph: {
    title: 'Kostenlos registrieren | SPEKTRUM KI-Kurse',
    description: 'Name und E-Mail genügen, der Magic-Link kommt per Mail. Kurse für Raumplanung und Verwaltung sofort starten.',
    url: 'https://kurse.spekt.ch/register',
  },
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
