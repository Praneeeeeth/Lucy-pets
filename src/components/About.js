import React from 'react';
import PawHeartIcon from './PawHeartIcon';



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
