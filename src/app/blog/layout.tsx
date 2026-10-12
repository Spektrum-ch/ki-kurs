import type { Metadata } from 'next';

// Sichtbarkeit 2026-W42: eigener Titel, Description und Canonical für die Blog-Übersicht
// (trug bisher den Standard-Titel der Site, identisch mit /login und /register).
export const metadata: Metadata = {
  title: 'Blog: KI für Raumplanung und Verwaltung',
  description: 'Fachbeiträge zu KI in Raumplanung, Gemeindeverwaltung und Planungsbüros: Praxisbeispiele, Weiterbildung, Werkzeuge. Aus den SPEKTRUM KI-Kursen.',
  alternates: { canonical: 'https://kurse.spekt.ch/blog' },
  openGraph: {
    title: 'Blog: KI für Raumplanung und Verwaltung | SPEKTRUM KI-Kurse',
    description: 'Fachbeiträge zu KI in Raumplanung, Gemeindeverwaltung und Planungsbüros.',
    url: 'https://kurse.spekt.ch/blog',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
