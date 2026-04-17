import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'KI für die Planungswelt – Kostenloser Online-Kurs',
    template: '%s | KI für die Planungswelt',
  },
  description: 'Lerne in 5 Modulen, wie du KI konkret in deinem Planungsalltag einsetzt – praxisnah, rechtssicher und sofort anwendbar. Kostenlos für Raumplaner, Architekten und Gemeinden.',
  authors: [{ name: 'Andreas Rupf – SPEKTRUM Partner GmbH' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
