'use client';

export default function MyStoryMoreRoles() {
  const moreRoles = [
    {
      title: 'Rotarian',
      image: '/images/mystory/about_section4_rotarian.png',
      alt: 'Rotarian - Dr. Monika Chugh',
      colClass: 'col-12 col-md-6 col-lg-4'
    },
    {
      title: 'Mindfulness Wellness Advocate',
      image: '/images/mystory/california_beginning_again.png',
      alt: 'Mindfulness Wellness Advocate',
      colClass: 'col-12 col-md-6 col-lg-4'
    },
    {
      title: 'Domestic Violence Counselor',
      image: '/images/mystory/domestic_violence_counselor.png',
      alt: 'Domestic Violence Counselor',
      colClass: 'col-12 col-md-6 col-lg-4'
    },
    {
      title: 'Ayurvedic Counselor',
      image: '/images/mystory/ayurveda_whole_person.png',
      alt: 'Ayurvedic Counselor',
      colClass: 'col-12 col-md-6 col-lg-3 offset-lg-1'
    },
    {
      title: 'Art Board Commissioner',
      image: '/images/mystory/about_section4_artboard.png',
      alt: 'Art Board Commissioner',
      colClass: 'col-12 col-md-6 col-lg-4'
    },
    {
      title: 'Doctor',
      image: '/images/mystory/doctor_medicine.png',
      alt: 'Doctor - Dr. Monika Chugh',
      colClass: 'col-12 col-md-6 col-lg-3'
    }
  ];

  return (
    <section className="py-5 bg-cream position-relative" id="story-more-roles">
      <div className="container-fluid px-3 px-md-4 px-xl-5 text-center" style={{ maxWidth: '1280px' }}>
        
        {/* Section Header */}
        <div className="mb-5 pb-2">
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
            and there&apos;s more...
          </h2>
        </div>

        {/* 6 Framed Cards Grid */}
        <div className="row g-4 g-lg-5 justify-content-center align-items-center">
          
          {/* Row 1 - Card 1: Rotarian */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div 
              className="d-flex flex-column text-center h-100"
              style={{
                backgroundColor: '#FFFAF2',
                border: '1px solid #EADBCC',
                padding: '20px 16px 16px',
                borderRadius: '2px',
                boxShadow: '0 2px 10px rgba(66,34,7,0.03)'
              }}
            >
              <h3 
                className="mb-3 d-flex align-items-center justify-content-center text-center" 
                style={{ 
                  fontFamily: "'Italianno', cursive", 
                  fontSize: '32px', 
                  color: '#422207',
                  lineHeight: '1.2',
                  minHeight: '38px'
                }}
              >
                Rotarian
              </h3>
              <div 
                className="position-relative overflow-hidden" 
                style={{ height: '260px', width: '100%' }}
              >
                <img 
                  src="/images/mystory/about_section4_rotarian.png" 
                  alt="Rotarian" 
                  className="w-100 h-100"
                  style={{ objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>

          {/* Row 1 - Card 2: Mindfulness Wellness Advocate */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div 
              className="d-flex flex-column text-center h-100"
              style={{
                backgroundColor: '#FFFAF2',
                border: '1px solid #EADBCC',
                padding: '20px 16px 16px',
                borderRadius: '2px',
                boxShadow: '0 2px 10px rgba(66,34,7,0.03)'
              }}
            >
              <h3 
                className="mb-3 d-flex align-items-center justify-content-center text-center" 
                style={{ 
                  fontFamily: "'Italianno', cursive", 
                  fontSize: '32px', 
                  color: '#422207',
                  lineHeight: '1.2',
                  minHeight: '38px'
                }}
              >
                Mindfulness Wellness Advocate
              </h3>
              <div 
                className="position-relative overflow-hidden" 
                style={{ height: '260px', width: '100%' }}
              >
                <img 
                  src="/images/mystory/california_beginning_again.png" 
                  alt="Mindfulness Wellness Advocate" 
                  className="w-100 h-100"
                  style={{ objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>

          {/* Row 1 - Card 3: Domestic Violence Counselor */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div 
              className="d-flex flex-column text-center h-100"
              style={{
                backgroundColor: '#FFFAF2',
                border: '1px solid #EADBCC',
                padding: '20px 16px 16px',
                borderRadius: '2px',
                boxShadow: '0 2px 10px rgba(66,34,7,0.03)'
              }}
            >
              <h3 
                className="mb-3 d-flex align-items-center justify-content-center text-center" 
                style={{ 
                  fontFamily: "'Italianno', cursive", 
                  fontSize: '32px', 
                  color: '#422207',
                  lineHeight: '1.2',
                  minHeight: '38px'
                }}
              >
                Domestic Violence Counselor
              </h3>
              <div 
                className="position-relative overflow-hidden" 
                style={{ height: '260px', width: '100%' }}
              >
                <img 
                  src="/images/mystory/domestic_violence_counselor.png" 
                  alt="Domestic Violence Counselor" 
                  className="w-100 h-100"
                  style={{ objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>

          {/* Row 2 - Card 4: Ayurvedic Counselor (Slightly narrower / aligned left-center) */}
          <div className="col-12 col-sm-6 col-lg-3 offset-lg-0 mt-lg-2">
            <div 
              className="d-flex flex-column text-center h-100"
              style={{
                backgroundColor: '#FFFAF2',
                border: '1px solid #EADBCC',
                padding: '20px 16px 16px',
                borderRadius: '2px',
                boxShadow: '0 2px 10px rgba(66,34,7,0.03)'
              }}
            >
              <h3 
                className="mb-3 d-flex align-items-center justify-content-center text-center" 
                style={{ 
                  fontFamily: "'Italianno', cursive", 
                  fontSize: '32px', 
                  color: '#422207',
                  lineHeight: '1.2',
                  minHeight: '38px'
                }}
              >
                Ayurvedic Counselor
              </h3>
              <div 
                className="position-relative overflow-hidden" 
                style={{ height: '260px', width: '100%' }}
              >
                <img 
                  src="/images/mystory/ayurveda_whole_person.png" 
                  alt="Ayurvedic Counselor" 
                  className="w-100 h-100"
                  style={{ objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>

          {/* Row 2 - Card 5: Art Board Commissioner (Wider center) */}
          <div className="col-12 col-sm-6 col-lg-5 mt-lg-2">
            <div 
              className="d-flex flex-column text-center h-100"
              style={{
                backgroundColor: '#FFFAF2',
                border: '1px solid #EADBCC',
                padding: '20px 16px 16px',
                borderRadius: '2px',
                boxShadow: '0 2px 10px rgba(66,34,7,0.03)'
              }}
            >
              <h3 
                className="mb-3 d-flex align-items-center justify-content-center text-center" 
                style={{ 
                  fontFamily: "'Italianno', cursive", 
                  fontSize: '32px', 
                  color: '#422207',
                  lineHeight: '1.2',
                  minHeight: '38px'
                }}
              >
                Art Board Commissioner
              </h3>
              <div 
                className="position-relative overflow-hidden" 
                style={{ height: '260px', width: '100%' }}
              >
                <img 
                  src="/images/mystory/about_section4_artboard.png" 
                  alt="Art Board Commissioner" 
                  className="w-100 h-100"
                  style={{ objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>

          {/* Row 2 - Card 6: Doctor */}
          <div className="col-12 col-sm-6 col-lg-3 mt-lg-2">
            <div 
              className="d-flex flex-column text-center h-100"
              style={{
                backgroundColor: '#FFFAF2',
                border: '1px solid #EADBCC',
                padding: '20px 16px 16px',
                borderRadius: '2px',
                boxShadow: '0 2px 10px rgba(66,34,7,0.03)'
              }}
            >
              <h3 
                className="mb-3 d-flex align-items-center justify-content-center text-center" 
                style={{ 
                  fontFamily: "'Italianno', cursive", 
                  fontSize: '32px', 
                  color: '#422207',
                  lineHeight: '1.2',
                  minHeight: '38px'
                }}
              >
                Doctor
              </h3>
              <div 
                className="position-relative overflow-hidden" 
                style={{ height: '260px', width: '100%' }}
              >
                <img 
                  src="/images/mystory/doctor_medicine.png" 
                  alt="Doctor" 
                  className="w-100 h-100"
                  style={{ objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
