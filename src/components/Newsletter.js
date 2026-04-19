import React, { useState } from 'react';
import PawHeartIcon from './PawHeartIcon';

const PawIcon = ({ size = 16, color = 'white' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="6" r="2.2" />
    <circle cx="18" cy="6" r="2.2" />
    <circle cx="3.5" cy="11" r="2" />
    <circle cx="20.5" cy="11" r="2" />
    <path d="M12 8.5c-4.5 0-7 3-6.5 6.5.5 3 3.5 5 6.5 5s6-2 6.5-5c.5-3.5-2-6.5-6.5-6.5z" />
  </svg>
);

const Newsletter = () => {
  const [email, setEmail] = useState('');

  return (
    <section className="newsletter-section">
      <div className="newsletter-overlay"></div>
      <div className="container position-relative">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <p className="section-tag justify-content-center" style={{color:'rgba(255,255,255,0.7)'}}><PawHeartIcon size={24} color="var(--pink)" /></p>
            <h2 className="newsletter-title">
              Subscribe <span className="text-pink">Newsletter</span> &amp; Get<br />
              Company News
            </h2>
            <div className="newsletter-form mt-4">
              <div className="input-group newsletter-input-group">
                <input
                  type="email"
                  className="form-control newsletter-input"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn btn-subscribe">
                  <span className="btn-icon-wrap pe-2"><PawHeartIcon size={18} color="#FBBF24" /></span>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
