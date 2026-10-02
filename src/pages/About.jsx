import React from 'react';
import {
  Target,
  Eye,
  Award,
  Zap,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import Button from '../components/Button';

export default function About() {
  const statistics = [
    {
      value: '50+',
      label: 'Projects Delivered',
      detail: 'Across B2B SaaS, mobile fintech, and developer platforms',
    },
    {
      value: '30+',
      label: 'Happy Clients',
      detail: 'From early-stage startups to international technology brands',
    },
    {
      value: '5+',
      label: 'Years Experience',
      detail: 'Specialized exclusively in high-fidelity digital product design',
    },
    {
      value: '95%',
      label: 'Client Satisfaction',
      detail: 'Long-term partnership retention and repeat project engagements',
    },
  ];

  const differentiators = [
    {
      title: 'No Junior Outsourcing',
      desc: 'You work directly with senior design partners who have shaped venture-backed apps and high-scale SaaS consoles.',
      icon: Award,
    },
    {
      title: 'Engineered for Implementation',
      desc: 'We think like frontend engineers. Every token, autolayout frame, and breakpoint is structured for effortless React/CSS handoff.',
      icon: Zap,
    },
    {
      title: 'Metrics-Obsessed Rigor',
      desc: 'We treat UX as a measurable growth lever. We prioritize reduction of friction, drop-off reduction, and clear conversion paths.',
      icon: TrendingUp,
    },
    {
      title: 'Speed Without Sloppiness',
      desc: 'Our structured two-week sprint framework means rapid prototypes in your hands within 10 days, not 10 weeks.',
      icon: Sparkles,
    },
  ];

  const leadership = [
    {
      name: 'Julian Vance',
      role: 'Founding Partner & Design Director',
      bio: 'Ex-Fintech Lead with 10+ years shaping high-density interfaces and atomic design systems.',
      avatar: 'JV',
    },
    {
      name: 'Aria Sterling',
      role: 'Head of UX Research & Strategy',
      bio: 'Cognitive scientist and usability specialist dedicated to removing cognitive friction from digital products.',
      avatar: 'AS',
    },
    {
      name: 'Darius Chen',
      role: 'Principal Systems Architect',
      bio: 'Specialist in scalable multi-brand design tokens, responsive grid systems, and micro-interactions.',
      avatar: 'DC',
    },
  ];

  return (
    <div style={{ padding: '60px 0 100px' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
        {/* Hero Header */}
        <section className="section-header text-center" style={{ marginBottom: 0 }}>
          <div className="section-tag">
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-light)', display: 'inline-block' }} />
            <span>About VALENCE Studio</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', marginBottom: '20px' }}>
            Crafting Digital Products with Purpose, Precision & Heart.
          </h1>

          <p>
            VALENCE was founded with a singular conviction: digital software should feel as refined, intuitive, and tactile as the finest physical instruments. We bridge the gap between ambitious business objectives and unforgettable user experiences.
          </p>
        </section>

        {/* Statistics Grid */}
        <section style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: '48px 32px' }}>
          <div className="section-header text-center" style={{ marginBottom: '40px' }}>
            <div className="section-tag">Proven Track Record</div>
            <h2 style={{ fontSize: '2rem' }}>Measurable Impact in Numbers</h2>
          </div>

          <div className="grid-4">
            {statistics.map((stat, idx) => (
              <div
                key={idx}
                style={{
                  textAlign: 'center',
                  padding: '24px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)'
                }}
              >
                <div style={{ fontSize: '2.75rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--primary-light)', marginBottom: '8px' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '6px' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid-2">
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: '40px' }}>
            <div className="service-icon-box" style={{ marginBottom: '24px' }}>
              <Target style={{ width: '24px', height: '24px' }} />
            </div>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '14px' }}>Our Mission</h2>
            <p style={{ color: 'var(--text-body)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
              To liberate digital products from cognitive clutter, confusing navigation, and indifferent aesthetics. We empower founders and product teams to launch interfaces that command immediate authority, clarify value, and turn first-time users into lifelong champions.
            </p>
          </div>

          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: '40px' }}>
            <div className="service-icon-box" style={{ marginBottom: '24px', color: 'var(--accent-cyan)' }}>
              <Eye style={{ width: '24px', height: '24px' }} />
            </div>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '14px' }}>Our Vision</h2>
            <p style={{ color: 'var(--text-body)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
              To define the benchmark for next-generation digital interfaces in an era of rapid AI and software democratization. We envision a world where software tools feel seamless, respectful of human attention, and fundamentally joyful to navigate.
            </p>
          </div>
        </section>

        {/* Design Philosophy */}
        <section style={{ background: 'rgba(10, 13, 21, 0.8)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: '48px 40px' }}>
          <div className="section-header" style={{ marginBottom: '40px' }}>
            <div className="section-tag">Core Principles</div>
            <h2 style={{ fontSize: '2rem' }}>Our Design Philosophy</h2>
            <p>Three steadfast convictions that guide every wireframe, prototype, and component token we craft.</p>
          </div>

          <div className="grid-3">
            <div>
              <div style={{ color: 'var(--primary-light)', fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: '1.125rem', marginBottom: '8px' }}>01 /</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Radical Clarity</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                If a user has to pause and puzzle over where to click next, the design has failed. We relentlessly simplify flows, prioritize typographic hierarchy, and elevate only what matters most.
              </p>
            </div>

            <div>
              <div style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: '1.125rem', marginBottom: '8px' }}>02 /</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Tactile Craft</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Subtle micro-interactions, deliberate spacing, and restrained animation breathe vitality into software. We obsess over the micro-moments that make digital tools feel premium and responsive.
              </p>
            </div>

            <div>
              <div style={{ color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: '1.125rem', marginBottom: '8px' }}>03 /</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Systems Thinking</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Screens are temporary; design systems endure. We organize colors, typography, elevations, and tokens with mathematical harmony so engineering can scale with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Why We Are Different */}
        <section>
          <div className="section-header text-center">
            <div className="section-tag">The Difference</div>
            <h2>Why We Are Different</h2>
            <p>How VALENCE outperforms conventional agencies and bloated creative shops.</p>
          </div>

          <div className="grid-4">
            {differentiators.map((diff, index) => {
              const IconComp = diff.icon;
              return (
                <div key={index} className="why-card">
                  <div className="why-icon-box">
                    <IconComp style={{ width: '20px', height: '20px', color: 'var(--primary-light)' }} />
                  </div>
                  <h3 style={{ fontSize: '1.125rem' }}>{diff.title}</h3>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {diff.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Leadership Team */}
        <section>
          <div className="section-header text-center">
            <div className="section-tag">Leadership</div>
            <h2>Meet the Studio Directors</h2>
            <p>Senior practitioners who lead your design sprints from kickoff to release.</p>
          </div>

          <div className="grid-3">
            {leadership.map((member, i) => (
              <div key={i} className="why-card" style={{ padding: '32px' }}>
                <div className="author-avatar" style={{ width: '56px', height: '56px', fontSize: '1.125rem', borderRadius: '16px', marginBottom: '8px' }}>
                  {member.avatar}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', marginBottom: '4px' }}>{member.name}</h3>
                  <p style={{ fontSize: '0.75rem', color: 'var(--primary-light)', fontWeight: 600 }}>{member.role}</p>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="cta-banner-wrapper" style={{ padding: 0 }}>
          <div className="cta-banner">
            <h2>Ready to elevate your product experience?</h2>
            <p>Let's discuss your product roadmap and explore how our senior design team can accelerate your time to market.</p>
            <div className="cta-buttons">
              <Button to="/contact" variant="primary" size="lg" icon={true}>
                Schedule a Discovery Call
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
