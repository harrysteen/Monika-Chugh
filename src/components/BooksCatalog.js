'use client';

import { useState } from 'react';

export default function BooksCatalog() {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'upcoming'
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeModalBook, setActiveModalBook] = useState(null);
  const [buyModalBook, setBuyModalBook] = useState(null);

  const categories = ['All', 'Newly Launched', 'Affirmations', 'Poetry & Quotes', 'Guided Journals'];

  const allBooks = [
    {
      id: 1,
      tag: 'Newly Launched',
      category: 'Poetry & Quotes',
      title: 'Pirate ipsum arrgh bounty warp',
      subtitle: 'Quote Café: Thoughts in a Cup',
      image: '/images/books/book2.png',
      description: "Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the. Round dock jones' fluke sails overhaul man jib schooner.",
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
      tag: 'category',
      category: 'Affirmations',
      title: 'Pirate ipsum arrgh bounty warp',
      subtitle: 'A Quiet Home with Affirmations',
      image: '/images/books/book1.png',
      description: "Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the. Round dock jones' fluke sails overhaul man jib schooner.",
      price: '$21.50',
      pages: '224 pages',
      publisher: 'Serenity House Publishing',
      isbn: '978-1-954321-02-9',
      synopsis: 'A Quiet Home with Affirmations invites you into a gentle sanctuary of daily positive affirmations, lyrical reflections, and transformative self-love practices. Designed with ethereal butterfly motifs, it guides readers toward grounding serenity and inner peace.',
      quotes: [
        '"A peaceful home is built not of brick and mortar, but of the thoughts you choose to harbor."',
        '"Whisper gentleness to yourself, for you are blooming in quiet ways."'
      ]
    }
  ];

  const upcomingBooks = [
    {
      id: 3,
      tag: 'Coming Autumn 2026',
      category: 'Guided Journals',
      title: 'Whispers of the Lotus',
      subtitle: 'A Guided Journey into Inner Stillness',
      image: '/images/book_cover.png',
      description: 'Rooted in the timeless symbolism of the lotus that rises through still water and unfolds gracefully, this upcoming journal offers guided prompts, meditative reflections, and sacred spaces for personal growth.',
      releaseDate: 'October 2026',
      status: 'In Production'
    }
  ];

  // Filter books based on active tab and selected category
  const filteredBooks = allBooks.filter((book) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Newly Launched') return book.tag === 'Newly Launched';
    return book.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  return (
    <section className="pt-4 pb-5 bg-cream" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5 max-w-1400 mx-auto">
        
        {/* Books Framed Box matching the Figma Screenshot */}
        <div 
          className="bg-transparent position-relative mx-auto"
          style={{
            maxWidth: '1280px'
          }}
        >

          {/* Top Bar Header with Tabs & Category Dropdown */}
          <div className="d-flex flex-wrap align-items-center justify-content-between px-2 pb-2 mb-0 position-relative">
            
            {/* Left Tabs: "All Books" & "Upcoming Releases" */}
            <div className="d-flex align-items-center gap-4 gap-md-5">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className="bg-transparent border-0 p-0 text-decoration-none"
                style={{
                  fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                  fontSize: '19px',
                  color: '#422207',
                  fontWeight: activeTab === 'all' ? 700 : 400,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.02em'
                }}
              >
                All Books
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('upcoming')}
                className="bg-transparent border-0 p-0 text-decoration-none"
                style={{
                  fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                  fontSize: '18px',
                  color: activeTab === 'upcoming' ? '#422207' : '#8C827A',
                  fontWeight: activeTab === 'upcoming' ? 600 : 400,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                Upcoming Releases
              </button>
            </div>

            {/* Right: Category Dropdown */}
            <div className="position-relative mt-2 mt-sm-0">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="bg-transparent border-0 d-flex align-items-center gap-2 p-0"
                style={{
                  fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                  fontSize: '18px',
                  color: '#422207',
                  cursor: 'pointer',
                  fontWeight: 400
                }}
              >
                <span>{selectedCategory === 'All' ? 'Category' : selectedCategory}</span>
                <i className={`bi bi-chevron-down fs-7 transition-all ${dropdownOpen ? 'rotate-180' : ''}`} style={{ fontSize: '13px' }}></i>
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div 
                  className="position-absolute end-0 mt-2 py-2 shadow-sm rounded-1"
                  style={{
                    backgroundColor: '#FFFDF9',
                    border: '1px solid #E2D5C3',
                    minWidth: '200px',
                    zIndex: 100
                  }}
                >
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat);
                        setDropdownOpen(false);
                      }}
                      className="d-block w-100 text-start px-3 py-2 border-0 bg-transparent"
                      style={{
                        fontFamily: "'Larken', 'Lora', serif",
                        fontSize: '14px',
                        color: selectedCategory === cat ? '#62350A' : '#4A423B',
                        backgroundColor: selectedCategory === cat ? '#F8EEDF' : 'transparent',
                        fontWeight: selectedCategory === cat ? 600 : 400,
                        cursor: 'pointer',
                        transition: 'background-color 0.15s ease'
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Catalog Content - Tab: All Books */}
          {activeTab === 'all' && (
            <div 
              className="d-flex flex-column gap-5 p-3 p-md-4 p-lg-5"
              style={{
                border: '1px solid #C4A57B',
                marginTop: '12px'
              }}
            >
              {filteredBooks.length === 0 ? (
                <div className="text-center py-5">
                  <p className="text-muted font-body mb-3">No books found in this category.</p>
                  <button 
                    onClick={() => setSelectedCategory('All')} 
                    className="btn btn-sm btn-outline-secondary px-3 py-1"
                  >
                    View All Books
                  </button>
                </div>
              ) : (
                filteredBooks.map((book, idx) => (
                  <div 
                    key={book.id} 
                    className="row align-items-center g-4 g-lg-5"
                    style={{
                      paddingBottom: idx !== filteredBooks.length - 1 ? '1.5rem' : '0'
                    }}
                  >
                    {/* Left Column: Book Flatlay Image */}
                    <div className="col-12 col-md-6 col-lg-5 text-center">
                      <div 
                        className="book-image-flatlay-wrap overflow-hidden mx-auto rounded-1"
                        style={{
                          maxWidth: '460px',
                          cursor: 'pointer'
                        }}
                        onClick={() => setActiveModalBook(book)}
                      >
                        <img 
                          src={book.image} 
                          alt={book.title} 
                          className="img-fluid w-100 h-auto d-block mx-auto rounded-1"
                          style={{
                            objectFit: 'contain',
                            maxHeight: '340px',
                            transition: 'transform 0.4s ease'
                          }}
                        />
                      </div>
                    </div>

                    {/* Right Column: Book Details */}
                    <div className="col-12 col-md-6 col-lg-7">
                      <div className="d-flex flex-column align-items-start text-start">
                        
                        {/* Tag Badge */}
                        <div className="mb-3">
                          <span 
                            className="book-tag-pill"
                            style={{
                              backgroundColor: '#FDF4DF',
                              color: '#62350A',
                              fontFamily: "'Larken', 'Lora', serif",
                              fontSize: '13px',
                              padding: '5px 16px',
                              borderRadius: '2px',
                              display: 'inline-block',
                              border: '1px solid rgba(196, 165, 123, 0.25)'
                            }}
                          >
                            {book.tag}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 
                          className="mb-3"
                          style={{
                            fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                            fontSize: '26px',
                            color: '#422207',
                            fontWeight: 400,
                            lineHeight: '1.25',
                            letterSpacing: '0.02em'
                          }}
                        >
                          {book.title}
                        </h2>

                        {/* Description Paragraph */}
                        <p 
                          className="mb-4"
                          style={{
                            fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                            fontSize: '14.5px',
                            color: '#4A423B',
                            lineHeight: '1.68',
                            fontWeight: 400,
                            maxWidth: '560px'
                          }}
                        >
                          {book.description}
                        </p>

                        {/* Action Buttons: Learn More & Buy Now */}
                        <div className="d-flex flex-wrap align-items-center gap-3 w-100" style={{ maxWidth: '440px' }}>
                          <button
                            type="button"
                            onClick={() => setActiveModalBook(book)}
                            className="book-action-btn flex-grow-1 text-center"
                            style={{
                              padding: '9px 22px',
                              border: '1px solid #A44E0E',
                              color: '#422207',
                              backgroundColor: 'transparent',
                              fontFamily: "'Larken', 'Lora', serif",
                              fontSize: '14.5px',
                              borderRadius: '2px',
                              transition: 'all 0.25s ease',
                              cursor: 'pointer'
                            }}
                          >
                            Learn More
                          </button>

                          <button
                            type="button"
                            onClick={() => setBuyModalBook(book)}
                            className="book-action-btn flex-grow-1 text-center"
                            style={{
                              padding: '9px 22px',
                              border: '1px solid #A44E0E',
                              color: '#422207',
                              backgroundColor: 'transparent',
                              fontFamily: "'Larken', 'Lora', serif",
                              fontSize: '14.5px',
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
                ))
              )}
            </div>
          )}

          {/* Catalog Content - Tab: Upcoming Releases */}
          {activeTab === 'upcoming' && (
            <div 
              className="p-3 p-md-4 p-lg-5"
              style={{
                border: '1px solid #C4A57B',
                marginTop: '12px'
              }}
            >
              {upcomingBooks.map((item) => (
                <div key={item.id} className="row align-items-center g-4 g-lg-5 py-3">
                  <div className="col-12 col-md-5 text-center">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="img-fluid rounded shadow-sm mx-auto d-block"
                      style={{ maxHeight: '320px', objectFit: 'contain' }}
                    />
                  </div>
                  <div className="col-12 col-md-7">
                    <span 
                      className="book-tag-pill mb-3"
                      style={{
                        backgroundColor: '#FDF4DF',
                        color: '#62350A',
                        fontFamily: "'Larken', 'Lora', serif",
                        fontSize: '13px',
                        padding: '5px 16px',
                        borderRadius: '2px',
                        display: 'inline-block'
                      }}
                    >
                      {item.tag}
                    </span>
                    <h2 
                      className="mb-2"
                      style={{
                        fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                        fontSize: '28px',
                        color: '#422207',
                        fontWeight: 400
                      }}
                    >
                      {item.title}
                    </h2>
                    <h4 
                      className="mb-3 text-muted"
                      style={{
                        fontFamily: "'Italianno', cursive",
                        fontSize: '24px',
                        color: '#A44E0E'
                      }}
                    >
                      {item.subtitle}
                    </h4>
                    <p 
                      className="mb-4"
                      style={{
                        fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                        fontSize: '15px',
                        color: '#4A423B',
                        lineHeight: '1.65',
                        maxWidth: '560px'
                      }}
                    >
                      {item.description}
                    </p>
                    
                    <div className="p-3 mb-4 rounded-1" style={{ backgroundColor: '#F8EEDF', border: '1px dashed #C4A57B', maxWidth: '440px' }}>
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="text-dark fw-medium small">Expected Release:</span>
                        <span className="badge bg-white text-dark border px-2 py-1">{item.releaseDate}</span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <span className="text-dark fw-medium small">Production Status:</span>
                        <span className="text-success small fw-semibold">{item.status}</span>
                      </div>
                    </div>

                    <div className="d-flex gap-2" style={{ maxWidth: '440px' }}>
                      <input 
                        type="email" 
                        placeholder="Enter email for early bird launch..." 
                        className="form-control"
                        style={{
                          fontFamily: "'Larken', 'Lora', serif",
                          fontSize: '14px',
                          borderColor: '#C4A57B',
                          backgroundColor: '#FFFDF9'
                        }}
                      />
                      <button 
                        type="button"
                        className="btn-figma-bronze text-nowrap px-3 py-2"
                        onClick={() => alert('Thank you! You will receive early access notification upon release.')}
                      >
                        Notify Me
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

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
                  src={activeModalBook.image} 
                  alt={activeModalBook.title} 
                  className="img-fluid rounded shadow-sm mb-3"
                  style={{ maxHeight: '280px', objectFit: 'contain' }}
                />
                <span className="book-tag-pill">{activeModalBook.tag}</span>
              </div>
              <div className="col-12 col-md-7">
                <span className="d-block text-muted small mb-1">{activeModalBook.category}</span>
                <h3 
                  className="mb-1"
                  style={{
                    fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                    fontSize: '26px',
                    color: '#422207'
                  }}
                >
                  {activeModalBook.subtitle || activeModalBook.title}
                </h3>
                <p className="text-muted small mb-3">By Monika Chugh • {activeModalBook.pages}</p>

                <h5 className="fs-6 fw-bold text-dark mb-2">Synopsis & Essence:</h5>
                <p className="small text-body mb-3 leading-relaxed">{activeModalBook.synopsis}</p>

                <div className="p-3 mb-3 rounded" style={{ backgroundColor: '#F8EEDF', borderLeft: '3px solid #A44E0E' }}>
                  <p className="small fst-italic mb-0 text-dark font-handwriting fs-5">
                    {activeModalBook.quotes?.[0]}
                  </p>
                </div>

                <div className="d-flex align-items-center justify-content-between pt-2 border-top">
                  <div>
                    <span className="d-block text-muted small">Price</span>
                    <span className="fs-5 fw-bold text-dark">{activeModalBook.price}</span>
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

            <span className="book-tag-pill mb-2">{buyModalBook.tag}</span>
            <h3 
              className="mt-2 mb-1"
              style={{
                fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                fontSize: '24px',
                color: '#422207'
              }}
            >
              {buyModalBook.subtitle || buyModalBook.title}
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
                <span className="fw-bold text-dark">{buyModalBook.price}</span>
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
                    <strong className="d-block text-dark small">Barnes & Noble</strong>
                    <span className="text-muted extra-small" style={{ fontSize: '12px' }}>Standard Edition & NOOK eBook</span>
                  </div>
                </div>
                <span className="fw-bold text-dark">{buyModalBook.price}</span>
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

    </section>
  );
}
