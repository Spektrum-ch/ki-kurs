'use client';

import Link from 'next/link';

interface Props {
  courseSlug?: string;
}

export default function ZertifikatActions({ courseSlug = 'kurs' }: Props) {
  function handlePrint() {
    window.print();
  }

  return (
    <div className="zert-actions">
      <button
        className="zert-btn zert-btn-primary"
        onClick={handlePrint}
      >
        🖨️ Drucken / PDF speichern
      </button>
      <Link href={`/${courseSlug}`} className="zert-btn zert-btn-secondary">
        ← Zurück zum Kurs
      </Link>
    </div>
  );
}
