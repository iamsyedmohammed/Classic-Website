'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQAccordionProps {
  question: string;
  answer: string;
}

export default function FAQAccordion({ question, answer }: FAQAccordionProps) {
  return (
    <details className="group border-b border-royal-gold/15 py-4 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-ivory outline-none focus:text-royal-gold">
        <h3 className="font-playfair text-md font-bold tracking-wide transition-colors duration-300 group-hover:text-royal-gold">
          {question}
        </h3>

        <div className="shrink-0 rounded-full p-1 bg-royal-gold/10 text-royal-gold group-open:rotate-180 transition-transform duration-300">
          <ChevronDown size={18} />
        </div>
      </summary>

      <div className="mt-3 font-plus-jakarta text-sm leading-relaxed text-ivory/70 px-1 select-text">
        {answer}
      </div>
    </details>
  );
}
