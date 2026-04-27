import { enforceLessonAccess } from '@/lib/lessonAccess';
import { COURSE_STRATEGIE } from '@/data/course-strategie';

export default function LektionStrategieLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { modul: string; lektion: string };
}) {
  enforceLessonAccess(COURSE_STRATEGIE, 'kurs-strategie', '/kurs-strategie', params);
  return <>{children}</>;
}
