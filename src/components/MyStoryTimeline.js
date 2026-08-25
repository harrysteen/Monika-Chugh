'use client';

export default function MyStoryTimeline() {
  const paragraphText = "Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the. Round dock jones' fluke sails overhaul man jib schooner.";

  return (
    <section className="py-5 bg-cream position-relative" id="story-timeline">
      <div className="container-fluid px-3 px-md-4 px-xl-5 text-center" style={{ maxWidth: '1380px' }}>
        
        {/* Section Header */}
        <div className="mb-5 pb-2">
          <span 
            className="d-block mb-1" 
            style={{ 
              fontFamily: "'Italianno', cursive", 
              fontSize: '34px', 
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
              fontSize: '40px',
              color: '#422207',
              letterSpacing: '0.01em',
              lineHeight: 1.25
            }}
          >
            Pirate ipsum me main blimey fluke
          </h2>
        </div>

        {/* Timeline Items */}
        <div className="mx-auto">
          
          {/* ITEM 1: Image Left, Text Right */}
          <div className="row align-items-center g-4 g-lg-5 text-start">
            <div className="col-lg-7">
              <div className="position-relative">
                <img 
                  src="/images/mystory/my_story_section3_img1.svg" 
                  alt="Where it all began - Story Part 1" 
                  className="w-100 h-auto d-block"
                />
              </div>
            </div>
            <div className="col-lg-5">
              <p 
                className="mb-0" 
                style={{ 
                  fontFamily: "'Larken-Light', 'Larken', 'Lora', serif", 
                  fontSize: '15.5px', 
                  color: '#4A423B', 
                  lineHeight: '1.85',
                  fontWeight: 300
                }}
              >
                {paragraphText}
              </p>
            </div>
          </div>

          {/* Timeline Vertical Connector 1 */}
          <div className="d-flex flex-column align-items-center my-3 my-md-4">
            <div style={{ width: '1px', height: '48px', backgroundColor: '#A44E0E' }}></div>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#A44E0E', marginTop: '-1px' }}></div>
          </div>

          {/* ITEM 2: Text Left, Image Right */}
          <div className="row align-items-center g-4 g-lg-5 text-start flex-lg-row-reverse">
            <div className="col-lg-7">
              <div className="position-relative">
                <img 
                  src="/images/mystory/my_story_section3_img2.svg" 
                  alt="Where it all began - Story Part 2" 
                  className="w-100 h-auto d-block"
                />
              </div>
            </div>
            <div className="col-lg-5">
              <p 
                className="mb-0" 
                style={{ 
                  fontFamily: "'Larken-Light', 'Larken', 'Lora', serif", 
                  fontSize: '15.5px', 
                  color: '#4A423B', 
                  lineHeight: '1.85',
                  fontWeight: 300
                }}
              >
                {paragraphText}
              </p>
            </div>
          </div>

          {/* Timeline Vertical Connector 2 */}
          <div className="d-flex flex-column align-items-center my-3 my-md-4">
            <div style={{ width: '1px', height: '48px', backgroundColor: '#A44E0E' }}></div>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#A44E0E', marginTop: '-1px' }}></div>
          </div>

          {/* ITEM 3: Image Left, Text Right */}
          <div className="row align-items-center g-4 g-lg-5 text-start">
            <div className="col-lg-7">
              <div className="position-relative">
                <img 
                  src="/images/mystory/my_story_section3_img3.svg" 
                  alt="Where it all began - Story Part 3" 
                  className="w-100 h-auto d-block"
                />
              </div>
            </div>
            <div className="col-lg-5">
              <p 
                className="mb-0" 
                style={{ 
                  fontFamily: "'Larken-Light', 'Larken', 'Lora', serif", 
                  fontSize: '15.5px', 
                  color: '#4A423B', 
                  lineHeight: '1.85',
                  fontWeight: 300
                }}
              >
                {paragraphText}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

