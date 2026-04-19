import React, { useState, useEffect } from 'react';

// The custom dog pixel icon is now loaded from /nav-logo.png

// Logo will load from public/logo.png

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = ['home', 'about', 'contact', 'blogs', 'pages', 'shop'];
      const scrollPos = window.scrollY + 130;
      let current = 'home';

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Contact', 'Blogs', 'Pages', 'Shop'];

  return (
    <nav className={`navbar-wrapper ${scrolled ? 'navbar-scrolled-outer' : ''}`}>
      <div className="navbar-pill" style={{ paddingLeft: '60px', paddingRight: '60px' }}>
        {/* Brand */}
        <a className="navbar-brand-link d-flex align-items-center gap-3" href="#home" style={{ textDecoration: 'none' }}>
          <div style={{ marginTop: '-20px', marginBottom: '-20px' }}>
            <img src="/nav-logo.png" alt="Baiyu Logo" style={{ width: '85px', height: '85px', objectFit: 'contain' }} />
          </div>
          <div className="d-flex flex-column justify-content-center">
            <span className="brand-name" style={{ lineHeight: '1', margin: 0, fontFamily: "'Caveat', cursive", fontSize: '2.5rem', letterSpacing: '0.5px', color: '#1a1a2e' }}>Baiyu</span>
            <span className="brand-tagline" style={{ fontSize: '0.85rem', color: '#1a1a2e', marginTop: '-2px' }}>Pawfectly poochy</span>
          </div>
        </a>

        {/* Nav links */}
        <ul className="navbar-nav-links">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                className={`nav-item-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#!" onClick={(e) => e.preventDefault()} className="btn-get-appointment">
          Get Appointment
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
