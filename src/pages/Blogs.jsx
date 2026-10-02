import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import { blogsData } from '../data/blogs';

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Design Systems',
    'UX Research',
    'SaaS UX',
    'Mobile UX',
    'Product Strategy'
  ];

  const filteredBlogs = activeCategory === 'All'
    ? blogsData
    : blogsData.filter((b) => b.category === activeCategory);

  return (
    <div style={{ padding: '60px 0 100px' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
        {/* Hero Header */}
        <section className="section-header text-center" style={{ marginBottom: 0 }}>
          <div className="section-tag">
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-light)', display: 'inline-block' }} />
            <span>Studio Publications</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', marginBottom: '20px' }}>
            Insights, Frameworks & UX Perspectives.
          </h1>

          <p>
            Field notes from our product designers on building scalable design systems, optimizing conversion psychology, and de-risking modern software.
          </p>
        </section>

        {/* Filter Tabs */}
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
                  {cat === 'All' ? ` (${blogsData.length})` : ` (${blogsData.filter((b) => b.category === cat).length})`}
                </button>
              );
            })}
          </div>

          <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            Showing <strong style={{ color: '#FFFFFF' }}>{filteredBlogs.length}</strong> articles
          </div>
        </div>

        {/* Blogs Grid */}
        <div className="grid-2">
          {filteredBlogs.map((blog) => (
            <article
              key={blog.id}
              className="project-card"
              style={{ padding: '24px', gap: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                {/* Blog Card Image */}
                <div style={{ width: '100%', height: '220px', overflow: 'hidden', borderRadius: 'var(--radius-md)', marginBottom: '18px' }}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>

                {/* Meta Top: Category + Read Time + Date */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                  <span
                    className="service-cat-pill"
                    style={{ background: 'rgba(99, 102, 241, 0.12)', color: 'var(--primary-light)', border: '1px solid rgba(99, 102, 241, 0.25)' }}
                  >
                    {blog.category}
                  </span>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock style={{ width: '13px', height: '13px' }} />
                      {blog.readTime}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar style={{ width: '13px', height: '13px' }} />
                      {blog.date}
                    </span>
                  </div>
                </div>

                {/* Blog Title */}
                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '10px', color: '#FFFFFF', lineHeight: 1.35 }}>
                  <Link to={`/blogs/${blog.id}`} style={{ color: 'inherit' }}>
                    {blog.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                  {blog.excerpt}
                </p>
              </div>

              {/* View More Button (No author name or avatar) */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <Link
                  to={`/blogs/${blog.id}`}
                  className="btn btn-secondary btn-sm"
                  style={{ gap: '6px' }}
                >
                  <span>View More</span>
                  <ArrowRight style={{ width: '14px', height: '14px' }} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <section className="cta-banner-wrapper" style={{ padding: 0 }}>
          <div className="cta-banner">
            <h2>Want customized product design insights?</h2>
            <p>Subscribe to our quarterly design teardowns or discuss your product roadmap directly with our design team.</p>
            <div className="cta-buttons">
              <Button to="/contact" variant="primary" size="lg" icon={true}>
                Start a Conversation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
