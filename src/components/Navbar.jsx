import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            {/* Agency Brand Logo */}
            <Link to="/" className="brand-link" aria-label="VALENCE Studio Homepage">
              <div className="brand-icon-box">
                <svg
                  style={{ width: '20px', height: '20px', color: '#FFFFFF' }}
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
              <div className="brand-text">
                <span className="brand-name">VALENCE</span>
                <span className="brand-tagline">Design Studio</span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="nav-links-desktop" aria-label="Primary Navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="nav-cta-desktop">
              <Button to="/contact" variant="primary" size="md">
                Start a Project
              </Button>
            </div>

            {/* Mobile Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-btn"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X style={{ width: '22px', height: '22px' }} />
              ) : (
                <Menu style={{ width: '22px', height: '22px' }} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav-list" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? 'active' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', marginTop: '8px' }}>
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                className="btn-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start a Project
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
