import { PortableText } from 'next-sanity';
import { imageUrl } from '../sanity/lib/client';

// How each part of a Sanity blog body is drawn, in the site's blog styling
const bodyComponents = {
  block: {
    normal: ({ children }) => <p className="mb-4">{children}</p>,
    h2: ({ children }) => (
      <h2
        className="my-4 pt-2"
        style={{
          fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
          fontSize: '28px',
          color: '#422207',
          fontWeight: 400,
          lineHeight: '1.3'
        }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className="my-3"
        style={{
          fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
          fontSize: '22px',
          color: '#422207',
          fontWeight: 400,
          lineHeight: '1.3'
        }}
      >
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="p-3 my-4 rounded" style={{ backgroundColor: '#F8EEDF', borderLeft: '4px solid #A44E0E' }}>
        <p className="fst-italic mb-0" style={{ color: '#62350A' }}>{children}</p>
      </blockquote>
    )
  },
  marks: {
    strong: ({ children }) => <strong className="fw-medium text-dark">{children}</strong>,
    link: ({ children, value }) => {
      const external = value?.href?.startsWith('http');
      return (
        <a
          href={value?.href}
          style={{ color: '#A44E0E' }}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </a>
      );
    }
  },
  types: {
    image: ({ value }) => (
      <figure className="my-4">
        <img src={imageUrl(value, 1400)} alt={value?.alt || ''} className="w-100 h-auto d-block rounded-1" />
        {value?.caption && (
          <figcaption className="mt-2 text-center small" style={{ color: '#8C827A' }}>
            {value.caption}
          </figcaption>
        )}
      </figure>
    )
  }
};

export default function BlogPostView({ post, latestPosts = [], relatedPosts = [] }) {
  return (
    <article className="py-4 py-md-5 bg-cream" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5 max-w-1400 mx-auto">

        {/* Post Title & Signature */}
        <div className="text-center mb-4 pb-2">
          <h1
            className="mb-1"
            style={{
              fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
              fontSize: '44px',
              color: '#422207',
              fontWeight: 400,
              letterSpacing: '0.02em',
              lineHeight: 1.15
            }}
          >
            {post.title}
          </h1>
          <span
            className="d-block"
            style={{
              fontFamily: "'Italianno', cursive",
              fontSize: '28px',
              color: '#A44E0E',
              fontWeight: 400
            }}
          >
            ~monikachugh
          </span>
        </div>

        {/* Framed Hero Image */}
        {post.heroImage && (
          <div
            className="mx-auto mb-5 p-2"
            style={{
              border: '1px solid #C4A57B',
              maxWidth: '1200px'
            }}
          >
            <div className="overflow-hidden" style={{ maxHeight: '640px' }}>
              <img
                src={post.heroImage}
                alt={post.imageAlt}
                className="w-100 h-auto d-block"
                style={{
                  objectFit: 'cover',
                  maxHeight: '620px'
                }}
              />
            </div>
          </div>
        )}

        {/* Article Body: 2 Columns (Sidebar on Left + Content on Right) */}
        <div className="row g-4 g-lg-5 mx-auto mb-5 pb-4" style={{ maxWidth: '1200px' }}>

          {/* Left Sidebar: Latest Blogs */}
          <div className="col-12 col-lg-4 col-xl-3">
            {latestPosts.length > 0 && (
              <div className="blog-sidebar-box">
                <h3
                  className="mb-4 text-center text-lg-start"
                  style={{
                    fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                    fontSize: '20px',
                    color: '#422207',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase'
                  }}
                >
                  Latest Blogs
                </h3>

                <div className="d-flex flex-column gap-4">
                  {latestPosts.map((item, idx) => (
                    <a
                      key={item.slug}
                      href={`/blogs/${item.slug}`}
                      className="d-flex align-items-center gap-3 text-decoration-none text-dark"
                      style={{
                        paddingBottom: idx !== latestPosts.length - 1 ? '16px' : '0',
                        borderBottom: idx !== latestPosts.length - 1 ? '1px solid #E2D5C3' : 'none'
                      }}
                    >
                      <div className="flex-shrink-0 overflow-hidden rounded-1" style={{ width: '68px', height: '68px' }}>
                        <img src={item.image} alt={item.imageAlt} className="w-100 h-100 d-block" style={{ objectFit: 'cover' }} />
                      </div>
                      <div>
                        <span
                          className="d-block text-uppercase mb-1"
                          style={{
                            fontFamily: "'Larken', 'Lora', serif",
                            fontSize: '10.5px',
                            letterSpacing: '0.08em',
                            color: '#8C827A'
                          }}
                        >
                          {idx === 0 ? 'Recently uploaded' : item.category}
                        </span>
                        <p
                          className="mb-0"
                          style={{
                            fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                            fontSize: '13.5px',
                            color: '#422207',
                            lineHeight: '1.3'
                          }}
                        >
                          {item.title}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Article Text (first letter shown as a drop cap) */}
          <div className="col-12 col-lg-8 col-xl-9 ps-lg-4">
            <div
              className="blog-portable-body"
              style={{
                fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                fontSize: '16px',
                color: '#4A423B',
                lineHeight: '1.8',
                fontWeight: 300
              }}
            >
              {post.body && <PortableText value={post.body} components={bodyComponents} />}

              <div className="pt-2">
                <span className="d-block" style={{ fontFamily: "'Italianno', cursive", fontSize: '24px', color: '#A44E0E' }}>
                  ~with heart,
                </span>
                <span className="d-block" style={{ fontFamily: "'Italianno', cursive", fontSize: '28px', color: '#62350A' }}>
                  monika
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Related Blogs */}
        <div className="pt-5 mt-4 text-center mx-auto" style={{ maxWidth: '1200px' }}>

          {relatedPosts.length > 0 && (
            <>
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
                {post.category.toLowerCase()}
              </span>

              <h2
                className="mb-5"
                style={{
                  fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                  fontSize: 'clamp(21px, 2.2vw, 26px)',
                  color: '#422207',
                  fontWeight: 400
                }}
              >
                Related Blogs
              </h2>

              <div className="row g-4 justify-content-center mb-5">
                {relatedPosts.map((item) => (
                  <div key={item.slug} className="col-12 col-md-4">
                    <div className="blog-card-figma">
                      <a href={`/blogs/${item.slug}`} className="blog-card-image-wrap d-block">
                        <img src={item.image} alt={item.imageAlt} />
                      </a>
                      <h3
                        className="mb-2"
                        style={{
                          fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
                          fontSize: '19px',
                          color: '#422207',
                          minHeight: '44px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {item.title}
                      </h3>
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
                        {item.excerpt}
                      </p>
                      <a
                        href={`/blogs/${item.slug}`}
                        className="blog-read-btn"
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
            </>
          )}

          {/* Back to Blogs */}
          <div className="pt-2 pb-4">
            <a
              href="/blogs"
              className="btn-figma-outline d-inline-block text-decoration-none px-5 py-2"
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
              Back to Blogs
            </a>
          </div>

        </div>

      </div>
    </article>
  );
}
