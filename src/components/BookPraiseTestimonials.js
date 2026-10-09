'use client';

const QUOTE_CAFE_CARDS = {
  small: {
    src: '/images/books/praise_madhu.webp',
    alt: 'Words from Madhu: “I love the way the cover feels and the beautiful art on it. Grab a warm cup of coffee or tea and a blanket and enjoy a fun and inspiring read.” 09.18.2025'
  },
  large: {
    src: '/images/books/praise_hannah.webp',
    alt: 'Words from Hannah: “I loved how the author shared her thoughts so openly and fearlessly to create a powerful connection with the readers. The book serves as a gentle reminder that pain, though inevitable, need not define us. Instead, it can become the catalyst for growth & transformation. In ‘Quote Cafe - The Silent Soul’, the author delicately explores the profound human experience of loneliness, pain, and betrayal, and how these experiences can serve as stepping stones toward personal growth and self discovery. It challenges readers to embrace their vulnerabilities, confront their pain, and embark on the transformative journey toward self-acceptance and inner peace.” 08.23.2024'
  }
};

// Two review cards (finished design images). Defaults are Quote Café's.
export default function BookPraiseTestimonials({
  title = 'Praise for Quote Cafe - Thoughts In a Cup',
  small = QUOTE_CAFE_CARDS.small,
  large = QUOTE_CAFE_CARDS.large,
  // 'center' lowers the large card to the middle of a taller small card (Rebirth design)
  align = 'start'
}) {
  return (
    <section className="py-5 bg-cream position-relative overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5 max-w-1400 mx-auto">

        {/* Header */}
        <div className="text-center mb-5 pb-2">
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
            client love
          </span>
          <h2
            className="mb-0"
            style={{
              fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
              fontSize: 'clamp(21px, 2.2vw, 26px)',
              color: '#422207',
              fontWeight: 400,
              lineHeight: '1.2'
            }}
          >
            {title}
          </h2>
        </div>

        {/* Two vintage cards (finished design images); the larger one overlaps the first slightly */}
        <div className={`praise-cards mx-auto pt-2 pb-4 ${align === 'center' ? 'is-centered' : ''}`}>
          <img src={small.src} alt={small.alt} className="praise-card praise-card-small" />
          <img src={large.src} alt={large.alt} className="praise-card praise-card-large" />
        </div>

      </div>

      <style jsx>{`
        .praise-cards {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          max-width: 920px;
        }
        .praise-card {
          display: block;
          height: auto;
          max-width: 100%;
        }
        .praise-card-small {
          width: 70%;
          max-width: 320px;
        }
        .praise-card-large {
          width: 100%;
        }
        /* Tablet and up: side by side as in the design (widths from the design: 215 + 446 on 648) */
        @media (min-width: 768px) {
          .praise-cards {
            flex-direction: row;
            align-items: flex-start;
            gap: 0;
          }
          .praise-cards.is-centered {
            align-items: center;
          }
          .praise-card-small {
            width: 33.2%;
            max-width: none;
            position: relative;
            z-index: 1;
          }
          .praise-card-large {
            width: 68.8%;
            margin-left: -2%;
            position: relative;
            z-index: 2;
          }
        }
      `}</style>
    </section>
  );
}
