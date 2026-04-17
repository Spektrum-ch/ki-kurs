import type { Course } from '@/types';

// Hilfsdatenstruktur für flache Lektion-Navigation
interface FlatLesson {
  moduleSlug: string;
  slug: string;
  id: string;
  title: string;
}

// Alle Lektionen eines Kurses in eine flache Liste umwandeln (Navigationsreihenfolge)
function getAllLessonsFlat(course: Course): FlatLesson[] {
  return course.modules.flatMap(m =>
    m.lessons.map(l => ({ moduleSlug: m.slug, slug: l.slug, id: l.id, title: l.title }))
  );
}

// Lektion und Modul anhand von Slugs in einem Kurs finden
export function findLessonInCourse(course: Course, moduleSlug: string, lessonSlug: string) {
  const module = course.modules.find(m => m.slug === moduleSlug);
  if (!module) return null;
  const lesson = module.lessons.find(l => l.slug === lessonSlug);
  if (!lesson) return null;
  return { module, lesson };
}

// Nächste Lektion in der Reihenfolge finden (kursübergreifend, nach Modulreihenfolge)
export function findNextLessonInCourse(course: Course, moduleSlug: string, lessonSlug: string) {
  const all = getAllLessonsFlat(course);
  const idx = all.findIndex(l => l.moduleSlug === moduleSlug && l.slug === lessonSlug);
  if (idx === -1 || idx >= all.length - 1) return null;
  return all[idx + 1];
}

// Vorherige Lektion in der Reihenfolge finden
export function findPrevLessonInCourse(course: Course, moduleSlug: string, lessonSlug: string) {
  const all = getAllLessonsFlat(course);
  const idx = all.findIndex(l => l.moduleSlug === moduleSlug && l.slug === lessonSlug);
  if (idx <= 0) return null;
  return all[idx - 1];
}
