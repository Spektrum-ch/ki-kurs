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
export const COURSE_PRICES: Record<string, string> = {
  'kurs':               'price_1TNIMs2XRWfK9gZ6UrFU80JC', // KI für die Planungswelt
  'kurs-allgemein':     'price_1TNIHJ2XRWfK9gZ6qP7K7AjA', // KI-Grundkurs Einsteiger
  'kurs-buero':         'price_1TNIkY2XRWfK9gZ6E9z9LQP8', // KI im Büroalltag
  'kurs-gemeinden':     'price_1TNIMs2XRWfK9gZ6PFagOcmD', // KI für Gemeinden
  'kurs-agentic':       'price_1TNIMs2XRWfK9gZ6Pyg4yDHE', // Die Agentic Company
  'kurs-strategie':     'price_1TNImJ2XRWfK9gZ6ol8SQsPs', // KI-Strategie für Gemeinden
  // kurs-interessenabwaegung ist gratis – kein Eintrag nötig
};

// Gratis-Kurse brauchen keine Kaufprüfung
export const FREE_COURSES = ['kurs-interessenabwaegung'];

export function isFree(courseSlug: string): boolean {
  return FREE_COURSES.includes(courseSlug);
}
