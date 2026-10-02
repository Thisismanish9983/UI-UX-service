import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const socialIcons = {
  LinkedIn: () => (
    <svg style={{ width: '16px', height: '16px' }} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  ),
  X: () => (
    <svg style={{ width: '14px', height: '14px' }} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  Instagram: () => (
    <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  ),
  Dribbble: () => (
    <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"/>
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/>
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/>
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/>
    </svg>
  ),
  Behance: () => (
    <svg style={{ width: '16px', height: '16px' }} fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.992 3-3.647 0-5.835-2.766-5.835-6.002 0-3.328 2.296-6 5.658-6 3.535 0 5.344 2.585 5.344 5.922 0 .5-.05 1.08-.094 1.344h-8.082c.15 2.115 1.728 2.875 3.326 2.875 1.326 0 2.395-.591 2.848-1.579l1.835.44zm-7.973-4.22h5.539c-.113-1.636-1.127-2.52-2.723-2.52-1.748 0-2.617 1.002-2.816 2.52zm-8.753-7.78h-7v14h7.021c3.67 0 5.979-1.928 5.979-5.184 0-1.89-1.077-3.414-2.656-4.047 1.205-.66 2.05-1.914 2.05-3.52 0-2.899-2.05-4.249-5.394-4.249zm-4 5.5h3.197c1.377 0 2.217.656 2.217 1.77 0 1.135-.865 1.73-2.217 1.73h-3.197v-3.5zm0 6h3.486c1.551 0 2.514.73 2.514 1.957 0 1.258-.963 2.043-2.514 2.043h-3.486v-4z"/>
    </svg>
  ),
};

export default function Footer() {
  const currentYear = 2026;

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

            {/* Social Links */}
            <div className="footer-social-row">
              {[
                { name: 'LinkedIn', icon: socialIcons.LinkedIn, href: 'https://linkedin.com' },
                { name: 'X', icon: socialIcons.X, href: 'https://x.com' },
                { name: 'Instagram', icon: socialIcons.Instagram, href: 'https://instagram.com' },
                { name: 'Dribbble', icon: socialIcons.Dribbble, href: 'https://dribbble.com' },
                { name: 'Behance', icon: socialIcons.Behance, href: 'https://behance.net' },
              ].map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.name} profile`}
                    className="social-icon-btn"
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="footer-col-title">Company</h3>
            <ul className="footer-links-list">
              <li><Link to="/about" className="footer-link-item">About Us</Link></li>
              <li><Link to="/services" className="footer-link-item">Services</Link></li>
              <li><Link to="/portfolio" className="footer-link-item">Portfolio</Link></li>
              <li><Link to="/contact" className="footer-link-item">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="footer-col-title">Services</h3>
            <ul className="footer-links-list">
              <li><Link to="/services" className="footer-link-item">UI/UX Design</Link></li>
              <li><Link to="/services" className="footer-link-item">Mobile App Design</Link></li>
              <li><Link to="/services" className="footer-link-item">SaaS Design</Link></li>
              <li><Link to="/services" className="footer-link-item">Design Systems</Link></li>
              <li><Link to="/services" className="footer-link-item">UX Research</Link></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h3 className="footer-col-title">Resources</h3>
            <ul className="footer-links-list">
              <li><Link to="/faq" className="footer-link-item">FAQ</Link></li>
              <li><Link to="/portfolio" className="footer-link-item">Case Studies</Link></li>
              <li><Link to="/contact" className="footer-link-item">Start Inquiry</Link></li>
              <li>
                <a
                  href="mailto:hello@valencedesign.studio"
                  className="footer-link-item"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  hello@valencedesign.studio
                  <ArrowUpRight style={{ width: '14px', height: '14px' }} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {currentYear} VALENCE Design Studio. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }}>Terms of Service</span>
            <span style={{ cursor: 'pointer' }}>Cookie Preferences</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
