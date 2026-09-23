'use client';

import { useState } from 'react';

export default function BooksCatalog() {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'upcoming'
  const [activeModalBook, setActiveModalBook] = useState(null);
  const [buyModalBook, setBuyModalBook] = useState(null);
  const [notifyModalBook, setNotifyModalBook] = useState(null);
  const [notifySuccess, setNotifySuccess] = useState(false);

  const publishedBooks = [
    {
      id: 1,
      tag: 'Newly Launched',
      title: 'Quote Café - Thoughts In a Cup',
      flatlay: '/images/books/book_quote_cafe_flatlay.png',
      cover: '/images/home_section4_book1.svg',
      description: 'What is Quote Café– Thoughts in a Cup? Life throws us surprise curve balls. We all go through the stings and spasms to escape the nerve-wracking circle. No exception; my life took a 360-degree turn with two major life-changing incidents. I was an emotionally shaken wreck with physical wounds...',
      learnMoreLink: '/books/quote-cafe',
      price: '$18.99',
      pages: '192 pages',
      publisher: 'Soulful Press International',
      isbn: '978-1-954321-01-2',
      synopsis: 'Quote Café is a soothing anthology of introspective musings, contemplative verses, and artistic affirmations brewed to comfort the restless heart. Each page serves as a warm cup of inspiration, guiding readers to embrace stillness and mindful introspection.',
      quotes: [
        '"In the quiet corners of your mind, let hope brew slowly like morning coffee."',
        '"You are not the storm; you are the cup that holds the calm."'
      ]
    },
    {
      id: 2,
      tag: null,
      title: 'A Quiet Zone With Affirmations',
      flatlay: '/images/books/book_quiet_zone_flatlay.png',
      cover: '/images/home_section4_book2.svg',
      description: 'A Quiet Zone With Affirmations is my collection of affirmations that helped shape me where I am today. I found my voice in my new space—my journals where I started creating my positive affirmations, and my words echoed back just as I advised my patients, "take care of yourself; the world can wait." Our words to...',
      learnMoreLink: '#',
      price: '$21.50',
      pages: '224 pages',
      publisher: 'Serenity House Publishing',
      isbn: '978-1-954321-02-9',
      synopsis: 'A Quiet Zone With Affirmations invites you into a gentle sanctuary of daily positive affirmations, lyrical reflections, and transformative self-love practices. Designed with ethereal butterfly motifs, it guides readers toward grounding serenity and inner peace.',
      quotes: [
        '"A peaceful home is built not of brick and mortar, but of the thoughts you choose to harbor."',
        '"Whisper gentleness to yourself, for you are blooming in quiet ways."'
      ]
    },
    {
      id: 3,
      tag: null,
      title: 'Rebirth – The Phoenix Rising',
      flatlay: '/images/books/book_rebirth_flatlay.png',
      cover: '/images/home_section4_book3.svg',
      description: 'The phoenix is the symbol of renewal and rebirth. As one life ends, a nest is built, the old phoenix sets fire to itself, and a new one emerges from the ashes. Rebirth and renewal are never easy, as the stories of these brave women will testify. Each shares a story of a fragmented and fractured life. To feel safe and secure often means stepping through layers of darkness and fragments of yourself to find the light and a way back to who you truly are...',
      learnMoreLink: '#',
      price: '$22.00',
      pages: '240 pages',
      publisher: 'Phoenix Literary Works',
      isbn: '978-1-954321-03-6',
      synopsis: 'Rebirth and renewal are never easy, as the stories of these brave women will testify. To feel safe and secure often means stepping through layers of darkness and fragments of yourself to find the light and a way back to who you truly are.',
      quotes: [
        '"From the ashes of what was, the soul shapes its wings to rise anew."'
      ]
    }
  ];

  const upcomingBooks = [
    {
      id: 4,
      title: 'Pañcha',
      flatlay: '/images/books/book_pancha_flatlay.png',
      cover: '/images/home_section3_pancha_big.svg',
      description: 'Before I studied Ayurveda, I wrote from raw emotions. Later, I discovered the five elements had been there all along. Pañcha is that silent opening: five elements, five poems each, one whole.'
    },
    {
      id: 5,
      title: 'Mindset Mentor',
      flatlay: '/images/books/book_mindset_mentor_flatlay.png',
      cover: '/images/home_section3_mindset_mentor_big.svg',
      description: 'Mindset mentor is a living collection of affirmation words that shaped my own journey and now belong to you. Let them meet you in your uncertain moments and walk with you toward the person you aspire to be.'
    },
    {
      id: 6,
      title: "It's 12:01 am, Whispers of the Night.",
      flatlay: '/images/books/book_whispers_flatlay.png',
      cover: '/images/home_section3_whispers_1201_big.svg',
      description: 'My silent conversation with myself, before I close my eyes to sleep at night. I have my favorites, simple yet powerful. And here they are for you.'
    }
  ];

  return (
    <section className="pt-4 pb-5 overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5 max-w-1400 mx-auto">
        
        {/* Books Framed Catalog Box matching the Figma Design */}
        <div className="bg-transparent position-relative mx-auto" style={{ maxWidth: '1240px' }}>

          {/* Top Tabs Header: "All Books" & "Upcoming Releases" */}
          <div className="d-flex align-items-center gap-4 gap-md-5 px-1 pb-3 mb-0">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className="bg-transparent border-0 p-0 text-decoration-none"
              style={{
                fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                fontSize: '18px',
                color: activeTab === 'all' ? '#1F140C' : '#8A7E74',
                fontWeight: activeTab === 'all' ? 700 : 400,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                letterSpacing: '0.01em'
              }}
            >
              All Books
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('upcoming')}
              className="bg-transparent border-0 p-0 text-decoration-none"
              style={{
                fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                fontSize: '18px',
                color: activeTab === 'upcoming' ? '#1F140C' : '#8A7E74',
                fontWeight: activeTab === 'upcoming' ? 700 : 400,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                letterSpacing: '0.01em'
              }}
            >
              Upcoming Releases
            </button>
          </div>

          {/* Catalog Framed Box Container */}
          <div 
            className="p-3 p-md-4 p-lg-5"
            style={{
              border: '1px solid #D8C3A5',
              backgroundColor: '#FFFDF9',
              borderRadius: '2px'
            }}
          >
            
            {/* TAB 1: ALL BOOKS (PUBLISHED) */}
            {activeTab === 'all' && (
              <div className="d-flex flex-column gap-5">
                {publishedBooks.map((book, idx) => (
                  <div 
                    key={book.id} 
                    className="row align-items-center g-4 g-lg-5"
                    style={{
                      paddingBottom: idx !== publishedBooks.length - 1 ? '1.5rem' : '0'
                    }}
                  >
                    {/* Left Column: Book Flatlay Image on Fabric Background */}
                    <div className="col-12 col-md-6 col-lg-6">
                      <div 
                        className="overflow-hidden w-100 rounded-1"
                        style={{
                          aspectRatio: '16 / 9',
                          maxHeight: '320px',
                          cursor: 'pointer'
                        }}
                        onClick={() => {
                          if (book.learnMoreLink !== '#') {
                            window.location.href = book.learnMoreLink;
                          } else {
                            setActiveModalBook(book);
                          }
                        }}
                      >
                        <img 
                          src={book.flatlay} 
                          alt={book.title} 
                          className="w-100 h-100 object-fit-cover d-block rounded-1"
                          style={{ transition: 'transform 0.4s ease' }}
                        />
                      </div>
                    </div>

                    {/* Right Column: Book Details */}
                    <div className="col-12 col-md-6 col-lg-6">
                      <div className="d-flex flex-column align-items-start text-start">
                        
                        {/* Tag Pill (if applicable) */}
                        {book.tag && (
                          <div className="mb-3">
                            <span 
                              style={{
                                backgroundColor: '#FAF0D7',
                                color: '#62350A',
                                fontFamily: "'Larken-Light', 'Larken-Thin', 'Lora', serif",
                                fontSize: '13px',
                                fontWeight: 400,
                                padding: '4px 14px',
                                borderRadius: '2px',
                                display: 'inline-block'
                              }}
                            >
                              {book.tag}
                            </span>
                          </div>
                        )}

                        {/* Title */}
                        <h2 
                          className="mb-3"
                          style={{
                            fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                            fontSize: 'clamp(20px, 2.2vw, 24px)',
                            color: '#26160B',
                            fontWeight: 600,
                            lineHeight: '1.25',
                            letterSpacing: '0.01em'
                          }}
                        >
                          {book.title}
                        </h2>

                        {/* Description */}
                        <p 
                          className="mb-4"
                          style={{
                            fontFamily: "'Larken-Light', 'Larken-Thin', 'Lora', serif",
                            fontSize: '13.5px',
                            color: '#4A423B',
                            lineHeight: '1.68',
                            fontWeight: 300,
                            maxWidth: '520px',
                            WebkitFontSmoothing: 'antialiased'
                          }}
                        >
                          {book.description}
                        </p>

                        {/* Two Action Buttons: Learn More & Buy Now */}
                        <div className="d-flex align-items-center gap-3 w-100" style={{ maxWidth: '440px' }}>
                          <a
                            href={book.learnMoreLink}
                            onClick={(e) => {
                              if (book.learnMoreLink === '#') {
                                e.preventDefault();
                                setActiveModalBook(book);
                              }
                            }}
                            className="books-btn-outline flex-grow-1 text-center text-decoration-none"
                            style={{
                              padding: '8px 20px',
                              border: '1px solid #C4A57B',
                              color: '#7B380E',
                              backgroundColor: '#FFFDF9',
                              fontFamily: "'Larken-Light', 'Larken-Thin', 'Lora', serif",
                              fontSize: '13.5px',
                              fontWeight: 300,
                              borderRadius: '2px',
                              transition: 'all 0.25s ease',
                              display: 'inline-block'
                            }}
                          >
                            Learn More
                          </a>

                          <button
                            type="button"
                            onClick={() => setBuyModalBook(book)}
                            className="books-btn-outline flex-grow-1 text-center"
                            style={{
                              padding: '8px 20px',
                              border: '1px solid #C4A57B',
                              color: '#7B380E',
                              backgroundColor: '#FFFDF9',
                              fontFamily: "'Larken-Light', 'Larken-Thin', 'Lora', serif",
                              fontSize: '13.5px',
                              fontWeight: 300,
                              borderRadius: '2px',
                              transition: 'all 0.25s ease',
                              cursor: 'pointer'
                            }}
                          >
                            Buy Now
                          </button>
                        </div>

                      </div>
                    </div>

                  </div>
                ))}
              </div>
            )}

            {/* TAB 2: UPCOMING RELEASES */}
            {activeTab === 'upcoming' && (
              <div className="d-flex flex-column gap-5">
                {upcomingBooks.map((item, idx) => (
                  <div 
                    key={item.id} 
                    className="row align-items-center g-4 g-lg-5"
                    style={{
                      paddingBottom: idx !== upcomingBooks.length - 1 ? '1.5rem' : '0'
                    }}
                  >
                    {/* Left Column: Flatlay Image on Fabric Background */}
                    <div className="col-12 col-md-6 col-lg-6">
                      <div 
                        className="overflow-hidden w-100 rounded-1"
                        style={{
                          aspectRatio: '16 / 9',
                          maxHeight: '320px'
                        }}
                      >
                        <img 
                          src={item.flatlay} 
                          alt={item.title} 
                          className="w-100 h-100 object-fit-cover d-block rounded-1"
                          style={{ transition: 'transform 0.4s ease' }}
                        />
                      </div>
                    </div>

                    {/* Right Column: Book Details */}
                    <div className="col-12 col-md-6 col-lg-6">
                      <div className="d-flex flex-column align-items-start text-start">
                        
                        {/* Title */}
                        <h2 
                          className="mb-3"
                          style={{
                            fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                            fontSize: 'clamp(20px, 2.2vw, 24px)',
                            color: '#26160B',
                            fontWeight: 600,
                            lineHeight: '1.25',
                            letterSpacing: '0.01em'
                          }}
                        >
                          {item.title}
                        </h2>

                        {/* Description */}
                        <p 
                          className="mb-4"
                          style={{
                            fontFamily: "'Larken-Light', 'Larken-Thin', 'Lora', serif",
                            fontSize: '13.5px',
                            color: '#4A423B',
                            lineHeight: '1.68',
                            fontWeight: 300,
                            maxWidth: '520px',
                            WebkitFontSmoothing: 'antialiased'
                          }}
                        >
                          {item.description}
                        </p>

                        {/* Single Action Button: Notify Me with Bell Icon */}
                        <div className="w-100" style={{ maxWidth: '320px' }}>
                          <button
                            type="button"
                            onClick={() => {
                              setNotifyModalBook(item);
                              setNotifySuccess(false);
                            }}
                            className="books-btn-outline w-100 d-inline-flex align-items-center justify-content-center gap-2"
                            style={{
                              padding: '9px 24px',
                              border: '1px solid #C4A57B',
                              color: '#7B380E',
                              backgroundColor: '#FFFDF9',
                              fontFamily: "'Larken-Light', 'Larken-Thin', 'Lora', serif",
                              fontSize: '14px',
                              fontWeight: 300,
                              borderRadius: '2px',
                              transition: 'all 0.25s ease',
                              cursor: 'pointer'
                            }}
                          >
                            <span>Notify Me</span>
                            {/* Delicate Outline Bell Icon */}
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                          </button>
                        </div>

                      </div>
                    </div>

                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Learn More Modal Dialog */}
      {activeModalBook && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center px-3"
          style={{
            backgroundColor: 'rgba(66, 34, 7, 0.65)',
            backdropFilter: 'blur(4px)',
            zIndex: 2000
          }}
          onClick={() => setActiveModalBook(null)}
        >
          <div 
            className="bg-white rounded-2 p-4 p-md-5 position-relative shadow-lg overflow-y-auto"
            style={{
              maxWidth: '720px',
              maxHeight: '90vh',
              backgroundColor: '#FFFDF9',
              border: '1px solid #C4A57B'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              className="position-absolute top-0 end-0 mt-3 me-3 btn btn-sm border-0 text-dark fs-4"
              onClick={() => setActiveModalBook(null)}
              aria-label="Close"
            >
              <i className="bi bi-x-lg"></i>
            </button>

            <div className="row g-4 align-items-start">
              <div className="col-12 col-md-5 text-center">
                <img 
                  src={activeModalBook.cover || activeModalBook.flatlay} 
                  alt={activeModalBook.title} 
                  className="img-fluid rounded shadow-sm mb-3"
                  style={{ maxHeight: '280px', objectFit: 'contain' }}
                />
                {activeModalBook.tag && <span className="book-tag-pill">{activeModalBook.tag}</span>}
              </div>
              <div className="col-12 col-md-7">
                <h3 
                  className="mb-1"
                  style={{
                    fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                    fontSize: '26px',
                    color: '#422207'
                  }}
                >
                  {activeModalBook.title}
                </h3>
                <p className="text-muted small mb-3">By Monika Chugh • {activeModalBook.pages || 'Author Edition'}</p>

                <h5 className="fs-6 fw-bold text-dark mb-2">Synopsis:</h5>
                <p className="small text-body mb-3 leading-relaxed" style={{ fontFamily: "'Larken-Light', 'Lora', serif", fontWeight: 300 }}>
                  {activeModalBook.synopsis || activeModalBook.description}
                </p>

                {activeModalBook.quotes?.[0] && (
                  <div className="p-3 mb-3 rounded" style={{ backgroundColor: '#F8EEDF', borderLeft: '3px solid #A44E0E' }}>
                    <p className="small fst-italic mb-0 text-dark" style={{ fontFamily: "'Italianno', cursive", fontSize: '20px' }}>
                      {activeModalBook.quotes[0]}
                    </p>
                  </div>
                )}

                <div className="d-flex align-items-center justify-content-between pt-2 border-top">
                  <div>
                    <span className="d-block text-muted small">Price</span>
                    <span className="fs-5 fw-bold text-dark">{activeModalBook.price || '$19.99'}</span>
                  </div>
                  <button
                    type="button"
                    className="btn-figma-bronze px-4 py-2"
                    onClick={() => {
                      const b = activeModalBook;
                      setActiveModalBook(null);
                      setBuyModalBook(b);
                    }}
                  >
                    Buy This Book
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

      {/* Buy Now Modal Dialog */}
      {buyModalBook && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center px-3"
          style={{
            backgroundColor: 'rgba(66, 34, 7, 0.65)',
            backdropFilter: 'blur(4px)',
            zIndex: 2000
          }}
          onClick={() => setBuyModalBook(null)}
        >
          <div 
            className="bg-white rounded-2 p-4 p-md-5 position-relative shadow-lg text-center"
            style={{
              maxWidth: '520px',
              backgroundColor: '#FFFDF9',
              border: '1px solid #C4A57B'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              className="position-absolute top-0 end-0 mt-3 me-3 btn btn-sm border-0 text-dark fs-4"
              onClick={() => setBuyModalBook(null)}
              aria-label="Close"
            >
              <i className="bi bi-x-lg"></i>
            </button>

            <h3 
              className="mt-2 mb-1"
              style={{
                fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                fontSize: '24px',
                color: '#422207'
              }}
            >
              {buyModalBook.title}
            </h3>
            <p className="text-muted small mb-4">Choose your preferred reading format and retailer</p>

            <div className="d-flex flex-column gap-2 mb-4 text-start">
              <a 
                href="https://amazon.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="d-flex align-items-center justify-content-between p-3 rounded border text-decoration-none text-dark hover-bg-light"
                style={{ borderColor: '#E2D5C3', backgroundColor: '#FFFFFF', transition: 'all 0.2s ease' }}
              >
                <div className="d-flex align-items-center gap-3">
                  <i className="bi bi-amazon fs-4 text-warning"></i>
                  <div>
                    <strong className="d-block text-dark small">Amazon Worldwide</strong>
                    <span className="text-muted extra-small" style={{ fontSize: '12px' }}>Paperback, Hardcover & Kindle</span>
                  </div>
                </div>
                <span className="fw-bold text-dark">{buyModalBook.price || '$18.99'}</span>
              </a>

              <a 
                href="https://barnesandnoble.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="d-flex align-items-center justify-content-between p-3 rounded border text-decoration-none text-dark hover-bg-light"
                style={{ borderColor: '#E2D5C3', backgroundColor: '#FFFFFF', transition: 'all 0.2s ease' }}
              >
                <div className="d-flex align-items-center gap-3">
                  <i className="bi bi-book fs-4 text-success"></i>
                  <div>
                    <strong className="d-block text-dark small">Barnes &amp; Noble</strong>
                    <span className="text-muted extra-small" style={{ fontSize: '12px' }}>Standard Edition &amp; NOOK eBook</span>
                  </div>
                </div>
                <span className="fw-bold text-dark">{buyModalBook.price || '$18.99'}</span>
              </a>

              <a 
                href="#contact" 
                onClick={() => setBuyModalBook(null)}
                className="d-flex align-items-center justify-content-between p-3 rounded border text-decoration-none text-dark"
                style={{ borderColor: '#C4A57B', backgroundColor: '#FDF4DF', transition: 'all 0.2s ease' }}
              >
                <div className="d-flex align-items-center gap-3">
                  <i className="bi bi-pen fs-4" style={{ color: '#A44E0E' }}></i>
                  <div>
                    <strong className="d-block small" style={{ color: '#62350A' }}>Signed Author Copy</strong>
                    <span className="text-muted extra-small" style={{ fontSize: '12px' }}>Includes custom handwritten note</span>
                  </div>
                </div>
                <span className="badge bg-dark text-white px-2 py-1">Limited</span>
              </a>
            </div>

            <p className="extra-small text-muted mb-0" style={{ fontSize: '12px' }}>
              Free standard shipping available on qualifying domestic book orders.
            </p>
          </div>
        </div>
      )}

      {/* Notify Me Modal Dialog */}
      {notifyModalBook && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center px-3"
          style={{
            backgroundColor: 'rgba(66, 34, 7, 0.65)',
            backdropFilter: 'blur(4px)',
            zIndex: 2000
          }}
          onClick={() => setNotifyModalBook(null)}
        >
          <div 
            className="bg-white rounded-2 p-4 p-md-5 position-relative shadow-lg text-center"
            style={{
              maxWidth: '480px',
              backgroundColor: '#FFFDF9',
              border: '1px solid #C4A57B'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              className="position-absolute top-0 end-0 mt-3 me-3 btn btn-sm border-0 text-dark fs-4"
              onClick={() => setNotifyModalBook(null)}
              aria-label="Close"
            >
              <i className="bi bi-x-lg"></i>
            </button>

            <span 
              className="d-block mb-1"
              style={{
                fontFamily: "'Italianno', cursive",
                fontSize: '28px',
                color: '#A44E0E'
              }}
            >
              upcoming release
            </span>

            <h3 
              className="mb-2"
              style={{
                fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                fontSize: '22px',
                color: '#422207'
              }}
            >
              {notifyModalBook.title}
            </h3>

            <p 
              className="mb-4"
              style={{
                fontFamily: "'Larken-Light', 'Lora', serif",
                fontSize: '13.5px',
                color: '#4A423B',
                lineHeight: '1.6'
              }}
            >
              Enter your email to receive an early access announcement when this book launches.
            </p>

            {notifySuccess ? (
              <div className="alert alert-success py-2 px-3 small" style={{ backgroundColor: '#EBF6EC', color: '#276738', borderColor: '#C8E6C9' }}>
                Thank you! You will be notified the moment this book is released.
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  setNotifySuccess(true);
                  setTimeout(() => setNotifyModalBook(null), 2500);
                }}
                className="d-flex flex-column gap-3"
              >
                <input 
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="form-control px-3 py-2"
                  style={{
                    fontFamily: "'Larken-Light', 'Lora', serif",
                    fontSize: '14px',
                    borderColor: '#C4A57B',
                    backgroundColor: '#FFFDF9'
                  }}
                />
                <button
                  type="submit"
                  className="btn py-2 text-white"
                  style={{
                    backgroundColor: '#7B380E',
                    borderColor: '#7B380E',
                    fontFamily: "'Larken-Light', 'Lora', serif",
                    fontSize: '14px',
                    fontWeight: 400
                  }}
                >
                  Notify Me Upon Launch
                </button>
              </form>
            )}

          </div>
        </div>
      )}

      <style jsx>{`
        .books-btn-outline:hover {
          background-color: #7B380E !important;
          color: #FFFDF9 !important;
          border-color: #7B380E !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(123, 56, 14, 0.2);
        }
      `}</style>
    </section>
  );
}
