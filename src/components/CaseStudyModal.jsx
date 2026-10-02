import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Layers, Calendar } from 'lucide-react';
import Button from './Button';

export default function CaseStudyModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="modal-close-btn"
          aria-label="Close modal"
        >
          <X style={{ width: '20px', height: '20px' }} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '12px' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: `${project.accentColor || '#6366F1'}20`,
                color: project.accentColor || 'var(--primary-light)',
                border: `1px solid ${project.accentColor || '#6366F1'}40`
              }}
            >
              {project.category}
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar style={{ width: '14px', height: '14px' }} />
              {project.timeline} Duration
            </span>
          </div>

          <h2 id="modal-headline" style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '8px', color: '#FFFFFF' }}>
            {project.title}
          </h2>

          <p style={{ fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
            {project.tagline}
          </p>
        </div>

        {/* Key Metrics Banner */}
        {project.metrics && (
          <div
            className="modal-grid-3"
            style={{
              padding: '16px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              marginBottom: '28px',
              textAlign: 'center'
            }}
          >
            {project.metrics.map((metric, i) => (
              <div key={i}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: project.accentColor || 'var(--primary-light)' }}>
                  {metric.value}
                </div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Challenge & Solution */}
        <div className="modal-grid-2" style={{ marginBottom: '28px' }}>
          <div style={{ padding: '16px', background: 'var(--bg-surface-raised)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700, color: '#FDA4AF', marginBottom: '8px' }}>
              The Challenge
            </h4>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
              {project.challenge}
            </p>
          </div>
          <div style={{ padding: '16px', background: 'var(--bg-surface-raised)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700, color: '#6EE7B7', marginBottom: '8px' }}>
              The Solution
            </h4>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
              {project.solution}
            </p>
          </div>
        </div>

        {/* Deliverables List */}
        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Layers style={{ width: '16px', height: '16px', color: 'var(--primary-light)' }} />
            Key Deliverables Provided
          </h4>
          <div className="modal-grid-2" style={{ gap: '10px' }}>
            {project.deliverables?.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.75rem', color: 'var(--text-body)' }}>
                <CheckCircle2 style={{ width: '14px', height: '14px', color: 'var(--primary-light)', flexShrink: 0, marginTop: '2px' }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            Want similar results for your business?
          </span>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              type="button"
              onClick={onClose}
              className="btn btn-secondary btn-sm"
            >
              Close
            </button>
            <Button
              to="/contact"
              variant="primary"
              size="sm"
              icon={true}
              onClick={onClose}
            >
              Start Similar Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
