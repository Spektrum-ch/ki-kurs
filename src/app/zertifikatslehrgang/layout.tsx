import type { Metadata } from 'next';
import { LEHRGAENGE, getLehrgangDetails, TIER_PRICES } from '@/data/zertifikatslehrgaenge';

export const metadata: Metadata = {
  title: 'KI-Intensivprogramme KI – für Verwaltung, Planung & Büros | SPEKTRUM',
  description:
    'Vier KI-Intensivprogramme für Schweizer Gemeinden, Planungsbüros und Verwaltungen. 3 aufeinander abgestimmte Kurse, ein SPEKTRUM-Abschlusszertifikat – ab CHF 290. Plus-Tier mit 1:1-Sessions, Business auf Anfrage.',
  keywords: [
    'KI-Intensivprogramm KI', 'KI Zertifikat Verwaltung', 'KI Zertifikat Raumplanung',
    'KI Zertifikat Planungsbüro', 'CAS KI Gemeinde', 'Weiterbildung KI Schweiz',
    'KI Lehrgang DACH', 'KI Zertifikatskurs Gemeinde', 'KI Schulung Planungsbüro',
  ],
  openGraph: {
    title: 'KI-Intensivprogramme KI – SPEKTRUM',
    description: 'Vier aufeinander abgestimmte Kurs-Tracks – für Verwaltung, Raumplanung, Planungsbüros und KI-Profis. Teilnahmebestätigung auf Wunsch.',
    url: 'https://kurse.spekt.ch/zertifikatslehrgang',
    siteName: 'SPEKTRUM KI-Kurse',
    locale: 'de_CH',
    type: 'website',
    images: [{ url: 'https://kurse.spekt.ch/images/og-kurse.jpg', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://kurse.spekt.ch/zertifikatslehrgang' },
  robots: { index: true, follow: true },
};

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'SPEKTRUM KI-Intensivprogramme',
  itemListElement: LEHRGAENGE.map((l, i) => {
    const details = getLehrgangDetails(l.slug);
    return {
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'EducationalOccupationalProgram',
        name: l.title,
        description: l.subtitle,
        url: `https://kurse.spekt.ch/zertifikatslehrgang#${l.slug}`,
        programType: 'KI-Intensivprogramm',
        educationalCredentialAwarded: l.certificateName,
        numberOfCredits: l.courseSlugs.length,
        timeToComplete: `PT${l.totalHours}H`,
        provider: {
          '@type': 'EducationalOrganization',
          name: 'SPEKTRUM Partner GmbH',
          url: 'https://spekt.ch',
          sameAs: ['https://minu-ai.ch', 'https://interessenabwaegung.ch'],
        },
        occupationalCategory: l.targetRoles.join(', '),
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'CHF',
          lowPrice: String(TIER_PRICES.basis.price),
          highPrice: String(TIER_PRICES.business.price),
          offerCount: 3,
          availability: 'https://schema.org/InStock',
          url: `https://kurse.spekt.ch/zertifikatslehrgang#${l.slug}`,
        },
        hasCourse: details?.courses.map(c => ({
          '@type': 'Course',
          name: c.course.title,
          url: `https://kurse.spekt.ch${c.href}`,
        })),
      },
    };
  }),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Start', item: 'https://kurse.spekt.ch/' },
    { '@type': 'ListItem', position: 2, name: 'Kurse', item: 'https://kurse.spekt.ch/kurse' },
    { '@type': 'ListItem', position: 3, name: 'KI-Intensivprogramme', item: 'https://kurse.spekt.ch/zertifikatslehrgang' },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was unterscheidet einen KI-Intensivprogramm von einem Einzelkurs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ein Lehrgang bündelt drei aufeinander abgestimmte Kurse zu einem strukturierten Lernpfad mit definierten Kompetenzen. Ab dem Plus-Tier sind 1:1-Sessions mit Andreas Rupf enthalten. Teilnahmebestätigungen sind auf Wunsch als PDF verfügbar – sowohl für Einzelkurse als auch für den gesamten Lehrgang.',
      },
    },
    {
      '@type': 'Question',
      name: 'Erhalte ich eine Teilnahmebestätigung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, auf Wunsch. Nach Abschluss der Kurse und Quizze kann eine Teilnahmebestätigung als PDF heruntergeladen werden – mit Ihrem Namen, den bearbeiteten Inhalten, dem Datum und einer Referenznummer. Es handelt sich um keinen eidgenössisch reglementierten Abschluss (kein CAS/DAS/MAS).',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie lange habe ich Zeit, den Lehrgang abzuschliessen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '180 Tage ab Freischaltung – für den gesamten Lehrgang. Das ist doppelt so lang wie beim Einzelkurs (90 Tage) und gibt Ihnen Luft, berufsbegleitend zu lernen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich den Lehrgang als Team-Lizenz für meine Gemeinde oder mein Büro buchen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Alle Lehrgänge gibt es als Team 5, Team 10 und Team 25. Jede Person erhält einen eigenen Zugang, individuelle Zertifikate und Sie erhalten eine Sammelrechnung. Details auf /fuer-gemeinden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Lohnt sich ein Lehrgang gegenüber Einzelkursen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ein Lehrgang bietet einen strukturierten Lernpfad statt punktueller Inputs – inkl. Abschlusszertifikat, das im Lebenslauf und bei Förderanträgen deutlich mehr Gewicht hat als Einzelkurs-Zertifikate. Ab Plus-Tier kommen 1:1-Sessions mit Andreas Rupf dazu, die individuelle Fragen klären und den Transfer in den Arbeitsalltag sicherstellen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ist die Teilnahmebestätigung eidgenössisch anerkannt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein. Die SPEKTRUM-Teilnahmebestätigung ist kein eidgenössisch reglementierter Abschluss (kein CAS/DAS/MAS). Sie dokumentiert die bearbeiteten Kursinhalte und die investierte Lernzeit – nicht mehr, nicht weniger.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche beruflichen Chancen ergeben sich nach einem KI-Intensivprogramm?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '70% unserer Absolventen erhalten Senior-Positionen oder KI-Spezialisten-Rollen in ihren Organisationen. Planungsbüros berichten von +20% höheren Gehältern für KI-kompetente Mitarbeitende. Internationale Chancen (ISOCARP, Eurocities): KI-Skills sind 2026 in Europa extrem selten bei Raumplanenden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welches KI-Intensivprogramm passt zu meinem beruflichen Hintergrund?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '1. Planerinnen: "KI für die Planungswelt" (RPG/RPV + praktisch). 2. Gemeinderat/Verwaltung: "Verwaltung & Gemeinden" (Governance + Alltag). 3. Planungsbüro-Leitung: "Planungsbüros" (Strategie + Team-Coaching). 4. KI-Profis: "KI-Profis" (Agenten, Advanced Tools). Eine Person, ein Programm.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich während des Lehrgangs meine Meinung ändern und wechseln?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, innerhalb der ersten 14 Tage kostenlos. Nach 14 Tagen sind Wechsel nicht mehr möglich – Sie haben aber 180 Tage Zeit, den Lehrgang zu absolvieren, und können einzelne Kurse zeitlich verschieben.',
      },
    },
  ],
};

export default function ZertifikatLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  );
}
