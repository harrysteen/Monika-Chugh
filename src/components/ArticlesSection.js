'use client';

export default function ArticlesSection() {
  const articles = [
    {
      id: 1,
      title: 'Finally, I am learning to love myself!',
      image: '/images/poems/lavender_hand.jpg',
      excerpt: 'Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl Lubber ava.....',
      href: '/blogs/write-write-write'
    },
    {
      id: 2,
      title: '...and off she goes',
      image: '/images/poems/mother_child.jpg',
      excerpt: 'Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl Lubber ava.....',
      href: '/blogs/write-write-write'
    },
    {
      id: 3,
      title: 'Forgive, Let It Go- Period!',
      image: '/images/blogs/birds.jpg',
      excerpt: 'Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl Lubber ava.....',
      href: '/blogs/write-write-write'
    }
  ];

  return (
    <section className="py-5 bg-cream" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5 max-w-1400 mx-auto">
        
        {/* Section Header + View All Button */}
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between mb-5 position-relative">
          <div className="mx-auto text-center">
            <span 
              className="d-block mb-1"
              style={{
                fontFamily: "'Italianno', cursive",
                fontSize: '34px',
                color: '#A44E0E',
                fontWeight: 400,
                lineHeight: '100%'
              }}
            >
              articles
            </span>
            <h2 
              className="mb-0"
              style={{
                fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                fontSize: '36px',
                color: '#422207',
                fontWeight: 400,
                lineHeight: '1.2',
                letterSpacing: '0.02em'
              }}
            >
              Pirate ipsum me main blimey fluke
            </h2>
          </div>

          <a 
            href="/blogs" 
            className="btn-figma-outline d-inline-block text-decoration-none px-4 py-2 mt-3 mt-md-0 position-md-absolute end-0"
            style={{
              fontFamily: "'Larken', 'Lora', serif",
              fontSize: '15px',
              color: '#422207',
              border: '1px solid #A44E0E',
              borderRadius: '2px',
              backgroundColor: 'transparent',
              transition: 'all 0.3s ease'
            }}
          >
            View All
          </a>
        </div>

        {/* 3 Articles Row */}
        <div className="row g-4 g-lg-5 justify-content-center">
          {articles.map((item) => (
            <div key={item.id} className="col-12 col-md-4">
              <a href={item.href} className="text-decoration-none d-block h-100">
                <div 
                  className="p-3 p-lg-4 rounded-1 h-100 d-flex flex-column justify-content-between"
                  style={{
                    backgroundColor: '#FCF8F2',
                    border: '1px solid #E8DCCF',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div>
                    {/* Thumbnail Image */}
                    <div 
                      className="overflow-hidden rounded-1 mb-3"
                      style={{ aspectRatio: '4 / 3' }}
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-100 h-100 object-cover d-block"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>

                    {/* Article Title */}
                    <h3 
                      className="mb-2 text-center"
                      style={{
                        fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                        fontSize: '20px',
                        color: '#422207',
                        fontWeight: 400,
                        minHeight: '48px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Excerpt */}
                    <p 
                      className="mb-4 text-center"
                      style={{
                        fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                        fontSize: '13.5px',
                        color: '#5C5248',
                        lineHeight: '1.6',
                        fontWeight: 300
                      }}
                    >
                      {item.excerpt}
                    </p>
                  </div>

                  <span 
                    className="blog-read-btn d-block text-center"
                    style={{
                      fontFamily: "'Larken-Thin', 'Larken-Light', 'Lora', serif",
                      fontWeight: 300,
                      letterSpacing: '0.03em'
                    }}
                  >
                    Read Article
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
