import React, { useState } from 'react';
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
  Send
} from 'lucide-react';
import Button from '../components/Button';
import HeroGraphic from '../components/HeroGraphic';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import TestimonialCard from '../components/TestimonialCard';
import CaseStudyModal from '../components/CaseStudyModal';
import { servicesData } from '../data/services';
import { projectsData } from '../data/projects';
import { testimonialsData } from '../data/testimonials';

export default function Home() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

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
  const featuredProjects = projectsData.filter((p) => p.featured);

  const trustedCompanies = [
    { name: 'Novaflow', type: 'Fintech Protocol' },
    { name: 'HyperScale', type: 'Cloud Infrastructure' },
    { name: 'Synthetix', type: 'AI Analytics' },
    { name: 'PulsePay', type: 'Global Checkout' },
    { name: 'CloudCore', type: 'DevOps Platform' },
    { name: 'Veloce', type: 'Autonomous Logistics' },
  ];

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
      tags: ['Component Libraries', 'Figma Prototyping', 'Visual Polish']
    },
    {
      number: '04',
      title: 'Test',
      description: 'We validate prototypes with real users, observing task completion speeds, friction points, and behavioral hesitation before any code is committed.',
      icon: CheckCheck,
      tags: ['Usability Sessions', 'A/B Diagnostics', 'UX Remediation']
    },
    {
      number: '05',
      title: 'Deliver',
      description: 'We hand off production-ready assets, interactive motion guidelines, and token definitions, pairing closely with your engineering squad until launch.',
      icon: Send,
      tags: ['Design Tokens', 'Dev Specifications', 'Design QA']
    },
  ];

  return (
    <div className="relative">
      <div className="hero-glow-bg" />

      {/* ==================================================
          1. HERO SECTION
          ================================================== */}
      <section className="hero-section">
        <div className="container">
          <div className="grid-hero">
            {/* Hero Left Content */}
            <div className="hero-content">
              <div className="section-tag">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-light)', display: 'inline-block' }} />
                <span>Elite Product Design & Strategy Studio</span>
              </div>

              <h1>
                Designing Digital Experiences{' '}
                <span className="text-gradient">People Love.</span>
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
                  <span>Enterprise design systems</span>
                </div>
                <div className="hero-trust-item">
                  <CheckCircle2 style={{ width: '16px', height: '16px', color: 'var(--accent-emerald)' }} />
                  <span>Sprint-based delivery</span>
                </div>
              </div>
            </div>

            {/* Hero Right Visual */}
            <div>
              <HeroGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          2. TRUST SECTION
          ================================================== */}
      <section className="trust-section">
        <div className="container">
          <p className="trust-heading">
            Trusted by teams building the future
          </p>

          <div className="grid-6">
            {trustedCompanies.map((company, index) => (
              <div key={index} className="trust-logo-item">
                <div className="trust-brand-row">
                  <div className="trust-badge-letter">
                    {company.name.slice(0, 1)}
                  </div>
                  <span>{company.name}</span>
                </div>
                <span className="trust-subtext">{company.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          3. SERVICES SECTION
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
              Explore All 10 Services
            </Button>
          </div>

          <div className="grid-4">
            {previewServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          4. WHY CHOOSE US
          ================================================== */}
      <section className="why-us-section">
        <div className="container">
          <div className="grid-services-split">
            {/* Left Narrative */}
            <div>
              <div className="section-tag">The Valence Advantage</div>
              <h2 style={{ fontSize: '2.25rem', marginBottom: '16px' }}>
                Why Industry Leaders Partner With Us.
              </h2>
              <p style={{ color: 'var(--text-body)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '28px' }}>
                Great design is not decorative art. It is the core operating architecture of your business that dictates activation, conversion, and enduring customer loyalty.
              </p>
              <Button to="/about" variant="secondary" size="md" icon={true}>
                Learn About Our Philosophy
              </Button>
            </div>

            {/* Right 4 Pillars */}
            <div className="grid-2">
              {[
                {
                  title: 'User-Centered Design',
                  desc: 'Every layout decision is rooted in cognitive empathy, behavioral psychology, and direct user feedback sessions.',
                  icon: Users,
                  accent: 'var(--primary-light)'
                },
                {
                  title: 'Business-Focused Decisions',
                  desc: 'We optimize interfaces for hard revenue metrics: checkout conversion, activation rate, and customer lifetime value.',
                  icon: TrendingUp,
                  accent: 'var(--accent-cyan)'
                },
                {
                  title: 'Fast & Collaborative Process',
                  desc: 'Structured 2-week agile design sprints with direct Slack/Figma communication and zero bureaucratic overhead.',
                  icon: Sparkles,
                  accent: 'var(--accent-purple)'
                },
                {
                  title: 'Scalable Design Systems',
                  desc: 'Tokenized, modular component libraries built for effortless engineering adoption and bulletproof brand consistency.',
                  icon: Layers,
                  accent: 'var(--accent-emerald)'
                }
              ].map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <div key={idx} className="why-card">
                    <div className="why-icon-box">
                      <IconComp style={{ width: '22px', height: '22px', color: pillar.accent }} />
                    </div>
                    <h3 style={{ fontSize: '1.125rem' }}>{pillar.title}</h3>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          5. OUR PROCESS
          ================================================== */}
      <section className="process-section">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-tag">Methodology</div>
            <h2>Our 5-Step Design Process</h2>
            <p>
              A battle-tested framework engineered to eliminate guesswork, de-risk roadmaps, and ship exceptional software on time.
            </p>
          </div>

          <div className="grid-5">
            {processSteps.map((step) => {
              const IconComp = step.icon;
              return (
                <div key={step.number} className="process-step-card">
                  <div>
                    <div className="step-header">
                      <span className="step-number">{step.number}</span>
                      <div className="service-icon-box" style={{ width: '36px', height: '36px' }}>
                        <IconComp style={{ width: '18px', height: '18px' }} />
                      </div>
                    </div>

                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-desc">{step.description}</p>
                  </div>

                  <div className="step-tags">
                    {step.tags.map((tag, i) => (
                      <span key={i} className="step-tag-pill">{tag}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================
          6. FEATURED WORK (4 Case Studies)
          ================================================== */}
      <section style={{ padding: '96px 0', background: 'rgba(10, 13, 21, 0.7)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ maxWidth: '640px' }}>
              <div className="section-tag">Selected Work</div>
              <h2 style={{ fontSize: '2.25rem', marginBottom: '12px' }}>
                Featured Case Studies
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
                Real-world product design engagements delivering measurable business outcomes and delightful user interactions.
              </p>
            </div>

            <Button to="/blogs" variant="outline" size="md" icon={true}>
              Read Design Insights
            </Button>
          </div>

          <div className="grid-2">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(proj) => setSelectedCaseStudy(proj)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          7. TESTIMONIALS (3 Fictional Reviews)
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
          8. FINAL CTA
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

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          isOpen={!!selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}
    </div>
  );
}
