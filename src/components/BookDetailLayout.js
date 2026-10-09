'use client';

import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import BookDetailHero from './BookDetailHero';
import BookMarqueeBanner from './BookMarqueeBanner';
import BookQuoteCallout from './BookQuoteCallout';
import BookExploreMore from './BookExploreMore';

// Shared layout for every book page: hero, scrolling banner, the book's own sections,
// "Explore more" and the order popup. `renderSections(openBuy)` returns the sections that
// differ per book; by default it is just the "Get Your Copy Now" callout.
export default function BookDetailLayout({ book, renderSections }) {
  const [showBuyModal, setShowBuyModal] = useState(false);
  const openBuy = () => setShowBuyModal(true);

  return (
    <main className="min-vh-100 bg-cream text-dark overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <Header activePage="books" />
      <BookDetailHero book={book} onBuyNow={openBuy} />
      <BookMarqueeBanner text={book.marquee} />
      {renderSections ? renderSections(openBuy) : <BookQuoteCallout onGetCopy={openBuy} />}
      <BookExploreMore currentSlug={book.slug} />
      <Footer />

      <BookBuyModal open={showBuyModal} title={book.title} onClose={() => setShowBuyModal(false)} />
    </main>
  );
}

function BookBuyModal({ open, title, onClose }) {
  return (
    <>
      {/* Buy Now / Order Modal */}
      {open && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center px-3"
          style={{
            backgroundColor: 'rgba(66, 34, 7, 0.65)',
            backdropFilter: 'blur(4px)',
            zIndex: 2000
          }}
          onClick={() => onClose()}
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
            <button
              type="button"
              className="position-absolute top-0 end-0 mt-3 me-3 btn btn-sm border-0 text-dark fs-4"
              onClick={() => onClose()}
              aria-label="Close"
            >
              <i className="bi bi-x-lg"></i>
            </button>

            <span 
              className="d-block mb-1"
              style={{
                fontFamily: "'Italianno', cursive",
                fontSize: '32px',
                color: '#A44E0E'
              }}
            >
              order your copy
            </span>

            <h2 
              className="mb-3"
              style={{
                fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                fontSize: '28px',
                color: '#422207'
              }}
            >
              {title}
            </h2>

            <p className="text-muted small mb-4">
              Select your preferred bookstore or retailer below to order the hardcover, paperback, or kindle edition.
            </p>

            <div className="d-flex flex-column gap-3">
              <a 
                href="https://www.amazon.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn py-3 px-4 d-flex align-items-center justify-content-between text-decoration-none shadow-sm rounded-1"
                style={{ backgroundColor: '#FCF8F2', border: '1px solid #E8DCCF', color: '#422207' }}
              >
                <span className="fw-medium">Order on Amazon</span>
                <i className="bi bi-box-arrow-up-right"></i>
              </a>

              <a 
                href="https://www.barnesandnoble.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn py-3 px-4 d-flex align-items-center justify-content-between text-decoration-none shadow-sm rounded-1"
                style={{ backgroundColor: '#FCF8F2', border: '1px solid #E8DCCF', color: '#422207' }}
              >
                <span className="fw-medium">Barnes &amp; Noble</span>
                <i className="bi bi-box-arrow-up-right"></i>
              </a>

              <a 
                href="https://bookshop.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn py-3 px-4 d-flex align-items-center justify-content-between text-decoration-none shadow-sm rounded-1"
                style={{ backgroundColor: '#FCF8F2', border: '1px solid #E8DCCF', color: '#422207' }}
              >
                <span className="fw-medium">Support Local Bookstores (Bookshop.org)</span>
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </div>

            <div className="mt-4 pt-2">
              <span className="small text-muted">
                Looking for a signed author copy? <a href="/#contact" className="text-decoration-underline" style={{ color: '#A44E0E' }}>Contact Monika directly</a>
              </span>
            </div>
          </div>
        </div>
      )}

    </>
  );
}
