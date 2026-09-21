'use client';

import { useState } from 'react';

export default function CanxiolNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <>
      <style>{`
        .canxiol-navbar {
          background: #ffffff;
          position: sticky;
          top: 0;
          z-index: 1040;
          box-shadow: 0 1px 0 0 #ede8f0;
        }
        .canxiol-navbar .inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          height: 64px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .canxiol-logo {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-decoration: none;
          line-height: 1;
          flex-shrink: 0;
        }
        .canxiol-logo .logo-brand {
          font-family: 'Inter', sans-serif;
          font-size: 21px;
          font-weight: 800;
          color: #3b1a4a;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .canxiol-logo .logo-sub {
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          font-weight: 400;
          color: #9a85aa;
          letter-spacing: 0.04em;
          padding-left: 2px;
          margin-top: 1px;
        }
        .canxiol-nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .canxiol-nav-links li { position: relative; }
        .canxiol-nav-links a,
        .canxiol-nav-links .nav-link-btn {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: #3b2050;
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .canxiol-nav-links a:hover,
        .canxiol-nav-links .nav-link-btn:hover { color: #6b21a8; }
        .chevron-ico { font-size: 9px; transition: transform 0.2s; display: inline-block; }
        .chevron-ico.open { transform: rotate(180deg); }
        .canxiol-dropdown {
          position: absolute;
          top: calc(100% + 18px);
          left: 50%;
          transform: translateX(-50%);
          background: #fff;
          border: 1px solid #ede8f0;
          border-radius: 10px;
          box-shadow: 0 8px 32px rgba(59,26,74,0.13);
          padding: 8px 0;
          min-width: 190px;
          z-index: 200;
          animation: cxDropIn 0.18s ease;
        }
        @keyframes cxDropIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .canxiol-dropdown a {
          display: block;
          padding: 10px 22px;
          font-size: 13px;
          color: #3b2050;
          text-decoration: none;
          transition: background 0.15s, color 0.15s;
        }
        .canxiol-dropdown a:hover { background: #f5f0fa; color: #6b21a8; }
        .canxiol-cta-group {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .cx-btn-outline {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: #3b1a4a;
          background: transparent;
          border: 1.5px solid #3b1a4a;
          border-radius: 4px;
          padding: 9px 16px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .cx-btn-outline:hover { background: #3b1a4a; color: #fff; }
        .cx-btn-filled {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: #fff;
          background: #3b1a4a;
          border: 1.5px solid #3b1a4a;
          border-radius: 4px;
          padding: 9px 16px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .cx-btn-filled:hover { background: #5c2d8a; border-color: #5c2d8a; color: #fff; }
        .canxiol-burger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          color: #3b1a4a;
          font-size: 22px;
          line-height: 1;
        }
        .canxiol-mobile-drawer {
          display: none;
          flex-direction: column;
          background: #fff;
          border-top: 1px solid #ede8f0;
          padding: 12px 24px 20px;
          gap: 0;
        }
        .canxiol-mobile-drawer.open { display: flex; }
        .canxiol-mobile-drawer a,
        .canxiol-mobile-drawer button {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #3b2050;
          text-decoration: none;
          background: none;
          border: none;
          border-bottom: 1px solid #f0eaf5;
          padding: 12px 0;
          cursor: pointer;
          text-align: left;
          transition: color 0.2s;
        }
        .canxiol-mobile-drawer a:hover { color: #6b21a8; }
        .mobile-cta-group { display: flex; gap: 10px; margin-top: 16px; flex-wrap: wrap; }
        @media (max-width: 900px) {
          .canxiol-nav-links, .canxiol-cta-group { display: none; }
          .canxiol-burger { display: flex; }
          .canxiol-navbar .inner { padding: 0 20px; }
        }
      `}</style>

      <header className="canxiol-navbar">
        <div className="inner">
          <a href="#" className="canxiol-logo">
            <span className="logo-brand">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="4.5" r="2.5" fill="#3b1a4a"/>
                <path d="M9 9.5c-.8.4-1.5 1.2-1.8 2l-1.7 4.5h3l.5 4h6l.5-4h3l-1.7-4.5c-.3-.8-1-1.6-1.8-2" fill="#3b1a4a"/>
              </svg>
              CANXIOL
            </span>
            <span className="logo-sub">By ✦ Leiutis</span>
          </a>

          <ul className="canxiol-nav-links">
            <li><a href="#">Anxiety and its effects</a></li>
            <li><a href="#">Canxiol</a></li>
            <li>
              <button className="nav-link-btn" onClick={() => setResourcesOpen(!resourcesOpen)}>
                Resources <span className={`chevron-ico ${resourcesOpen ? 'open' : ''}`}>▼</span>
              </button>
              {resourcesOpen && (
                <div className="canxiol-dropdown" onMouseLeave={() => setResourcesOpen(false)}>
                  <a href="#">Patient Resources</a>
                  <a href="#">Clinical Guidelines</a>
                  <a href="#">FAQs</a>
                  <a href="#">Download Brochure</a>
                </div>
              )}
            </li>
            <li><a href="#">Pharmacovigilance</a></li>
            <li><a href="#">About Leiutis</a></li>
          </ul>

          <div className="canxiol-cta-group">
            <a href="#" className="cx-btn-outline">For Psychiatrists ↗</a>
            <a href="#" className="cx-btn-filled">Contact Us ↗</a>
          </div>

          <button className="canxiol-burger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        <nav className={`canxiol-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#" onClick={() => setMobileMenuOpen(false)}>Anxiety and its effects</a>
          <a href="#" onClick={() => setMobileMenuOpen(false)}>Canxiol</a>
          <a href="#" onClick={() => setMobileMenuOpen(false)}>Resources</a>
          <a href="#" onClick={() => setMobileMenuOpen(false)}>Pharmacovigilance</a>
          <a href="#" onClick={() => setMobileMenuOpen(false)}>About Leiutis</a>
          <div className="mobile-cta-group">
            <a href="#" className="cx-btn-outline">For Psychiatrists ↗</a>
            <a href="#" className="cx-btn-filled">Contact Us ↗</a>
          </div>
        </nav>
      </header>
    </>
  );
}
