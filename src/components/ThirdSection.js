'use client';

import { useState } from 'react';

export default function ThirdSection() {
  const books = [
    {
      id: 1,
      title: "Mindset Mentor",
      cover: "/images/home_section3_mindset_mentor_small.svg",
      bigBook: "/images/home_section3_mindset_mentor_big.svg",
      description: "A living collection of affirmation words that shaped my own journey and now belong to you. Let them meet you in your uncertain moments and walk with you toward the person you aspire to be.",
      cta: "Notify Me"
    },
    {
      id: 2,
      title: "Pañcha",
      cover: "/images/home_section3_pancha_small.svg",
      bigBook: "/images/home_section3_pancha_big.svg",
      description: "Before I studied Ayurveda, I wrote from raw emotions. Later, I discovered the five elements had been there all along. Pañcha is that silent opening: five elements, five poems each, one whole.",
      cta: "Notify Me"
    },
    {
      id: 3,
      title: "It's 12:01 am, Whispers of the Night.",
      cover: "/images/home_section3_whispers_1201_small.svg",
      bigBook: "/images/home_section3_whispers_1201_big.svg",
      description: "My silent conversation with myself, before I close my eyes to sleep at night.\nI have my favorites, simple yet powerful.\nAnd here they are for you.",
      cta: "Notify Me"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [notifyModalOpen, setNotifyModalOpen] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState('');
  const [notifySubmitted, setNotifySubmitted] = useState(false);

  const prevBook = () => {
    setCurrentIndex((prev) => (prev === 0 ? books.length - 1 : prev - 1));
  };

  const nextBook = () => {
    setCurrentIndex((prev) => (prev === books.length - 1 ? 0 : prev + 1));
  };

  const handleNotifySubmit = (e) => {
    e.preventDefault();
    if (notifyEmail.trim()) {
      setNotifySubmitted(true);
      setTimeout(() => {
        setNotifyModalOpen(false);
        setNotifySubmitted(false);
        setNotifyEmail('');
      }, 2500);
    }
  };

  const currentBook = books[currentIndex];

  return (
    <section id="new-releases" className="py-5 bg-cream overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5">

        {/* Section Header */}
        <div className="text-center mb-4 mb-md-5">
          <span
            className="d-block mb-1"
            style={{
              fontFamily: "'Italianno', cursive",
              fontSize: 'clamp(24px, 3vw, 28px)',
              color: '#A44E0E',
              fontWeight: 400,
              lineHeight: '100%'
            }}
          >
            upcoming &amp; new releases
          </span>
        </div>

        {/* Content Row */}
        <div className="row align-items-center g-4 g-lg-5 max-w-1400 mx-auto">

          {/* Left Column: Big Book Image with "launching soon..." label */}
          <div className="col-12 col-lg-6">
            <div className="w-100 mx-auto" style={{ maxWidth: '590px' }}>
              <div
                className="mb-2 ps-1 text-start"
                style={{
                  fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                  fontSize: 'clamp(17px, 2vw, 20px)',
                  color: '#422207',
                  fontStyle: 'normal',
                  letterSpacing: '0.01em'
                }}
              >
                launching soon...
              </div>
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
                <div className="book-cover-wrapper position-relative d-flex align-items-center justify-content-center" style={{ minHeight: '230px' }}>
                  <img
                    key={currentBook.id + '-small'}
                    src={currentBook.cover}
                    alt={currentBook.title}
                    className="img-fluid rounded shadow-sm"
                    style={{ maxHeight: '230px', maxWidth: '175px', width: 'auto', objectFit: 'contain', transition: 'all 0.4s ease-in-out' }}
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
                  fontSize: 'clamp(26px, 3.2vw, 32px)',
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
                  fontFamily: "'Larken-Light', 'Larken-Thin', 'Larken', 'Lora', serif",
                  fontSize: '15px',
                  color: '#4A423B',
                  lineHeight: '1.65',
                  fontWeight: 300,
                  maxWidth: '520px',
                  whiteSpace: 'pre-line',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale'
                }}
              >
                {currentBook.description}
              </p>

              {/* Notify Me CTA Button */}
              <button
                type="button"
                onClick={() => setNotifyModalOpen(true)}
                className="btn text-decoration-none d-inline-flex align-items-center justify-content-center px-5 py-2 transition-all section3-cta-btn"
                style={{
                  fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                  fontSize: '15px',
                  fontWeight: 400,
                  color: '#422207',
                  border: '1px solid #C4A57B',
                  borderRadius: '2px',
                  backgroundColor: '#FFFDF9',
                  minWidth: '180px',
                  boxShadow: '0 1px 3px rgba(66, 34, 7, 0.05)',
                  transition: 'all 0.3s ease'
                }}
              >
                {currentBook.cta}
              </button>

            </div>
          </div>

        </div>

      </div>

      {/* Notify Me Modal */}
      {notifyModalOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center px-3"
          style={{ backgroundColor: 'rgba(66, 34, 7, 0.45)', backdropFilter: 'blur(3px)', zIndex: 1050 }}
          onClick={() => setNotifyModalOpen(false)}
        >
          <div
            className="p-4 p-md-5 rounded shadow-lg text-center position-relative"
            style={{ backgroundColor: '#FFFDF9', maxWidth: '460px', width: '100%', border: '1px solid #E2D5C3' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 m-3"
              onClick={() => setNotifyModalOpen(false)}
              aria-label="Close"
            ></button>

            <span
              className="d-block mb-1"
              style={{ fontFamily: "'Italianno', cursive", fontSize: '28px', color: '#A44E0E' }}
            >
              early access &amp; release updates
            </span>
            <h4
              className="mb-2"
              style={{ fontFamily: "'Beautique Display', 'Cormorant Garamond', serif", color: '#422207' }}
            >
              {currentBook.title}
            </h4>
            <p
              className="small mb-4"
              style={{ color: '#5C5248', fontFamily: "'Larken-Light', 'Lora', serif" }}
            >
              Leave your email below to be the first to know the moment this book is released.
            </p>

            {notifySubmitted ? (
              <div className="alert alert-success py-2 mb-0" style={{ backgroundColor: '#F4EEE5', color: '#62350A', borderColor: '#E2D5C3' }}>
                Thank you! We&apos;ll notify you when <strong>{currentBook.title}</strong> is released.
              </div>
            ) : (
              <form onSubmit={handleNotifySubmit}>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={notifyEmail}
                    onChange={(e) => setNotifyEmail(e.target.value)}
                    className="form-control"
                    style={{ backgroundColor: '#FFFFFF', borderColor: '#C4A57B', color: '#422207' }}
                  />
                  <button
                    type="submit"
                    className="btn px-4"
                    style={{ backgroundColor: '#A44E0E', color: '#FFFFFF', borderColor: '#A44E0E' }}
                  >
                    Notify Me
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        .section3-cta-btn:hover {
          background-color: #F4EEE5 !important;
          border-color: #A44E0E !important;
          color: #A44E0E !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
