'use client';

export default function MyStoryTimeline() {
  const paragraph1 = "Even as a young girl, I noticed things deeply, felt them fully, and put them into words. I dreamed of becoming a doctor, but I also loved to write. The world got my medicine but my words stayed private, held back by fear. Then, in 2017, life shook me in a way I never expected.";

  const paragraph2 = "In the aftermath, I kept asking the universe: why me? That question cracked something open. It led me toward karma, spirituality, and a deeper understanding of how our experiences shape us. Slowly, I began to see that perhaps not everything comes with an immediate answer. Sometimes, meaning reveals itself only with time.";

  const paragraph3 = "And somewhere in all that questioning, I began writing again not tucked away this time, but shared, one word and one verse at a time. One poem became a book. A journal became something more. What had once been private slowly became part of my path and, perhaps, a way for my words to mean something to someone else.";

  return (
    <section className="py-5 bg-cream position-relative" id="story-timeline">
      <div className="container-fluid px-3 px-md-4 px-xl-5 text-center" style={{ maxWidth: '1380px' }}>

        {/* Section Header */}
        <div className="mb-5 pb-2">
          <span
            className="d-block mb-1"
            style={{
              fontFamily: "'Italianno', cursive",
              fontSize: '28px',
              color: '#A44E0E',
              lineHeight: 1.2
            }}
          >
            where it all began
          </span>
          <h2
            className="fw-normal"
            style={{
              fontFamily: "'Beautique Display', 'BeautiqueDisplay-Regular', 'Cormorant Garamond', 'Playfair Display', serif",
              fontSize: '36px',
              color: '#422207',
              letterSpacing: '0.01em',
              lineHeight: 1.25
            }}
          >
            Pirate ipsum me main blimey fluke
          </h2>
        </div>

        {/* Timeline Flow Container */}
        <div className="mx-auto" style={{ maxWidth: '1300px' }}>

          {/* ROW 1: Image Left, Text Right */}
          <div className="row align-items-center justify-content-between g-4 g-lg-5 text-start">
            {/* Image Column */}
            <div className="col-12 col-lg-7">
              <div className="position-relative w-100">
                <img
                  src="/images/mystory/section_3_img1.png"
                  alt="Where it all began - Young girl in flower field"
                  className="img-fluid w-100 h-auto d-block"
                  style={{
                    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.03))'
                  }}
                />
              </div>
            </div>

            {/* Text Column */}
            <div className="col-12 col-lg-5 ps-lg-4">
              <p
                className="mb-0"
                style={{
                  fontFamily: "'Larken-Light', 'Larken-Thin', 'Larken', 'Lora', serif",
                  fontSize: '16px',
                  color: '#4A423B',
                  lineHeight: '1.9',
                  fontWeight: 300,
                  letterSpacing: '0.01em'
                }}
              >
                {paragraph1}
              </p>
            </div>
          </div>

          {/* Timeline Connector 1 */}
          <div className="d-flex flex-column align-items-center my-4 my-lg-5">
            <div style={{ width: '1px', height: '54px', backgroundColor: '#A44E0E', opacity: 0.85 }}></div>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#A44E0E', marginTop: '-1px' }}></div>
          </div>

          {/* ROW 2: Text Left, Image Right */}
          <div className="row align-items-center justify-content-between g-4 g-lg-5 text-start flex-column-reverse flex-lg-row">
            {/* Text Column */}
            <div className="col-12 col-lg-5 pe-lg-4">
              <p
                className="mb-0"
                style={{
                  fontFamily: "'Larken-Light', 'Larken-Thin', 'Larken', 'Lora', serif",
                  fontSize: '16px',
                  color: '#4A423B',
                  lineHeight: '1.9',
                  fontWeight: 300,
                  letterSpacing: '0.01em'
                }}
              >
                {paragraph2}
              </p>
            </div>

            {/* Image Column */}
            <div className="col-12 col-lg-7">
              <div className="position-relative w-100">
                <img
                  src="/images/mystory/section_3_img2.png"
                  alt="Where it all began - Graduation ceremony"
                  className="img-fluid w-100 h-auto d-block"
                  style={{
                    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.03))'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Timeline Connector 2 */}
          <div className="d-flex flex-column align-items-center my-4 my-lg-5">
            <div style={{ width: '1px', height: '54px', backgroundColor: '#A44E0E', opacity: 0.85 }}></div>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#A44E0E', marginTop: '-1px' }}></div>
          </div>

          {/* ROW 3: Image Left, Text Right */}
          <div className="row align-items-center justify-content-between g-4 g-lg-5 text-start">
            {/* Image Column */}
            <div className="col-12 col-lg-7">
              <div className="position-relative w-100">
                <img
                  src="/images/mystory/section_3_img3.png"
                  alt="Where it all began - Published author with books and art"
                  className="img-fluid w-100 h-auto d-block"
                  style={{
                    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.03))'
                  }}
                />
              </div>
            </div>

            {/* Text Column */}
            <div className="col-12 col-lg-5 ps-lg-4">
              <p
                className="mb-0"
                style={{
                  fontFamily: "'Larken-Light', 'Larken-Thin', 'Larken', 'Lora', serif",
                  fontSize: '16px',
                  color: '#4A423B',
                  lineHeight: '1.9',
                  fontWeight: 300,
                  letterSpacing: '0.01em'
                }}
              >
                {paragraph3}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

