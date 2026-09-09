'use client';

import { useRef } from 'react';

export default function MyStoryExpressions() {
  const sliderRef = useRef(null);

  const roles = [
    {
      title: 'Doctor',
      image: '/images/mystory/graduation.png',
      buttonText: 'Learn More',
      link: '/#doctor'
    },
    {
      title: 'Author',
      image: '/images/mystory/author.png',
      buttonText: 'Read My Books',
      link: '/#books'
    },
    {
      title: 'Writer',
      image: '/images/mystory/writing_desk.png',
      buttonText: 'Read My Articles',
      link: '/#articles'
    },
    {
      title: 'Poet',
      image: '/images/mystory/poet.png',
      buttonText: 'Read My Poems',
      link: '/#poems'
    },
    {
      title: 'Rotarian',
      image: '/images/mystory/note_portrait.png',
      buttonText: 'Community Work',
      link: '/#rotary'
    },
    {
      title: 'Domestic Violence Counselor',
      image: '/images/mystory/hero_monika.png',
      buttonText: 'Advocacy & Support',
      link: '/#advocacy'
    },
    {
      title: 'Mindfulness Wellness Advocate',
      image: '/images/mystory/artist.png',
      buttonText: 'Wellness Practice',
      link: '/#wellness'
    },
    {
      title: 'Ayurvedic Counselor',
      image: '/images/mystory/childhood.png',
      buttonText: 'Holistic Health',
      link: '/#ayurveda'
    },
    {
      title: 'Art Board Commissioner',
      image: '/images/mystory/artist.png',
      buttonText: 'View Works',
      link: '/#art-board'
    }
  ];

  const handlePrev = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.querySelector('.role-card-item')?.offsetWidth || 300;
      sliderRef.current.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.querySelector('.role-card-item')?.offsetWidth || 300;
      sliderRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-5 bg-cream position-relative" id="story-expressions">
      <div className="container-fluid px-3 px-md-4 px-xl-5 text-center" style={{ maxWidth: '1380px' }}>
        
        {/* Section Header */}
        <div className="mb-5 pb-2">
          <span 
            className="d-block mb-1" 
            style={{ 
              fontFamily: "'Italianno', cursive", 
              fontSize: '24px', 
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
              fontSize: '24px',
              color: '#422207',
              letterSpacing: '0.01em',
              lineHeight: 1.25
            }}
          >
            Living Through Many Roles
          </h2>
        </div>

        {/* Roles Cards Container */}
        <div className="position-relative px-2 px-md-4 px-lg-5">
          
          {/* Left Arrow Button */}
          <button 
            className="position-absolute top-50 translate-middle-y d-flex align-items-center justify-content-center"
            onClick={handlePrev}
            aria-label="Previous role"
            style={{ 
              left: '0px',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              border: '1px solid #C4A57B',
              backgroundColor: '#FFFDF9',
              color: '#62350A',
              zIndex: 10,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#A44E0E';
              e.currentTarget.style.borderColor = '#A44E0E';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFDF9';
              e.currentTarget.style.borderColor = '#C4A57B';
              e.currentTarget.style.color = '#62350A';
            }}
          >
            <i className="bi bi-chevron-left" style={{ fontSize: '15px' }}></i>
          </button>

          {/* Right Arrow Button */}
          <button 
            className="position-absolute top-50 translate-middle-y d-flex align-items-center justify-content-center"
            onClick={handleNext}
            aria-label="Next role"
            style={{ 
              right: '0px',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              border: '1px solid #C4A57B',
              backgroundColor: '#FFFDF9',
              color: '#62350A',
              zIndex: 10,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#A44E0E';
              e.currentTarget.style.borderColor = '#A44E0E';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFDF9';
              e.currentTarget.style.borderColor = '#C4A57B';
              e.currentTarget.style.color = '#62350A';
            }}
          >
            <i className="bi bi-chevron-right" style={{ fontSize: '15px' }}></i>
          </button>

          {/* Scrollable Track */}
          <div 
            ref={sliderRef}
            className="d-flex overflow-x-auto gap-4 py-2 text-start no-scrollbar"
            style={{
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              scrollSnapType: 'x mandatory'
            }}
          >
            {roles.map((role, idx) => (
              <div 
                key={idx} 
                className="role-card-item flex-shrink-0"
                style={{
                  width: 'calc(25% - 18px)',
                  minWidth: '280px',
                  scrollSnapAlign: 'start'
                }}
              >
                <div 
                  className="h-100 d-flex flex-column text-center"
                  style={{
                    backgroundColor: '#FFFAF2',
                    border: '1px solid #EADBCC',
                    padding: '24px 18px',
                    borderRadius: '2px',
                    boxShadow: '0 2px 10px rgba(66,34,7,0.03)'
                  }}
                >
                  
                  {/* Title in Italianno cursive */}
                  <h3 
                    className="mb-3 d-flex align-items-center justify-content-center text-center" 
                    style={{ 
                      fontFamily: "'Italianno', cursive", 
                      fontSize: '24px', 
                      color: '#422207',
                      lineHeight: '1.2',
                      minHeight: '40px'
                    }}
                  >
                    {role.title}
                  </h3>

                  {/* Role Image */}
                  <div 
                    className="position-relative overflow-hidden mb-4 flex-grow-1" 
                    style={{ height: '340px' }}
                  >
                    <img 
                      src={role.image} 
                      alt={role.title} 
                      className="w-100 h-100"
                      style={{ 
                        objectFit: 'cover',
                        filter: role.isGrayscale ? 'grayscale(100%)' : 'none'
                      }}
                    />
                  </div>

                  {/* Outline CTA Button */}
                  <div className="mt-auto pt-1">
                    <a 
                      href={role.link} 
                      className="btn w-100"
                      style={{
                        fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                        fontSize: '16px',
                        fontWeight: 400,
                        color: '#62350A',
                        border: '1px solid #A44E0E',
                        backgroundColor: 'transparent',
                        borderRadius: '0px',
                        padding: '9px 12px',
                        transition: 'all 0.25s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#A44E0E';
                        e.currentTarget.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#62350A';
                      }}
                    >
                      {role.buttonText}
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
