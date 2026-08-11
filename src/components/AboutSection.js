'use client';

export default function AboutSection() {
  return (
    <section id="story" className="py-5 bg-cream overflow-hidden" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container py-4">
        <div className="row align-items-center g-5">
          
          {/* Left Column: Portrait & Decorative Frame */}
          <div className="col-12 col-lg-5">
            <div className="position-relative p-3 bg-cream rounded-4 border border-cream">
              <img 
                src="/images/portrait.png" 
                alt="Monika Chugh" 
                className="w-100 rounded-3 shadow-sm object-cover"
                style={{ height: '480px', objectFit: 'cover' }}
              />
              <div className="position-absolute bottom-0 end-0 m-4 bg-white p-3 rounded-3 shadow-sm border border-cream">
                <span className="font-small-header fs-3 text-bronze d-block mb-0">Author & Thinker</span>
                <span className="font-paragraph text-dark small">Monika Chugh</span>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="col-12 col-lg-7">
            <div className="ps-lg-4">
              
              <div className="d-flex align-items-center gap-3 mb-3">
                <span className="font-small-header fs-2 text-bronze">My Story</span>
                <span className="border-top border-bronze flex-grow-1 opacity-25"></span>
              </div>

              <h2 className="font-big-header display-5 text-dark mb-4">
                Weaving Words, Emotion, and Timeless Wisdom
              </h2>

              <p className="font-paragraph fs-5 text-body mb-4">
                Monika Chugh is a celebrated author, poet, and speaker whose works explore the subtle intersections of human soul, resilience, and creative expression.
              </p>

              <blockquote className="p-4 bg-cream rounded-3 border-start border-4 border-bronze my-4">
                <p className="font-small-header fs-2 text-bronze mb-1">
                  "Words are not merely symbols on parchment; they are the quiet whispers of our deepest truths."
                </p>
                <cite className="font-paragraph text-muted small font-normal">— Monika Chugh</cite>
              </blockquote>

              <p className="font-paragraph text-body">
                Through books, essays, and public discourses, Monika invites readers on a journey of self-discovery, spiritual harmony, and artistic mindfulness.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
