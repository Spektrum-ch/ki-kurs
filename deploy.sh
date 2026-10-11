#!/bin/bash
# Deploy-Script: Dateien mit vollem Pfad sichern, nie flach in /tmp
set -e

echo "🔄 Syncing src/..."
rsync -avzcI \
  --exclude='.git' --exclude='node_modules' --exclude='.next' \
  --exclude='.env.local' --exclude='data/' --exclude='.DS_Store' \
  --exclude='tsconfig.tsbuildinfo' \
  ./src/ root@spekt.ch:/var/www/ki-kurs/src/

echo "🔄 Syncing public/..."
rsync -avzcI \
  --exclude='.DS_Store' \
  ./public/ root@spekt.ch:/var/www/ki-kurs/public/

echo "🔄 Syncing next.config.js..."
# Rewrites/Redirects leben in next.config.js – ohne diesen Sync fehlte auf dem Server z.B. /fakten (404)
rsync -avzcI ./next.config.js root@spekt.ch:/var/www/ki-kurs/next.config.js

echo "⚙️  Build + Restart..."
ssh root@spekt.ch "
  chown -R www-data:www-data /var/www/ki-kurs/src /var/www/ki-kurs/public /var/www/ki-kurs/next.config.js &&
  cd /var/www/ki-kurs &&
  sudo -u www-data npm run build &&
  systemctl restart ki-kurs &&
  systemctl is-active ki-kurs
"
echo "✅ Deploy abgeschlossen."
