import React, { useState } from 'react';
import PawHeartIcon from './PawHeartIcon';

const allBlogs = [
  {
    img: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&h=400&fit=crop&crop=center',
    author: 'Admin',
    category: 'Pet Care',
    title: 'The best home caretakers of any kind of pets',
    date: 'Jan 12, 2024',
  },
  {
    img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop&crop=faces,center',
    author: 'Admin',
    category: 'Dog Walking',
    title: 'Trusted pet sitters and on-demand dog walkers.',
    date: 'Feb 5, 2024',
  },
  {
    img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop&crop=center',
    author: 'Admin',
    category: 'Boarding',
    title: 'On-demand dog walking, sitting, and boarding.',
    date: 'Mar 18, 2024',
  },
  {
    img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=400&fit=crop&crop=center',
    author: 'Admin',
    category: 'Grooming',
    title: 'Top grooming tips to keep your pet looking their best.',
    date: 'Apr 2, 2024',
  },
  {
    img: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=600&h=400&fit=crop&crop=center',
    author: 'Admin',
    category: 'Health',
    title: 'Essential vaccinations every pet owner should know about.',
    date: 'May 10, 2024',
  },
  {
    img: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=600&h=400&fit=crop&crop=center',
    author: 'Admin',
    category: 'Nutrition',
    title: 'How to choose the right diet for your dog\'s breed.',
    date: 'Jun 20, 2024',
  },
];

const Blog = () => {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(allBlogs.length / perPage);

  const prev = () => setPage(p => Math.max(0, p - 1));
  const next = () => setPage(p => Math.min(totalPages - 1, p + 1));

  const visible = allBlogs.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="blogs" className="blog-section py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <p className="section-tag"><PawHeartIcon size={20} color="var(--pink)" className="me-2" /> Blogs</p>
            <h2 className="section-title mb-0">
              News &amp; <span className="text-dark">Feeds</span>
            </h2>
          </div>
          <div className="d-flex gap-2">
            <button
              className={`btn-nav-arrow ${page === 0 ? 'disabled-arrow' : ''}`}
              onClick={prev}
              disabled={page === 0}
              aria-label="Previous"
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <button
              className={`btn-nav-arrow ${page === totalPages - 1 ? 'disabled-arrow' : 'active'}`}
              onClick={next}
              disabled={page === totalPages - 1}
              aria-label="Next"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>

        <div className="row g-4 align-items-stretch">
          {visible.map((blog, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className="blog-card h-100">
                <div className="blog-img-wrapper">
                  <img src={blog.img} alt={blog.title} className="blog-img" loading="lazy" />
                </div>
                <div className="blog-body d-flex flex-column">
                  <div className="blog-meta d-flex align-items-center gap-3 mb-2">
                    <span className="blog-meta-item">
                      <i className="bi bi-person me-1 text-pink"></i>By {blog.author}
                    </span>
                    <span className="blog-meta-item">
                      <i className="bi bi-tag me-1 text-pink"></i>{blog.category}
                    </span>
                  </div>
                  <h6 className="blog-title fw-bold flex-grow-1">{blog.title}</h6>
                  <a href="#!" className="btn-read-more-link mt-auto">
                    Read more <i className="bi bi-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
