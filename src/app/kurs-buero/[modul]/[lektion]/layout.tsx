import { enforceLessonAccess } from '@/lib/lessonAccess';
import { COURSE_BUERO } from '@/data/course-buero';

export default function LektionBueroLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { modul: string; lektion: string };
}) {
  enforceLessonAccess(COURSE_BUERO, 'kurs-buero', '/kurs-buero', params);
  return <>{children}</>;
}
