import React, { useState } from 'react';
import PawHeartIcon from './PawHeartIcon';



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
