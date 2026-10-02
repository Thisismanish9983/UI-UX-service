import React, { useState } from 'react';
import {
  CheckCircle2,
  Zap,
  Smartphone,
  Sparkles
} from 'lucide-react';

export default function HeroGraphic() {
  const [activeTab, setActiveTab] = useState('metrics');
  const [isLiveEnabled, setIsLiveEnabled] = useState(true);

  return (
    <div className="hero-graphic-wrap">
      {/* Main Glass Card */}
      <div className="hero-main-card">
        {/* Top Window Bar */}
        <div className="hero-window-top">
          <div className="window-dots">
            <span className="window-dot dot-red" />
            <span className="window-dot dot-yellow" />
            <span className="window-dot dot-green" />
            <span className="window-title">valence-design-system.figma</span>
          </div>

          <div className="window-badge">
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-emerald)', display: 'inline-block' }} />
            v3.2 Production
          </div>
        </div>

        {/* KPI Grid */}
        <div className="hero-kpi-grid">
          <div className="kpi-card">
            <div className="kpi-top">
              <span>Product Adoption</span>
              <span style={{ color: 'var(--accent-emerald)', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>+42.8%</span>
            </div>
            <div className="kpi-value">
              98.4<span style={{ color: 'var(--primary-light)' }}>%</span>
            </div>
            <div className="kpi-sub">
              <CheckCircle2 style={{ width: '14px', height: '14px', color: 'var(--primary-light)' }} />
              <span>Zero drop-off flow</span>
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-top">
              <span>Monthly Recurring</span>
              <span style={{ color: 'var(--accent-emerald)', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>+28.4%</span>
            </div>
            <div className="kpi-value" style={{ fontFamily: 'var(--font-mono)' }}>
              $184.2<span style={{ color: 'var(--accent-cyan)' }}>K</span>
            </div>
            <div className="kpi-sub">
              <Zap style={{ width: '14px', height: '14px', color: 'var(--accent-cyan)' }} />
              <span>PLG Funnel Optimized</span>
            </div>
          </div>
        </div>

        {/* Chart Panel */}
        <div className="hero-chart-panel">
          <div className="chart-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontWeight: 700, color: '#FFFFFF' }}>Conversion Velocity</span>
              <span style={{ fontSize: '0.625rem', color: 'var(--text-subtle)', background: 'rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: '4px' }}>Real-Time</span>
            </div>
            <div className="chart-tabs">
              {['Day', 'Week', 'Month'].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`chart-tab-btn ${activeTab === tab.toLowerCase() ? 'active' : ''}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* SVG Wave Graph */}
          <div style={{ width: '100%', height: '110px', position: 'relative' }}>
            <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 400 110" preserveAspectRatio="none">
              <defs>
                <linearGradient id="pureChartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366F1" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M0,80 Q40,65 90,75 T180,45 T270,55 T340,25 T400,10 L400,110 L0,110 Z"
                fill="url(#pureChartGrad)"
              />
              <path
                d="M0,80 Q40,65 90,75 T180,45 T270,55 T340,25 T400,10"
                fill="none"
                stroke="#818CF8"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="340" cy="25" r="4" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="2" />
            </svg>

            <div style={{ position: 'absolute', top: '4px', right: '40px', background: '#FFFFFF', color: '#0F172A', fontSize: '0.625rem', fontWeight: 700, padding: '3px 8px', borderRadius: '4px', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
              Peak Conv: 8.9%
            </div>
          </div>
        </div>

        {/* Design System Tokens Bar */}
        <div className="hero-tokens-bar">
          <div className="token-swatches">
            <div className="swatches-stack">
              <div className="swatch-circle" style={{ background: '#6366F1' }} title="Primary" />
              <div className="swatch-circle" style={{ background: '#38BDF8' }} title="Cyan" />
              <div className="swatch-circle" style={{ background: '#10B981' }} title="Emerald" />
              <div className="swatch-circle" style={{ background: '#A855F7' }} title="Violet" />
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-body)', fontWeight: 600 }}>Atomic Tokens</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.75rem' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.6875rem' }}>Strict AA Contrast</span>
            <div
              className="toggle-switch"
              onClick={() => setIsLiveEnabled(!isLiveEnabled)}
              style={{ background: isLiveEnabled ? 'var(--primary)' : '#334155' }}
            >
              <div
                className="toggle-thumb"
                style={{ transform: isLiveEnabled ? 'translateX(16px)' : 'translateX(0)' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Card: Mobile App Screen Preview */}
      <div className="floating-mobile-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '6px', fontSize: '0.625rem', color: 'var(--text-muted)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#FFFFFF', fontWeight: 600 }}>
            <Smartphone style={{ width: '12px', height: '12px', color: 'var(--primary-light)' }} />
            iOS 18 Native
          </span>
          <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>60 FPS</span>
        </div>
        <div style={{ padding: '8px 0' }}>
          <div style={{ fontSize: '0.625rem', color: 'var(--text-muted)' }}>Tactile Micro-Payment</div>
          <div style={{ fontSize: '1.125rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>$1,450.00</div>
          <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', marginTop: '6px', overflow: 'hidden' }}>
            <div style={{ width: '75%', height: '100%', background: 'linear-gradient(90deg, var(--primary) 0%, var(--accent-cyan) 100%)' }} />
          </div>
        </div>
        <div style={{ background: 'var(--primary)', color: '#FFFFFF', fontSize: '0.5625rem', fontWeight: 600, padding: '5px', borderRadius: '6px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
          <Sparkles style={{ width: '10px', height: '10px' }} />
          Instant Biometric Auth
        </div>
      </div>
    </div>
  );
}
