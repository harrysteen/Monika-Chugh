'use client';

import { useState } from 'react';

export default function BlogGridSection({ searchQuery = '' }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeArticle, setActiveArticle] = useState(null);

  const categories = [
    'All',
    'Spirituality',
    'Growth',
    'Relationships',
    'Travel',
    'Reflections',
    'Wellness',
    'Inspiration'
  ];

  const allBlogs = [
    {
      id: 1,
      category: 'Spirituality',
      title: 'The Silent Ache of a Guru',
      image: '/images/blogs/featured_guru.jpg',
      excerpt: 'Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard...',
      readTime: '5 min read',
      date: 'August 18, 2026',
      content: `The journey of a spiritual guide is often painted as one of effortless tranquility. Yet, behind every luminous presence lies an unspoken ache—the weight of holding space for thousands of seeking hearts while walking the lonely path between human vulnerability and boundless transcendence.

When we sit in the silence of deep meditation, we begin to realize that enlightenment does not divorce us from earthly empathy; rather, it amplifies our connection to every ripple of human joy and suffering.`
    },
    {
      id: 2,
      category: 'Growth',
      title: 'Write. Write. Write...',
      image: '/images/blogs/writing.jpg',
      excerpt: 'Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard...',
      readTime: '4 min read',
      date: 'August 14, 2026',
      content: `There is alchemy in ink meeting paper. When the world is too loud, the journal becomes an unjudging sanctuary. Writing is not merely an artistic performance—it is a mirror through which we disentangle the tangled thoughts that keep us awake at night.

Give yourself permission to write imperfectly, rawly, and authentically. Through steady reflection, clarity gradually emerges from the shadows.`
    },
    {
      id: 3,
      category: 'Relationships',
      title: 'What is love after all?',
      image: '/images/blogs/love.jpg',
      excerpt: 'Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard...',
      readTime: '6 min read',
      date: 'August 10, 2026',
      content: `Love is neither ownership nor an eternal emotional high. In its truest essence, love is unconditional witnessing—the gentle art of allowing another soul to unfold in their fullness without demanding that they bend to fit our expectations.

When two people walk together across the wild meadow of life, true intimacy blossoms not from losing oneself in the other, but from creating a sacred space where both can grow with fearless freedom.`
    },
    {
      id: 4,
      category: 'Travel',
      title: 'Motivators Singing out',
      image: '/images/blogs/travel.jpg',
      excerpt: 'Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard...',
      readTime: '5 min read',
      date: 'August 06, 2026',
      content: `The open road carries an ancient frequency of renewal. Stripping away familiar walls, travel introduces us to the vastness of the horizon and reminds us how small yet significant our place in the universe truly is.

Every winding mountain curve and sun-drenched valley whispers the same forgotten truth: the journey itself is the home we have been searching for all along.`
    },
    {
      id: 5,
      category: 'Wellness',
      title: 'Brimless Soul',
      image: '/images/blogs/birds.jpg',
      excerpt: 'Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard...',
      readTime: '4 min read',
      date: 'August 02, 2026',
      content: `Like a flock of white birds soaring effortlessly into the golden morning dawn, our inner spirit knows no rigid boundaries. We spend so much energy trying to fit into tight boxes created by circumstance, forgetting that our true nature is boundless and expansive.

Take a deep breath. Let go of the need to control the currents of life, and trust the wings that were woven into your spirit.`
    },
    {
      id: 6,
      category: 'Inspiration',
      title: 'Heal',
      image: '/images/blogs/heal.jpg',
      excerpt: 'Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard...',
      readTime: '7 min read',
      date: 'July 28, 2026',
      content: `Healing rarely arrives with trumpets and fireworks. More often, it enters as a gentle shaft of light breaking quietly through overcast clouds on an ordinary afternoon. It is the subtle moment when you realize you no longer flinch at old memories.

Be patient with your healing timeline. The soil must rest in the dark before the flower can blossom in radiance.`
    },
    {
      id: 7,
      category: 'Spirituality',
      title: 'The Silent Ache of a Guru',
      image: '/images/blogs/featured_guru.jpg',
      excerpt: 'Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard...',
      readTime: '5 min read',
      date: 'July 24, 2026',
      content: `Returning to the sacred ground of inner contemplation, we discover that solitude is not isolation—it is communion with the divine source that sustains all living creations.`
    },
    {
      id: 8,
      category: 'Growth',
      title: 'Write. Write. Write...',
      image: '/images/blogs/writing.jpg',
      excerpt: 'Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard...',
      readTime: '4 min read',
      date: 'July 20, 2026',
      content: `To build a creative habit is to honor the gentle whispers of your muse. Write every day, not for applause, but for the quiet clarity that only disciplined reflection can bring.`
    },
    {
      id: 9,
      category: 'Relationships',
      title: 'What is love after all?',
      image: '/images/blogs/love.jpg',
      excerpt: 'Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard...',
      readTime: '6 min read',
      date: 'July 16, 2026',
      content: `Deep connections require vulnerability and courageous communication. When we open our hearts without armor, we discover the transformative grace of reciprocal tenderness.`
    }
  ];

  // Filtering based on tab and search
  const filteredBlogs = allBlogs.filter((blog) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      blog.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      !searchQuery ||
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-4 py-md-5 bg-cream" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5 max-w-1400 mx-auto">
        
        {/* Section Heading matching Figma */}
        <div className="text-center mb-5">
          <span 
            className="d-block mb-1"
            style={{
              fontFamily: "'Italianno', cursive",
              fontSize: '38px',
              color: '#A44E0E',
              fontWeight: 400,
              lineHeight: '100%'
            }}
          >
            blogs
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
            Pirate ipsum me main
          </h2>
        </div>

        {/* Outer Framed Box matching the Figma Screenshot */}
        <div 
          className="bg-transparent position-relative mx-auto"
          style={{
            maxWidth: '1280px'
          }}
        >
          
          {/* Filter Tabs Bar + Pagination Controls */}
          <div className="d-flex flex-wrap align-items-center justify-content-between pb-3 px-1 gap-3">
            
            {/* Category Filter Tabs */}
            <div className="d-flex flex-wrap align-items-center gap-2 gap-md-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`blog-filter-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Pagination Controls matching Figma `< 1 2 3 ... 8 >` */}
            <div className="d-flex align-items-center gap-2" style={{ fontFamily: "'Larken-Light', 'Larken-Thin', 'Lora', serif", fontSize: '14px', fontWeight: 300, color: '#7A6F66' }}>
              <button
                type="button"
                className="btn btn-sm p-1 border-0 text-muted"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                aria-label="Previous Page"
              >
                <i className="bi bi-chevron-left"></i>
              </button>

              <span className={`px-1 cursor-pointer ${currentPage === 1 ? 'fw-bold text-dark' : ''}`} onClick={() => setCurrentPage(1)}>1</span>
              <span className={`px-1 cursor-pointer ${currentPage === 2 ? 'fw-bold text-dark' : ''}`} onClick={() => setCurrentPage(2)}>2</span>
              <span className={`px-1 cursor-pointer ${currentPage === 3 ? 'fw-bold text-dark' : ''}`} onClick={() => setCurrentPage(3)}>3</span>
              <span className="px-1 text-muted">...</span>
              <span className={`px-1 cursor-pointer ${currentPage === 8 ? 'fw-bold text-dark' : ''}`} onClick={() => setCurrentPage(8)}>8</span>

              <button
                type="button"
                className="btn btn-sm p-1 border-0 text-muted"
                onClick={() => setCurrentPage(Math.min(8, currentPage + 1))}
                aria-label="Next Page"
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>

          </div>

          {/* 3-Column Framed Grid Container */}
          <div 
            className="p-3 p-md-4 p-lg-4"
            style={{
              border: '1px solid #C4A57B',
              marginTop: '8px'
            }}
          >
            {filteredBlogs.length === 0 ? (
              <div className="text-center py-5">
                <p className="text-muted font-body mb-3">No blogs found matching your filter or search.</p>
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="btn btn-sm btn-outline-secondary px-3 py-1"
                >
                  Show All Blogs
                </button>
              </div>
            ) : (
              <div className="row g-4 g-lg-4">
                {filteredBlogs.map((blog) => (
                  <div key={blog.id} className="col-12 col-md-6 col-lg-4">
                    <div className="blog-card-figma">
                      
                      {/* Script Category Heading */}
                      <span 
                        className="d-block mb-2"
                        style={{
                          fontFamily: "'Italianno', cursive",
                          fontSize: '32px',
                          color: '#A44E0E',
                          fontWeight: 400,
                          lineHeight: '100%'
                        }}
                      >
                        {blog.category}
                      </span>

                      {/* Blog Thumbnail Image */}
                      <a 
                        href="/blogs/write-write-write"
                        className="blog-card-image-wrap d-block text-decoration-none"
                      >
                        <img 
                          src={blog.image} 
                          alt={blog.title} 
                        />
                      </a>

                      {/* Blog Title */}
                      <a 
                        href="/blogs/write-write-write"
                        className="text-decoration-none"
                      >
                        <h3 
                          className="mb-2"
                          style={{
                            fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                            fontSize: '20px',
                            color: '#422207',
                            fontWeight: 400,
                            lineHeight: '1.25',
                            minHeight: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          {blog.title}
                        </h3>
                      </a>

                      {/* Excerpt Paragraph */}
                      <p 
                        className="mb-4"
                        style={{
                          fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                          fontSize: '13.5px',
                          color: '#5C5248',
                          lineHeight: '1.6',
                          fontWeight: 300
                        }}
                      >
                        {blog.excerpt}
                      </p>

                      {/* Read Blog Action Button */}
                      <a
                        href="/blogs/write-write-write"
                        className="blog-read-btn text-decoration-none"
                        style={{
                          fontFamily: "'Larken-Thin', 'Larken-Light', 'Lora', serif",
                          fontWeight: 300,
                          letterSpacing: '0.03em'
                        }}
                      >
                        Read Blog
                      </a>

                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Full Blog Article Reader Modal */}
      {activeArticle && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center px-3"
          style={{
            backgroundColor: 'rgba(66, 34, 7, 0.65)',
            backdropFilter: 'blur(4px)',
            zIndex: 2000
          }}
          onClick={() => setActiveArticle(null)}
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
            {/* Close Button */}
            <button
              type="button"
              className="position-absolute top-0 end-0 mt-3 me-3 btn btn-sm border-0 text-dark fs-4"
              onClick={() => setActiveArticle(null)}
              aria-label="Close"
            >
              <i className="bi bi-x-lg"></i>
            </button>

            {/* Modal Content */}
            <span 
              className="d-block mb-1"
              style={{
                fontFamily: "'Italianno', cursive",
                fontSize: '34px',
                color: '#A44E0E',
                lineHeight: '100%'
              }}
            >
              {activeArticle.category}
            </span>

            <h2 
              className="mb-2"
              style={{
                fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                fontSize: '32px',
                color: '#422207'
              }}
            >
              {activeArticle.title}
            </h2>

            <div className="d-flex align-items-center gap-3 text-muted small mb-4 pb-2 border-bottom">
              <span>By Monika Chugh</span>
              <span>•</span>
              <span>{activeArticle.date}</span>
              <span>•</span>
              <span>{activeArticle.readTime}</span>
            </div>

            <div className="mb-4 rounded overflow-hidden" style={{ maxHeight: '340px' }}>
              <img 
                src={activeArticle.image} 
                alt={activeArticle.title} 
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
                lineHeight: '1.8',
                whiteSpace: 'pre-line'
              }}
            >
              {activeArticle.content}
            </div>

            <div className="mt-4 pt-3 border-top d-flex align-items-center justify-content-between">
              <span className="text-muted small">Share this reflection</span>
              <div className="d-flex gap-2">
                <button className="btn btn-sm btn-outline-secondary rounded-circle" style={{ width: '36px', height: '36px' }}>
                  <i className="bi bi-facebook"></i>
                </button>
                <button className="btn btn-sm btn-outline-secondary rounded-circle" style={{ width: '36px', height: '36px' }}>
                  <i className="bi bi-twitter-x"></i>
                </button>
                <button className="btn btn-sm btn-outline-secondary rounded-circle" style={{ width: '36px', height: '36px' }}>
                  <i className="bi bi-link-45deg"></i>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
