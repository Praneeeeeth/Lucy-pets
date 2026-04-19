import React from 'react';
import PawHeartIcon from './PawHeartIcon';

const groomers = [
  {
    img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop&crop=face',
    name: 'Jenny Wilson',
    role: 'Founder',
    borderColor: '#E91E8C',
    socials: [
      { icon: 'bi-twitter-x', color: '#000', bg: '#e9e9e9' },
      { icon: 'bi-facebook', color: '#1877F2', bg: '#deeeff' },
      { icon: 'bi-linkedin', color: '#0A66C2', bg: '#dceeff' },
    ],
  },
  {
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    name: 'Isra Ahmed',
    role: 'CEO',
    borderColor: '#6B21A8',
    socials: [
      { icon: 'bi-twitter-x', color: '#000', bg: '#e9e9e9' },
      { icon: 'bi-facebook', color: '#1877F2', bg: '#deeeff' },
      { icon: 'bi-linkedin', color: '#0A66C2', bg: '#dceeff' },
    ],
  },
  {
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=300&fit=crop&crop=face',
    name: 'Aliya Khan',
    role: 'Senior Groomer',
    borderColor: '#E91E8C',
    socials: [
      { icon: 'bi-twitter-x', color: '#000', bg: '#e9e9e9' },
      { icon: 'bi-facebook', color: '#1877F2', bg: '#deeeff' },
      { icon: 'bi-linkedin', color: '#0A66C2', bg: '#dceeff' },
    ],
  },
  {
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
    name: 'Jameela',
    role: 'Pet Care Incharge',
    borderColor: '#6B21A8',
    socials: [
      { icon: 'bi-twitter-x', color: '#000', bg: '#e9e9e9' },
      { icon: 'bi-facebook', color: '#1877F2', bg: '#deeeff' },
      { icon: 'bi-linkedin', color: '#0A66C2', bg: '#dceeff' },
    ],
  },
];

const Groomers = () => {
  return (
    <section id="contact" className="groomers-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-tag justify-content-center"><PawHeartIcon size={24} color="var(--pink)" /></p>
          <h2 className="section-title">
            Our <span className="text-pink">Groomers</span>
          </h2>
        </div>

        <div className="row justify-content-center g-4">
          {groomers.map((groomer, i) => (
            <div className="col-lg-3 col-md-6 col-6 text-center" key={i}>
              <div className="groomer-card">
                {/* Circle image with dashed colored border */}
                <div
                  className={`groomer-circle-wrap ${i === 0 ? 'groomer-founder' : 'groomer-standard'}`}
                >
                  <img
                    src={groomer.img}
                    alt={groomer.name}
                    className="groomer-circle-img"
                  />
                </div>
                <p className="groomer-role mt-3 mb-1">{groomer.role}</p>
                <h6 className="groomer-name fw-bold">{groomer.name}</h6>
                <div className="groomer-socials mt-2">
                  {groomer.socials.map((s, si) => (
                    <a
                      key={si}
                      href="#!"
                      className="social-btn"
                      style={{ background: s.bg, color: s.color }}
                    >
                      <i className={`bi ${s.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Groomers;
