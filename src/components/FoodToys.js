import React from 'react';
import PawHeartIcon from './PawHeartIcon';

const FoodToys = () => {
  return (
    <section className="food-toys-section">
      <div className="row g-0 align-items-stretch">
        {/* Left purple panel */}
        <div className="col-lg-6 food-toys-left d-flex align-items-center justify-content-center">
          <div className="p-5 text-center w-100 mx-auto">
            <h2 className="food-toys-title mx-auto">
              Get Every Pet<br />
              <span className="text-yellow">Foods</span> &amp;{' '}
              <span className="text-yellow">Toys Here.</span>
            </h2>
            <p className="text-white-50 mt-3 mx-auto" style={{ maxWidth: '500px' }}>
              From premium organic pet food to exciting interactive toys — we stock everything your furry 
              friend could dream of. Shop our curated collection of nutritious meals, tasty treats, 
              and stimulating toys designed to keep your pets healthy, happy, and entertained every day.
            </p>
            <button className="btn btn-shop-now mt-3">
              <span className="btn-icon-wrap pe-2"><PawHeartIcon size={18} color="#FBBF24" /></span>
              Shop Now
            </button>
          </div>
        </div>

        {/* Right image panel */}
        <div className="col-lg-6 food-toys-right position-relative">
          <img
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=500&fit=crop"
            alt="Pet with owner"
            className="w-100 h-100 object-fit-cover"
          />
          <div className="play-btn">
            <i className="bi bi-play-fill"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodToys;
