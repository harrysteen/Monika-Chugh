'use client';

export default function Footer() {
  return (
    <footer className="bg-white border-top border-cream py-5">
      <div className="container">
        <div className="row g-4 justify-content-between align-items-center">
          
          {/* Brand Info */}
          <div className="col-12 col-md-6 text-center text-md-start">
            <span className="font-small-header fs-2 text-bronze d-block">Monika Chugh</span>
            <p className="font-paragraph text-muted small mt-1 mb-0">
              Official literary, poetry, and philosophy website of Monika Chugh.
            </p>
          </div>

          {/* Social Links & Copyright */}
          <div className="col-12 col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3 mb-2 fs-5">
              <a href="#" className="text-dark hover-gold"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-dark hover-gold"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-dark hover-gold"><i className="bi bi-twitter-x"></i></a>
              <a href="#" className="text-dark hover-gold"><i className="bi bi-linkedin"></i></a>
            </div>
            <p className="font-paragraph text-muted small mb-0">
              © {new Date().getFullYear()} Monika Chugh. All Rights Reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
