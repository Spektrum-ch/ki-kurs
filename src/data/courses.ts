import { COURSE } from './course';
import { COURSE_ALLGEMEIN } from './course-allgemein';
import { COURSE_GEMEINDEN } from './course-gemeinden';
import { COURSE_BUERO } from './course-buero';
import { COURSE_AGENTIC } from './course-agentic';
import { COURSE_STRATEGIE } from './course-strategie';
import { COURSE_INTERESSENABWAEGUNG } from './course-interessenabwaegung';
import type { Course } from '@/types';

export interface CourseCard {
  course: Course;
  slug: string;
  emoji: string;
  level: 'Einsteiger' | 'Fortgeschritten' | 'Experte';
  tag: string;
  href: string;
  color: string;
  price: number;        // CHF
  priceLabel: string;   // z.B. "CHF 29"
}

export const ALL_COURSES: CourseCard[] = [
  {
    course: COURSE,
    slug: 'ki-planungswelt',
    emoji: '🗺️',
    level: 'Einsteiger',
    tag: 'Raumplanung',
    href: '/kurs',
    color: 'linear-gradient(135deg, #0057a8 0%, #00a896 100%)',
    price: 19,
    priceLabel: 'CHF 19',
  },
  {
    course: COURSE_ALLGEMEIN,
    slug: 'ki-einsteiger',
    emoji: '🤖',
    level: 'Einsteiger',
    tag: 'Allgemein',
    href: '/kurs-allgemein',
    color: 'linear-gradient(135deg, #5e35b1 0%, #0057a8 100%)',
    price: 19,
    priceLabel: 'CHF 19',
  },
  {
    course: COURSE_GEMEINDEN,
    slug: 'ki-gemeinden',
    emoji: '🏛️',
    level: 'Fortgeschritten',
    tag: 'Gemeinden',
    href: '/kurs-gemeinden',
    color: 'linear-gradient(135deg, #1a6b3c 0%, #0057a8 100%)',
    price: 29,
    priceLabel: 'CHF 29',
  },
  {
    course: COURSE_BUERO,
    slug: 'ki-bueroalltag',
    emoji: '💼',
    level: 'Einsteiger',
    tag: 'Büroalltag',
    href: '/kurs-buero',
    color: 'linear-gradient(135deg, #e65c00 0%, #f9d423 100%)',
    price: 19,
    priceLabel: 'CHF 19',
  },
  {
    course: COURSE_AGENTIC,
    slug: 'ki-agentic',
    emoji: '🤖',
    level: 'Experte',
    tag: 'Agenten',
    href: '/kurs-agentic',
    color: 'linear-gradient(135deg, #5e35b1 0%, #0057a8 100%)',
    price: 39,
    priceLabel: 'CHF 39',
  },
  {
    course: COURSE_STRATEGIE,
    slug: 'ki-strategie-gemeinden',
    emoji: '🏛️',
    level: 'Experte',
    tag: 'Strategie',
    href: '/kurs-strategie',
    color: 'linear-gradient(135deg, #1a6b3c 0%, #0057a8 100%)',
    price: 39,
    priceLabel: 'CHF 39',
  },
  {
    course: COURSE_INTERESSENABWAEGUNG,
    slug: 'ki-interessenabwaegung',
    emoji: '⚖️',
    level: 'Fortgeschritten',
    tag: 'Interessenabwägung',
    href: '/kurs-interessenabwaegung',
    color: 'linear-gradient(135deg, #e65c00 0%, #f9d423 100%)',
    price: 0,
    priceLabel: 'Gratis',
  },
];
