import React, { useState } from 'react';
import PawHeartIcon from './PawHeartIcon';

// Simple solid background image map as requested
const WorldMapDots = () => (
  <div className="world-map-svg" style={{ 
    width: '100%', 
    height: '100%', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    position: 'absolute',
    inset: 0,
    opacity: 0.15,
    pointerEvents: 'none'
  }}>
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
      alt="World Map Silhouette" 
      style={{ width: '100%', maxWidth: '1000px', objectFit: 'contain', mixBlendMode: 'multiply' }} 
    />
  </div>
);

const testimonials = [
  {
    name: 'Rocky Dixon',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    text: 'Lucy Pets has completely transformed how we care for our golden retriever Max. The groomers are incredibly gentle and professional — Max always comes back looking and smelling amazing!',
    rating: 5,
  },
  {
    name: 'Sarah Mitchell',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    text: 'The veterinary team at Lucy Pets is outstanding. They treated our cat Luna with such kindness and expertise. Truly a 5-star experience for both me and my pet!',
    rating: 5,
  },
  {
    name: 'James Parker',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    text: 'I trust Lucy Pets completely with my two dogs. The meal plans are customized to their health needs, and I can see the difference in their energy and coat quality. Highly recommended!',
    rating: 5,
  },
];

const avatarPositions = [
  { img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face', style: { top: '10%', left: '6%' }, border: '#E91E8C' },
  { img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face', style: { top: '10%', right: '10%' }, border: '#6B21A8' },
  { img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face', style: { bottom: '18%', left: '9%' }, border: '#E91E8C' },
  { img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face', style: { bottom: '12%', right: '9%' }, border: '#6B21A8' },
  { img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face', style: { top: '44%', left: '4%' }, border: '#E91E8C' },
  { img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop&crop=face', style: { top: '44%', right: '4%' }, border: '#6B21A8' },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="testimonials-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-tag justify-content-center"><PawHeartIcon size={24} color="var(--pink)" /></p>
          <h2 className="section-title">
            Clients <span className="text-pink">Feedback.</span>
          </h2>
        </div>

        <div className="testimonials-map-wrapper position-relative">
          {/* Dotted world map background */}
          <div className="world-map-bg">
            <WorldMapDots />
          </div>

          {/* Floating avatars */}
          {avatarPositions.map((av, i) => (
            <div
              key={i}
              className="floating-avatar position-absolute"
              style={{ ...av.style, borderColor: av.border }}
            >
              <img src={av.img} alt="client" />
            </div>
          ))}

          {/* Center testimonial card */}
          <div className="testimonial-center-card">
            <div className="quote-icon">"</div>
            <div className="testimonial-avatar">
              <img src={t.img} alt={t.name} className="rounded-circle" />
            </div>
            <h6 className="testimonial-name fw-bold mt-2">{t.name}</h6>
            <div className="testimonial-stars mb-2">
              {Array.from({ length: t.rating }).map((_, si) => (
                <i key={si} className="bi bi-star-fill text-warning" style={{ fontSize: '0.75rem' }}></i>
              ))}
            </div>
            <p className="testimonial-text">{t.text}</p>
          </div>
        </div>

        {/* Dots */}
        <div className="d-flex justify-content-center gap-2 mt-4">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className={`testimonial-dot ${active === i ? 'active' : ''}`}></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
