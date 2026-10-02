import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQItem({ faq, isOpen, onToggle, index }) {
  const contentId = `faq-content-${faq.id || index}`;
  const headerId = `faq-header-${faq.id || index}`;

  return (
    <div className="faq-item">
      <h3>
        <button
          type="button"
          id={headerId}
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={onToggle}
          className="faq-trigger"
        >
          <span>{faq.question}</span>
          <div className={`faq-chevron ${isOpen ? 'open' : ''}`}>
            <ChevronDown style={{ width: '16px', height: '16px' }} />
          </div>
        </button>
      </h3>

      {isOpen && (
        <div
          id={contentId}
          role="region"
          aria-labelledby={headerId}
          className="faq-answer"
        >
          {faq.answer}
        </div>
      )}
    </div>
  );
}
