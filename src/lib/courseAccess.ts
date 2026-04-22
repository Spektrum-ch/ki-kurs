import type { User } from '@/types';

export const COURSE_ACCESS_DAYS = 90;
export const FREE_COURSES = ['kurs-interessenabwaegung'];

/** Prüft ob ein Kurs zugänglich ist (gratis oder innerhalb 90 Tage) */
export function hasCourseAccess(user: User | null | undefined, slug: string): boolean {
  if (FREE_COURSES.includes(slug)) return true;
  if (!user?.purchasedCourses) return false;
  const purchasedAt = (user.purchasedCourses as Record<string, string>)[slug];
  if (!purchasedAt) return false;
  return new Date() < getCourseExpiryDate(purchasedAt);
}

/** Gibt das Ablaufdatum zurück (null wenn nicht gekauft) */
export function getCourseExpiry(user: User | null | undefined, slug: string): Date | null {
  if (!user?.purchasedCourses) return null;
  const purchasedAt = (user.purchasedCourses as Record<string, string>)[slug];
  if (!purchasedAt) return null;
  return getCourseExpiryDate(purchasedAt);
}

/** Berechnet Ablaufdatum aus Kaufdatum */
function getCourseExpiryDate(purchasedAt: string): Date {
  const expiry = new Date(purchasedAt);
  expiry.setDate(expiry.getDate() + COURSE_ACCESS_DAYS);
  return expiry;
}

/** Formatiert Ablaufdatum auf Deutsch */
export function formatExpiry(date: Date): string {
  return date.toLocaleDateString('de-CH', { day: '2-digit', month: 'long', year: 'numeric' });
}

/** Restliche Tage bis Ablauf */
export function daysRemaining(date: Date): number {
  return Math.max(0, Math.ceil((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24)));
}
