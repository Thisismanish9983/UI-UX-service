import React, { useState } from 'react';
import { ArrowUpRight, Zap, ShieldCheck } from 'lucide-react';
import CaseStudyModal from './CaseStudyModal';

function ProjectMockupVisual({ type, accentColor }) {
  if (type === 'dashboard') {
    return (
      <div className="mockup-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '8px', fontSize: '0.625rem', color: 'var(--text-muted)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-emerald)', display: 'inline-block' }} />
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-body)' }}>LIVE LIQUIDITY TELEMETRY</span>
          </div>
          <span style={{ background: 'rgba(99, 102, 241, 0.15)', color: 'var(--primary-light)', padding: '2px 8px', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
            $40.2M 24h
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '70px', gap: '6px', padding: '6px 0' }}>
          <div style={{ width: '100%', height: '35%', background: 'rgba(99, 102, 241, 0.15)', borderRadius: '4px 4px 0 0' }} />
          <div style={{ width: '100%', height: '60%', background: 'rgba(99, 102, 241, 0.25)', borderRadius: '4px 4px 0 0' }} />
          <div style={{ width: '100%', height: '45%', background: 'rgba(99, 102, 241, 0.18)', borderRadius: '4px 4px 0 0' }} />
          <div style={{ width: '100%', height: '80%', background: 'rgba(99, 102, 241, 0.35)', borderRadius: '4px 4px 0 0' }} />
          <div style={{ width: '100%', height: '65%', background: 'rgba(99, 102, 241, 0.28)', borderRadius: '4px 4px 0 0' }} />
          <div style={{ width: '100%', height: '95%', background: 'var(--primary)', borderRadius: '4px 4px 0 0', boxShadow: '0 0 12px var(--primary-glow)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '4px 6px', borderRadius: '4px', fontSize: '0.5625rem' }}>
            <span style={{ color: 'var(--text-subtle)', display: 'block' }}>SPREAD</span>
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald)', fontWeight: 700 }}>+0.012%</span>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '4px 6px', borderRadius: '4px', fontSize: '0.5625rem' }}>
            <span style={{ color: 'var(--text-subtle)', display: 'block' }}>LATENCY</span>
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--primary-light)', fontWeight: 700 }}>1.4 ms</span>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '4px 6px', borderRadius: '4px', fontSize: '0.5625rem' }}>
            <span style={{ color: 'var(--text-subtle)', display: 'block' }}>RISK INDEX</span>
            <span style={{ fontFamily: 'var(--font-mono)', color: '#FFFFFF', fontWeight: 700 }}>LOW (A+)</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'mobile') {
    return (
      <div className="mockup-container" style={{ alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '190px', background: '#151926', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', padding: '10px', boxShadow: 'var(--shadow-md)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.5rem', color: 'var(--text-subtle)', paddingBottom: '4px' }}>
            <span>9:41</span>
            <div style={{ width: '40px', height: '6px', background: 'rgba(0,0,0,0.6)', borderRadius: '10px' }} />
            <span>5G 100%</span>
          </div>
          <div style={{ background: 'linear-gradient(135deg, rgba(236,72,153,0.2) 0%, rgba(168,85,247,0.2) 100%)', borderRadius: '10px', padding: '10px', margin: '4px 0', border: '1px solid rgba(236,72,153,0.3)' }}>
            <span style={{ fontSize: '0.5625rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--accent-pink)', display: 'block' }}>Artisan Series</span>
            <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#FFFFFF', display: 'block', marginTop: '2px' }}>Obsidian Vessel No. 04</span>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
              <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: '#FFFFFF', fontWeight: 700 }}>$240.00</span>
              <span style={{ fontSize: '0.5rem', background: 'rgba(16,185,129,0.2)', color: 'var(--accent-emerald)', padding: '1px 6px', borderRadius: '4px', fontWeight: 600 }}>In Stock</span>
            </div>
          </div>
          <div style={{ width: '100%', background: '#FFFFFF', color: '#000000', fontSize: '0.5625rem', fontWeight: 700, padding: '5px', borderRadius: '6px', textAlign: 'center' }}>
            Buy with Pay
          </div>
        </div>
      </div>
    );
  }

  if (type === 'saas') {
    return (
      <div className="mockup-container">
        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', padding: '8px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.625rem', color: 'var(--text-body)' }}>
          <Zap style={{ width: '14px', height: '14px', color: 'var(--accent-cyan)', flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-mono)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            Ask PulseAI: "Show churn correlation with onboarding step 3"
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', padding: '10px 0', textAlign: 'center' }}>
          <div style={{ background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.2)', padding: '6px', borderRadius: '6px' }}>
            <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '0.625rem' }}>100%</div>
            <div style={{ fontSize: '0.5rem', color: 'var(--text-subtle)' }}>Sign Up</div>
          </div>
          <div style={{ background: 'rgba(56,189,248,0.12)', border: '1px solid rgba(56,189,248,0.3)', padding: '6px', borderRadius: '6px' }}>
            <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '0.625rem' }}>84%</div>
            <div style={{ fontSize: '0.5rem', color: 'var(--text-subtle)' }}>Workspace</div>
          </div>
          <div style={{ background: 'rgba(56,189,248,0.18)', border: '1px solid rgba(56,189,248,0.4)', padding: '6px', borderRadius: '6px' }}>
            <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '0.625rem' }}>68%</div>
            <div style={{ fontSize: '0.5rem', color: 'var(--text-subtle)' }}>First Flow</div>
          </div>
          <div style={{ background: 'rgba(56,189,248,0.25)', border: '1px solid var(--accent-cyan)', padding: '6px', borderRadius: '6px' }}>
            <div style={{ fontWeight: 700, color: 'var(--accent-cyan)', fontSize: '0.625rem' }}>52%</div>
            <div style={{ fontSize: '0.5rem', color: '#FFFFFF' }}>Retained</div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.5625rem', color: 'var(--text-muted)', paddingTop: '6px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>+18.4% WoW Retention</span>
          <span style={{ fontFamily: 'var(--font-mono)' }}>P = 0.002</span>
        </div>
      </div>
    );
  }

  // Web type
  return (
    <div className="mockup-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '8px', fontSize: '0.625rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-body)' }}>
          <ShieldCheck style={{ width: '14px', height: '14px', color: 'var(--accent-emerald)' }} />
          <span style={{ fontWeight: 600 }}>HIPAA & WCAG 2.1 AA Compliant</span>
        </div>
        <span style={{ background: 'rgba(16,185,129,0.2)', color: 'var(--accent-emerald)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.5625rem', fontWeight: 700 }}>
          AVAILABLE NOW
        </span>
      </div>

      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(16,185,129,0.2)', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.75rem' }}>
            DR
          </div>
          <div>
            <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#FFFFFF' }}>Dr. Sarah Vance, MD</div>
            <div style={{ fontSize: '0.5625rem', color: 'var(--text-subtle)' }}>Cardiology • 4.9 ★ (340)</div>
          </div>
        </div>
        <div style={{ background: 'var(--accent-emerald)', color: '#000000', fontSize: '0.5625rem', fontWeight: 700, padding: '4px 8px', borderRadius: '4px' }}>
          Book & Call
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.5625rem', color: 'var(--text-muted)', paddingTop: '6px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <span>Average Wait: &lt; 90 seconds</span>
        <span style={{ color: 'var(--accent-emerald)' }}>Instant Insurance Verification</span>
      </div>
    </div>
  );
}

export default function ProjectCard({ project, onSelect, buttonLabel = "View Case Study" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    if (onSelect) {
      onSelect(project);
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div className="project-card">
        <div>
          {/* UI Mockup container */}
          <ProjectMockupVisual
            type={project.mockupType || 'dashboard'}
            accentColor={project.accentColor}
          />

          {/* Meta row */}
          <div className="project-meta-row">
            <span
              className="project-cat-badge"
              style={{
                backgroundColor: `${project.accentColor || '#6366F1'}15`,
                color: project.accentColor || 'var(--primary-light)',
                border: `1px solid ${project.accentColor || '#6366F1'}35`,
              }}
            >
              {project.category}
            </span>
            <span className="project-year">
              {project.year || '2025'}
            </span>
          </div>

          {/* Title */}
          <h3 className="project-title">
            {project.title}
          </h3>

          {/* Description */}
          <p className="project-desc">
            {project.description}
          </p>

          {/* Tags */}
          <div className="project-tags">
            {project.tags?.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="project-footer">
          <button
            type="button"
            onClick={handleOpen}
            className="view-study-btn"
          >
            <span>{buttonLabel}</span>
            <ArrowUpRight style={{ width: '16px', height: '16px' }} />
          </button>

          {project.metrics && project.metrics[0] && (
            <span
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                color: 'var(--accent-emerald)',
                background: 'rgba(16, 185, 129, 0.1)',
                padding: '2px 8px',
                borderRadius: '4px'
              }}
            >
              {project.metrics[0].value}
            </span>
          )}
        </div>
      </div>

      <CaseStudyModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
