#!/bin/bash
cd "$(dirname "$0")"

echo ""
echo "  ╔══════════════════════════════════════╗"
echo "  ║   🎓  KI-KURS PLANUNGSWELT           ║"
echo "  ║       Lokaler Entwicklungsserver     ║"
echo "  ╚══════════════════════════════════════╝"
echo ""

# --- Cleanup bei Ctrl+C ---
cleanup() {
  echo ""
  echo "⏹  Beende KI-Kurs Server..."
  exit 0
}
trap cleanup INT TERM

# --- 1. Node.js prüfen ---
if ! command -v node &> /dev/null; then
  echo "❌ Node.js nicht gefunden."
  echo "   Installiere Node.js: https://nodejs.org/"
  echo ""
  read -p "Drücke Enter zum Beenden..."
  exit 1
fi
echo "✅ Node.js $(node -v)"

# --- 2. .env.local prüfen ---
if [ ! -f ".env.local" ]; then
  echo ""
  echo "⚠️  Keine .env.local gefunden."
  echo "   Erstelle sie aus der Vorlage..."
  cp .env.example .env.local
  echo "✅ .env.local erstellt – bitte SMTP-Daten eintragen!"
  echo ""
fi

# --- 3. npm dependencies ---
if [ ! -d "node_modules" ]; then
  echo ""
  echo "📦 Installiere npm-Abhängigkeiten (einmalig)..."
  npm install
  echo ""
fi

# --- 4. Data-Ordner anlegen ---
if [ ! -d "data" ]; then
  mkdir -p data
  echo "✅ /data Ordner erstellt"
fi

# --- 5. Port freigeben falls belegt ---
if lsof -ti:3004 > /dev/null 2>&1; then
  echo "⚠️  Port 3004 belegt – beende alten Prozess..."
  lsof -ti:3004 | xargs kill -9 2>/dev/null
  sleep 1
  echo "✅ Port 3004 freigegeben"
fi

# --- 6. Browser öffnen ---
echo ""
echo "🌐 Öffne Browser in 5 Sekunden auf http://localhost:3004 ..."
(sleep 5 && open "http://localhost:3004") &

# --- 7. Next.js starten ---
echo "🚀 Starte KI-Kurs Server (Port 3004)..."
echo ""
echo "   → http://localhost:3004        Landing Page"
echo "   → http://localhost:3004/kurs   Kursübersicht"
echo "   → http://localhost:3004/admin  Admin Dashboard"
echo ""
echo "   Beenden mit Ctrl+C"
echo ""

npm run dev

cleanup
