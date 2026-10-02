import React, { useState } from 'react';
import { Layers } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import CaseStudyModal from '../components/CaseStudyModal';
import Button from '../components/Button';
import { projectsData } from '../data/projects';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Web', 'Mobile', 'SaaS', 'Dashboard'];

  // Pure React state filtering
  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.filterCategory === activeCategory);

  return (
    <div style={{ padding: '60px 0 100px' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
        {/* Hero Header */}
        <section className="section-header text-center" style={{ marginBottom: 0 }}>
          <div className="section-tag">
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-light)', display: 'inline-block' }} />
            <span>Case Studies & Portfolio</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', marginBottom: '20px' }}>
            Digital Products Engineered for High-Impact Outcomes.
          </h1>

          <p>
            Explore our curated archive of enterprise dashboards, native mobile applications, conversion-driven web redesigns, and scalable SaaS platforms.
          </p>
        </section>

        {/* Filter Bar (Pure React State) */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '8px', background: 'var(--bg-surface)', padding: '6px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', flexWrap: 'wrap' }}>
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`chip-btn ${isActive ? 'active' : ''}`}
                  style={{ padding: '8px 16px', fontSize: '0.8125rem' }}
                  aria-pressed={isActive}
                >
                  {cat}
                  {cat === 'All' ? ` (${projectsData.length})` : ` (${projectsData.filter((p) => p.filterCategory === cat).length})`}
                </button>
              );
            })}
          </div>

          <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            Showing <strong style={{ color: '#FFFFFF' }}>{filteredProjects.length}</strong> {activeCategory === 'All' ? 'total projects' : `${activeCategory} projects`}
          </div>
        </div>

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid-2">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                buttonLabel="View Project"
                onSelect={(proj) => setSelectedProject(proj)}
              />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '64px 20px', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)' }}>
            <Layers style={{ width: '48px', height: '48px', color: 'var(--text-subtle)', margin: '0 auto 16px' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>No projects found in this category</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '20px' }}>Try selecting "All" to view all available case studies.</p>
            <Button onClick={() => setActiveCategory('All')} variant="secondary" size="sm">
              Show All Projects
            </Button>
          </div>
        )}

        {/* Bottom CTA */}
        <section className="cta-banner-wrapper" style={{ padding: 0 }}>
          <div className="cta-banner">
            <h2>Have a project in mind?</h2>
            <p>Let's design a bespoke interface that transforms your business metrics and delights your users.</p>
            <div className="cta-buttons">
              <Button to="/contact" variant="primary" size="lg" icon={true}>
                Start Your Project Inquiry
              </Button>
            </div>
          </div>
        </section>

        {/* Case Study Modal */}
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </div>
  );
}
