import type { Metadata } from 'next';
import { LEHRGAENGE, getLehrgangDetails } from '@/data/zertifikatslehrgaenge';

export const metadata: Metadata = {
  title: 'Zertifikatslehrgänge KI – für Verwaltung, Planung & Büros | SPEKTRUM',
  description:
    'Vier Zertifikatslehrgänge für Schweizer Gemeinden, Planungsbüros und Verwaltungen. 3 aufeinander abgestimmte Kurse, ein SPEKTRUM-Abschlusszertifikat – ab CHF 29. Team-Lizenzen verfügbar.',
  keywords: [
    'Zertifikatslehrgang KI', 'KI Zertifikat Verwaltung', 'KI Zertifikat Raumplanung',
    'KI Zertifikat Planungsbüro', 'CAS KI Gemeinde', 'Weiterbildung KI Schweiz',
    'KI Lehrgang DACH', 'KI Zertifikatskurs Gemeinde', 'KI Schulung Planungsbüro',
  ],
  openGraph: {
    title: 'Zertifikatslehrgänge KI – SPEKTRUM',
    description: 'Vier aufeinander abgestimmte Kurs-Tracks mit Abschlusszertifikat – für Verwaltung, Raumplanung, Planungsbüros und KI-Profis.',
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
  name: 'SPEKTRUM Zertifikatslehrgänge',
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
        programType: 'Zertifikatslehrgang',
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
          '@type': 'Offer',
          price: String(l.bundlePrice),
          priceCurrency: 'CHF',
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
    { '@type': 'ListItem', position: 3, name: 'Zertifikatslehrgänge', item: 'https://kurse.spekt.ch/zertifikatslehrgang' },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was unterscheidet einen Zertifikatslehrgang von einem Einzelkurs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ein Zertifikatslehrgang bündelt drei aufeinander abgestimmte Kurse zu einem Lernweg mit definierten Kompetenzen und einem offiziellen SPEKTRUM-Abschlusszertifikat. Einzelkurse erhalten ein Teilnahme­zertifikat pro Kurs; der Lehrgang attestiert das Gesamt-Kompetenzprofil (z.B. «KI für Verwaltung & Gemeinden»).',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie erhalte ich das Abschlusszertifikat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Das Abschlusszertifikat wird automatisch ausgestellt, sobald Sie alle drei Kurse des Lehrgangs abgeschlossen haben (inkl. Quizzes). Es enthält Ihren Namen, den Titel des Lehrgangs, das Datum und eine Referenznummer.',
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
        text: 'Finanziell sparen Sie 15–25 % gegenüber dem Einzelkauf. Didaktisch erhalten Sie einen strukturierten Lernpfad statt punktueller Inputs – und ein Zertifikat, das im Lebenslauf und bei Förderanträgen deutlich mehr Gewicht hat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ist das Zertifikat eidgenössisch anerkannt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein, die SPEKTRUM-Zertifikate sind keine eidgenössisch reglementierten Abschlüsse (kein CAS/DAS/MAS). Sie bestätigen die erfolgreiche Teilnahme an einem strukturierten Weiterbildungs­programm und werden von Arbeitgebern in der Raumplanungs- und Verwaltungs­branche als kompetenz­orientierter Nachweis anerkannt.',
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
