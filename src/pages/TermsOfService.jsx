import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, CheckCircle2, AlertCircle, Sparkles, Scale } from 'lucide-react';
import Button from '../components/Button';

export default function TermsOfService() {
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
            <Scale style={{ width: '14px', height: '14px', color: 'var(--primary-light)' }} />
            <span>Client Agreement</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.25rem, 4vw, 3rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>
            Terms of Service
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
            <FileText style={{ width: '18px', height: '18px', color: 'var(--primary-light)' }} />
            Client Partnership & Deliverable Terms
          </h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.7 }}>
            These terms define the working relationship between <strong>VALENCE Design Studio</strong> and our clients. By engaging our design services, commissioning project deliverables, or signing a Statement of Work (SOW), you agree to these transparent commercial terms.
          </p>
        </div>

        {/* Terms Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <section>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
              1. Scope of Design Services & SOW
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
              Every client engagement is governed by a mutually executed Statement of Work (SOW) specifying deliverables, sprint milestones, timeline estimates, and review cycles. Any modifications or expanded requirements requested outside the initial SOW are scoped as change requests with explicit timeline and fee adjustments.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
              2. Intellectual Property & Asset Ownership
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '12px' }}>
              We believe clients should own what they pay for:
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px', color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
              <li><strong>Final Deliverables:</strong> Upon full and final settlement of project invoices, 100% of the worldwide intellectual property rights to the final designs, Figma master files, exported assets, and custom illustrations transfer exclusively to the client.</li>
              <li><strong>Pre-existing Tools:</strong> VALENCE retains ownership over proprietary agency frameworks, starter design token templates, and general design utility libraries used to construct the work.</li>
              <li><strong>Portfolio Rights:</strong> Unless explicitly restricted by a mutual Non-Disclosure Agreement (NDA), VALENCE reserves the right to showcase finalized, publicly launched work in agency case studies, pitch decks, and digital portfolios.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
              3. Review Cycles & Revisions
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
              Standard sprint packages include two (2) comprehensive rounds of client review and design refinement per milestone. Feedback must be consolidated and delivered through collaborative Figma comments or scheduled milestone review calls within five (5) business days of deliverable handoff to maintain sprint velocity.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
              4. Payment Milestones & Invoicing
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '12px' }}>
              Project engagements follow structured milestone payments:
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px', color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
              <li><strong>Fixed-Scope Projects:</strong> 50% deposit upon contract signing to secure studio calendar time, and 50% upon final delivery of production Figma files.</li>
              <li><strong>Monthly Retainers:</strong> Billed at the beginning of each 30-day sprint cycle, payable net 14 days.</li>
              <li><strong>Accepted Payment Methods:</strong> Direct ACH bank transfer, wire transfer, and major corporate debit/credit cards.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
              5. Confidentiality & Non-Disclosure
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
              Both parties agree to treat all business plans, customer data, technical documentation, and pre-release feature specs as strictly confidential. Confidentiality obligations survive the termination or completion of any design agreement for a minimum duration of three (3) years.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
              6. Limitation of Liability
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
              In no event shall VALENCE Design Studio or its principals be liable for indirect, incidental, special, or consequential damages resulting from product launch delays or third-party engineering implementation bugs. Our total aggregate liability under any engagement shall not exceed the total fees received by VALENCE for the specific SOW in dispute.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
              7. Inquiries & Legal Notices
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
              Official legal notices and partnership questions should be addressed directly through our{' '}
              <Link to="/contact" style={{ color: 'var(--primary-light)', textDecoration: 'underline' }}>
                Contact Form
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
            <h3 style={{ fontSize: '1.125rem', color: '#FFFFFF', marginBottom: '4px' }}>Have questions about our engagement models?</h3>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>We are happy to answer any questions about our contracts or deliverables.</p>
          </div>
          <Button to="/contact" variant="primary" size="md">
            Talk to Our Team
          </Button>
        </div>
      </div>
    </div>
  );
}
