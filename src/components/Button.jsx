import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon = false,
  loading = false,
  disabled = false,
  type = 'button',
  className = '',
  ...props
}) {
  const classNames = `btn btn-${variant} btn-${size} ${className}`.trim();

  const content = (
    <>
      {loading && <Loader2 className="btn-spinner" style={{ width: '16px', height: '16px', animation: 'spin 1s linear infinite' }} />}
      <span>{children}</span>
      {icon && !loading && (
        <ArrowRight style={{ width: '16px', height: '16px', marginLeft: '4px' }} />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classNames} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classNames} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classNames}
      {...props}
    >
      {content}
    </button>
  );
}
