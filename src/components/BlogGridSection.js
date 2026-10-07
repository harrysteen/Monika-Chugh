'use client';

import { useEffect, useState } from 'react';
import { BLOG_CATEGORIES } from '../sanity/categories';

const POSTS_PER_PAGE = 9;

export default function BlogGridSection({ posts = [], searchQuery = '' }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Only show category tabs that have at least one blog, in the standard order
  const usedCategories = new Set(posts.map((p) => p.category));
  const categories = ['All', ...BLOG_CATEGORIES.filter((c) => usedCategories.has(c))];

  const query = searchQuery.trim().toLowerCase();
  const filteredBlogs = posts.filter((blog) => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch =
      !query ||
      blog.title.toLowerCase().includes(query) ||
      blog.category.toLowerCase().includes(query) ||
      blog.excerpt.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / POSTS_PER_PAGE));
  const pageBlogs = filteredBlogs.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  // Go back to page 1 whenever the filter or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, query]);

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
              fontSize: 'clamp(21px, 2.2vw, 26px)',
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

            {/* Pagination Controls - only when there is more than one page */}
            {totalPages > 1 && (
              <div className="d-flex align-items-center gap-2" style={{ fontFamily: "'Larken-Light', 'Larken-Thin', 'Lora', serif", fontSize: '14px', fontWeight: 300, color: '#7A6F66' }}>
                <button
                  type="button"
                  className="btn btn-sm p-1 border-0 text-muted"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  aria-label="Previous Page"
                >
                  <i className="bi bi-chevron-left"></i>
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    type="button"
                    className={`btn btn-sm px-1 py-0 border-0 ${currentPage === page ? 'fw-bold text-dark' : 'text-muted'}`}
                    onClick={() => setCurrentPage(page)}
                    aria-label={`Page ${page}`}
                    aria-current={currentPage === page ? 'page' : undefined}
                  >
                    {page}
                  </button>
                ))}

                <button
                  type="button"
                  className="btn btn-sm p-1 border-0 text-muted"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  aria-label="Next Page"
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            )}

          </div>

          {/* 3-Column Framed Grid Container */}
          <div
            className="p-3 p-md-4 p-lg-4"
            style={{
              border: '1px solid #C4A57B',
              marginTop: '8px'
            }}
          >
            {pageBlogs.length === 0 ? (
              <div className="text-center py-5">
                <p className="text-muted font-body mb-3">
                  {posts.length === 0 ? 'New blogs are on their way. Please check back soon.' : 'No blogs found matching your filter or search.'}
                </p>
                {posts.length > 0 && (
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className="btn btn-sm btn-outline-secondary px-3 py-1"
                  >
                    Show All Blogs
                  </button>
                )}
              </div>
            ) : (
              <div className="row g-4 g-lg-4">
                {pageBlogs.map((blog, idx) => (
                  <div key={`${blog.slug}-${idx}`} className="col-12 col-md-6 col-lg-4">
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
                        href={`/blogs/${blog.slug}`}
                        className="blog-card-image-wrap d-block text-decoration-none"
                      >
                        <img
                          src={blog.image}
                          alt={blog.imageAlt}
                        />
                      </a>

                      {/* Blog Title */}
                      <a
                        href={`/blogs/${blog.slug}`}
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
                        href={`/blogs/${blog.slug}`}
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
    </section>
  );
}
