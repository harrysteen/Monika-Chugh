'use client';

import { useState } from 'react';

export default function MyStoryExpressions() {
  const roles = [
    {
      title: 'Author',
      image: '/images/mystory/author.png',
      buttonText: 'Read My Books',
      link: '/#books'
    },
    {
      title: 'Artist',
      image: '/images/mystory/artist.png',
      buttonText: 'View My Canvas',
      link: '/#canvas'
    },
    {
      title: 'Poet',
      image: '/images/mystory/poet.png',
      buttonText: 'Read My Poems',
      link: '/#poems'
    },
    {
      title: 'Podcast',
      image: '/images/mystory/podcast.png',
      buttonText: 'Listen to My Podcast',
      link: '/#podcast'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? roles.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === roles.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-5 bg-cream position-relative" id="story-expressions">
      <div className="container px-3 px-md-4 px-lg-5 text-center">
        
        {/* Section Header */}
        <div className="mb-5 position-relative">
          <span className="font-handwriting fs-2 text-bronze d-block mb-1" style={{ color: '#A44E0E' }}>
            many expressions, one purpose
          </span>
          <h2 className="font-big-header display-5 fw-normal text-dark mb-4">
            Multifaceted Paths of Creative Expression
          </h2>
        </div>

        {/* Roles Carousel / Grid */}
        <div className="position-relative px-2 px-md-4">
          
          {/* Left / Right Carousel Arrow Buttons */}
          <button 
            className="carousel-arrow-btn position-absolute top-50 start-0 translate-middle-y d-none d-md-flex z-3"
            onClick={handlePrev}
            aria-label="Previous role"
            style={{ left: '-15px' }}
          >
            <i className="bi bi-chevron-left fs-5"></i>
          </button>

          <button 
            className="carousel-arrow-btn position-absolute top-50 end-0 translate-middle-y d-none d-md-flex z-3"
            onClick={handleNext}
            aria-label="Next role"
            style={{ right: '-15px' }}
          >
            <i className="bi bi-chevron-right fs-5"></i>
          </button>

          {/* Cards Row */}
          <div className="row g-4 justify-content-center">
            {roles.map((role, idx) => (
              <div key={idx} className="col-12 col-sm-6 col-lg-3">
                <div className="role-card-figma h-100 d-flex flex-column text-center">
                  
                  {/* Script Title Above Image */}
                  <h3 className="font-handwriting display-6 mb-3" style={{ color: '#422207' }}>
                    {role.title}
                  </h3>

                  {/* Role Image */}
                  <div className="position-relative overflow-hidden rounded mb-4 flex-grow-1" style={{ height: '310px' }}>
                    <img 
                      src={role.image} 
                      alt={role.title} 
                      className="w-100 h-100 object-fit-cover transition-transform"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  {/* Outline CTA Button */}
                  <div className="mt-auto pt-2">
                    <a 
                      href={role.link} 
                      className="btn btn-figma-outline w-100 py-2 fs-6 fw-normal"
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
