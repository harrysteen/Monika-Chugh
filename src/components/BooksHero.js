'use client';

export default function BooksHero() {
  return (
    <section className="pt-4 pb-3 bg-cream">
      <div className="container-fluid px-3 px-md-4 px-lg-5 max-w-1400 mx-auto text-center">
        <span 
          className="d-block mb-1 font-handwriting"
          style={{
            fontFamily: "'Italianno', cursive",
            fontSize: '36px',
            color: '#A44E0E',
            fontWeight: 400,
            lineHeight: '100%'
          }}
        >
          words that heal & inspire
        </span>
        <h1 
          className="mb-3"
          style={{
            fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
            fontSize: '44px',
            color: '#422207',
            fontWeight: 400,
            lineHeight: '1.15',
            letterSpacing: '0.03em'
          }}
        >
          Books & Publications
        </h1>
        <p 
          className="mx-auto mb-0"
          style={{
            fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
            fontSize: '16px',
            color: '#4A423B',
            maxWidth: '650px',
            lineHeight: '1.65'
          }}
        >
          Immerse yourself in soul-stirring affirmations, poetic reflections, and mindful thoughts curated to bring serenity, courage, and light to your daily journey.
        </p>
      </div>
    </section>
  );
}
