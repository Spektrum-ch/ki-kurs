import { enforceLessonAccess } from '@/lib/lessonAccess';
import { COURSE_ALLGEMEIN } from '@/data/course-allgemein';

export default function LektionAllgemeinLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { modul: string; lektion: string };
}) {
  enforceLessonAccess(COURSE_ALLGEMEIN, 'kurs-allgemein', '/kurs-allgemein', params);
  return <>{children}</>;
}
