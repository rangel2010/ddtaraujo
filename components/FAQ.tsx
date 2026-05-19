'use client';

import { useState } from 'react';

type FAQItem = { question: string; answer: string };

export default function FAQ({ items, title = 'Perguntas Frequentes' }: { items: FAQItem[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section">
      <div className="container max-w-4xl">
        <div className="text-center">
          <div className="eyebrow">FAQ</div>
          <h2 className="section-title mt-2">{title}</h2>
        </div>
        <div className="mt-12 space-y-3">
          {items.map((item, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-ink-200 bg-white dark:border-ink-700 dark:bg-ink-700">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-ink-50 dark:hover:bg-ink-600/50"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-ink-900 dark:text-white">{item.question}</span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-brand-600 transition-transform ${open === i ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="border-t border-ink-100 px-6 py-5 text-ink-700 dark:border-ink-600 dark:text-ink-300">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
