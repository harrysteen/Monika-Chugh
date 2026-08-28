'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import BlogFeaturedHero from '../../components/BlogFeaturedHero';
import BlogGridSection from '../../components/BlogGridSection';
import Footer from '../../components/Footer';

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [featuredModalOpen, setFeaturedModalOpen] = useState(false);

  return (
    <main className="min-vh-100 bg-cream text-dark overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <Header activePage="blogs" />
      <BlogFeaturedHero 
        searchQuery={searchQuery} 
        onSearch={setSearchQuery} 
        onOpenFeatured={() => setFeaturedModalOpen(true)}
      />
      <BlogGridSection searchQuery={searchQuery} />
      <Footer />

      {/* Featured Blog Reader Modal */}
      {featuredModalOpen && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center px-3"
          style={{
            backgroundColor: 'rgba(66, 34, 7, 0.65)',
            backdropFilter: 'blur(4px)',
            zIndex: 2000
          }}
          onClick={() => setFeaturedModalOpen(false)}
        >
          <div 
            className="bg-white rounded-2 p-4 p-md-5 position-relative shadow-lg overflow-y-auto"
            style={{
              maxWidth: '780px',
              maxHeight: '90vh',
              backgroundColor: '#FFFDF9',
              border: '1px solid #C4A57B'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="position-absolute top-0 end-0 mt-3 me-3 btn btn-sm border-0 text-dark fs-4"
              onClick={() => setFeaturedModalOpen(false)}
              aria-label="Close"
            >
              <i className="bi bi-x-lg"></i>
            </button>

            <span 
              className="d-block mb-1"
              style={{
                fontFamily: "'Italianno', cursive",
                fontSize: '36px',
                color: '#A44E0E'
              }}
            >
              recently added blog
            </span>

            <h2 
              className="mb-2"
              style={{
                fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                fontSize: '32px',
                color: '#422207'
              }}
            >
              The Sanctuary of Quiet Contemplation
            </h2>

            <div className="d-flex align-items-center gap-3 text-muted small mb-4 pb-2 border-bottom">
              <span>By Monika Chugh</span>
              <span>•</span>
              <span>August 24, 2026</span>
              <span>•</span>
              <span>5 min read</span>
            </div>

            <div className="mb-4 rounded overflow-hidden" style={{ maxHeight: '340px' }}>
              <img 
                src="/images/blogs/featured_guru.jpg" 
                alt="Recently Added Blog" 
                className="w-100 h-100 object-cover d-block"
                style={{ objectFit: 'cover', maxHeight: '340px' }}
              />
            </div>

            <div 
              className="font-body"
              style={{
                fontFamily: "'Larken', 'Lora', serif",
                fontSize: '16px',
                color: '#422207',
                lineHeight: '1.8'
              }}
            >
              <p>
                In a world perpetually demanding our attention and speed, silence is not emptiness—it is the birthplace of all profound clarity and healing. When we deliberately step away from the incessant noise of modern life, we create space for the soul to breathe and recalibrate.
              </p>
              <p>
                Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the. Round dock jones&apos; fluke sails overhaul man jib schooner.
              </p>
              <blockquote className="p-3 my-4 rounded" style={{ backgroundColor: '#F8EEDF', borderLeft: '4px solid #A44E0E' }}>
                <p className="fst-italic mb-0" style={{ color: '#62350A' }}>
                  “The most courageous act of the day is often pausing to listen to the whispers of your own heart before the world tells you who you should be.”
                </p>
              </blockquote>
              <p>
                May you find stillness amidst the swirling currents, and may your journey back to yourself be gentle, patient, and filled with grace.
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
