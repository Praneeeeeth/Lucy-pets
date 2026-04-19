import React from 'react';
import PawHeartIcon from './PawHeartIcon';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6 col-md-8">
            <p className="hero-tagline">
              Enjoy your <span className="text-yellow fw-semibold">vacation</span>
            </p>
            <h1 className="hero-title">
              The World Best Team<br />
              For <span className="text-pink">Pet Care</span> Service
            </h1>
            <div className="d-flex gap-3 mt-4 flex-wrap">
              <button type="button" onClick={(e) => e.preventDefault()} className="btn btn-appointment btn-lg">
                <span className="btn-icon-wrap pe-2"><PawHeartIcon size={20} color="#FBBF24" /></span>
                Make Appointment
              </button>
              <button className="btn btn-call btn-lg">
                <span className="btn-icon-wrap">📞</span>
                Call Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
