'use client';

export default function ThirteenthSection() {
  const items = [
    {
      id: 'workshops',
      label: 'workshops &events',
      src: '/images/section_13_workshops.png',
      alt: 'Workshops & Events',
      link: '#events',
      photoLeft: '12.808%',
      photoTop: '4.181%',
      photoWidth: '23.153%',
      photoHeight: '24.390%'
    },
    {
      id: 'podcasts',
      label: 'podcasts',
      src: '/images/section_13_podcast.png',
      alt: 'Podcasts',
      link: '/podcasts',
      photoLeft: '41.215%',
      photoTop: '8.711%',
      photoWidth: '21.839%',
      photoHeight: '34.495%'
    },
    {
      id: 'poet',
      label: 'poet',
      src: '/images/section_13_poet.png',
      alt: 'Poet',
      link: '#poet',
      photoLeft: '69.294%',
      photoTop: '9.408%',
      photoWidth: '30.706%',
      photoHeight: '25.958%'
    },
    {
      id: 'shop',
      label: 'shop',
      src: '/images/section_13_shop.png',
      alt: 'Shop',
      link: '/shop',
      photoLeft: '0%',
      photoTop: '35.192%',
      photoWidth: '27.422%',
      photoHeight: '23.693%'
    },
    {
      id: 'founder',
      label: 'founder',
      src: '/images/section_13_founder.png',
      alt: 'Founder',
      link: '/my-story',
      photoLeft: '79.803%',
      photoTop: '41.812%',
      photoWidth: '19.704%',
      photoHeight: '30.488%'
    },
    {
      id: 'youtube',
      label: 'youtube',
      src: '/images/section_13_youtube.png',
      alt: 'YouTube',
      link: 'https://youtube.com',
      photoLeft: '31.856%',
      photoTop: '48.258%',
      photoWidth: '43.350%',
      photoHeight: '24.390%'
    },
    {
      id: 'author',
      label: 'author',
      src: '/images/section_13_author.png',
      alt: 'Author',
      link: '/books',
      photoLeft: '0.657%',
      photoTop: '65.505%',
      photoWidth: '21.346%',
      photoHeight: '31.707%'
    },
    {
      id: 'writer',
      label: 'writer',
      src: '/images/section_13_writer.png',
      alt: 'Writer',
      link: '/blogs',
      photoLeft: '25.944%',
      photoTop: '79.791%',
      photoWidth: '21.018%',
      photoHeight: '15.854%'
    },
    {
      id: 'substack',
      label: 'substack',
      src: '/images/section_13_substack.png',
      alt: 'Substack',
      link: 'https://substack.com',
      photoLeft: '51.232%',
      photoTop: '79.791%',
      photoWidth: '30.542%',
      photoHeight: '20.209%'
    },
    {
      id: 'doctor',
      label: 'doctor',
      src: '/images/section_13_doctor.png',
      alt: 'Doctor',
      link: '/about',
      photoLeft: '84.729%',
      photoTop: '79.791%',
      photoWidth: '14.778%',
      photoHeight: '15.854%'
    }
  ];

  return (
    <section 
      id="section-13" 
      className="position-relative overflow-hidden w-100 section-13-wrapper py-4 py-md-5" 
      style={{ backgroundColor: '#FFFDF9' }}
    >
      {/* Background Watermark Image Pattern */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none"
        style={{
          backgroundImage: "url('/images/section_13_bg.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.85,
          zIndex: 0
        }}
      />

      {/* Section Header: Cursive Tag + Main Title */}
      <div className="position-relative z-1 text-center max-w-900 mx-auto mb-3 mb-md-4 px-3">
        <span
          className="d-block mb-1"
          style={{
            fontFamily: "'Italianno', cursive",
            fontSize: 'clamp(28px, 3.8vw, 34px)',
            color: '#A44E0E',
            fontWeight: 400,
            lineHeight: '1.1'
          }}
        >
          there&apos;s more to the story
        </span>
        <h2
          className="mb-0"
          style={{
            fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
            fontSize: 'clamp(22px, 3vw, 34px)',
            color: '#422207',
            fontWeight: 400,
            lineHeight: '1.2',
            letterSpacing: '0.02em'
          }}
        >
          More reflections, more stories, more of the walk.
        </h2>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP COLLAGE CANVAS (>= 992px) - Expanded width, zero dead gaps         */}
      {/* ========================================================================= */}
      <div className="container-fluid position-relative z-1 d-none d-lg-block px-3 px-xl-5">
        <div 
          className="position-relative mx-auto section13-desktop-canvas" 
          style={{ 
            width: '100%', 
            maxWidth: '1360px', 
            aspectRatio: '609 / 574' 
          }}
        >
          {items.map((item) => (
            <div 
              key={item.id}
              className="position-absolute transition-all card-item-container"
              style={{ 
                left: item.photoLeft, 
                top: item.photoTop, 
                width: item.photoWidth,
                height: item.photoHeight
              }}
            >
              <a 
                href={item.link} 
                className="text-decoration-none d-block w-100 h-100 position-relative group"
              >
                {/* Header label & thin divider line anchored directly above the photo box */}
                <div 
                  className="position-absolute w-100 pointer-events-none"
                  style={{
                    bottom: '100%',
                    left: 0,
                    paddingBottom: '3px'
                  }}
                >
                  <div className="text-end" style={{ lineHeight: '1', marginBottom: '2px' }}>
                    <span
                      style={{
                        fontFamily: "'Italianno', cursive",
                        fontSize: 'clamp(18px, 1.7vw, 24px)',
                        color: '#A44E0E',
                        lineHeight: '1',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                  <div 
                    style={{ 
                      width: '100%', 
                      height: '1px', 
                      backgroundColor: '#C5A070', 
                      opacity: 0.65 
                    }} 
                  />
                </div>

                {/* Photo Frame */}
                <div 
                  className="w-100 h-100 overflow-hidden shadow-sm rounded-1 border border-cream"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-100 h-100 object-fit-cover d-block"
                    style={{ transition: 'transform 0.4s ease' }}
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE / TABLET RESPONSIVE GRID (< 992px)                                 */}
      {/* ========================================================================= */}
      <div className="container px-3 position-relative z-1 d-lg-none">
        <div className="row g-3 g-md-4">
          {items.map((item) => (
            <div key={`mob-${item.id}`} className="col-6 col-sm-6 col-md-4">
              <a 
                href={item.link} 
                className="text-decoration-none d-block"
              >
                {/* Header line & script label */}
                <div className="w-100 mb-1">
                  <div className="text-end mb-1">
                    <span
                      style={{
                        fontFamily: "'Italianno', cursive",
                        fontSize: '20px',
                        color: '#A44E0E',
                        lineHeight: '1.1',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                  <div 
                    style={{ 
                      width: '100%', 
                      height: '1px', 
                      backgroundColor: '#C5A070', 
                      opacity: 0.6 
                    }} 
                  />
                </div>

                {/* Photo Frame */}
                <div 
                  className="overflow-hidden shadow-sm rounded-1 border border-cream"
                  style={{ width: '100%', aspectRatio: '1 / 1' }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-100 h-100 object-fit-cover d-block"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .card-item-container:hover img {
          transform: scale(1.03);
        }
        .card-item-container:hover span {
          color: #83390B !important;
        }
      `}</style>
    </section>
  );
}
