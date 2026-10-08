'use client';

export default function BlogFeaturedHero({ post, onSearch, searchQuery }) {
  const href = post ? `/blogs/${post.slug}` : '/blogs';

  return (
    <section className="pt-5 pb-4 bg-cream" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5 max-w-1400 mx-auto">

        {/* Search Bar matching Figma */}
        <div className="text-center mt-3 mt-md-4 mb-5">
          <input
            type="text"
            placeholder="Search for any blog..."
            value={searchQuery}
            onChange={(e) => onSearch && onSearch(e.target.value)}
            className="blog-search-box mx-auto text-center"
          />
        </div>

        {/* Featured "Recently Added Blog" Card - the newest post */}
        {post && (
        <div
          className="blog-featured-card-wrap p-4 p-md-5 mx-auto"
          style={{
            maxWidth: '1280px'
          }}
        >
          <div className="row align-items-center g-4 g-lg-5">

            {/* Left Column: Text & Read Blog CTA */}
            <div className="col-12 col-lg-6 text-center px-3 px-lg-4 d-flex flex-column align-items-center justify-content-center">
              <span
                className="d-block mb-3 text-center"
                style={{
                  fontFamily: "'Italianno', cursive",
                  fontSize: '38px',
                  color: '#A44E0E',
                  fontWeight: 400,
                  lineHeight: '100%'
                }}
              >
                recently added blog
              </span>

              <h2
                className="mb-3 text-center"
                style={{
                  fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                  fontSize: '20px',
                  color: '#422207',
                  fontWeight: 400,
                  lineHeight: '1.25'
                }}
              >
                {post.title}
              </h2>

              <p
                className="mb-4 text-center mx-auto"
                style={{
                  fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                  fontSize: '15px',
                  color: '#4A423B',
                  lineHeight: '1.7',
                  fontWeight: 300,
                  maxWidth: '520px',
                  textAlign: 'center',
                  whiteSpace: 'pre-line'
                }}
              >
                {post.excerpt}
              </p>

              <div className="text-center w-100">
                <a
                  href={href}
                  className="book-action-btn px-5 py-2 text-decoration-none d-inline-block"
                  style={{
                    border: '1px solid #A44E0E',
                    backgroundColor: 'transparent',
                    color: '#422207',
                    borderRadius: '2px',
                    fontFamily: "'Larken-Thin', 'Larken-Light', 'Lora', serif",
                    fontWeight: 300,
                    fontSize: '15px',
                    letterSpacing: '0.03em'
                  }}
                >
                  Read Blog
                </a>
              </div>
            </div>

            {/* Right Column: Featured Image */}
            <div className="col-12 col-lg-6 text-center">
              <a
                href={href}
                className="overflow-hidden mx-auto d-block text-decoration-none"
                style={{
                  maxWidth: '390px',
                  aspectRatio: '8 / 7'
                }}
              >
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-100 h-100 d-block"
                  style={{
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                />
              </a>
            </div>

          </div>
        </div>
        )}

      </div>
    </section>
  );
}
