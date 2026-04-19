import React from 'react';
import PawHeartIcon from './PawHeartIcon';

const services = [
  {
    img: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&h=280&fit=crop',
    title: 'Pet Grooming',
    desc: 'Our certified groomers pamper your pets with professional baths, stylish haircuts, nail trimming, and ear cleaning — leaving them fresh, clean, and absolutely adorable every single visit.',
  },
  {
    img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=280&fit=crop',
    title: 'Healthy Meals',
    desc: 'We craft balanced, vet-approved meal plans tailored to your pet\'s breed, age, and health needs. Our wholesome nutrition services keep your pet energetic, healthy, and thriving year-round.',
  },
  {
    img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=280&fit=crop',
    title: 'Veterinary Service',
    desc: 'Our experienced veterinary professionals provide comprehensive health check-ups, vaccinations, dental care, and preventive treatments to ensure your beloved pet lives a long and happy life.',
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-tag justify-content-center">
            <PawHeartIcon size={24} color="var(--pink)" />
          </p>
          <h2 className="section-title">
            What We <span className="text-pink">Do.</span>
          </h2>
        </div>

        <div className="row g-4">
          {services.map((service, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className="service-card">
                <div className="service-img-wrapper">
                  <img src={service.img} alt={service.title} className="service-img" />
                </div>
                <div className="service-body">
                  <h5 className="service-title">{service.title}</h5>
                  <p className="service-desc text-muted">{service.desc}</p>
                  <button className="btn btn-read-more w-100 rounded-pill mt-3 d-flex align-items-center justify-content-center gap-2">
                    <PawHeartIcon size={18} color="#FBBF24" />
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
