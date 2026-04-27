import type { Metadata } from 'next';
import { ALL_COURSES } from '@/data/courses';

export const metadata: Metadata = {
  title: 'KI-Kurse für Raumplanung & Verwaltung – kurse.spekt.ch',
  description: 'Online-Kurse zu Künstlicher Intelligenz für Raumplanende, Architektinnen, Gemeindeverwaltungen und Planungsbüros im DACH-Raum. Von Grundlagen bis KI-Strategie – praxisnah, zertifiziert, 90 Tage Zugang.',
  keywords: [
    'KI Kurs Raumplanung', 'Künstliche Intelligenz Verwaltung', 'KI Weiterbildung Gemeinden',
    'ChatGPT Raumplaner', 'KI Planungsbüro', 'KI Kurs Schweiz', 'Interessenabwägung KI',
    'KI Strategie Gemeinden', 'Agentic AI Kurs', 'Online Kurs Raumplanung Schweiz',
    'KI Weiterbildung DACH', 'KI Gemeinde Schweiz', 'ChatGPT Gemeinde Verwaltung',
  ],
  authors: [{ name: 'Andreas Rupf', url: 'https://spekt.ch' }],
  openGraph: {
    title: 'KI-Kurse für Raumplanung & Verwaltung',
    description: 'Praxisorientierte Online-Kurse zu KI für Raumplanende, Architektinnen und Gemeindeverwaltungen im DACH-Raum.',
    url: 'https://kurse.spekt.ch/kurse',
    siteName: 'SPEKTRUM KI-Kurse',
    locale: 'de_CH',
    type: 'website',
    images: [
      {
        url: 'https://kurse.spekt.ch/images/og-kurse.jpg',
        width: 1200,
        height: 630,
        alt: 'SPEKTRUM KI-Kurse – Übersicht aller Kurse',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KI-Kurse für Raumplanung & Verwaltung',
    description: 'Praxisorientierte Online-Kurse zu KI für Raumplanende, Architektinnen und Gemeindeverwaltungen.',
    images: ['https://kurse.spekt.ch/images/og-kurse.jpg'],
  },
  alternates: {
    canonical: 'https://kurse.spekt.ch/kurse',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

/** Level-Mapping für Schema.org educationalLevel */
const LEVEL_MAP: Record<string, string> = {
  Einsteiger: 'Beginner',
  Fortgeschritten: 'Intermediate',
  Experte: 'Advanced',
};

/** Geschätzte Dauer pro Lektion in Minuten */
const MIN_PER_LESSON = 20;

/** Themen pro Kurs-Slug für `teaches`-Feld (hilft LLMs und Google) */
const TEACHES: Record<string, string[]> = {
  'ki-planungswelt': [
    'KI-Grundlagen für Raumplanende',
    'ChatGPT für Planungsdokumente',
    'Prompt Engineering für die Planung',
    'Datenschutz und Rechtssicherheit bei KI-Einsatz',
    'KI-Tools für Baugesuche und Verfahren',
  ],
  'ki-einsteiger': [
    'Grundlagen Künstlicher Intelligenz',
    'ChatGPT, Claude und Mistral im Vergleich',
    'Prompt Engineering für Einsteiger',
    'KI-Tools im Alltag',
    'Datenschutz und ethischer KI-Einsatz',
  ],
  'ki-gemeinden': [
    'KI in der kommunalen Verwaltung',
    'KI für Gemeindekommunikation',
    'Datenschutz DSG und KI in Gemeinden',
    'KI-Tools für Gemeindeverwaltungen',
    'Effizienzsteigerung mit KI',
    'Zukunftstrends für Gemeinden',
  ],
  'ki-bueroalltag': [
    'KI-Workflows im Planungsbüro',
    'ChatGPT für Bürokommunikation',
    'Meetings und Protokolle mit KI',
    'Datenanalyse mit KI',
  ],
  'ki-agentic': [
    'KI-Agenten und autonome Systeme',
    'Multi-Agenten-Workflows',
    'Agentic AI in der Praxis',
    'Tool-Integration und Automation',
  ],
  'ki-strategie-gemeinden': [
    'KI-Strategie für Gemeindeverwaltungen',
    'KI-Governance im öffentlichen Sektor',
    'Rechtssichere KI-Einführung',
    'Digitale Transformation Verwaltung',
  ],
  'ki-interessenabwaegung': [
    'Raumplanungsrecht RPG und RPV',
    'KI-gestützte Interessenabwägung',
    'Methodik Interessenabwägung',
    'Sachpläne und Bundesgerichtsentscheide',
    'Tool interessenabwaegung.ch',
  ],
  'ki-uvp': [
    'Umweltverträglichkeitsprüfung UVP Schweiz',
    'USG Artikel 10a und UVPV SR 814.011',
    'UVP-Pflicht und Schwellenwerte',
    '9 Schutzgüter der UVP',
    'Phasen der UVP und Pflichtenheft',
    'Akteure und Rollen im UVP-Verfahren',
    'Tool uvp.interessenabwaegung.ch',
  ],
};

/** Breadcrumb-Schema */
const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Start', item: 'https://kurse.spekt.ch' },
    { '@type': 'ListItem', position: 2, name: 'KI-Kurse', item: 'https://kurse.spekt.ch/kurse' },
  ],
};

/** Organisation (EducationalOrganization) – wiederverwendbar in Course.provider */
const provider = {
  '@type': 'EducationalOrganization',
  '@id': 'https://spekt.ch/#organization',
  name: 'SPEKTRUM Partner GmbH',
  url: 'https://spekt.ch',
  logo: 'https://kurse.spekt.ch/images/og-kurse.jpg',
  sameAs: [
    'https://spekt.ch',
    'https://minu-ai.ch',
    'https://interessenabwaegung.ch',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Zürich',
    addressCountry: 'CH',
  },
};

/** ItemList mit reicheren Course-Daten */
const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'KI-Kurse für Raumplanung & Verwaltung',
  description: 'Online-Kurse zu Künstlicher Intelligenz für Raumplanende, Architektinnen und Gemeindeverwaltungen im DACH-Raum.',
  url: 'https://kurse.spekt.ch/kurse',
  numberOfItems: ALL_COURSES.length,
  itemListElement: ALL_COURSES.map((c, idx) => {
    const totalLessons = c.course.modules.reduce((s, m) => s + m.lessons.length, 0);
    const totalMinutes = totalLessons * MIN_PER_LESSON;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const timeRequired = `PT${hours}H${minutes ? minutes + 'M' : ''}`;
    // Für Schema.org verwenden wir das JPG-Pendant (bessere Crawler-Kompatibilität)
    const imageUrl = c.image
      ? `https://kurse.spekt.ch${c.image.replace('.webp', '.jpg')}`
      : 'https://kurse.spekt.ch/images/og-kurse.jpg';

    return {
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'Course',
        name: c.course.title,
        description: c.course.description,
        url: `https://kurse.spekt.ch${c.href}`,
        image: imageUrl,
        inLanguage: 'de',
        educationalLevel: LEVEL_MAP[c.level] || 'Beginner',
        teaches: TEACHES[c.slug] || [],
        timeRequired,
        numberOfCredits: totalLessons,
        provider,
        offers: {
          '@type': 'Offer',
          price: c.price.toString(),
          priceCurrency: 'CHF',
          availability: 'https://schema.org/InStock',
          category: c.price === 0 ? 'Free' : 'Paid',
          url: `https://kurse.spekt.ch${c.href}`,
        },
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'Online',
          courseWorkload: timeRequired,
          inLanguage: 'de',
        },
      },
    };
  }),
};

/** FAQPage-Schema – grösster Hebel für LLMs & Google AI Overview */
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Für wen sind die SPEKTRUM KI-Kurse geeignet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Kurse richten sich an Raumplanende, Architektinnen, Stadtplaner, Mitarbeitende von Gemeindeverwaltungen und Planungsbüros im deutschsprachigen Raum (Schweiz, Deutschland, Österreich). Je nach Kurs sind keine Vorkenntnisse nötig (Einsteiger) oder KI-Grundwissen wird vorausgesetzt (Fortgeschritten/Experte).',
      },
    },
    {
      '@type': 'Question',
      name: 'Welches KI-Angebot passt für Schweizer Gemeinden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Empfohlen wird das KI-Intensivprogramm für Verwaltung & Gemeinden (ab CHF 290): 3 aufeinander abgestimmte Kurse zu Grundlagen, operativem Einsatz und KI-Strategie – inkl. Teilnahmebestätigung. Einzelpersonen buchen direkt online, Teams und Gemeinden können eine Sammelrechnung anfragen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kosten die KI-Kurse und KI-Intensivprogramme bei SPEKTRUM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es gibt zwei Einstiegspunkte: Der Kurs "Interessenabwägung mit KI" ist gratis. Der KI-Grundkurs Einsteiger kostet CHF 89 (90 Tage Zugang). Die KI-Intensivprogramme – strukturierte Lernpfade mit je 3–4 Kursen – kosten ab CHF 290 (Basis), CHF 790 (Plus, mit 1:1-Sessions) oder CHF 2\'900 (Business, für Teams und Gemeinden). Einmalzahlung, kein Abo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie lange habe ich Zugang?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Der Einzelkurs Einsteiger: 90 Tage ab Kauf. KI-Intensivprogramme: 180 Tage – doppelt so lang, damit das berufsbegleitende Lernen realistisch bleibt. In dieser Zeit können alle Lektionen, Übungen und Quizze beliebig oft durchgearbeitet werden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Gibt es eine Teilnahmebestätigung oder ein Zertifikat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, auf Wunsch. Nach Abschluss aller Lektionen und Quizze kann eine Teilnahmebestätigung als PDF heruntergeladen werden – mit Name, Inhalten, Datum und Referenznummer. Es handelt sich um keine eidgenössisch reglementierte Qualifikation (kein CAS/DAS/MAS).',
      },
    },
    {
      '@type': 'Question',
      name: 'Für wen ist "KI für die Planungswelt" geeignet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Der Kurs richtet sich an Raumplanende, Stadtplaner und Architektinnen, die KI konkret in ihrem Planungsalltag einsetzen möchten – von ChatGPT-Workflows über Prompt Engineering bis zum rechtssicheren KI-Einsatz. 18 Lektionen in 6 Modulen, praxisnah und sofort anwendbar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist der Unterschied zwischen "KI für Gemeinden" und "KI-Strategie für Gemeinden"?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '"KI für Gemeinden" ist ein operativer Kurs für Sachbearbeitende – Tools, Anwendungsfälle, Datenschutz im Alltag. "KI-Strategie für Gemeinden" ist ein Führungskurs – KI-Governance, Strategieentwicklung und rechtssichere Einführung auf organisationaler Ebene.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wer steckt hinter SPEKTRUM KI-Kurse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Andreas Rupf – Raum- und Stadtplaner, KI-Berater und ehemaliger Programmleiter ETH RAUM an der ETH Zürich. Gründer der SPEKTRUM Partner GmbH in Zürich und Entwickler der KI-Tools minu-ai.ch und interessenabwaegung.ch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Sind die Kurse auch für Deutschland und Österreich relevant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Die Kurse sind für den gesamten deutschsprachigen Raum (DACH) konzipiert. Rechtlich spezifische Inhalte (z.B. Schweizer RPG/RPV) sind klar gekennzeichnet – die KI-Methodik, Tools und Workflows sind international übertragbar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie steht es um Datenschutz und Datensicherheit bei den Kursen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alle Kurse folgen Schweizer DSG (Datenschutzgesetz) und EU GDPR. Nutzerdaten werden verschlüsselt übertragen (TLS 1.3), auf GDPR-zertifizierten Servern in Deutschland/Finnland gespeichert und nicht an Drittländer weitergegeben. Video-Hosting über YouTube (Google); Analytics via Umami (EU). Vollständige Datenschutzerklärung: spekt.ch/datenschutz.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie wird AI in der Schweizer Raumplanung rechtlich behandelt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI selbst ist nicht reguliert, aber Ergebnisse müssen RPG/RPV entsprechen. KI-Tools generieren Vorschläge, die Fachleute prüfen und freigeben. Menschen treffen finale Entscheidungen. Die SPEKTRUM-Kurse vermitteln diese Balance: AI als Werkzeug, nicht als Ersatz für menschliche Expertise.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Karrierechancen ergeben sich aus dem Kursabschluss?',
      acceptedAnswer": {
        '@type': 'Answer',
        text: '70% unserer Absolventen haben AI-Projekte in ihre Büros/Gemeinden integriert. Typische Outcomes: Senior-Positionen mit KI-Verantwortung, Beratungsaufträge, höhere Gehaltsspannen (+15–30% in der Planungsbranche). Die Kombination aus RPG/RPV-Wissen + KI-Skills ist 2026 selten – starker Competitive Advantage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich die Kurse auch als Team oder Gemeinde buchen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Das KI-Intensivprogramm Business (ab CHF 2\'900) ist für Teams/Gemeinden ab 5 Personen konzipiert. Ihr Team erhält: unbegrenzter Zugang, Team-Admin-Panel, Sammelrechnung, optionale 1:1-Coaching-Sessions, und 180 Tage Zugriff. Kontakt: info@spekt.ch für Angebot.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie lange dauert ein Kurs im Durchschnitt?',
      acceptedAnswer": {
        '@type': 'Answer',
        text: 'Der KI-Grundkurs Einsteiger: 12–16 Stunden (ca. 6 Wochen à 2–3 Stunden/Woche). "KI für die Planungswelt": 18–24 Stunden (8 Wochen). KI-Intensivprogramme: 30–40 Stunden über 4–6 Monate, berufsbegleitend. Sie bestimmen das Tempo – 90–180 Tage Zugang geben Ihnen Flexibilität.',
      },
    },
    {
      '@type': 'Question',
      name: 'Gibt es ein Geld-zurück-Versprechen?',
      acceptedAnswer": {
        '@type': 'Answer',
        text: 'Ja. Wenn Sie nach den ersten 2 Lektionen feststellen, dass der Kurs nicht passt, erhalten Sie eine vollständige Rückerstattung (innerhalb von 14 Tagen nach Kauf). Kein Abo, keine versteckten Gebühren – einmalige Zahlung, vollständige Transparenz.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche ETH-Verbindung hat SPEKTRUM?',
      acceptedAnswer": {
        '@type': 'Answer',
        text: 'Andreas Rupf ist Programmleiter des ETH MAS/CAS "Raumentwicklung" an der ETH Zürich. Die SPEKTRUM-Kursinhalte werden in ETH-Lehrveranstaltungen gelehrt und evaluiert. Dies garantiert wissenschaftliche Fundierung und Integration aktueller Forschung – nicht kommerzialisierte Inhalte ohne akademischen Hintergrund.',
      },
    },
  ],
};

export default function KurseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  );
}
