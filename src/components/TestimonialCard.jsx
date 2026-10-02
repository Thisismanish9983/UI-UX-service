import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      {/* Decorative top quote icon */}
      <div style={{ position: 'absolute', top: '24px', right: '24px', opacity: 0.08 }}>
        <Quote style={{ width: '40px', height: '40px' }} />
      </div>

      <div>
        {/* Star Rating */}
        <div className="stars-row">
          {[...Array(testimonial.rating || 5)].map((_, i) => (
            <Star key={i} style={{ width: '16px', height: '16px', fill: 'currentColor' }} />
          ))}
        </div>

        {/* Metric Highlight Badge if present */}
        {testimonial.metricHighlight && (
          <div className="metric-highlight">
            {testimonial.metricHighlight}
          </div>
        )}

        {/* Quote body */}
        <p className="testimonial-quote">
          "{testimonial.testimonial}"
        </p>
      </div>

      {/* Author info */}
      <div className="author-row">
        <div className="author-avatar">
          {testimonial.avatar || testimonial.name.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <h4 className="author-name">
            {testimonial.name}
          </h4>
          <p className="author-role">
            {testimonial.role} • <strong style={{ color: 'var(--text-body)' }}>{testimonial.company}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
