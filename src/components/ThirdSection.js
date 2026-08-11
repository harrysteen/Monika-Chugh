'use client';

import { useState } from 'react';

export default function ThirdSection() {
  const books = [
    {
      id: 1,
      title: "quote cafe",
      cover: "/images/home_section3_small_book.svg",
      bigBook: "/images/home_section3_big_book.svg",
      description: "Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the. Round dock jones' fluke."
    },
    {
      id: 2,
      title: "Lotus Whispers",
      cover: "/images/book_cover.png",
      bigBook: "/images/book_cover.png",
      description: "Rooted in the symbolism of the lotus, a flower that rises through still water and unfolds in its own time, this is not a journal to perform or perfect. It's a sanctuary for thoughts and emotions."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevBook = () => {
    setCurrentIndex((prev) => (prev === 0 ? books.length - 1 : prev - 1));
  };

  const nextBook = () => {
    setCurrentIndex((prev) => (prev === books.length - 1 ? 0 : prev + 1));
  };

  const currentBook = books[currentIndex];

  return (
    <section id="new-releases" className="py-5 bg-cream overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5">
        
        {/* Section Header */}
        <div className="text-center mb-5">
          <span 
            className="d-block mb-1"
            style={{
              fontFamily: "'Italianno', cursive",
              fontSize: '32px',
              color: '#A44E0E',
              fontWeight: 400,
              lineHeight: '100%'
            }}
          >
            new releases
          </span>
          <h2 
            className="mb-0"
            style={{
              fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
              fontSize: '38px',
              color: '#422207',
              fontWeight: 400,
              lineHeight: '1.1',
              letterSpacing: '0.03em'
            }}
          >
            Pirate ipsum me
          </h2>
        </div>

        {/* Content Row */}
        <div className="row align-items-center g-4 g-lg-5 max-w-1400 mx-auto">
          
          {/* Left Column: Big Book Image (Synchronized with selected book) */}
          <div className="col-12 col-lg-6">
            <div className="w-100 overflow-hidden text-center">
              <img 
                key={currentBook.id + '-big'}
                src={currentBook.bigBook} 
                alt={currentBook.title} 
                className="w-100 h-auto d-block mx-auto rounded-1"
                style={{ maxHeight: '520px', objectFit: 'contain', transition: 'all 0.4s ease-in-out' }}
              />
            </div>
          </div>

          {/* Right Column: Book Carousel / Showcase */}
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column align-items-center text-center px-2 px-md-4">
              
              {/* Carousel Row: Left Arrow, Book Cover, Right Arrow */}
              <div className="d-flex align-items-center justify-content-center gap-4 gap-md-5 mb-4 w-100">
                
                {/* Previous Arrow Button */}
                <button 
                  onClick={prevBook}
                  aria-label="Previous Book"
                  className="btn rounded-circle d-flex align-items-center justify-content-center transition-all p-0"
                  style={{
                    width: '42px',
                    height: '42px',
                    border: '1px solid #A44E0E',
                    color: '#422207',
                    backgroundColor: 'transparent',
                    cursor: 'pointer'
                  }}
                >
                  <i className="bi bi-chevron-left" style={{ fontSize: '14px', color: '#422207' }}></i>
                </button>

                {/* Center Book Cover Image */}
                <div className="book-cover-wrapper position-relative">
                  <img 
                    key={currentBook.id + '-small'}
                    src={currentBook.cover} 
                    alt={currentBook.title} 
                    className="img-fluid rounded shadow-sm"
                    style={{ maxHeight: '230px', width: 'auto', objectFit: 'contain', transition: 'all 0.4s ease-in-out' }}
                  />
                </div>

                {/* Next Arrow Button */}
                <button 
                  onClick={nextBook}
                  aria-label="Next Book"
                  className="btn rounded-circle d-flex align-items-center justify-content-center transition-all p-0"
                  style={{
                    width: '42px',
                    height: '42px',
                    border: '1px solid #A44E0E',
                    color: '#422207',
                    backgroundColor: 'transparent',
                    cursor: 'pointer'
                  }}
                >
                  <i className="bi bi-chevron-right" style={{ fontSize: '14px', color: '#422207' }}></i>
                </button>

              </div>

              {/* Book Title */}
              <h3 
                className="mb-3"
                style={{
                  fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                  fontSize: '30px',
                  color: '#422207',
                  fontWeight: 400,
                  lineHeight: '1.2'
                }}
              >
                {currentBook.title}
              </h3>

              {/* Description Paragraph */}
              <p 
                className="mb-4"
                style={{
                  fontFamily: "'Larken', 'Lora', serif",
                  fontSize: '15px',
                  color: '#4A423B',
                  lineHeight: '1.6',
                  fontWeight: 400,
                  maxWidth: '480px'
                }}
              >
                {currentBook.description}
              </p>

              {/* View All Button */}
              <a 
                href="#books" 
                className="btn-figma-outline text-decoration-none d-inline-block px-5 py-2"
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
                View All
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
