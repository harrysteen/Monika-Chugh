'use client';

export default function SixthSection() {
  const blogs = [
    {
      id: 1,
      title: "Pirate ipsum me Pirate ipsum me",
      image: "/images/home_section6_img1.svg",
      excerpt: "Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the."
    },
    {
      id: 2,
      title: "Pirate ipsum me Pirate ipsum me",
      image: "/images/home_section6_img2.svg",
      excerpt: "Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the."
    },
    {
      id: 3,
      title: "Pirate ipsum me Pirate ipsum me",
      image: "/images/home_section6_img3.svg",
      excerpt: "Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the."
    }
  ];

  return (
    <section id="blogs" className="py-5 bg-cream overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5">
        
        {/* Section Header + View All Button */}
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between mb-5 position-relative max-w-1400 mx-auto">
          <div className="mx-auto text-center">
            <span 
              className="d-block mb-1"
              style={{
                fontFamily: "'Italianno', cursive",
                fontSize: '32px',
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
              Pirate ipsum me
            </h2>
          </div>

          <a 
            href="#blogs" 
            className="btn-figma-outline text-decoration-none px-4 py-2 mt-3 mt-md-0 position-md-absolute end-0"
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

        {/* 3-Column Frame Container */}
        <div className="max-w-1400 mx-auto border border-cream rounded-1 overflow-hidden" style={{ backgroundColor: '#FAF6F0' }}>
          <div className="row g-0">
            {blogs.map((blog, idx) => (
              <div 
                key={blog.id} 
                className="col-12 col-md-4 p-4 p-lg-5 text-center d-flex flex-column align-items-center justify-content-between"
                style={{
                  borderRight: idx < blogs.length - 1 ? '1px solid #E2D5C3' : 'none'
                }}
              >
                <div>
                  {/* Blog Title */}
                  <h3 
                    className="mb-4"
                    style={{
                      fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                      fontSize: '20px',
                      color: '#422207',
                      fontWeight: 400,
                      lineHeight: '1.3'
                    }}
                  >
                    {blog.title}
                  </h3>

                  {/* Blog Image */}
                  <div className="mb-4 overflow-hidden rounded-1 mx-auto" style={{ width: '100%', maxWidth: '280px', aspectRatio: '1/1' }}>
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-100 h-100 object-cover d-block"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  {/* Excerpt Paragraph */}
                  <p 
                    className="mb-4 mx-auto"
                    style={{
                      fontFamily: "'Larken', 'Lora', serif",
                      fontSize: '14px',
                      color: '#4A423B',
                      lineHeight: '1.6',
                      fontWeight: 400,
                      maxWidth: '300px'
                    }}
                  >
                    {blog.excerpt}
                  </p>
                </div>

                {/* Read Me Button */}
                <a 
                  href={`#blog-${blog.id}`} 
                  className="btn-figma-outline text-decoration-none px-4 py-2 mt-2"
                  style={{
                    fontFamily: "'Larken', 'Lora', serif",
                    fontSize: '14px',
                    color: '#422207',
                    border: '1px solid #A44E0E',
                    borderRadius: '2px',
                    backgroundColor: 'transparent',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Read Me
                </a>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
