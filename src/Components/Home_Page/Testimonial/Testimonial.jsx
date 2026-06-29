import React, { useState } from 'react';
import './Testimonial.css';

const testimonials = [
  {
    name: "HR Team",
    role: "FirstMeridian Global Services",
    text: "The HR Heads got back from the conference yesterday and they mentioned that the videos were well received by all 4 leaders. The videos created the impact which was expected. Thanks a lot for creating them for us."
  },
  {
    name: "NoQu Company",
    role: "Client",
    text: "Outstanding creativity and attention to detail. The team delivered beyond our expectations with stunning results."
  }
];

const Testimonial = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((active + 1) % testimonials.length);
  const prev = () => setActive((active - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="testimonial-wrapper">
      {/* Background decoration */}
      <div className="pattern-layer">
        <svg viewBox="0 0 400 600" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
          <circle cx="0" cy="300" r="120" fill="none" stroke="#F5D0A9" strokeWidth="2" opacity="0.5" />
          <circle cx="0" cy="300" r="100" fill="none" stroke="#F5D0A9" strokeWidth="2" opacity="0.5" />
          <circle cx="0" cy="300" r="80" fill="none" stroke="#F5D0A9" strokeWidth="2" opacity="0.5" />
        </svg>
      </div>

      <div className="testimonial-container">
        {/* Top Left - Heading */}
        <div className="header-left">
          <h1 className="main-heading">CLIENTS</h1>
          <p className="sub-heading">(What They Say)</p>
        </div>

        {/* Center - Main Card */}
        <div className="card-wrapper">
          <div className="testimonial-card">
            {/* Quote badge */}
            <div className="quote-badge">
              <span className="quote-icon">"</span>
            </div>

            {/* Content */}
            <div className="testimonial-content">
              <p className="testimonial-text">
                "{testimonials[active].text}"
              </p>

              {/* Author info */}
              <div className="author-info">
                <div className="author-avatar">
                  {testimonials[active].name.charAt(0)}
                </div>
                <div>
                  <h4 className="author-name">
                    {testimonials[active].name}
                  </h4>
                  <p className="author-role">
                    {testimonials[active].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="nav-wrapper">
              <button onClick={prev} className="nav-btn">
                ←
              </button>
              <div className="dots-container">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`dot ${i === active ? 'active' : ''}`}
                  />
                ))}
              </div>
              <button onClick={next} className="nav-btn">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;