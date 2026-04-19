import React from 'react';
import PawHeartIcon from './PawHeartIcon';

/* 
  Simple paw frame: a circular image with a decorative paw-print border
  drawn using CSS + a paw SVG outline layered on top.
  Much more reliable than SVG clipPath which had rendering issues.
*/
const PawFrameImg = ({ src, alt, size = 120, color = '#E91E8C', dashed = true }) => {
  const strokeVal = dashed ? '8,5' : 'none';
  return (
    <div className="paw-img-frame" style={{ width: size, height: size, position: 'relative', flexShrink: 0 }}>
      {/* Circular image */}
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          objectFit: 'cover',
          objectPosition: 'center top',
          display: 'block',
        }}
      />
      {/* SVG paw outline drawn over the circle */}
      <svg
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', top: -10, left: -10, width: size + 20, height: size + 20, pointerEvents: 'none' }}
      >
        {/* Main circular border */}
        <circle
          cx="60" cy="65" r="48"
          fill="none"
          stroke={color}
          strokeWidth="3.5"
          strokeDasharray={strokeVal}
        />
        {/* Toe beans */}
        <circle cx="28" cy="22" r="9" fill="none" stroke={color} strokeWidth="3" strokeDasharray={strokeVal} />
        <circle cx="52" cy="12" r="9" fill="none" stroke={color} strokeWidth="3" strokeDasharray={strokeVal} />
        <circle cx="76" cy="12" r="9" fill="none" stroke={color} strokeWidth="3" strokeDasharray={strokeVal} />
        <circle cx="100" cy="22" r="9" fill="none" stroke={color} strokeWidth="3" strokeDasharray={strokeVal} />
      </svg>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Image collage left side */}
          <div className="col-lg-5 text-center">
            <img src="/about-collage.png" alt="About us collage" className="img-fluid w-100" style={{ maxWidth: '400px' }} />
          </div>

          {/* Text right side */}
          <div className="col-lg-7">
            <p className="section-tag">
              <PawHeartIcon size={20} color="var(--pink)" className="me-2" /> About Us
            </p>
            <h2 className="section-title">
              For your pet's natural<br />
              <span className="text-dark">life</span> &amp; <span className="text-pink">care</span>
            </h2>
            <p className="text-muted mt-3">
              At Lucy Pets, we are passionate about providing the highest quality care for your beloved
              companions. With over 16 years of experience, our certified team of groomers, trainers, and
              veterinary specialists ensure your pet receives the love, attention, and professional care
              they truly deserve.
            </p>

            <div className="row g-2 mt-3">
              {[
                { text: 'Certified Groomers' },
                { text: 'Animal Lovers' },
                { text: '16+ Years Experience' },
                { text: 'Loveable Sitters' },
              ].map((item, i) => (
                <div className="col-6" key={i}>
                  <div className="d-flex align-items-center gap-2">
                    <PawHeartIcon size={22} color="var(--pink)" />
                    <span className="fw-bold" style={{ fontSize: '1.05rem' }}>{item.text}</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn btn-appointment mt-4">
              <span className="btn-icon-wrap pe-2"><PawHeartIcon size={18} color="#FBBF24" /></span>
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
