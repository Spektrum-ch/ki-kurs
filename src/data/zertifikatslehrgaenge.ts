import { ALL_COURSES } from './courses';

/** Einheits-Preise über alle 4 Lehrgänge (Tier-Modell) */
export const TIER_PRICES = {
  basis: { price: 290, priceLabel: 'CHF 290' },
  plus:  { price: 790, priceLabel: 'CHF 790' },
  business: { price: 2900, priceLabel: 'CHF 2\'900' }, // nur als Referenz – Kauf per Anfrage
} as const;

export type TierKey = keyof typeof TIER_PRICES;

export interface Lehrgang {
  slug: string;
  title: string;
  subtitle: string;
  target: string;
  emoji: string;
  color: string;
  courseSlugs: string[];
  totalHours: number;
  certificateName: string;
  outcomes: string[];
  targetRoles: string[];
}

export const LEHRGAENGE: Lehrgang[] = [
  {
    slug: 'ki-verwaltung',
    title: 'KI-Intensivprogramm für Verwaltung & Gemeinden',
    subtitle: 'Vom ersten Prompt zur strategischen KI-Roadmap für Ihre Gemeinde.',
    target: 'Für Gemeinderäte, Gemeindeschreiber:innen, Verwaltungsleitende und Bereichsleitende, die KI in ihrer Verwaltung verankern wollen.',
    emoji: '🏛️',
    color: 'linear-gradient(135deg, #0d3d26 0%, #0057a8 100%)',
    courseSlugs: ['ki-einsteiger', 'ki-gemeinden', 'ki-strategie-gemeinden'],
    totalHours: 15,
    certificateName: 'SPEKTRUM Teilnahmebestätigung – KI für Verwaltung & Gemeinden',
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
    title: 'KI-Intensivprogramm für Raumplanung',
    subtitle: 'KI-Werkzeuge für Planungsbüros, Fachstellen und Projekt­verantwortliche.',
    target: 'Für Raumplaner:innen, Architekt:innen mit Planungsfokus und Mitarbeitende in kantonalen Fachstellen.',
    emoji: '🗺️',
    color: 'linear-gradient(135deg, #0057a8 0%, #00a896 100%)',
    courseSlugs: ['ki-einsteiger', 'ki-planungswelt', 'ki-bueroalltag', 'ki-interessenabwaegung'],
    totalHours: 15,
    certificateName: 'SPEKTRUM Teilnahmebestätigung – KI für Raumplanung',
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
    title: 'KI-Intensivprogramm für Planungsbüros',
    subtitle: 'KI im ganzen Büro verankern – vom Sekretariat bis zur Projektleitung.',
    target: 'Für Inhaber:innen und Teams von Raumplanungs-, Architektur- und Ingenieur­büros, die KI büroweit produktiv einsetzen wollen.',
    emoji: '🏢',
    color: 'linear-gradient(135deg, #00a896 0%, #0057a8 100%)',
    courseSlugs: ['ki-einsteiger', 'ki-planungswelt', 'ki-bueroalltag'],
    totalHours: 13,
    certificateName: 'SPEKTRUM Teilnahmebestätigung – KI für Planungsbüros',
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
    title: 'KI-Intensivprogramm KI-Profi',
    subtitle: 'Vom ChatGPT-Anwender zur Person, die KI-Agenten selbst baut.',
    target: 'Für Digitalisierungs­verantwortliche, IT-affine Mitarbeitende und alle, die KI tief verstehen und aktiv einsetzen wollen.',
    emoji: '🤖',
    color: 'linear-gradient(135deg, #5e35b1 0%, #0057a8 100%)',
    courseSlugs: ['ki-einsteiger', 'ki-bueroalltag', 'ki-agentic'],
    totalHours: 11,
    certificateName: 'SPEKTRUM Teilnahmebestätigung – KI-Profi',
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

/** Details eines Lehrgangs inkl. Kursliste und Einzelpreis-Summe */
export function getLehrgangDetails(slug: string) {
  const l = LEHRGAENGE.find(x => x.slug === slug);
  if (!l) return null;
  const courses = l.courseSlugs
    .map(cs => ALL_COURSES.find(c => c.slug === cs))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  const singleTotal = courses.reduce((s, c) => s + c.price, 0);
  return { ...l, courses, singleTotal };
}
