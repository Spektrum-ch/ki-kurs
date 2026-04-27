import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KI-Weiterbildung für Teams, Gemeinden & Planungsbüros | SPEKTRUM',
  description: 'KI-Intensivprogramme für Gemeindeverwaltungen, Planungsbüros und Teams: Einzelperson ab CHF 290 direkt online, Team-Lizenz CHF 2\'900 pro Programm – Sammelrechnung, unbegrenzte Plätze, persönliche Teilnahmebestätigung.',
  keywords: [
    'KI Weiterbildung Gemeinde Schweiz', 'Team-Lizenz KI Intensivprogramm', 'KI Firmenkurs DACH',
    'Gemeinde KI Schulung Schweiz', 'KI Weiterbildung Verwaltung',
    'KI Schulung Planungsbüro', 'KI Kurs Team Schweiz', 'KI Sammelrechnung',
    'KI Intensivprogramm Gemeinde', 'KI Weiterbildung öffentliche Verwaltung',
  ],
  openGraph: {
    title: 'KI-Weiterbildung für Teams, Gemeinden & Planungsbüros',
    description: 'KI-Intensivprogramme mit Teamlizenz: Sammelrechnung, unbegrenzte Plätze, persönliche Teilnahmebestätigung – für Gemeinden, Planungsbüros und Teams im DACH-Raum.',
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
      name: 'Was ist der Unterschied zwischen Einzelperson und Team-Buchung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Einzelpersonen buchen ein KI-Intensivprogramm direkt online ab CHF 290 – kein Gespräch nötig, sofortiger Zugang. Teams, Gemeinden und Planungsbüros, die mehrere Zugänge für ein ganzes Intensivprogramm benötigen, können eine Team-Lizenz anfragen: CHF 2\'900 pro KI-Intensivprogramm, unbegrenzte Plätze, Sammelrechnung.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie funktioniert eine Team-Lizenz technisch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jede Person des Teams erhält einen eigenen persönlichen Zugang mit ihrer geschäftlichen E-Mail-Adresse. Es gibt keinen Sammel-Account – eine Person, eine E-Mail, eine Teilnahmebestätigung. Wir schalten alle Zugänge nach Rechnungsbegleichung innerhalb von 1 Werktag frei.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie loggen sich die Teilnehmenden ein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jede Person erhält eine E-Mail mit einem persönlichen Magic-Link. Ein Klick genügt – kein Passwort nötig. Der Login bleibt 60 Tage gültig; danach kann ein neuer Link per E-Mail angefordert werden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie lange haben die Teilnehmenden Zugang?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '180 Tage ab Freischaltung – damit auch berufsbegleitend lernen realistisch bleibt. In dieser Zeit können alle Lektionen, Übungen und Quizze beliebig oft durchgearbeitet werden. Die Teilnahmebestätigung bleibt nach Abschluss dauerhaft gültig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Erhalten wir eine gemeinsame Rechnung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Bei Team-Buchungen stellen wir eine einzelne Sammelrechnung auf die Organisation aus. Zahlung per Banküberweisung (CHF), 30 Tage netto. Auf Wunsch mit MwSt.-Ausweis.',
      },
    },
    {
      '@type': 'Question',
      name: 'Können Personen nachträglich ausgetauscht werden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, innerhalb der ersten 14 Tage nach Freischaltung kostenlos – solange die Person den Kurs noch nicht gestartet hat. Personen, die bereits Lektionen abgeschlossen haben, können nicht ausgetauscht werden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was passiert mit den Daten nach Ablauf der 180 Tage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Zugriffsrechte laufen aus, das Konto bleibt bestehen. Die Teilnahmebestätigung kann jederzeit erneut heruntergeladen werden. Jede Person kann jederzeit die Löschung ihres Kontos verlangen (E-Mail an andreas.rupf@spekt.ch).',
      },
    },
    {
      '@type': 'Question',
      name: 'Welcher ROI ergibt sich aus KI-Weiterbildung für unsere Gemeinde?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Konservative Berechnung: Planer spart 40h/Jahr pro Bauzonenbericht (CHF 6\'000 Kosten), AI spart 28h (CHF 4\'200 Ersparnis × 2–3 Berichte/Jahr = CHF 8\'400–12\'600). Weiterer Nutzen: schnellere Partizipation, bessere Entscheidungsfindung, geringere Beschwerdeverfahren. ROI: 2–3 Monate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie lange dauert die Implementierung von KI-Tools in unserer Verwaltung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Realistische Timeline: Monat 1 = Grundkurs + Selbstcheck. Monat 2 = Erste Pilot-Projekte (z.B. Interessenabwägung, Bauzonenbericht). Monat 3–4 = Regelbetrieb mit Optimierungen. Blockierungsfaktoren: Datenschutz-Check (2–4 Wochen), Sicherungsinfrastruktur. Gesamtdauer: 3–4 Monate bis produktiver Regelbetrieb.',
      },
    },
    {
      '@type': 'Question',
      name: 'Passt KI-Weiterbildung zu unseren bestehenden Workflows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Die Kurse sind spezifisch für Schweizer Raumplanung (RPG/RPV) und Gemeindeverfahren. Die Tools, die gelehrt werden (ChatGPT, Claude, Mistral), lassen sich nahtlos in bestehende Prozesse integrieren – keine Systemwechsel nötig. Integration mit bestehenden Datenbanken/GIS wird in den Fortgeschrittenen-Modulen behandelt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wer entscheidet über KI-Einsatz: IT-Abteilung oder Fachabteilung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Idealerweise gemeinsam. Das KI-Strategie-Modul behandelt Governance: Wer hat Entscheidungsrechte? Wie werden AI-Outputs überprüft? Wer trägt Verantwortung? Die Kurse vermitteln, wie eine Gemeinde eine Governance-Policy aufbaut – kein IT-gesteuertes Top-Down, sondern Fachabteilungen als Change-Agents mit IT-Support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Können wir den Kurs unseren Mitarbeitenden empfehlen, auch wenn sie noch nicht IT-affin sind?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, empfohlen. Der KI-Grundkurs Einsteiger ist speziell für Nicht-IT-Profis konzipiert – keine Programmierung, keine Kompliziertheit. Die meisten Absolventinnen berichten: "Das ist einfacher als Excel-Funktionen." Die Kursmaterialien sind praxisnah und auf Raumplanung zugeschnitten, nicht theoretisch.',
      },
    },
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'KI-Intensivprogramme für Teams, Gemeinden & Planungsbüros',
  description: 'KI-Weiterbildung für Teams und Organisationen: Sammelrechnung, unbegrenzte Plätze, persönliche Teilnahmebestätigung – im deutschsprachigen Raum.',
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
    {
      '@type': 'Offer',
      name: 'Einzelperson – KI-Intensivprogramm Basis',
      price: '290',
      priceCurrency: 'CHF',
      availability: 'https://schema.org/InStock',
      url: 'https://kurse.spekt.ch/zertifikatslehrgang',
    },
    {
      '@type': 'Offer',
      name: 'Team-Lizenz – KI-Intensivprogramm',
      price: '2900',
      priceCurrency: 'CHF',
      availability: 'https://schema.org/InStock',
      url: 'https://kurse.spekt.ch/fuer-gemeinden#anfrage',
      eligibleCustomerType: 'https://schema.org/Organization',
    },
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
