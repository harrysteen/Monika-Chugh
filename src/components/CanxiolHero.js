'use client';

import Image from 'next/image';

export default function CanxiolHero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        .cx-hero {
          background: #f5eef8;
          position: relative;
          overflow: hidden;
          min-height: 520px;
          display: flex;
          align-items: center;
        }

        /* decorative blob */
        .cx-hero::before {
          content: '';
          position: absolute;
          top: -80px;
          left: -60px;
          width: 520px;
          height: 520px;
          background: radial-gradient(ellipse at 40% 40%, #e8d5f5 0%, #f0e4fa 45%, transparent 75%);
          border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
          z-index: 0;
          opacity: 0.85;
        }
        .cx-hero::after {
          content: '';
          position: absolute;
          bottom: -60px;
          left: 120px;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, #e8d5f5 0%, transparent 70%);
          border-radius: 50%;
          z-index: 0;
          opacity: 0.5;
        }

        .cx-hero-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 56px 40px 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 40px;
          position: relative;
          z-index: 1;
          width: 100%;
        }

        /* Left content */
        .cx-hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0;
        }

        .cx-hero-heading {
          font-family: 'Inter', sans-serif;
          font-size: clamp(40px, 5vw, 62px);
          font-weight: 800;
          color: #3b1a4a;
          line-height: 1.08;
          margin: 0 0 20px;
          letter-spacing: -0.01em;
        }
        .cx-hero-heading .highlight {
          color: #6b21a8;
        }

        .cx-hero-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14.5px;
          font-weight: 400;
          color: #5a4a6a;
          line-height: 1.7;
          max-width: 440px;
          margin: 0 0 32px;
        }

        .cx-hero-btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .cx-hero-btn-primary {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #fff;
          background: #3b1a4a;
          border: 2px solid #3b1a4a;
          border-radius: 4px;
          padding: 13px 22px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.22s;
          white-space: nowrap;
        }
        .cx-hero-btn-primary:hover {
          background: #5c2d8a;
          border-color: #5c2d8a;
          color: #fff;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(59,26,74,0.22);
        }
        .cx-hero-btn-secondary {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #3b1a4a;
          background: transparent;
          border: 2px solid #3b1a4a;
          border-radius: 4px;
          padding: 13px 22px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.22s;
          white-space: nowrap;
        }
        .cx-hero-btn-secondary:hover {
          background: #3b1a4a;
          color: #fff;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(59,26,74,0.15);
        }

        .cx-hero-disclaimer {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          color: #9a85aa;
          line-height: 1.5;
          font-style: italic;
        }

        /* Right image column */
        .cx-hero-image-col {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          position: relative;
          min-height: 420px;
        }
        .cx-hero-image-wrap {
          position: relative;
          width: 100%;
          max-width: 440px;
          height: 480px;
        }
        .cx-hero-image-wrap img {
          object-fit: contain;
          object-position: bottom right;
          filter: drop-shadow(0 16px 48px rgba(59,26,74,0.18));
          transition: transform 0.4s ease;
        }
        .cx-hero-image-wrap:hover img {
          transform: translateY(-6px) scale(1.015);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .cx-hero-inner {
            grid-template-columns: 1fr;
            padding: 40px 24px 0;
            gap: 24px;
          }
          .cx-hero-image-col {
            justify-content: center;
            min-height: 300px;
          }
          .cx-hero-image-wrap {
            height: 340px;
            max-width: 300px;
          }
          .cx-hero::before { width: 340px; height: 340px; }
        }
        @media (max-width: 480px) {
          .cx-hero-btns { flex-direction: column; }
          .cx-hero-btn-primary, .cx-hero-btn-secondary { justify-content: center; }
        }
      `}</style>

      <section id="canxiol-hero" className="cx-hero">
        <div className="cx-hero-inner">
          {/* Left: Text content */}
          <div className="cx-hero-content">
            <h1 className="cx-hero-heading">
              <span className="highlight">Heal</span> The way<br />
              You Feel
            </h1>
            <p className="cx-hero-desc">
              Canxiol® is a prescription cannabidiol oral solution for the management of mild
              to moderate anxiety disorders, in conjunction with cognitive behavioural therapy
              to be prescribed by Psychiatrists only.
            </p>
            <div className="cx-hero-btns">
              <a href="#" className="cx-hero-btn-primary">Discover Canxiol ↗</a>
              <a href="#" className="cx-hero-btn-secondary">For Psychiatrists ↗</a>
            </div>
            <p className="cx-hero-disclaimer">
              Prescription Only medicine. Use only as directed by Psychiatrist
            </p>
          </div>

          {/* Right: Product image */}
          <div className="cx-hero-image-col">
            <div className="cx-hero-image-wrap">
              <Image
                src="/images/canxiol_bottle_hand.jpg"
                alt="Canxiol Cannabidiol Oral Solution 150mg/mL – hand holding amber dropper bottle"
                fill
                priority
                sizes="(max-width: 900px) 300px, 440px"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
