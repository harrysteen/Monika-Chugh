'use client';

import { BOOKS } from '../data/books';

// Shows the other published books (not the one on this page), each linking to its own page
export default function BookExploreMore({ currentSlug }) {
  const books = BOOKS.filter((b) => b.slug !== currentSlug).slice(0, 2);

  return (
    <section className="py-5 bg-cream" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5 max-w-1400 mx-auto">

        {/* Framed box */}
        <div className="px-4 py-5 p-md-5" style={{ border: '1px solid #8C7B6B' }}>
          <div className="row g-5 align-items-center">

            {/* Left Column: Heading, text and button */}
            <div className="col-12 col-lg-5 d-flex flex-column align-items-center px-lg-4">
              <h2
                className="mb-4 text-center"
                style={{
                  fontFamily: "'Beautique Display', serif",
                  fontSize: 'clamp(21px, 2.2vw, 26px)',
                  color: '#422207',
                  fontWeight: 500,
                  lineHeight: '1.2',
                  WebkitTextStroke: '0.4px currentColor'
                }}
              >
                Explore more
              </h2>

              <p
                className="mb-5"
                style={{
                  fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                  fontSize: '15px',
                  color: '#4A423B',
                  lineHeight: '1.4',
                  fontWeight: 300,
                  textAlign: 'justify',
                  maxWidth: '460px'
                }}
              >
                Every book begins with a thought, a feeling, or a moment worth holding on to. My books and journals explore life, self-discovery, and transformation through everyday experiences. Blending poetry, affirmations, and reflections, each offers a different perspective for self-reflection and reconnection, one word at a time.
              </p>

              <a
                href="/books"
                className="btn-figma-outline d-inline-block text-center text-decoration-none py-2"
                style={{
                  fontFamily: "'Larken', 'Lora', serif",
                  fontSize: '15px',
                  color: '#62350A',
                  border: '1px solid #A44E0E',
                  borderRadius: 0,
                  backgroundColor: 'transparent',
                  width: '100%',
                  maxWidth: '280px',
                  transition: 'all 0.3s ease'
                }}
              >
                More Books
              </a>
            </div>

            {/* Right Column: two book covers */}
            <div className="col-12 col-lg-7">
              <div className="d-flex justify-content-center align-items-start gap-4 gap-md-5">
                {books.map((book) => (
                  <a
                    key={book.slug}
                    href={`/books/${book.slug}`}
                    className="explore-book d-block text-decoration-none"
                    style={{ '--svg-w': book.coverSvg.w, '--svg-y': book.coverSvg.y }}
                  >
                    <img src={book.cover} alt={`${book.title} by Monika Chugh`} className="d-block w-100 h-auto" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>

      <style jsx>{`
        /* --u = pixels per SVG unit; both covers are 354.3 units tall, so they come out the same size */
        .explore-book {
          --u: clamp(0.5px, 0.0625vw, 0.9px);
          width: calc(var(--svg-w) * var(--u));
          margin-top: calc(var(--svg-y) * var(--u) * -1);
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .explore-book:hover {
          transform: translateY(-4px);
        }
      `}</style>
    </section>
  );
}
