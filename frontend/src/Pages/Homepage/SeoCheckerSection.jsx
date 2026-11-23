import React, { useRef, useState } from 'react';
import './seoCheckerSection.css';

const TOOL_URL = 'https://checksiterank.com/';

const Icon = ({ children, size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const ArrowIcon = () => (
  <Icon><path d="M5 12h14M13 6l6 6-6 6" /></Icon>
);

const SeoCheckerSection = () => {
  const siteInputRef = useRef(null);
  const formRef = useRef(null);
  const [site, setSite] = useState('');
  const [location, setLocation] = useState('');
  const [highlight, setHighlight] = useState(false);
  const [error, setError] = useState(false);

  // Left button: highlight + focus the right side input
  const handleLeftCheck = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setHighlight(true);
    setTimeout(() => siteInputRef.current?.focus(), 400);
    setTimeout(() => setHighlight(false), 2500);
  };

  // Right button: open tool in new tab
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!site.trim()) {
      setError(true);
      siteInputRef.current?.focus();
      return;
    }
    setError(false);
    window.open(TOOL_URL, '_blank', 'noopener,noreferrer');
  };

  const checks = [
    {
      title: 'Technical',
      desc: 'HTTPS, redirects, robots.txt, sitemap',
      icon: <Icon><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.4 2.4-2.1-.6-.6-2.1z" /></Icon>,
    },
    {
      title: 'On-page',
      desc: 'Titles, descriptions, headings, content',
      icon: <Icon><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></Icon>,
    },
    {
      title: 'Speed & mobile',
      desc: 'Response time, page size, viewport',
      icon: <Icon><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></Icon>,
    },
    {
      title: 'Schema & social',
      desc: 'Structured data, Open Graph, Twitter',
      icon: <Icon><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" /></Icon>,
    },
  ];

  return (
    <section className="csr-section">
      <div className="csr-container">
        {/* LEFT */}
        <div className="csr-left">
          <span className="csr-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></svg>
            100% Free SEO Tools
          </span>

          <h2 className="csr-title">
            Powerful SEO Tools to Analyse, Improve and{' '}
            <span className="csr-gradient-text">Grow Your Website</span>
          </h2>

          <p className="csr-subtext">
            From website audits to technical checks, get all the essential SEO
            tools in one place. Completely free. No subscription.
          </p>

          <div className="csr-btn-row">
            <button type="button" className="csr-btn csr-btn-primary" onClick={handleLeftCheck}>
              <Icon><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></Icon>
              Check My Website – Free
              <ArrowIcon />
            </button>

            <a
              className="csr-btn csr-btn-outline"
              href={TOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore All Tools
            </a>
          </div>

          <ul className="csr-trust">
            {['100% Free', 'No Credit Card', 'For Everyone'].map((t) => (
              <li key={t}>
                <span className="csr-tick">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5 9-10" /></svg>
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <form
          ref={formRef}
          className={`csr-card ${highlight ? 'csr-card-active' : ''}`}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="csr-card-top">
            <span className="csr-pill"><i className="csr-dot" /> Free · instant</span>
            <span className="csr-meta">24 checks · ~10 seconds</span>
          </div>

          <h3 className="csr-card-title">Get your free SEO score</h3>
          <p className="csr-card-sub">
            Enter your website — we’ll check it right now and show you exactly what to fix.
          </p>

          <label className="csr-label" htmlFor="csr-site">Website</label>
          <div className={`csr-input-wrap ${highlight ? 'csr-input-highlight' : ''} ${error ? 'csr-input-error' : ''}`}>
            <Icon>
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
            </Icon>
            <input
              id="csr-site"
              ref={siteInputRef}
              type="text"
              placeholder="yourwebsite.com"
              value={site}
              onChange={(e) => { setSite(e.target.value); if (error) setError(false); }}
            />
          </div>
          {error && <span className="csr-error-text">Please enter your website URL</span>}

          <label className="csr-label" htmlFor="csr-loc">
            Enter your local post code, city or country <em>(optional)</em>
          </label>
          <div className="csr-input-wrap">
            <Icon>
              <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </Icon>
            <input
              id="csr-loc"
              type="text"
              placeholder="Enter your Local Post Code, City or Country"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <button type="submit" className="csr-submit">
            Check my site — free <ArrowIcon />
          </button>

          <ul className="csr-notes">
            <li>✓ No sign-up for the quick check</li>
            <li>✓ No credit card</li>
            <li>✓ Results in seconds</li>
          </ul>

          <div className="csr-divider" />

          <p className="csr-label csr-label-small">What we check</p>
          <div className="csr-checks">
            {checks.map((c) => (
              <div className="csr-check" key={c.title}>
                <span className="csr-check-icon">{c.icon}</span>
                <div>
                  <strong>{c.title}</strong>
                  <small>{c.desc}</small>
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>
    </section>
  );
};

export default SeoCheckerSection;