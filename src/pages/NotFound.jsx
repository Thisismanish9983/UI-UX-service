import React from 'react';
import { AlertCircle } from 'lucide-react';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <div style={{ minHeight: '65vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', textAlign: 'center' }}>
      <div style={{ maxWidth: '440px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <div className="service-icon-box" style={{ width: '60px', height: '60px', borderRadius: '16px' }}>
          <AlertCircle style={{ width: '28px', height: '28px' }} />
        </div>

        <div>
          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--primary-light)', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>
            Error 404
          </span>
          <h1 style={{ fontSize: '2rem', marginBottom: '12px' }}>
            Page Not Found
          </h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            The page you are looking for doesn't exist or has been relocated within our studio directory.
          </p>
        </div>

        <Button to="/" variant="primary" size="md">
          Return to Homepage
        </Button>
      </div>
    </div>
  );
}
