import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';

export default function PrivacyPolicy() {
  const lastUpdated = 'October 2026';

  return (
    <div style={{ padding: '60px 0 100px' }}>
      <div className="container-narrow" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {/* Back Link */}
        <div>
          <Link
            to="/"
            className="btn btn-secondary btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <ArrowLeft style={{ width: '16px', height: '16px' }} />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <header>
          <div className="section-tag" style={{ marginBottom: '14px' }}>
            <ShieldCheck style={{ width: '14px', height: '14px', color: 'var(--primary-light)' }} />
            <span>Legal Disclosures</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.25rem, 4vw, 3rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>
            Privacy Policy
          </h1>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>
            Effective Date & Last Updated: <strong>{lastUpdated}</strong>
          </p>
        </header>

        {/* Summary Card */}
        <div
          style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          <h2 style={{ fontSize: '1.125rem', color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Lock style={{ width: '18px', height: '18px', color: 'var(--primary-light)' }} />
            Our Commitment to Confidentiality & Data Privacy
          </h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.7 }}>
            At <strong>VALENCE Design Studio</strong>, we treat your proprietary designs, product roadmaps, and business communications with the strictest standard of security. We never sell your personal information or client IP to third parties under any circumstances.
          </p>
        </div>

        {/* Policy Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <section>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
              1. Information We Collect
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '12px' }}>
              We collect information that you directly provide when inquiring about design partnerships, booking strategy consultations, or communicating with our project management team:
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px', color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
              <li><strong>Contact Information:</strong> Full name, professional email address, company name, and website URL.</li>
              <li><strong>Project Briefing Details:</strong> Target design scope, product category, budget ranges, and estimated launch deadlines.</li>
              <li><strong>Usage Analytics:</strong> Anonymized telemetry regarding browser type, device resolution, and aggregated navigation patterns to improve website responsiveness.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
              2. How We Use Collected Data
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '12px' }}>
              Any information collected is strictly utilized to deliver and elevate our design agency engagements:
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px', color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
              <li>Evaluating project scope and preparing tailored design proposals and statements of work.</li>
              <li>Executing non-disclosure agreements (NDAs) and establishing verified communication channels.</li>
              <li>Responding to design consultation requests within our standard 24-hour business window.</li>
              <li>Conducting user research sessions and usability studies (only with explicit signed participant consent).</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
              3. Protection of Client Intellectual Property & NDAs
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
              We routinely work with confidential pre-launch startups and enterprise skunkworks initiatives. Prior to receiving wireframes, product specs, or Figma access, we execute bilateral mutual Non-Disclosure Agreements (NDAs). Design drafts and client assets are stored in isolated encrypted cloud repositories with strict role-based access control.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
              4. Cookies and Tracking Technologies
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
              This website uses only essential session state and lightweight performance analytics to verify device screen breakpoints and smooth navigation. We do not deploy invasive third-party ad retargeting trackers or sell browsing profiles.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
              5. Data Retention & Your Rights
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '12px' }}>
              Under GDPR, CCPA, and international data protection laws, you retain complete rights regarding your data:
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px', color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
              <li>Request full disclosure of any contact information retained in our records.</li>
              <li>Request immediate and permanent deletion of contact logs upon completion of design services.</li>
              <li>Revoke permission to display non-public case studies or project artifacts.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
              6. Contact Our Privacy Officer
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
              For any questions regarding this Privacy Policy, NDA execution, or data rights requests, please email us directly at{' '}
              <a href="mailto:privacy@valencedesign.studio" style={{ color: 'var(--primary-light)', textDecoration: 'underline' }}>
                privacy@valencedesign.studio
              </a>{' '}
              or reach our studio via our{' '}
              <Link to="/contact" style={{ color: 'var(--primary-light)', textDecoration: 'underline' }}>
                Contact Page
              </Link>.
            </p>
          </section>
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: '20px',
            padding: '28px',
            background: 'var(--bg-surface-raised)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.125rem', color: '#FFFFFF', marginBottom: '4px' }}>Ready to launch your next product?</h3>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>We are ready to sign an NDA and review your product brief.</p>
          </div>
          <Button to="/contact" variant="primary" size="md">
            Start Discussion
          </Button>
        </div>
      </div>
    </div>
  );
}
