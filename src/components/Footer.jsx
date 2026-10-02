import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Agency Brand & Intro */}
          <div>
            <Link to="/" className="brand-link" style={{ marginBottom: '16px', display: 'inline-flex' }}>
              <div className="brand-icon-box">
                <svg
                  style={{ width: '18px', height: '18px', color: '#FFFFFF' }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4l8 16L20 4" />
                  <path d="M7 10h10" />
                </svg>
              </div>
              <span className="brand-name">VALENCE</span>
            </Link>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', maxWidth: '340px', lineHeight: 1.6, marginBottom: '16px' }}>
              We design intuitive, high-converting digital products and design systems for ambitious startups and global enterprises. Crafting digital experiences people genuinely love.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: 'var(--text-body)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-emerald)', display: 'inline-block' }} />
              <span>Accepting new projects for Q2/Q3 2026</span>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="footer-col-title">Company</h3>
            <ul className="footer-links-list">
              <li><Link to="/about" className="footer-link-item">About Us</Link></li>
              <li><Link to="/services" className="footer-link-item">Services</Link></li>
              <li><Link to="/blogs" className="footer-link-item">Blogs</Link></li>
              <li><Link to="/faq" className="footer-link-item">FAQ</Link></li>
              <li><Link to="/contact" className="footer-link-item">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services (Direct deep links to each service section) */}
          <div>
            <h3 className="footer-col-title">Services</h3>
            <ul className="footer-links-list">
              <li><Link to="/services#website-design" className="footer-link-item">Website UI/UX Design</Link></li>
              <li><Link to="/services#mobile-app-design" className="footer-link-item">Mobile App Design</Link></li>
              <li><Link to="/services#saas-product-design" className="footer-link-item">SaaS Product Design</Link></li>
              <li><Link to="/services#dashboard-admin-design" className="footer-link-item">Dashboard & Admin</Link></li>
              <li><Link to="/services#design-systems" className="footer-link-item">Design Systems</Link></li>
              <li><Link to="/services#ux-research" className="footer-link-item">UX Research</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom: Working Privacy Policy & Terms, No copyright, No cookies */}
        <div className="footer-bottom" style={{ justifyContent: 'center', gap: '28px' }}>
          <Link to="/privacy-policy" className="footer-link-item">
            Privacy Policy
          </Link>
          <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
          <Link to="/terms-of-service" className="footer-link-item">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
