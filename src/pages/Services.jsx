import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Globe,
  Smartphone,
  Layers,
  LayoutDashboard,
  Flame,
  Cpu,
  Search,
  MousePointerClick,
  CheckCircle2,
  RefreshCw,
  Clock,
  Sparkles,
  Check
} from 'lucide-react';
import Button from '../components/Button';
import { servicesData } from '../data/services';

const iconMap = {
  Globe,
  Smartphone,
  Layers,
  LayoutDashboard,
  Flame,
  Cpu,
  Search,
  MousePointerClick,
  CheckCircle2,
  RefreshCw,
};

export default function Services() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <div style={{ padding: '60px 0 100px' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
        {/* Hero Header */}
        <section className="section-header text-center" style={{ marginBottom: 0 }}>
          <div className="section-tag">
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-light)', display: 'inline-block' }} />
            <span>Full-Spectrum Product Design</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', marginBottom: '20px' }}>
            End-to-End Design Services Built for Modern Scale.
          </h1>

          <p>
            Whether building an ambitious zero-to-one MVP, crafting multi-tenant SaaS dashboards, or scaling design tokens across 100+ screens, we deliver production-ready UX that drives revenue.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
            {servicesData.map((svc) => (
              <a
                key={svc.id}
                href={`#${svc.id}`}
                className="step-tag-pill"
                style={{ padding: '6px 14px', fontSize: '0.75rem', borderRadius: 'var(--radius-full)' }}
              >
                {svc.name}
              </a>
            ))}
          </div>
        </section>

        {/* Detailed Service Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Globe;

            return (
              <section
                key={service.id}
                id={service.id}
                style={{
                  scrollMarginTop: '100px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '40px'
                }}
              >
                <div className="grid-services-split">
                  {/* Left Column: Service Details */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                      <div className="service-icon-box">
                        <IconComponent style={{ width: '24px', height: '24px' }} />
                      </div>
                      <div>
                        <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--primary-light)', fontWeight: 700 }}>
                          Service 0{index + 1}
                        </span>
                        <h2 style={{ fontSize: '1.75rem' }}>{service.name}</h2>
                      </div>
                    </div>

                    <p style={{ color: 'var(--text-body)', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '24px' }}>
                      {service.fullDesc}
                    </p>

                    <div style={{ display: 'flex', gap: '12px', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '28px', flexWrap: 'wrap' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--bg-surface-raised)', padding: '6px 12px', borderRadius: 'var(--radius-sm)' }}>
                        <Clock style={{ width: '14px', height: '14px', color: 'var(--primary-light)' }} />
                        <span>Timeline: {service.timeline}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--bg-surface-raised)', padding: '6px 12px', borderRadius: 'var(--radius-sm)' }}>
                        <Sparkles style={{ width: '14px', height: '14px', color: 'var(--accent-cyan)' }} />
                        <span>{service.category} Tier</span>
                      </div>
                    </div>

                    <Button
                      to={`/contact?service=${encodeURIComponent(service.name)}`}
                      variant="primary"
                      size="md"
                      icon={true}
                    >
                      Inquire About {service.name.split(' ')[0]}
                    </Button>
                  </div>

                  {/* Right Column: Deliverables & Benefits */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', background: 'var(--bg-surface-raised)', padding: '24px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
                    <div>
                      <h3 style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--primary-light)', fontWeight: 700, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Layers style={{ width: '14px', height: '14px' }} />
                        What We Deliver
                      </h3>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.75rem', color: 'var(--text-body)', lineHeight: 1.5 }}>
                            <Check style={{ width: '14px', height: '14px', color: 'var(--primary-light)', flexShrink: 0, marginTop: '2px' }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-emerald)', fontWeight: 700, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <CheckCircle2 style={{ width: '14px', height: '14px' }} />
                        Business Benefits
                      </h3>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.75rem', color: 'var(--text-body)', lineHeight: 1.5 }}>
                            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--accent-emerald)', flexShrink: 0, marginTop: '6px' }} />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      {service.idealFor && (
                        <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.06)', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                          <strong style={{ color: '#FFFFFF', display: 'block', marginBottom: '4px' }}>Ideal For:</strong>
                          {service.idealFor}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <section className="cta-banner-wrapper" style={{ padding: 0 }}>
          <div className="cta-banner">
            <h2>Need a custom design package or ongoing partnership?</h2>
            <p>We offer dedicated agency retainers for scaling tech companies and fixed-scope sprint packages for product launches.</p>
            <div className="cta-buttons">
              <Button to="/contact" variant="primary" size="lg" icon={true}>
                Discuss Custom Engagement
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
