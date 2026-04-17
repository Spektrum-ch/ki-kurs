'use client';

interface Props {
  percent: number;
  label?: string;
  showPercent?: boolean;
}

export default function ProgressBar({ percent, label, showPercent = true }: Props) {
  const pct = Math.min(100, Math.max(0, percent));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .pb-wrap { width: 100%; }
        .pb-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        .pb-label { font-size: 13px; color: #6e6e73; }
        .pb-pct { font-size: 13px; font-weight: 600; color: #0057a8; }
        .pb-track {
          width: 100%;
          height: 8px;
          background: #e8e8ed;
          border-radius: 100px;
          overflow: hidden;
        }
        .pb-fill {
          height: 100%;
          border-radius: 100px;
          background: linear-gradient(90deg, #0057a8 0%, #00a896 100%);
          transition: width 0.5s ease;
        }
      `}} />
      <div className="pb-wrap">
        {(label || showPercent) && (
          <div className="pb-top">
            {label && <span className="pb-label">{label}</span>}
            {showPercent && <span className="pb-pct">{pct}%</span>}
          </div>
        )}
        <div className="pb-track">
          <div className="pb-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>
    </>
  );
}
