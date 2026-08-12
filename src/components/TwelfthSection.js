'use client';

export default function TwelfthSection() {
  return (
    <section id="section-12" className="position-relative overflow-hidden w-100" style={{ minHeight: '650px' }}>
      
      {/* Full-Bleed Studio Microphone / Podcast Video Background */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <video 
          src="/videos/section_11_video.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-100 h-100 object-fit-cover d-block"
        />
        {/* Subtle Warm Overlay */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none"
          style={{ backgroundColor: 'rgba(30, 20, 10, 0.15)' }}
        />
      </div>

      {/* Content Container */}
      <div className="container-fluid px-3 px-md-4 px-lg-5 position-relative z-1 py-5 d-flex align-items-center" style={{ minHeight: '650px' }}>
        <div className="max-w-1400 mx-auto w-100">
          
          {/* Floating Podcast Card Box (Left Aligned with Semi-Transparent Glassmorphism Background) */}
          <div
            className="p-4 p-md-5 text-center shadow-lg position-relative ms-0 ms-lg-4"
            style={{
              backgroundColor: 'rgba(248, 232, 182, 0.85)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              maxWidth: '440px',
              border: '1px solid rgba(164, 78, 14, 0.2)',
              borderRadius: '2px'
            }}
          >
            {/* Background Texture/Pattern */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none opacity-20"
              style={{
                backgroundImage: 'radial-gradient(#A44E0E 0.5px, transparent 0.5px)',
                backgroundSize: '12px 12px'
              }}
            />

            {/* Audio Platform Icons (Spotify, Apple Music, YouTube) */}
            <div className="d-flex align-items-center justify-content-center gap-3 mb-4 position-relative z-1">

              {/* Spotify Icon */}
              <a
                href="#spotify"
                className="d-flex align-items-center justify-content-center text-dark text-decoration-none rounded-circle transition-all"
                style={{ width: '40px', height: '40px', backgroundColor: '#000' }}
                aria-label="Listen on Spotify"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFF">
                  <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm5.521 17.341c-.218.359-.683.473-1.042.253-2.859-1.747-6.458-2.142-10.697-1.173-.411.094-.814-.167-.908-.578-.094-.411.167-.814.578-.908 4.636-1.06 8.608-.604 11.816 1.36.359.219.473.684.253 1.046zm1.472-3.275c-.276.448-.868.591-1.316.315-3.272-2.012-8.26-2.596-12.13-1.42-.505.153-1.037-.134-1.19-.639-.153-.505.134-1.037.639-1.19 4.417-1.34 9.912-.686 13.682 1.63.448.276.591.868.315 1.304zm.141-3.419c-3.924-2.33-10.386-2.545-14.153-1.399-.602.183-1.239-.161-1.422-.763-.183-.602.161-1.239.763-1.422 4.316-1.31 11.439-1.06 15.962 1.624.542.322.721 1.026.399 1.568-.321.541-1.025.722-1.549.392z" />
                </svg>
              </a>

              {/* Apple Music / Podcast Icon */}
              <a
                href="#apple-podcasts"
                className="d-flex align-items-center justify-content-center text-dark text-decoration-none rounded-circle transition-all"
                style={{ width: '40px', height: '40px', border: '1px solid #422207', backgroundColor: 'transparent' }}
                aria-label="Listen on Apple Podcasts"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#422207" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
              </a>

              {/* YouTube Icon */}
              <a
                href="#youtube"
                className="d-flex align-items-center justify-content-center text-dark text-decoration-none rounded-circle transition-all"
                style={{ width: '40px', height: '40px', backgroundColor: '#000' }}
                aria-label="Watch on YouTube"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFF">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

            </div>

            {/* Description Paragraph */}
            <p
              className="mb-4 position-relative z-1"
              style={{
                fontFamily: "'Larken', 'Lora', serif",
                fontSize: '15px',
                color: '#422207',
                lineHeight: '1.65',
                fontWeight: 400
              }}
            >
              Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the.
            </p>

            {/* Listen Now Button */}
            <div className="position-relative z-1">
              <a
                href="#listen-now"
                className="btn-figma-outline text-decoration-none px-4 py-2 d-inline-block"
                style={{
                  fontFamily: "'Larken', 'Lora', serif",
                  fontSize: '15px',
                  color: '#422207',
                  border: '1px solid #A44E0E',
                  borderRadius: '2px',
                  backgroundColor: 'transparent',
                  transition: 'all 0.3s ease'
                }}
              >
                Listen Now
              </a>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
