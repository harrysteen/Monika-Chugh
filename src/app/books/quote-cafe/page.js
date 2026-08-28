'use client';

import { useState } from 'react';
import Header from '../../../components/Header';
import BookDetailHero from '../../../components/BookDetailHero';
import BookMarqueeBanner from '../../../components/BookMarqueeBanner';
import BookWhatYoullDiscover from '../../../components/BookWhatYoullDiscover';
import BookQuoteCallout from '../../../components/BookQuoteCallout';
import BookWhatInspiredMe from '../../../components/BookWhatInspiredMe';
import BookPraiseTestimonials from '../../../components/BookPraiseTestimonials';
import BookExploreMore from '../../../components/BookExploreMore';
import Footer from '../../../components/Footer';

export default function QuoteCafeDetailPage() {
  const [showBuyModal, setShowBuyModal] = useState(false);

  return (
    <main className="min-vh-100 bg-cream text-dark overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <Header activePage="books" />
      <BookDetailHero onBuyNow={() => setShowBuyModal(true)} />
      <BookMarqueeBanner />
      <BookWhatYoullDiscover />
      <BookQuoteCallout onGetCopy={() => setShowBuyModal(true)} />
      <BookWhatInspiredMe />
      <BookPraiseTestimonials />
      <BookExploreMore />
      <Footer />

      {/* Buy Now / Order Modal */}
      {showBuyModal && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center px-3"
          style={{
            backgroundColor: 'rgba(66, 34, 7, 0.65)',
            backdropFilter: 'blur(4px)',
            zIndex: 2000
          }}
          onClick={() => setShowBuyModal(false)}
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
              onClick={() => setShowBuyModal(false)}
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
              Quote Cafe – Thoughts In a Cup
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

    </main>
  );
}
