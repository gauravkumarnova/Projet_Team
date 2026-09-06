'use client';

import { useId, useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: FAQItem[];
  className?: string;
}

export function FAQ({
  eyebrow,
  title = 'Frequently asked questions',
  description,
  items,
  className = '',
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const idPrefix = useId();

  return (
    <section aria-labelledby={`${idPrefix}-title`} className={className}>
      <div className="mb-10">
        {eyebrow && (
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-brand-primary">{eyebrow}</p>
        )}
        <h2 id={`${idPrefix}-title`} className="h2 mb-4 heading-break">
          {title}
        </h2>
        {description && <p className="body-large max-w-3xl text-text-secondary">{description}</p>}
      </div>

      <div className="divide-y divide-border-default border-y border-border-default">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          const answerId = `${idPrefix}-answer-${index}`;

          return (
            <div key={item.question}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                className="flex w-full items-center justify-between gap-6 py-5 text-left text-base font-semibold text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-state-focus focus-visible:ring-inset"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span aria-hidden="true" className="text-2xl font-normal leading-none text-brand-primary">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {isOpen && (
                <div id={answerId} className="pb-5 pr-12 text-text-secondary">
                  <p className="body">{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
