'use client';

export default function MyStoryMilestones() {
  const cards = [1, 2, 3];

  return (
    <section className="py-5 bg-cream position-relative" id="story-milestones">
      <div className="container-fluid px-3 px-md-4 px-xl-5 text-center" style={{ maxWidth: '1380px' }}>
        
        {/* Section Header */}
        <div className="mb-4 pb-2">
          <span 
            className="d-block mb-1" 
            style={{ 
              fontFamily: "'Italianno', cursive", 
              fontSize: '34px', 
              color: '#A44E0E',
              lineHeight: 1.2
            }}
          >
            milestones along the way
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
          
          <p 
            className="mx-auto mt-3 mb-0" 
            style={{ 
              fontFamily: "'Larken-Light', 'Larken', 'Lora', serif", 
              fontSize: '15.5px', 
              color: '#4A423B', 
              lineHeight: '1.85',
              fontWeight: 300,
              maxWidth: '980px'
            }}
          >
            Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the. Round dock jones&apos; fluke sails overhaul man Pirate ipsum arrgh bounty warp jack. Lubber avast heave sloop guns shot lass no men splice. Plate furl starboard belaying crimp chandler six arr boatswain. Belaying boom gabion lanyard pirate cat clipper chantey the. Round dock jones&apos; fluke sails overhaul man
          </p>
        </div>

        {/* 3 Milestone Gray Placeholders / Cards */}
        <div className="row g-4 justify-content-center my-4 py-2">
          {cards.map((item, idx) => (
            <div key={idx} className="col-12 col-md-4">
              <div 
                className="w-100"
                style={{
                  height: '320px',
                  backgroundColor: '#D9D9D9',
                  borderRadius: '0px'
                }}
              >
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="pt-3">
          <a 
            href="/#press" 
            className="btn"
            style={{
              fontFamily: "'Larken-Light', 'Larken', 'Lora', serif",
              fontSize: '15px',
              color: '#62350A',
              border: '1px solid #A44E0E',
              backgroundColor: 'transparent',
              borderRadius: '0px',
              padding: '10px 36px',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#A44E0E';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#62350A';
            }}
          >
            View My Honors
          </a>
        </div>

      </div>
    </section>
  );
}

