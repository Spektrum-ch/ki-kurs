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
    'Tool interessenabwaegung.ch',
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
      name: 'Welcher KI-Kurs passt für Schweizer Gemeinden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Für Sachbearbeitende der kommunalen Verwaltung empfehlen wir "KI für Gemeinden" (CHF 29). Für Führungskräfte und KI-Verantwortliche ist der Kurs "KI-Strategie für Gemeinden" (CHF 39) optimal – er behandelt KI-Governance, Strategieentwicklung und rechtssichere Einführung.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet ein KI-Kurs bei SPEKTRUM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Einsteigerkurse kosten CHF 19, Fortgeschrittenenkurse CHF 29 und Expertenkurse CHF 39. Der Kurs "Interessenabwägung mit KI" ist gratis. Einmalzahlung, kein Abo – jeder Kurs beinhaltet 90 Tage Zugang.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie lange habe ich Zugang zu einem Kurs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '90 Tage ab Kauf. In dieser Zeit kannst du alle Lektionen, Videos und Quizze beliebig oft durcharbeiten. Das Zertifikat erhältst du nach erfolgreichem Abschluss und bleibt dauerhaft gültig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Gibt es ein Zertifikat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Jeder Kurs wird mit einem Zertifikat von SPEKTRUM Partner GmbH abgeschlossen, nachdem alle Lektionen und Quizze erfolgreich bestanden wurden. Das Zertifikat kannst du als PDF herunterladen.',
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
