import React from 'react';

// Removed custom SVG logo, using /logo.png instead

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Semi-oval arc top — single smooth curve, not wavy */}
      <div className="footer-arc">
        <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0,0 Q720,90 1440,0 L1440,90 L0,90 Z"
            fill="#1a0a2e"
          />
        </svg>
      </div>

      {/* Top logo band */}
      <div className="footer-logo-band text-center py-2">
        <img src="/footer-logo.png" alt="Lucy Pets" style={{ height: '75px' }} />
      </div>

      {/* Links row */}
      <div className="footer-links-row py-1">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {['Terms & Conditions', 'Privacy Policy', 'Refund Policy', 'Get Support'].map((link) => (
              <a key={link} href="#!" className="footer-link">{link}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom py-2">
        <div className="container">
          <div className="row align-items-center g-3">
            <div className="col-md-4 d-flex align-items-center gap-2">
              <i className="bi bi-telephone-fill text-pink"></i>
              <span className="footer-contact-text">123-456-789</span>
            </div>
            <div className="col-md-4 d-flex align-items-center gap-2 justify-content-md-center">
              <i className="bi bi-envelope-fill text-pink"></i>
              <span className="footer-contact-text">tom.jennings@example.com</span>
            </div>
            <div className="col-md-4 d-flex align-items-center gap-2 justify-content-md-end">
              <i className="bi bi-geo-alt-fill text-pink"></i>
              <span className="footer-contact-text">4321 Eagle St. Salinas, Delaware 12345</span>
            </div>
          </div>

          <hr className="footer-divider" />

          <div className="text-center">
            <p className="footer-copy mb-0">© 2024 Copyrights. All rights reserved. Design by Pixelpro Creations</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
