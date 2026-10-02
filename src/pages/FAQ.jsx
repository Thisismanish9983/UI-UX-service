import React, { useState } from 'react';
import { Search, HelpCircle, MessageSquare } from 'lucide-react';
import FAQItem from '../components/FAQItem';
import Button from '../components/Button';
import { faqData } from '../data/faq';

export default function FAQ() {
  const [openId, setOpenId] = useState(faqData[0]?.id || null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqData.filter((item) =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div style={{ padding: '60px 0 100px' }}>
      <div className="container-narrow" style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
        {/* Hero Header */}
        <section className="section-header text-center" style={{ marginBottom: 0 }}>
          <div className="section-tag">
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-light)', display: 'inline-block' }} />
            <span>Frequently Asked Questions</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '20px' }}>
            Everything You Need to Know About Partnering With Us.
          </h1>

          <p>
            Clear answers about our design sprints, deliverables, handoff processes, and pricing models.
          </p>

          {/* Search Input Bar */}
          <div style={{ position: 'relative', maxWidth: '440px', margin: '24px auto 0' }}>
            <div style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-subtle)', pointerEvents: 'none' }}>
              <Search style={{ width: '16px', height: '16px' }} />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. process, tools, timeline)..."
              className="form-input"
              style={{ paddingLeft: '44px', paddingRight: searchQuery ? '60px' : '16px', borderRadius: 'var(--radius-lg)' }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', fontSize: '0.75rem', color: 'var(--text-muted)' }}
              >
                Clear
              </button>
            )}
          </div>
        </section>

        {/* Accordion List */}
        <div>
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                index={index}
                isOpen={openId === faq.id}
                onToggle={() => handleToggle(faq.id)}
              />
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '56px 20px', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)' }}>
              <HelpCircle style={{ width: '40px', height: '40px', color: 'var(--text-subtle)', margin: '0 auto 12px' }} />
              <h3 style={{ fontSize: '1.125rem', marginBottom: '8px' }}>No matching answers found</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', marginBottom: '16px' }}>Try typing a different keyword or reach out directly.</p>
              <Button onClick={() => setSearchQuery('')} variant="secondary" size="sm">
                Reset Search
              </Button>
            </div>
          )}
        </div>

        {/* Still Have Questions Box */}
        <section style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: '40px 32px', textAlign: 'center' }}>
          <div className="service-icon-box" style={{ margin: '0 auto 16px' }}>
            <MessageSquare style={{ width: '22px', height: '22px' }} />
          </div>

          <h2 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
            Still have a question not covered here?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', maxWidth: '440px', margin: '0 auto 24px', lineHeight: 1.6 }}>
            We're always happy to discuss specific technical edge-cases or bespoke agency retainer setups.
          </p>

          <Button to="/contact" variant="primary" size="md" icon={true}>
            Ask Our Design Team
          </Button>
        </section>
      </div>
    </div>
  );
}
