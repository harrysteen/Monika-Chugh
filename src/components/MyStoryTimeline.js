'use client';

export default function MyStoryTimeline() {
  return (
    <section className="py-5 bg-cream position-relative" id="story-timeline">
      <div className="container px-3 px-md-4 px-lg-5 text-center">
        
        {/* Section Header */}
        <div className="mb-5">
          <span className="font-handwriting fs-2 text-bronze d-block mb-1" style={{ color: '#A44E0E' }}>
            where it all began
          </span>
          <h2 className="font-big-header display-5 fw-normal text-dark">
            Journey of Discovery & Creative Evolution
          </h2>
        </div>

        {/* Timeline Items Container */}
        <div className="mw-100 mx-auto" style={{ maxWidth: '1000px' }}>
          
          {/* ITEM 1: Childhood */}
          <div className="row align-items-center g-4 g-lg-5 text-start">
            <div className="col-lg-7">
              <div className="torn-paper-frame">
                <img 
                  src="/images/mystory/childhood.png" 
                  alt="Childhood in flower field" 
                  className="img-fluid rounded shadow-sm w-100"
                  style={{ maxHeight: '340px', objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-lg-5">
              <span className="text-uppercase tracking-wider fw-semibold fs-7 mb-2 d-block" style={{ color: '#A44E0E', letterSpacing: '0.15em' }}>
                EARLY YEARS & WONDER
              </span>
              <h3 className="font-big-header h3 text-dark mb-3">
                Seeds of Curiosity
              </h3>
              <p className="font-paragraph text-body fs-6 leading-relaxed mb-0" style={{ color: '#4A423B' }}>
                Growing up surrounded by nature and stories, I developed an early fascination with quiet observation, human emotions, and the subtle beauty of life. These formative experiences laid the foundation for a lifelong passion for writing and reflection.
              </p>
            </div>
          </div>

          {/* Timeline Vertical Connector 1 */}
          <div className="py-4">
            <div className="story-timeline-line"></div>
          </div>

          {/* ITEM 2: Graduation & Academic Foundation */}
          <div className="row align-items-center g-4 g-lg-5 text-start flex-lg-row-reverse">
            <div className="col-lg-7">
              <div className="torn-paper-frame">
                <img 
                  src="/images/mystory/graduation.png" 
                  alt="University Graduation" 
                  className="img-fluid rounded shadow-sm w-100"
                  style={{ maxHeight: '340px', objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-lg-5">
              <span className="text-uppercase tracking-wider fw-semibold fs-7 mb-2 d-block" style={{ color: '#A44E0E', letterSpacing: '0.15em' }}>
                LEARNING & EMPOWERMENT
              </span>
              <h3 className="font-big-header h3 text-dark mb-3">
                Building Knowledge & Vision
              </h3>
              <p className="font-paragraph text-body fs-6 leading-relaxed mb-0" style={{ color: '#4A423B' }}>
                Academics and formal education expanded my perspective, sharpening my analytical mind while nurturing a deep empathy for human narratives. I realized that wisdom is not just acquired—it must be lived, shared, and transformed into uplifting expression.
              </p>
            </div>
          </div>

          {/* Timeline Vertical Connector 2 */}
          <div className="py-4">
            <div className="story-timeline-line"></div>
          </div>

          {/* ITEM 3: Creative Studio & Present Calling */}
          <div className="row align-items-center g-4 g-lg-5 text-start">
            <div className="col-lg-7">
              <div className="torn-paper-frame">
                <img 
                  src="/images/mystory/writing_desk.png" 
                  alt="Writing desk in studio" 
                  className="img-fluid rounded shadow-sm w-100"
                  style={{ maxHeight: '340px', objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-lg-5">
              <span className="text-uppercase tracking-wider fw-semibold fs-7 mb-2 d-block" style={{ color: '#A44E0E', letterSpacing: '0.15em' }}>
                CREATIVE HARMONY
              </span>
              <h3 className="font-big-header h3 text-dark mb-3">
                Crafting Soulful Works
              </h3>
              <p className="font-paragraph text-body fs-6 leading-relaxed mb-0" style={{ color: '#4A423B' }}>
                Today, my quiet studio serves as a sanctuary for writing books, painting canvases, and curating meaningful conversations. Here, every page and canvas comes alive with the intent to inspire courage, clarity, and peace.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
