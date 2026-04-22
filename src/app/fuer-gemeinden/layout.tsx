import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KI-Kurse für Gemeinden & Teams – Lizenzen ab 5 Plätzen | SPEKTRUM',
  description: 'Team- und Gemeinde-Lizenzen für die SPEKTRUM KI-Kurse. 5, 10 oder 25 Plätze pro Kurs – Sammelrechnung, individuelle Zertifikate, Onboarding-Unterstützung für Schweizer Gemeinden, Deutsche Verwaltungen und Planungsbüros.',
  keywords: [
    'KI Kurs Gemeinde Lizenz', 'Team-Lizenz KI Weiterbildung', 'KI Firmenkurs',
    'Gemeinde KI Schulung Schweiz', 'KI Weiterbildung Verwaltung',
    'KI Schulung Planungsbüro', 'KI-Kurs Team CH', 'KI Fortbildung DACH Verwaltung',
  ],
  openGraph: {
    title: 'KI-Kurse für Gemeinden & Teams',
    description: 'Team- und Gemeinde-Lizenzen für die SPEKTRUM KI-Kurse. Sammelrechnung, individuelle Zertifikate, Onboarding für CH/DE/AT.',
    url: 'https://kurse.spekt.ch/fuer-gemeinden',
    siteName: 'SPEKTRUM KI-Kurse',
    locale: 'de_CH',
    type: 'website',
    images: [{ url: 'https://kurse.spekt.ch/images/og-kurse.jpg', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://kurse.spekt.ch/fuer-gemeinden' },
  robots: { index: true, follow: true },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wie funktioniert eine Team-Lizenz technisch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jede Person Ihres Teams erhält einen eigenen persönlichen Zugang mit ihrer geschäftlichen E-Mail-Adresse. Das ist nötig, damit Fortschritt und Zertifikat pro Person gespeichert werden können. Es gibt keinen Sammel-Account – eine Person, eine E-Mail, ein Zertifikat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie loggen sich die Teilnehmer ein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jeder Teilnehmer erhält eine E-Mail mit einem persönlichen Magic-Link. Ein Klick genügt – kein Passwort nötig. Der Login bleibt 60 Tage gültig; danach wird ein neuer Link per E-Mail angefordert.',
      },
    },
    {
      '@type': 'Question',
      name: 'Können mehrere Personen denselben Zugang nutzen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein. Jede Person benötigt eine eigene E-Mail-Adresse. Das liegt daran, dass Zertifikate personalisiert ausgestellt werden und der Lernfortschritt pro Person gespeichert wird. Das schützt zudem Ihre Team-Lizenz vor Weitergabe.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was braucht SPEKTRUM von uns zur Freischaltung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nach Rechnungsbegleichung liefern Sie uns eine Liste mit Name und E-Mail-Adresse aller Teilnehmer – per E-Mail, Excel oder CSV. Wir schalten die Zugänge innerhalb von 1 Werktag frei und jede Person erhält automatisch eine Willkommens-E-Mail mit Login-Link.',
      },
    },
    {
      '@type': 'Question',
      name: 'Können wir Personen nachträglich austauschen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, innerhalb der ersten 14 Tage nach Freischaltung kostenlos. Wenn eine Person den Kurs noch nicht gestartet hat, können wir sie durch eine andere ersetzen. Wichtig: Teilnehmer, die bereits Lektionen abgeschlossen haben, können nicht ausgetauscht werden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie lange hat jede Person Zugang?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '90 Tage ab individueller Freischaltung – unabhängig davon, wann die Person tatsächlich startet. In dieser Zeit kann sie alle Inhalte unbegrenzt oft durcharbeiten. Das Zertifikat bleibt nach Abschluss dauerhaft gültig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Erhalten wir einen Überblick zum Lernfortschritt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ab Paket Team 10: Sie erhalten auf Wunsch alle 30 Tage einen anonymisierten Fortschrittsreport (wie viele Personen wie weit sind). Eine personenbezogene Auswertung gibt es aus Datenschutzgründen nur mit expliziter Zustimmung aller Teilnehmer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was passiert mit den Teilnehmer-Daten nach 90 Tagen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Zugriffsrechte laufen aus, das Konto bleibt bestehen. Das Zertifikat kann jederzeit erneut heruntergeladen werden. Sie können jederzeit die Löschung des Kontos verlangen (E-Mail an andreas.rupf@spekt.ch).',
      },
    },
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'KI-Kurse für Gemeinden & Teams',
  description: 'Team- und Gemeinde-Lizenzen für SPEKTRUM KI-Kurse im deutschsprachigen Raum.',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'SPEKTRUM Partner GmbH',
    url: 'https://spekt.ch',
    address: { '@type': 'PostalAddress', addressLocality: 'Zürich', addressCountry: 'CH' },
  },
  areaServed: [
    { '@type': 'Country', name: 'Schweiz' },
    { '@type': 'Country', name: 'Deutschland' },
    { '@type': 'Country', name: 'Österreich' },
  ],
  offers: [
    { '@type': 'Offer', name: 'Team 5', price: '99', priceCurrency: 'CHF' },
    { '@type': 'Offer', name: 'Team 10', price: '179', priceCurrency: 'CHF' },
    { '@type': 'Offer', name: 'Team 25', price: '399', priceCurrency: 'CHF' },
  ],
  url: 'https://kurse.spekt.ch/fuer-gemeinden',
};

export default function FuerGemeindenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  );
}
