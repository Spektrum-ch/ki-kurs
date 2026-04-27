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

echo "⚙️  Build + Restart..."
ssh root@spekt.ch "
  chown -R www-data:www-data /var/www/ki-kurs/src /var/www/ki-kurs/public &&
  cd /var/www/ki-kurs &&
  sudo -u www-data npm run build &&
  systemctl restart ki-kurs &&
  systemctl is-active ki-kurs
"
echo "✅ Deploy abgeschlossen."
