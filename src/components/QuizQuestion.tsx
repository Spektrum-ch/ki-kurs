'use client';

import React, { useState } from 'react';
import type { QuizQuestion as QuizQuestionType } from '@/types';

interface Props {
  question: QuizQuestionType;
  onAnswer?: (correct: boolean) => void;
}

export default function QuizQuestion({ question, onAnswer }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;

  function handleSelect(idx: number) {
    if (answered) return;
    setSelected(idx);
    onAnswer?.(idx === question.correct);
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .quiz-wrap {
          background: #f0f7ff;
          border-radius: 16px;
          padding: 28px;
          margin: 32px 0;
        }
        .quiz-label {
          font-size: 12px;
          font-weight: 700;
          color: #0057a8;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 12px;
        }
        .quiz-question {
          font-size: 17px;
          font-weight: 600;
          color: #1d1d1f;
          margin-bottom: 20px;
          line-height: 1.4;
        }
        .quiz-options {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .quiz-option {
          padding: 14px 18px;
          border-radius: 10px;
          border: 1.5px solid #d2d2d7;
          background: white;
          font-size: 15px;
          color: #1d1d1f;
          cursor: pointer;
          text-align: left;
          transition: all 0.15s;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .quiz-option:hover:not(:disabled) {
          border-color: #0057a8;
          background: #f0f7ff;
        }
        .quiz-option.correct {
          border-color: #00a896;
          background: #f0fff8;
          color: #006b5f;
        }
        .quiz-option.wrong {
          border-color: #d03030;
          background: #fff0f0;
          color: #8b0000;
        }
        .quiz-option.neutral-answered {
          opacity: 0.5;
          cursor: default;
        }
        .quiz-icon {
          font-size: 18px;
          min-width: 22px;
        }
        .quiz-explanation {
          margin-top: 16px;
          padding: 14px 18px;
          border-radius: 10px;
          font-size: 14px;
          line-height: 1.5;
        }
        .quiz-explanation.correct {
          background: #e8fff5;
          color: #006b5f;
          border: 1px solid #00a89630;
        }
        .quiz-explanation.wrong {
          background: #fff0f0;
          color: #8b0000;
          border: 1px solid #d0303030;
        }
      `}} />
      <div className="quiz-wrap">
        <div className="quiz-label">✏️ Wissensfrage</div>
        <div className="quiz-question">{question.question}</div>
        <div className="quiz-options">
          {question.options.map((opt, idx) => {
            let cls = 'quiz-option';
            let icon = '○';
            if (answered) {
              if (idx === question.correct) { cls += ' correct'; icon = '✓'; }
              else if (idx === selected) { cls += ' wrong'; icon = '✗'; }
              else { cls += ' neutral-answered'; }
            }
            return (
              <button key={idx} className={cls} onClick={() => handleSelect(idx)} disabled={answered}>
                <span className="quiz-icon">{icon}</span>
                {opt}
              </button>
            );
          })}
        </div>
        {answered && (
          <div className={`quiz-explanation ${selected === question.correct ? 'correct' : 'wrong'}`}>
            {selected === question.correct ? '✅ ' : '❌ '}{question.explanation}
          </div>
        )}
      </div>
    </>
  );
}
