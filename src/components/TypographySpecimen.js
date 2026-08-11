'use client';

export default function TypographySpecimen() {
  const quotations = [
    {
      id: 1,
      quote: "To write is to surrender to the quiet music of the universe.",
      topic: "On Creativity & Art",
      date: "Canvas #104",
    },
    {
      id: 2,
      quote: "In the silence between thoughts lies the answers we seek endlessly.",
      topic: "On Mindfulness",
      date: "Canvas #108",
    },
    {
      id: 3,
      quote: "Grace is not the absence of storm, but peace within its heart.",
      topic: "On Inner Strength",
      date: "Canvas #112",
    },
  ];

  return (
    <section id="canvas" className="py-5 bg-white border-top border-bottom border-cream">
      <div className="container py-4">
        
        <div className="text-center mb-5">
          <span className="font-small-header fs-2 text-bronze">Reflections & Thoughts</span>
          <h2 className="font-big-header display-4 text-dark mt-1 mb-2">Canvas & Quotations</h2>
          <p className="font-paragraph text-muted mx-auto" style={{ maxWidth: '560px' }}>
            Daily reflections and poetic quotations written by Monika Chugh.
          </p>
        </div>

        <div className="row g-4">
          {quotations.map((item) => (
            <div key={item.id} className="col-12 col-md-4">
              <div className="figma-card h-100 p-4 text-center d-flex flex-column justify-content-between position-relative">
                
                {/* Lotus Icon Background Accent */}
                <div className="my-3">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="opacity-75">
                    <path d="M16 4C14 8 10 12 6 14C10 16 14 20 16 28C18 20 22 16 26 14C22 12 18 8 16 4Z" stroke="#BA8E55" strokeWidth="1.5"/>
                  </svg>
                </div>

                {/* Quote Text in Italianno & Larken */}
                <div className="my-3">
                  <p className="font-small-header fs-1 text-bronze mb-3" style={{ lineHeight: '1.2' }}>
                    "{item.quote}"
                  </p>
                  <span className="font-paragraph text-muted small d-block">
                    {item.topic}
                  </span>
                </div>

                <div className="pt-3 border-top border-cream text-muted font-paragraph small">
                  {item.date}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
