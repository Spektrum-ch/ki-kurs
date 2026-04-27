import Stripe from 'stripe';

let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2025-02-24.acacia' as any,
    });
  }
  return _stripe;
}

// Kurs-Slug → Stripe Price ID
// Aktuell öffentlich kaufbar: nur kurs-allgemein (Einstiegskurs CHF 89).
// Andere Kurse bleiben technisch erreichbar, sind aber nicht mehr im Shop gelistet und
// nur als Teil eines Zertifikatslehrgangs zugänglich (siehe /zertifikatslehrgang).
export const COURSE_PRICES: Record<string, string> = {
  'kurs-allgemein':     process.env.STRIPE_COURSE_ALLGEMEIN_PRICE_ID || 'price_1TPTV02XRWfK9gZ6R0tXZh3T', // KI-Grundkurs Einsteiger CHF 89
  // Legacy – deaktiviert (nicht mehr im Shop):
  // 'kurs':               'price_1TNIMs2XRWfK9gZ6UrFU80JC',
  // 'kurs-buero':         'price_1TNIkY2XRWfK9gZ6E9z9LQP8',
  // 'kurs-gemeinden':     'price_1TNIMs2XRWfK9gZ6PFagOcmD',
  // 'kurs-agentic':       'price_1TNIMs2XRWfK9gZ6Pyg4yDHE',
  // 'kurs-strategie':     'price_1TNImJ2XRWfK9gZ6ol8SQsPs',
  // kurs-interessenabwaegung ist gratis – kein Eintrag nötig
};

// Gratis-Kurse brauchen keine Kaufprüfung
export const FREE_COURSES = ['kurs-interessenabwaegung'];

export function isFree(courseSlug: string): boolean {
  return FREE_COURSES.includes(courseSlug);
}

// Tier-basiertes Pricing für Zertifikatslehrgänge:
// Einheits-Preise über alle 4 Lehrgänge → nur 2 Stripe-Prices nötig.
// Business-Tier (CHF 2'900) läuft über Anfrage-Formular (manuelle Stripe-Invoice).
export const TIER_PRICE_IDS: Record<'basis' | 'plus', string> = {
  basis: process.env.STRIPE_TIER_BASIS_PRICE_ID || 'price_TODO_BASIS_290',
  plus:  process.env.STRIPE_TIER_PLUS_PRICE_ID  || 'price_TODO_PLUS_790',
};
