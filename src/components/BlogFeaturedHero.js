'use client';

export default function BlogFeaturedHero({ onSearch, searchQuery, onOpenFeatured }) {
  return (
    <section className="pt-4 pb-4 bg-cream" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5 max-w-1400 mx-auto">
        
        {/* Search Bar matching Figma */}
        <div className="text-center mb-5">
          <input
            type="text"
            placeholder="Search for any blog..."
            value={searchQuery}
            onChange={(e) => onSearch && onSearch(e.target.value)}
            className="blog-search-box mx-auto text-center"
          />
        </div>

        {/* Featured "Recently Added Blog" Card */}
        <div 
          className="blog-featured-card-wrap p-4 p-md-5 mx-auto"
          style={{
            maxWidth: '1280px'
          }}
        >
          <div className="row align-items-center g-4 g-lg-5">
            
            {/* Left Column: Text & Read Blog CTA */}
            <div className="col-12 col-lg-6 text-center text-lg-start pe-lg-4">
              <span 
                className="d-block mb-3"
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

              <p 
                className="mb-4"
                style={{
                  fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                  fontSize: '15px',
                  color: '#4A423B',
                  lineHeight: '1.7',
                  fontWeight: 300,
                  maxWidth: '520px'
                }}
              >
                Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the. Round dock jones' fluke sails overhaul man jib schooner.
              </p>

              <div>
                <button
                  type="button"
                  onClick={onOpenFeatured}
                  className="book-action-btn px-5 py-2"
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
                </button>
              </div>
            </div>

            {/* Right Column: Featured Image */}
            <div className="col-12 col-lg-6 text-center">
              <div 
                className="overflow-hidden rounded-1 mx-auto shadow-sm"
                style={{
                  maxWidth: '540px',
                  aspectRatio: '16 / 10',
                  cursor: 'pointer'
                }}
                onClick={onOpenFeatured}
              >
                <img 
                  src="/images/blogs/featured_guru.jpg" 
                  alt="Recently Added Blog" 
                  className="w-100 h-100 d-block"
                  style={{ 
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
