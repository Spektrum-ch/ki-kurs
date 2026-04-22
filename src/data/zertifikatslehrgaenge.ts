import { ALL_COURSES } from './courses';

export interface Lehrgang {
  slug: string;
  title: string;
  subtitle: string;
  target: string;             // Zielgruppe in einem Satz
  emoji: string;
  color: string;              // Gradient für Karte
  courseSlugs: string[];      // Reihenfolge der Kurse im Lehrgang
  bundlePrice: number;        // CHF Einzelperson
  bundlePriceLabel: string;
  teamPrices: {
    team5: { price: number; label: string };
    team10: { price: number; label: string };
    team25: { price: number; label: string };
  };
  totalHours: number;
  certificateName: string;    // Offizieller Titel auf dem Zertifikat
  outcomes: string[];         // 4-5 Kompetenzen nach Abschluss
  targetRoles: string[];      // Berufsbilder
}

export const LEHRGAENGE: Lehrgang[] = [
  {
    slug: 'ki-verwaltung',
    title: 'Zertifikatslehrgang KI für Verwaltung & Gemeinden',
    subtitle: 'Vom ersten Prompt zur strategischen KI-Roadmap für Ihre Gemeinde.',
    target: 'Für Gemeinderäte, Gemeindeschreiber:innen, Verwaltungsleitende und Bereichsleitende, die KI in ihrer Verwaltung verankern wollen.',
    emoji: '🏛️',
    color: 'linear-gradient(135deg, #0d3d26 0%, #0057a8 100%)',
    courseSlugs: ['ki-einsteiger', 'ki-gemeinden', 'ki-strategie-gemeinden'],
    bundlePrice: 69,
    bundlePriceLabel: 'CHF 69',
    teamPrices: {
      team5:  { price: 299,  label: 'CHF 299'  },
      team10: { price: 549,  label: 'CHF 549'  },
      team25: { price: 1199, label: 'CHF 1\'199' },
    },
    totalHours: 18,
    certificateName: 'SPEKTRUM Zertifikat – KI für Verwaltung & Gemeinden',
    outcomes: [
      'KI-Grundlagen sicher erklären – inkl. Chancen, Risiken und Datenschutz',
      'Konkrete Anwendungsfälle in Verwaltung, Baubewilligung und Einwohnerkommunikation umsetzen',
      'Eine KI-Strategie für Ihre Gemeinde entwerfen und im Gremium vertreten',
      'Rechtliche Rahmenbedingungen (DSG, EU AI Act) in die Praxis übersetzen',
      'Team und Kolleg:innen eigenständig in erste KI-Tools einführen',
    ],
    targetRoles: [
      'Gemeindeschreiber:in',
      'Stadt-/Gemeindepräsident:in',
      'Bereichsleiter:in Verwaltung',
      'Digitalisierungsverantwortliche:r',
      'Mitglieder Gemeinderat',
    ],
  },
  {
    slug: 'ki-raumplanung',
    title: 'Zertifikatslehrgang KI für Raumplanung',
    subtitle: 'KI-Werkzeuge für Planungsbüros, Fachstellen und Projekt­verantwortliche.',
    target: 'Für Raumplaner:innen, Architekt:innen mit Planungsfokus und Mitarbeitende in kantonalen Fachstellen.',
    emoji: '🗺️',
    color: 'linear-gradient(135deg, #0057a8 0%, #00a896 100%)',
    courseSlugs: ['ki-einsteiger', 'ki-planungswelt', 'ki-interessenabwaegung'],
    bundlePrice: 29,
    bundlePriceLabel: 'CHF 29',
    teamPrices: {
      team5:  { price: 129, label: 'CHF 129' },
      team10: { price: 239, label: 'CHF 239' },
      team25: { price: 499, label: 'CHF 499' },
    },
    totalHours: 15,
    certificateName: 'SPEKTRUM Zertifikat – KI für Raumplanung',
    outcomes: [
      'KI-Tools für Recherche, Analyse und Bericht­erstellung im Planungs­alltag einsetzen',
      'Nutzungsplanungs-, Richtplan- und ÖREB-Daten mit KI effizient aufbereiten',
      'Interessenabwägungen KI-gestützt strukturieren – ohne die juristische Verantwortung abzugeben',
      'Planungs­berichte, Mitwirkungen und Einsprache­antworten mit KI beschleunigen',
      'KI-Ergebnisse kritisch prüfen und fachlich validieren',
    ],
    targetRoles: [
      'Raumplaner:in FSU / SIA',
      'Projektleiter:in Planungsbüro',
      'Kantonale Fachstelle ARE/BD',
      'Architekt:in mit Planungsmandaten',
      'Studierende MAS Raumplanung',
    ],
  },
  {
    slug: 'ki-planungsbuero',
    title: 'Zertifikatslehrgang KI für Planungsbüros',
    subtitle: 'KI im ganzen Büro verankern – vom Sekretariat bis zur Projektleitung.',
    target: 'Für Inhaber:innen und Teams von Raumplanungs-, Architektur- und Ingenieur­büros, die KI büroweit produktiv einsetzen wollen.',
    emoji: '🏢',
    color: 'linear-gradient(135deg, #00a896 0%, #0057a8 100%)',
    courseSlugs: ['ki-einsteiger', 'ki-planungswelt', 'ki-bueroalltag'],
    bundlePrice: 45,
    bundlePriceLabel: 'CHF 45',
    teamPrices: {
      team5:  { price: 199, label: 'CHF 199' },
      team10: { price: 369, label: 'CHF 369' },
      team25: { price: 799, label: 'CHF 799' },
    },
    totalHours: 16,
    certificateName: 'SPEKTRUM Zertifikat – KI für Planungsbüros',
    outcomes: [
      'KI in Offert- und Angebots­prozessen büroweit einsetzen',
      'Planungs­berichte, Mitwirkungen und Stellung­nahmen mit KI beschleunigen',
      'Sekretariat und Projektleitung mit denselben KI-Werkzeugen ausrüsten',
      'Daten- und Mandanten­schutz in KI-Workflows gewährleisten (DSG-konform)',
      'Büroweite KI-Guidelines und Tool-Stack definieren',
    ],
    targetRoles: [
      'Büroinhaber:in / Geschäftsleitung',
      'Projektleiter:in Raumplanung',
      'Sekretariat / Office Management',
      'Junior-Planer:innen & Praktikant:innen',
      'Architekt:innen mit Planungsmandaten',
    ],
  },
  {
    slug: 'ki-profi',
    title: 'Zertifikatslehrgang KI-Profi',
    subtitle: 'Vom ChatGPT-Anwender zur Person, die KI-Agenten selbst baut.',
    target: 'Für Digitalisierungs­verantwortliche, IT-affine Mitarbeitende und alle, die KI tief verstehen und aktiv einsetzen wollen.',
    emoji: '🤖',
    color: 'linear-gradient(135deg, #5e35b1 0%, #0057a8 100%)',
    courseSlugs: ['ki-einsteiger', 'ki-bueroalltag', 'ki-agentic'],
    bundlePrice: 59,
    bundlePriceLabel: 'CHF 59',
    teamPrices: {
      team5:  { price: 259, label: 'CHF 259' },
      team10: { price: 479, label: 'CHF 479' },
      team25: { price: 999, label: 'CHF 999' },
    },
    totalHours: 17,
    certificateName: 'SPEKTRUM Zertifikat – KI-Profi',
    outcomes: [
      'KI-Assistenten für wiederkehrende Büro­aufgaben bauen',
      'Prompt-Engineering und Kontext­fenster professionell nutzen',
      'KI-Agenten mit Tool-Use, Custom GPTs und MCP einrichten',
      'Workflows automatisieren und dokumentieren',
      'KI-Grenzen, Halluzinationen und Kosten­fallen sicher erkennen',
    ],
    targetRoles: [
      'Digitalisierungs­verantwortliche:r',
      'IT- / Organisations­entwicklung',
      'Büroleiter:in',
      'Assistenz mit Automatisierungs­fokus',
      'Freischaffende Planer:innen & Berater:innen',
    ],
  },
];

/** Hilfsfunktion: Kurse eines Lehrgangs inkl. Summenpreis ermitteln */
export function getLehrgangDetails(slug: string) {
  const l = LEHRGAENGE.find(x => x.slug === slug);
  if (!l) return null;
  const courses = l.courseSlugs
    .map(cs => ALL_COURSES.find(c => c.slug === cs))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  const singleTotal = courses.reduce((s, c) => s + c.price, 0);
  const savings = singleTotal - l.bundlePrice;
  const savingsPercent = singleTotal > 0 ? Math.round((savings / singleTotal) * 100) : 0;
  return { ...l, courses, singleTotal, savings, savingsPercent };
}
