'use client';

export default function MyStoryAbout() {
  return (
    <section className="py-5 bg-cream position-relative" id="story-about">
      <div className="container px-3 px-md-4 px-lg-5 text-center">
        
        {/* Section Header */}
        <div className="mb-5">
          <span className="font-handwriting fs-2 text-bronze d-block mb-1" style={{ color: '#A44E0E' }}>
            a little about me
          </span>
          <h2 className="font-big-header display-5 fw-normal text-dark">
            Rooted in Purpose, Inspired by Life
          </h2>
        </div>

        {/* 2-Column Content with Botanical Illustration in Center */}
        <div className="row align-items-center justify-content-center g-4 text-start">
          
          {/* Column 1 */}
          <div className="col-lg-5">
            <p className="font-paragraph text-body fs-6 leading-relaxed mb-0" style={{ color: '#4A423B' }}>
              My journey has been a continuous exploration of self-discovery, resilience, and transformation. As an author, artist, and speaker, I strive to weave stories and art that awaken the soul, encourage emotional healing, and spark profound personal growth.
            </p>
          </div>

          {/* Center Line Illustration (Lotus / Botanical Flower) */}
          <div className="col-lg-2 text-center py-3 py-lg-0">
            <svg width="48" height="96" viewBox="0 0 48 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="d-inline-block">
              <path d="M24 0V96" stroke="#C4A57B" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M24 32C18 24 10 28 12 38C14 48 24 54 24 54C24 54 34 48 36 38C38 28 30 24 24 32Z" stroke="#8C6239" strokeWidth="1.5" fill="none" />
              <path d="M24 40C20 34 14 37 15 44C16 51 24 54 24 54C24 54 32 51 33 44C34 37 28 34 24 40Z" stroke="#A44E0E" strokeWidth="1" fill="#F8EEDF" />
              <circle cx="24" cy="54" r="3" fill="#62350A" />
            </svg>
          </div>

          {/* Column 2 */}
          <div className="col-lg-5">
            <p className="font-paragraph text-body fs-6 leading-relaxed mb-0" style={{ color: '#4A423B' }}>
              Every word written and every canvas painted stems from a deep commitment to inspiring others. Whether through books, poetry, or workshops, my endeavor is to help individuals reconnect with their truth and embrace their own unique path with courage and joy.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
