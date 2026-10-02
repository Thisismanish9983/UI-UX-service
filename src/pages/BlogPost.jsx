import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, CheckCircle2, Share2, Sparkles, BookOpen } from 'lucide-react';
import Button from '../components/Button';
import { blogsData } from '../data/blogs';

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogsData.find((b) => b.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!blog) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '440px' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '12px' }}>Article Not Found</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>The article you are looking for does not exist or has been archived.</p>
          <Button to="/blogs" variant="primary" size="md">
            Return to All Blogs
          </Button>
        </div>
      </div>
    );
  }

  // Related articles (excluding current)
  const relatedBlogs = blogsData.filter((b) => b.id !== blog.id).slice(0, 2);

  return (
    <div style={{ padding: '60px 0 100px' }}>
      <div className="container-narrow" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {/* Back Link */}
        <div>
          <Link
            to="/blogs"
            className="btn btn-secondary btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <ArrowLeft style={{ width: '16px', height: '16px' }} />
            <span>Back to All Blogs</span>
          </Link>
        </div>

        {/* Article Header */}
        <header style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span
              className="service-cat-pill"
              style={{ background: 'rgba(99, 102, 241, 0.15)', color: 'var(--primary-light)', border: '1px solid rgba(99, 102, 241, 0.3)' }}
            >
              {blog.category}
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock style={{ width: '13px', height: '13px' }} />
              {blog.readTime}
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Calendar style={{ width: '13px', height: '13px' }} />
              {blog.date}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 800, lineHeight: 1.15, color: '#FFFFFF' }}>
            {blog.title}
          </h1>

          <p style={{ fontSize: '1.125rem', color: 'var(--text-body)', lineHeight: 1.6, fontStyle: 'italic', borderLeft: '3px solid var(--primary)', paddingLeft: '16px' }}>
            {blog.excerpt}
          </p>

          {/* Author Byline */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 0', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', marginTop: '8px' }}>
            <div className="author-avatar" style={{ width: '44px', height: '44px', fontSize: '0.875rem' }}>
              {blog.author.avatar}
            </div>
            <div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#FFFFFF' }}>{blog.author.name}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{blog.author.role} • VALENCE Design Studio</div>
            </div>
          </div>
        </header>

        {/* Key Takeaways Callout Box */}
        {blog.takeaways && (
          <div
            style={{
              background: 'rgba(99, 102, 241, 0.08)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              borderRadius: 'var(--radius-lg)',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', fontWeight: 700, color: 'var(--primary-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <Sparkles style={{ width: '18px', height: '18px' }} />
              <span>Key Executive Takeaways</span>
            </div>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {blog.takeaways.map((takeaway, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                  <CheckCircle2 style={{ width: '16px', height: '16px', color: 'var(--accent-emerald)', flexShrink: 0, marginTop: '3px' }} />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Body Content */}
        <article style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {blog.content.map((section, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
                {section.heading}
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.8 }}>
                {section.body}
              </p>
            </div>
          ))}
        </article>

        {/* Share & Article Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '28px', borderTop: '1px solid var(--border-subtle)', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            Published by <strong>VALENCE Research Labs</strong>
          </div>

          <Link to="/blogs" className="btn btn-secondary btn-sm">
            <span>Explore More Articles</span>
          </Link>
        </div>

        {/* Related Articles Grid */}
        <section style={{ paddingTop: '20px' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', color: '#FFFFFF' }}>
            Related Reading
          </h3>
          <div className="grid-2">
            {relatedBlogs.map((rel) => (
              <div
                key={rel.id}
                className="project-card"
                style={{ padding: '24px', cursor: 'pointer' }}
                onClick={() => navigate(`/blogs/${rel.id}`)}
              >
                <div style={{ fontSize: '0.6875rem', color: 'var(--primary-light)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
                  {rel.category}
                </div>
                <h4 style={{ fontSize: '1.0625rem', fontWeight: 700, marginBottom: '8px', color: '#FFFFFF' }}>
                  {rel.title}
                </h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {rel.excerpt}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="cta-banner-wrapper" style={{ padding: 0 }}>
          <div className="cta-banner">
            <h2>Need help implementing these design principles?</h2>
            <p>Our senior design director can conduct a 30-minute teardown of your current interface.</p>
            <div className="cta-buttons">
              <Button to="/contact" variant="primary" size="lg" icon={true}>
                Schedule Design Teardown
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
