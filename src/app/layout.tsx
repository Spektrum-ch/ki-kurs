import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'KI-Kurse für Raumplanung & Verwaltung – kurse.spekt.ch',
    template: '%s | SPEKTRUM KI-Kurse',
  },
  description: 'Online-Kurse zu KI für Raumplanende, Architektinnen, Planungsbüros und Gemeindeverwaltungen in der Schweiz. Gratis bis CHF 89. Interessenabwägung, UVP, KI-Agenten – praxisnah, sofort anwendbar.',
  keywords: ['KI Kurs Raumplanung Schweiz', 'KI Weiterbildung Gemeinde Schweiz', 'Künstliche Intelligenz Raumplanung DACH', 'Interessenabwägung KI RPG Schweiz', 'UVP Umweltverträglichkeitsprüfung KI Kurs', 'KI-Intensivprogramm Verwaltung Online', 'ChatGPT Raumplanung', 'KI Verwaltung DACH', 'Online Kurs KI Deutsch', 'KI Agenten Kurs Deutsch', 'KI Strategie Gemeinden', 'KI Planungsbüro Schweiz'],
  authors: [{ name: 'Andreas Rupf', url: 'https://spekt.ch' }],
  metadataBase: new URL('https://kurse.spekt.ch'),
  openGraph: {
    siteName: 'SPEKTRUM KI-Kurse',
    locale: 'de_CH',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://kurse.spekt.ch/#org',
      name: 'SPEKTRUM Partner GmbH',
      url: 'https://spekt.ch',
      sameAs: ['https://kurse.spekt.ch', 'https://interessenabwaegung.ch'],
      founder: { '@type': 'Person', name: 'Andreas Rupf' },
    },
    {
      '@type': 'Person',
      '@id': 'https://kurse.spekt.ch/#andreas',
      name: 'Andreas Rupf',
      jobTitle: 'Raum- und Stadtplaner, KI-Berater',
      worksFor: { '@id': 'https://kurse.spekt.ch/#org' },
      url: 'https://spekt.ch',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://kurse.spekt.ch/#website',
      url: 'https://kurse.spekt.ch',
      name: 'SPEKTRUM KI-Kurse',
      description: 'Online-Kurse zu Künstlicher Intelligenz für Raumplanende, Architektinnen, Gemeindeverwaltungen und Planungsbüros im DACH-Raum',
      publisher: { '@id': 'https://kurse.spekt.ch/#org' },
      inLanguage: 'de',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          defer
          src="https://stats.spekt.ch/script.js"
          data-website-id="c7629876-7da0-4ec2-8a81-129b438a6c9d"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
