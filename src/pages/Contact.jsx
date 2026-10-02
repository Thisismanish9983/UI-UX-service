import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Mail,
  Building,
  User,
  CheckCircle2,
  Clock,
  ShieldCheck,
  AlertCircle,
  Sparkles
} from 'lucide-react';
import Button from '../components/Button';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    projectType: 'Website UI/UX',
    budget: '$3,000 – $5,000',
    message: '',
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const projectTypes = [
    'Website UI/UX',
    'Mobile App',
    'SaaS Product',
    'Dashboard',
    'Design System',
    'Other',
  ];

  const budgetTiers = [
    'Under $1,000',
    '$1,000 – $3,000',
    '$3,000 – $5,000',
    '$5,000+',
  ];

  useEffect(() => {
    if (preselectedService) {
      const match = projectTypes.find((t) =>
        preselectedService.toLowerCase().includes(t.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, projectType: match }));
      }
    }
  }, [preselectedService]);

  const validate = (values) => {
    const errs = {};
    if (!values.fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    } else if (values.fullName.trim().length < 2) {
      errs.fullName = 'Name must be at least 2 characters.';
    }

    if (!values.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!values.message.trim()) {
      errs.message = 'Please provide details about your project.';
    } else if (values.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    if (!values.projectType) {
      errs.projectType = 'Please select a project type.';
    }

    if (!values.budget) {
      errs.budget = 'Please select an estimated budget.';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        const validation = validate({ ...formData, [name]: value });
        if (!validation[name]) {
          delete updated[name];
        } else {
          updated[name] = validation[name];
        }
        return updated;
      });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(formData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTouched({
      fullName: true,
      email: true,
      company: true,
      message: true,
    });

    const validation = validate(formData);
    setErrors(validation);

    if (Object.keys(validation).length === 0) {
      setIsSubmitting(true);

      // Simulated frontend submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({
          fullName: '',
          email: '',
          company: '',
          projectType: 'Website UI/UX',
          budget: '$3,000 – $5,000',
          message: '',
        });
        setTouched({});
        setErrors({});
      }, 700);
    }
  };

  return (
    <div style={{ padding: '60px 0 100px' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
        {/* Hero Header */}
        <section className="section-header text-center" style={{ marginBottom: 0 }}>
          <div className="section-tag">
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-emerald)', display: 'inline-block' }} />
            <span>Available for Q2/Q3 2026 Projects</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', marginBottom: '20px' }}>
            Let's Design Something Remarkable Together.
          </h1>

          <p>
            Have a new product concept, need to scale an existing design system, or looking to redesign your core web experience? Tell us about your vision below.
          </p>
        </section>

        {/* Contact Split: Form + Sidebar */}
        <div className="grid-contact-split">
          {/* Form Card */}
          <div className="contact-form-card">
            {isSuccess ? (
              /* Success Confirmation Banner */
              <div className="success-state-box">
                <div className="success-icon-wrap">
                  <CheckCircle2 style={{ width: '32px', height: '32px' }} />
                </div>

                <h3 className="success-title">Request Received</h3>
                <p className="success-banner-text">
                  Thanks! Your project request has been received. We'll get back to you soon.
                </p>

                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', maxWidth: '400px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                  Our design director reviews every submission within 24 hours. A discovery invite has been simulated in this frontend demo.
                </p>

                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="btn btn-secondary btn-sm"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              /* Contact Form */
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                  {/* Full Name */}
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      Full Name <span className="required-star">*</span>
                    </label>
                    <div className="input-with-icon">
                      <User style={{ width: '16px', height: '16px' }} className="input-icon-prefix" />
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g. Alex Morgan"
                        className={`form-input has-icon ${errors.fullName && touched.fullName ? 'error' : ''}`}
                        aria-invalid={!!errors.fullName}
                      />
                    </div>
                    {errors.fullName && touched.fullName && (
                      <p className="form-error-msg">
                        <AlertCircle style={{ width: '14px', height: '14px' }} />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Work Email */}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="required-star">*</span>
                    </label>
                    <div className="input-with-icon">
                      <Mail style={{ width: '16px', height: '16px' }} className="input-icon-prefix" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="alex@company.com"
                        className={`form-input has-icon ${errors.email && touched.email ? 'error' : ''}`}
                        aria-invalid={!!errors.email}
                      />
                    </div>
                    {errors.email && touched.email && (
                      <p className="form-error-msg">
                        <AlertCircle style={{ width: '14px', height: '14px' }} />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company Name */}
                <div className="form-group">
                  <label htmlFor="company" className="form-label">
                    Company / Organization <span style={{ color: 'var(--text-subtle)', fontWeight: 400 }}>(Optional)</span>
                  </label>
                  <div className="input-with-icon">
                    <Building style={{ width: '16px', height: '16px' }} className="input-icon-prefix" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. ApexPay Technologies"
                      className="form-input has-icon"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div className="form-group">
                  <label className="form-label">
                    Project Type <span className="required-star">*</span>
                  </label>
                  <div className="chips-grid">
                    {projectTypes.map((type) => {
                      const isSelected = formData.projectType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData((p) => ({ ...p, projectType: type }))}
                          className={`chip-btn ${isSelected ? 'active' : ''}`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Range */}
                <div className="form-group">
                  <label className="form-label">
                    Estimated Budget <span className="required-star">*</span>
                  </label>
                  <div className="chips-grid">
                    {budgetTiers.map((tier) => {
                      const isSelected = formData.budget === tier;
                      return (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setFormData((p) => ({ ...p, budget: tier }))}
                          className={`chip-btn ${isSelected ? 'active' : ''}`}
                        >
                          {tier}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Project Details */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Project Details & Goals <span className="required-star">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Describe your product, target audience, core challenges, and ideal timeline..."
                    className={`form-textarea ${errors.message && touched.message ? 'error' : ''}`}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && touched.message && (
                    <p className="form-error-msg">
                      <AlertCircle style={{ width: '14px', height: '14px' }} />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div style={{ marginTop: '24px' }}>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={isSubmitting}
                    icon={!isSubmitting}
                    className="btn-full"
                  >
                    {isSubmitting ? 'Validating & Processing...' : 'Send Project Inquiry'}
                  </Button>
                </div>

                <p style={{ fontSize: '0.6875rem', color: 'var(--text-subtle)', textAlign: 'center', marginTop: '14px' }}>
                  Protected by standard Non-Disclosure Agreement. This frontend demo simulates form submission without server transmission.
                </p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Guarantees Box */}
            <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: '32px' }}>
              <h3 style={{ fontSize: '1.125rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles style={{ width: '18px', height: '18px', color: 'var(--primary-light)' }} />
                What Happens Next?
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'rgba(99, 102, 241, 0.15)', color: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.75rem', flexShrink: 0 }}>1</span>
                  <div>
                    <strong style={{ color: '#FFFFFF', display: 'block', marginBottom: '2px' }}>Discovery Review:</strong>
                    Our design director reviews your requirements, product space, and technical scope within 24 hours.
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'rgba(99, 102, 241, 0.15)', color: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.75rem', flexShrink: 0 }}>2</span>
                  <div>
                    <strong style={{ color: '#FFFFFF', display: 'block', marginBottom: '2px' }}>30-Min Strategy Call:</strong>
                    We align on user journeys, business milestones, and explore initial conceptual directions.
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'rgba(99, 102, 241, 0.15)', color: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.75rem', flexShrink: 0 }}>3</span>
                  <div>
                    <strong style={{ color: '#FFFFFF', display: 'block', marginBottom: '2px' }}>Detailed Sprint Proposal:</strong>
                    You receive an actionable timeline, deliverables roadmap, and fixed-cost milestone structure.
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Studio Contacts */}
            <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: '32px' }}>
              <h3 style={{ fontSize: '1.0625rem', marginBottom: '16px' }}>Direct Studio Contacts</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.875rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-body)' }}>
                  <Mail style={{ width: '16px', height: '16px', color: 'var(--primary-light)' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem' }}>hello@valencedesign.studio</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-body)' }}>
                  <Clock style={{ width: '16px', height: '16px', color: 'var(--accent-emerald)' }} />
                  <span style={{ fontSize: '0.8125rem' }}>Mon – Fri: 9:00 AM – 6:00 PM EST</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-body)' }}>
                  <ShieldCheck style={{ width: '16px', height: '16px', color: 'var(--accent-cyan)' }} />
                  <span style={{ fontSize: '0.8125rem' }}>Mutual NDA executed on request</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
