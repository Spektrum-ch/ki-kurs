// ============================================
// Typen für KI-Kurs Planungswelt
// ============================================

/** Registrierter Nutzer */
export interface User {
  email: string;
  name: string;
  createdAt: string;
  verified: boolean;
  login_token?: string | null;
  login_token_expires?: string | null;
  purchasedCourses?: Record<string, string>; // slug → ISO-Kaufdatum, z.B. { "kurs-buero": "2026-04-18T..." }
  purchasedLehrgaenge?: Record<string, string>; // lehrgang-slug → ISO-Kaufdatum (für Zertifikats-Ausstellung)
}

/** Fortschritt eines Nutzers */
export interface Progress {
  email: string;
  completedLessons: string[]; // z.B. ["modul-1/einfuehrung", "modul-1/grundlagen"]
  quizResults: QuizResult[];
  lastActivity: string;
  certificateIssued?: boolean;
}

/** Ergebnis eines Quiz */
export interface QuizResult {
  lessonId: string;
  score: number;       // 0–100
  completedAt: string;
}

/** Einzelne Lektion */
export interface Lesson {
  id: string;          // z.B. "einfuehrung"
  slug: string;        // URL-slug
  title: string;
  description: string;
  videoId?: string;    // YouTube Video ID
  content: string;     // Markdown/HTML Inhalt
  quiz?: QuizConfig;
  order: number;
}

/** Quiz-Konfiguration */
export interface QuizConfig {
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number;     // Index der richtigen Antwort
  explanation: string;
}

/** Ein Modul mit mehreren Lektionen */
export interface Module {
  id: string;          // z.B. "modul-1"
  slug: string;        // URL-slug
  title: string;
  description: string;
  icon: string;        // Emoji
  order: number;
  lessons: Lesson[];
}

/** Gesamter Kurs */
export interface Course {
  title: string;
  slug: string;
  description: string;
  modules: Module[];
}
