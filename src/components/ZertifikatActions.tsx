'use client';

import Link from 'next/link';

export default function ZertifikatActions() {
  return (
    <div className="zert-actions">
      <button
        className="zert-btn zert-btn-primary"
        onClick={() => window.print()}
      >
        🖨️ Drucken / PDF speichern
      </button>
      <Link
        href="https://www.linkedin.com/sharing/share-offsite/"
        target="_blank"
        className="zert-btn zert-btn-secondary"
      >
        LinkedIn teilen
      </Link>
      <Link href="/kurs" className="zert-btn zert-btn-secondary">
        ← Zurück zum Kurs
      </Link>
    </div>
  );
}
