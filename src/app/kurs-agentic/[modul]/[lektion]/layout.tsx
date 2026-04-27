import { enforceLessonAccess } from '@/lib/lessonAccess';
import { COURSE_AGENTIC } from '@/data/course-agentic';

export default function LektionAgenticLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { modul: string; lektion: string };
}) {
  enforceLessonAccess(COURSE_AGENTIC, 'kurs-agentic', '/kurs-agentic', params);
  return <>{children}</>;
}
