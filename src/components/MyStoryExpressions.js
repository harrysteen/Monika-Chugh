'use client';

import { useRef, useState, useEffect } from 'react';

export default function MyStoryExpressions() {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const roles = [
    {
      title: 'Founder',
      image: '/images/mystory/about_section4_founder.png',
      buttonText: 'Ārogini',
      link: 'https://www.aarogini.com/'
    },
    {
      title: 'Author',
      image: '/images/mystory/about_section4_author.png',
      buttonText: 'Read My Books',
      link: '/books'
    },
    {
      title: 'Artist',
      image: '/images/mystory/about_section4_artist.png?v=2', // ?v=2 forces browsers to load the replaced photo
      buttonText: 'View My Canvas',
      link: '/#artist'
    },
    {
      title: 'Poet',
      image: '/images/mystory/about_section4_poet.png',
      imagePosition: '82% center',
      buttonText: 'Read My Poems',
      link: '/poems-articles'
    },
    {
      title: 'Podcast',
      image: '/images/section_13_podcast.png',
      imagePosition: 'center 30%',
      buttonText: 'Listen to My Podcast',
      link: '/#podcast'
    },
    {
      title: 'Writer',
      image: '/images/section_13_writer_v2.webp',
      imagePosition: 'center 20%',
      buttonText: 'Read My Articles',
      link: '/poems-articles'
    }
  ];

  const updateScrollState = () => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft < maxScroll - 5);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState);
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  // Scroll by exactly one card (card width + gap)
  const scrollByCard = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('.expression-card');
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = card ? card.offsetWidth + gap : el.clientWidth;
    el.scrollBy({ left: direction === 'left' ? -step : step, behavior: 'smooth' });
  };

  const arrowStyle = (enabled) => ({
    width: '42px',
    height: '42px',
    border: '1px solid #A44E0E',
    color: '#422207',
    backgroundColor: 'transparent',
    opacity: enabled ? 1 : 0.35,
    cursor: enabled ? 'pointer' : 'default'
  });

  return (
    <section className="py-5 bg-cream position-relative" id="story-expressions">
      <div className="container-fluid px-3 px-md-4 px-xl-5 text-center" style={{ maxWidth: '1380px' }}>

        {/* Section Header */}
        <div className="mb-5 pb-2">
          <span
            className="d-block mb-1"
            style={{
              fontFamily: "'Italianno', cursive",
              fontSize: '28px',
              color: '#A44E0E',
              lineHeight: 1.2
            }}
          >
            many expressions, one purpose
          </span>
          <h2
            className="fw-normal"
            style={{
              fontFamily: "'Beautique Display', 'BeautiqueDisplay-Regular', 'Cormorant Garamond', 'Playfair Display', serif",
              fontSize: 'clamp(21px, 2.2vw, 26px)',
              color: '#422207',
              letterSpacing: '0.01em',
              lineHeight: 1.25
            }}
          >
            The pen. The practice. The presence. All one calling.
          </h2>
        </div>

        {/* Cards Carousel: arrows either side of a horizontally scrolling track */}
        <div className="d-flex align-items-center gap-2 gap-md-3">
          <button
            type="button"
            onClick={() => scrollByCard('left')}
            disabled={!canScrollLeft}
            aria-label="Previous cards"
            className="btn rounded-circle p-0 d-flex align-items-center justify-content-center flex-shrink-0"
            style={arrowStyle(canScrollLeft)}
          >
            <i className="bi bi-chevron-left" style={{ fontSize: '14px' }}></i>
          </button>

          <div ref={trackRef} className="expressions-track d-flex flex-grow-1">
          {roles.map((role, idx) => (
            <div key={idx} className="expression-card flex-shrink-0">
              <div
                className="h-100 d-flex flex-column text-center"
                style={{
                  backgroundColor: '#FFFAF2',
                  border: '1px solid #EADBCC',
                  padding: '24px 18px 20px',
                  borderRadius: '2px',
                  boxShadow: '0 2px 10px rgba(66,34,7,0.02)'
                }}
              >
                {/* Title in Larken-Light */}
                <h3
                  className="mb-3 d-flex align-items-center justify-content-center text-center"
                  style={{
                    fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                    fontSize: '18px',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    color: '#422407',
                    lineHeight: '100%',
                    letterSpacing: '0.01em',
                    minHeight: '28px'
                  }}
                >
                  {role.title}
                </h3>

                {/* Role Portrait Image */}
                <div
                  className="position-relative overflow-hidden mb-4"
                  style={{
                    height: '350px',
                    width: '100%'
                  }}
                >
                  <img
                    src={role.image}
                    alt={role.title}
                    className="w-100 h-100"
                    style={{
                      objectFit: 'cover',
                      objectPosition: role.imagePosition || 'center center',
                      display: 'block'
                    }}
                  />
                </div>

                {/* Outline CTA Button */}
                <div className="mt-auto pt-1 px-2 px-xl-3">
                  <a
                    href={role.link}
                    {...(role.link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="btn w-100"
                    style={{
                      fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                      fontSize: '15px',
                      fontWeight: 400,
                      color: '#62350A',
                      border: '1px solid #C4A57B',
                      backgroundColor: 'transparent',
                      borderRadius: '0px',
                      padding: '8px 12px',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#804112';
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.borderColor = '#804112';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#62350A';
                      e.currentTarget.style.borderColor = '#C4A57B';
                    }}
                  >
                    {role.buttonText}
                  </a>
                </div>

              </div>
            </div>
          ))}
          </div>

          <button
            type="button"
            onClick={() => scrollByCard('right')}
            disabled={!canScrollRight}
            aria-label="Next cards"
            className="btn rounded-circle p-0 d-flex align-items-center justify-content-center flex-shrink-0"
            style={arrowStyle(canScrollRight)}
          >
            <i className="bi bi-chevron-right" style={{ fontSize: '14px' }}></i>
          </button>
        </div>

      </div>

      <style jsx>{`
        .expressions-track {
          gap: 1rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .expressions-track::-webkit-scrollbar {
          display: none;
        }
        /* 1 card on phones, 2 on tablets, 4 on desktop; the rest scroll into view */
        .expression-card {
          scroll-snap-align: start;
          width: 100%;
        }
        @media (min-width: 576px) {
          .expression-card {
            width: calc((100% - 1rem) / 2);
          }
        }
        @media (min-width: 992px) {
          .expression-card {
            width: calc((100% - 3rem) / 4);
          }
        }
        @media (min-width: 1200px) {
          .expressions-track {
            gap: 1.5rem;
          }
          .expression-card {
            width: calc((100% - 4.5rem) / 4);
          }
        }
      `}</style>
    </section>
  );
}

