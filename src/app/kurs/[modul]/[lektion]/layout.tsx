import { enforceLessonAccess } from '@/lib/lessonAccess';
import { COURSE } from '@/data/course';

export default function LektionKursLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { modul: string; lektion: string };
}) {
  enforceLessonAccess(COURSE, 'kurs', '/kurs', params);
  return <>{children}</>;
}
