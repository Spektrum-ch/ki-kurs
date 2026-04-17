# CLAUDE.md – KI-Kurs Planungswelt

> Dieses File am Anfang jedes Gesprächs zeigen.

## Projekt
- **Name:** KI für die Planungswelt
- **URL:** kurs.spekt.ch
- **Zweck:** Kostenloser Lead-Magnet-Kurs für Raumplaner, Architekten, Gemeinden
- **Inhaber:** Andreas Rupf, SPEKTRUM Partner GmbH

## Tech-Stack
- Next.js 14.2.3, TypeScript, App Router
- **Kein Tailwind** – Custom CSS via `<style dangerouslySetInnerHTML>`
- **Keine Datenbank** – JSON-Dateien in `/data/`
- **Kein NextAuth** – Custom JWT (30d) + Magic-Link Auth
- Port: 3003 (`npm run dev`)
- Inter Font

## Ordnerstruktur
- `src/app/` – Seiten + API Routes
- `src/components/` – Header, Footer, QuizQuestion, VideoPlayer, ProgressBar
- `src/lib/` – auth.ts, users.ts, progress.ts, email.ts
- `src/data/course.ts` – ALLE Kursinhalte (Module, Lektionen, Quizze)
- `src/types/index.ts` – TypeScript Typen
- `data/` – users.json, progress.json (runtime, nicht im Git)

## Wichtige Patterns
- Auth-Cookie: `kurs-auth` (httpOnly JWT, 60 Tage)
- Geschützte Routen: `/kurs`, `/zertifikat`, `/admin` (via middleware.ts)
- Videos: YouTube Unlisted (videoId im Lesson-Objekt)
- Kursinhalte ändern: nur in `src/data/course.ts`

## Farben (CSS Variablen)
- `--blau: #0057a8`
- `--tuerkis: #00a896`
- `--gradient: linear-gradient(135deg, #0057a8 0%, #00a896 100%)`

## Neue Inhalte hinzufügen
1. `src/data/course.ts` öffnen
2. Neue Lektion in bestehendem Modul oder neues Modul anlegen
3. `videoId` mit YouTube-Video-ID befüllen (wenn vorhanden)
4. Quiz-Fragen hinzufügen (optional)
