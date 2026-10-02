import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  Users,
  TrendingUp,
  Sparkles,
  Layers,
  Compass,
  Search,
  PenTool,
  CheckCheck,
  Send,
  Cpu,
  MousePointerClick,
  ArrowRight,
  ShieldCheck,
  Code2
} from 'lucide-react';
import Button from '../components/Button';
import HeroGraphic from '../components/HeroGraphic';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { servicesData } from '../data/services';
import { testimonialsData } from '../data/testimonials';

export default function Home() {
  const homeServiceIds = [
    'website-design',
    'mobile-app-design',
    'saas-product-design',
    'dashboard-admin-design',
    'design-systems',
    'ux-research',
    'wireframing-prototyping',
    'website-redesign',
  ];
  const previewServices = homeServiceIds
    .map((id) => servicesData.find((s) => s.id === id))
    .filter(Boolean);

  const processSteps = [
    {
      number: '01',
      title: 'Discover',
      description: 'We align deeply with your founders and executive stakeholders to define north-star business metrics, target audiences, and technical requirements.',
      icon: Compass,
      tags: ['Stakeholder Interviews', 'KPI Definition', 'Market Analysis']
    },
    {
      number: '02',
      title: 'Research',
      description: 'We map complex customer mental models, study direct competitor ergonomics, and pinpoint high-friction bottlenecks across existing user flows.',
      icon: Search,
      tags: ['Journey Mapping', 'User Personas', 'Heuristic Audits']
    },
    {
      number: '03',
      title: 'Design',
      description: 'We translate strategic insights into expressive wireframes, clickable high-fidelity prototypes, and atomic tokenized design system libraries.',
      icon: PenTool,
      tags: ['Design Systems', 'Interactive Prototypes', 'Responsive Layouts']
    },
    {
      number: '04',
      title: 'Test',
      description: 'We conduct usability validation with target demographic users, measure time-on-task, and refine interaction ergonomics before engineering begins.',
      icon: CheckCheck,
      tags: ['Usability Testing', 'Friction Diagnostics', 'State Validation']
    },
    {
      number: '05',
      title: 'Deliver',
      description: 'We export developer-ready token hierarchies, comprehensive redline specifications, and pair directly with your engineers for pixel-perfect launch fidelity.',
      icon: Send,
      tags: ['Token Documentation', 'Developer Handoff', 'QA Pair-Review']
    }
  ];

  const deliverableStandards = [
    {
      title: 'Production-Ready Figma Architecture',
      tag: 'Web & Mobile UI/UX',
      icon: Layers,
      description: 'Fully responsive auto-layout 5.0 master components, interactive state variants, dynamic micro-interactions, and dark/light token modes.',
      benefit: 'Engineers copy flexbox/grid layout and CSS tokens directly without design-dev friction.',
      specs: [
        'Complete autolayout 5.0 responsive screens (Mobile, Tablet, Desktop)',
        'Full interactive state variants (Default, Hover, Active, Disabled, Loading)',
        'Organized semantic page structure & developer handoff redlines'
      ],
      link: '/services#website-design'
    },
    {
      title: 'Multi-Brand Design Systems & Tokens',
      tag: 'Design Systems',
      icon: Cpu,
      description: 'Systematic three-tier design token architecture (Primitives → Semantics → Components) synchronizing styling across web, iOS, and Android.',
      benefit: 'Eliminates design fragmentation and accelerates future feature delivery velocity by 40%.',
      specs: [
        'Semantic token hierarchy exportable to JSON, CSS variables, and iOS Swift',
        'WCAG 2.1 AA accessibility contrast verification audit',
        'Living component playground and governance usage documentation'
      ],
      link: '/services#design-systems'
    },
    {
      title: 'Clickable Interaction Prototypes',
      tag: 'Prototyping & Flow',
      icon: MousePointerClick,
      description: 'Tactile, clickable product prototypes with real micro-animation choreography, gestural bottom sheets, and multi-step user onboarding flows.',
      benefit: 'Test assumptions with real users and pitch investors with a demo that feels fully engineered.',
      specs: [
        'High-fidelity interactive prototype links with gestural navigation',
        'Micro-interaction physics (120ms–200ms spring transition specs)',
        'User validation test scripts and stakeholder walkthrough recordings'
      ],
      link: '/services#wireframing-prototyping'
    },
    {
      title: 'Empirical UX Research & Funnel Audits',
      tag: 'UX Research',
      icon: Search,
      description: 'Diagnostic heuristic audits, friction point heatmaps, and quantitative funnel drop-off analysis to de-risk high-stakes product decisions.',
      benefit: 'Eliminates costly developer rework and identifies high-ROI conversion opportunities.',
      specs: [
        'User journey maps and drop-off friction heatmaps',
        'Comprehensive 25+ page heuristic usability audit report',
        'Prioritized executive recommendations and engineering-ready Jira backlog'
      ],
      link: '/services#ux-research'
    }
  ];

  return (
    <div>
      {/* ==================================================
          1. HERO SECTION
          ================================================== */}
      <section className="hero-section">
        <div className="container">
          <div className="grid-hero">
            {/* Left Content Column */}
            <div>
              <div className="section-tag">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-light)', display: 'inline-block' }} />
                <span>Next-Gen UI/UX Design Studio</span>
              </div>

              <h1 className="hero-heading">
                Designing Digital Products People Love.
              </h1>

              <p>
                We create intuitive, beautiful and conversion-focused digital experiences for ambitious businesses and startups.
              </p>

              <div className="hero-actions">
                <Button to="/contact" variant="primary" size="lg" icon={true}>
                  Start a Project
                </Button>
                <Button to="/blogs" variant="secondary" size="lg">
                  Read Our Insights
                </Button>
              </div>

              <div className="hero-trust-row">
                <div className="hero-trust-item">
                  <CheckCircle2 style={{ width: '16px', height: '16px', color: 'var(--accent-emerald)' }} />
                  <span>Zero bloated templates</span>
                </div>
                <div className="hero-trust-item">
                  <CheckCircle2 style={{ width: '16px', height: '16px', color: 'var(--accent-emerald)' }} />
                  <span>Production-ready Figma files</span>
                </div>
                <div className="hero-trust-item">
                  <CheckCircle2 style={{ width: '16px', height: '16px', color: 'var(--accent-emerald)' }} />
                  <span>Sprint-based velocity</span>
                </div>
              </div>
            </div>

            {/* Right Graphic Mockup */}
            <div>
              <HeroGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          2. SERVICES SECTION
          ================================================== */}
      <section style={{ padding: '96px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ maxWidth: '640px' }}>
              <div className="section-tag">Our Capabilities</div>
              <h2 style={{ fontSize: '2.25rem', marginBottom: '12px' }}>
                Comprehensive UI/UX Services for Scaling Products.
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
                From early-stage conceptualization to global design systems, we craft every layer of your digital product interface with precision and intent.
              </p>
            </div>

            <Button to="/services" variant="outline" size="md" icon={true}>
              View All 10 Services
            </Button>
          </div>

          <div className="grid-4">
            {previewServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          3. WHY VALENCE (Agency Value Proposition)
          ================================================== */}
      <section style={{ padding: '96px 0', background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '64px' }}>
            <div>
              <div className="section-tag">The VALENCE Difference</div>
              <h2 style={{ fontSize: '2.25rem', marginBottom: '20px' }}>
                Why Leading Engineering Teams Choose VALENCE
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '28px' }}>
                Most creative agencies hand off static JPG mockups that break the moment developers begin writing code. We operate as an extension of your product engineering squad—delivering tokenized components, edge-case user flows, and accessible interaction patterns.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  {
                    title: 'Engineered for Real-World Codebases',
                    desc: 'We construct Figma auto-layout components aligned with flexbox, CSS grid, and modern component frameworks.'
                  },
                  {
                    title: 'Radical Design Token Consistency',
                    desc: 'Every color, font size, margin, and shadow is mapped to atomic semantic tokens for zero UI fragmentation.'
                  },
                  {
                    title: 'Data-Informed Behavioral Architecture',
                    desc: 'We optimize every user journey with empirical UX research, decreasing user drop-off and support tickets.'
                  }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(99, 102, 241, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <CheckCircle2 style={{ width: '14px', height: '14px', color: 'var(--primary-light)' }} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>{item.title}</h3>
                      <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right KPI Card */}
            <div style={{ background: 'var(--bg-surface-raised)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                <div className="author-avatar" style={{ width: '40px', height: '40px' }}>
                  <TrendingUp style={{ width: '20px', height: '20px', color: '#FFFFFF' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', color: '#FFFFFF' }}>Measurable Studio Impact</h3>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Aggregated across client product engagements</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {[
                  { metric: '+42%', label: 'Average user conversion lift post-launch', sub: 'Across B2B SaaS onboarding and e-commerce checkouts' },
                  { metric: '40%+', label: 'Reduction in frontend engineering dev time', sub: 'Driven by our standardized design token architectures' },
                  { metric: '98.4%', label: 'Client satisfaction and retention rate', sub: 'Reflecting direct partner-level access and communication' }
                ].map((stat, i) => (
                  <div key={i} style={{ borderBottom: i < 2 ? '1px solid var(--border-subtle)' : 'none', paddingBottom: i < 2 ? '20px' : 0 }}>
                    <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary-light)', fontFamily: 'var(--font-mono)' }}>
                      {stat.metric}
                    </div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#FFFFFF', marginTop: '4px' }}>
                      {stat.label}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          4. PROCESS SECTION (5 Steps)
          ================================================== */}
      <section style={{ padding: '96px 0' }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="section-tag">How We Work</div>
            <h2>Our 5-Step Product Design Process</h2>
            <p>
              A proven, repeatable methodology that turns complex technical requirements into intuitive, market-leading user experiences.
            </p>
          </div>

          <div className="grid-5">
            {processSteps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div key={step.number} className="process-step-card">
                  <div className="step-number-tag">{step.number}</div>
                  <div className="service-icon-box" style={{ width: '40px', height: '40px', marginBottom: '16px' }}>
                    <IconComponent style={{ width: '18px', height: '18px' }} />
                  </div>
                  <h3 style={{ fontSize: '1.125rem', marginBottom: '8px' }}>{step.title}</h3>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                    {step.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {step.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="step-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================
          5. SERVICE DELIVERABLES & PRODUCTION STANDARDS
          ================================================== */}
      <section style={{ padding: '96px 0', background: 'rgba(10, 13, 21, 0.7)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ maxWidth: '680px' }}>
              <div className="section-tag">Tangible Deliverables</div>
              <h2 style={{ fontSize: '2.25rem', marginBottom: '12px' }}>
                Production-Ready UI/UX Deliverables For Every Client
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
                We don't hand over static, superficial mockups. Every engagement delivers developer-ready Figma architectures, living design tokens, interactive micro-prototypes, and measured conversion metrics.
              </p>
            </div>

            <Button to="/services" variant="primary" size="md" icon={true}>
              Explore Full Service Spectrum
            </Button>
          </div>

          {/* 4 Core Deliverable Cards Grid */}
          <div className="grid-2" style={{ gap: '28px', marginBottom: '40px' }}>
            {deliverableStandards.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="project-card"
                  style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '20px' }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                      <div className="service-icon-box" style={{ width: '44px', height: '44px' }}>
                        <IconComp style={{ width: '22px', height: '22px', color: 'var(--primary-light)' }} />
                      </div>
                      <span className="service-cat-pill" style={{ background: 'rgba(99, 102, 241, 0.12)', color: 'var(--primary-light)', border: '1px solid rgba(99, 102, 241, 0.25)' }}>
                        {item.tag}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '10px' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                      {item.description}
                    </p>

                    <div style={{ background: 'var(--bg-surface-raised)', borderRadius: 'var(--radius-md)', padding: '16px', border: '1px solid var(--border-subtle)', marginBottom: '16px' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary-light)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                        Included In Client Handoff
                      </div>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {item.specs.map((spec, sIdx) => (
                          <li key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', color: 'var(--text-body)' }}>
                            <CheckCircle2 style={{ width: '14px', height: '14px', color: 'var(--accent-emerald)', flexShrink: 0 }} />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)', flexWrap: 'wrap', gap: '10px' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
                      ✓ {item.benefit}
                    </span>
                    <Link
                      to={item.link}
                      className="btn btn-secondary btn-sm"
                      style={{ gap: '6px' }}
                    >
                      <span>Explore Service</span>
                      <ArrowRight style={{ width: '14px', height: '14px' }} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Agency Service Guarantees Banner */}
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: '32px' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '20px', textAlign: 'center' }}>
              Our Client Service Guarantees
            </h3>
            <div className="grid-4" style={{ gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--primary-light)' }}>100% IP Ownership</span>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Full worldwide commercial ownership of all Figma source files, tokens, and components upon final delivery.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>Senior-Only Pods</span>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Direct collaboration with lead product designers. Zero middleman account managers or junior outsourcing.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>Bi-Weekly Clickable Demos</span>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Interactive prototypes shared every 14 days so your stakeholders can test and validate live.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--accent-amber)' }}>1:1 Dev Pairing</span>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Direct handoff pairing with your engineering team to ensure pixel-perfect production implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          6. TESTIMONIALS
          ================================================== */}
      <section style={{ padding: '96px 0' }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="section-tag">Client Voices</div>
            <h2>What Founders & Product Leaders Say</h2>
            <p>
              Trusted by venture-backed startups and established engineering organizations worldwide.
            </p>
          </div>

          <div className="grid-3">
            {testimonialsData.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          7. FINAL CTA
          ================================================== */}
      <section className="cta-banner-wrapper">
        <div className="container-narrow">
          <div className="cta-banner">
            <div className="section-tag" style={{ marginBottom: '20px' }}>
              Let's Build Something Exceptional
            </div>

            <h2>Have a product idea? Let's design it together.</h2>

            <p>
              Whether you need a full 0-to-1 product design, a scalable design system, or a high-converting web overhaul, we're ready to partner with you.
            </p>

            <div className="cta-buttons">
              <Button to="/contact" variant="primary" size="lg" icon={true}>
                Start Your Project
              </Button>
              <Button to="/blogs" variant="secondary" size="lg">
                Read Studio Blogs
              </Button>
            </div>

            <p style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
              Discovery consultation within 24 hours • Non-disclosure agreement guaranteed
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
