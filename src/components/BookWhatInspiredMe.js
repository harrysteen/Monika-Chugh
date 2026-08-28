'use client';

export default function BookWhatInspiredMe() {
  return (
    <section className="py-5 position-relative" style={{ backgroundColor: '#F6EEDF' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5 max-w-1400 mx-auto">
        
        {/* Header */}
        <div className="text-center mb-5">
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
            my books
          </span>
          <h2 
            className="mb-0"
            style={{
              fontFamily: "'Beautique Display', 'Cormorant Garamond', 'Playfair Display', serif",
              fontSize: '38px',
              color: '#422207',
              fontWeight: 400,
              lineHeight: '1.2'
            }}
          >
            What Inspired me?
          </h2>
        </div>

        {/* 2-Column: Photo on Left + Text on Right */}
        <div className="row g-4 g-lg-5 align-items-center">
          
          {/* Left Column: Author Desk Visual */}
          <div className="col-12 col-lg-5 text-center">
            <div 
              className="overflow-hidden rounded-1 mx-auto shadow-sm"
              style={{
                maxWidth: '460px',
                aspectRatio: '4 / 3'
              }}
            >
              <img 
                src="/images/books/author_desk.jpg" 
                alt="Monika Chugh writing Quote Cafe" 
                className="w-100 h-100 object-cover d-block"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Right Column: Inspiration Narrative */}
          <div className="col-12 col-lg-7 ps-lg-4">
            <div 
              style={{
                fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
                fontSize: '15.5px',
                color: '#4A423B',
                lineHeight: '1.8',
                fontWeight: 300
              }}
            >
              <p className="mb-4">
                What is Quote Cafè– Thoughts in a Cup? Life throws us surprise curve balls. We all go through the stings and spasms to escape the nerve-wracking circle.
              </p>

              <p className="mb-4">
                My life took a 360-degree turn with two major life-changing incidents. I was an emotionally shaken wreck with physical wounds. It made me question many things about my identity. I was miserable, merged into self-pity and victim moods, and blamed the world for the misgivings.
              </p>

              <p className="mb-4">
                Many things were beyond my comprehension as I could not understand the reason and logic behind them. It made no sense to me; I thought they were baseless; however, they taught me one fundamental thing, never to ignore one&apos;s gut and thoughts. I soon realized that I needed to change the course of my wavering thoughts.
              </p>

              <p className="mb-0">
                I had to find the felix culpa in all the mistakes, even if they were learning points.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
