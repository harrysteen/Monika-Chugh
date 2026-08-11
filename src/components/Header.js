'use client';

import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="figma-navbar-container py-3">
      <div className="container-fluid px-3 px-xl-5">

        {/* Desktop Header Layout matching Figma */}
        <div className="d-none d-lg-flex align-items-center justify-content-between">

          {/* Left Navigation Menu Block */}
          <div className="d-flex flex-column align-items-stretch flex-grow-1 pe-3 pe-xl-4">
            <nav className="d-flex align-items-center justify-content-between pb-2">
              <a href="#hero" className="figma-nav-item active">Home</a>
              <a href="#story" className="figma-nav-item">My Story</a>
              <a href="#books" className="figma-nav-item">Books</a>
              <a href="#blogs" className="figma-nav-item">Blogs</a>
              <a href="#canvas" className="figma-nav-item">Canvas & Quotations</a>
            </nav>
            {/* Horizontal Divider Line extending under Left Menu */}
            <div className="nav-horizontal-divider"></div>
          </div>

          {/* Center Brand Logo (Lowered to bottom as requested) */}
          <a 
            href="#" 
            className="navbar-logo-wrap px-3 px-xl-4 d-flex justify-content-center align-items-center text-decoration-none"
            style={{ 
              transform: 'translateY(32px)', 
              zIndex: 10,
              position: 'relative'
            }}
          >
            <img 
              src="/images/Logo.svg" 
              alt="Monika Chugh" 
              style={{ height: '78px', width: 'auto' }}
            />
          </a>

          {/* Right Navigation Menu Block */}
          <div className="d-flex flex-column align-items-stretch flex-grow-1 ps-3 ps-xl-4">
            <nav className="d-flex align-items-center justify-content-between pb-2">
              <a href="#poems" className="figma-nav-item">Poems & Articles</a>
              <a href="#press" className="figma-nav-item">Press Room</a>
              <a href="#events" className="figma-nav-item">Events</a>
              <a href="#arogini" className="figma-nav-item">Arogini</a>
              <a href="#contact" className="figma-nav-item">Contact</a>
            </nav>
            {/* Horizontal Divider Line extending under Right Menu */}
            <div className="nav-horizontal-divider"></div>
          </div>

        </div>

        {/* Mobile & Tablet Header Layout */}
        <div className="d-flex d-lg-none align-items-center justify-content-between py-2">
          <a href="#" className="text-decoration-none">
            <img src="/images/Logo.svg" alt="Monika Chugh" style={{ height: '48px', width: 'auto' }} />
          </a>

          <button
            className="btn p-1 border-0 text-dark fs-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="d-lg-none mt-3 p-4 bg-white rounded-3 shadow-sm border border-cream">
            <div className="d-flex flex-column gap-3">
              <a href="#hero" className="figma-nav-item active py-1" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#story" className="figma-nav-item py-1" onClick={() => setMobileMenuOpen(false)}>My Story</a>
              <a href="#books" className="figma-nav-item py-1" onClick={() => setMobileMenuOpen(false)}>Books</a>
              <a href="#blogs" className="figma-nav-item py-1" onClick={() => setMobileMenuOpen(false)}>Blogs</a>
              <a href="#canvas" className="figma-nav-item py-1" onClick={() => setMobileMenuOpen(false)}>Canvas & Quotations</a>
              <a href="#poems" className="figma-nav-item py-1" onClick={() => setMobileMenuOpen(false)}>Poems & Articles</a>
              <a href="#press" className="figma-nav-item py-1" onClick={() => setMobileMenuOpen(false)}>Press Room</a>
              <a href="#events" className="figma-nav-item py-1" onClick={() => setMobileMenuOpen(false)}>Events</a>
              <a href="#arogini" className="figma-nav-item py-1" onClick={() => setMobileMenuOpen(false)}>Arogini</a>
              <a href="#contact" className="figma-nav-item py-1" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
