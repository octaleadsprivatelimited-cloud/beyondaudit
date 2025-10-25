import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Michael Chen',
      company: 'Tech Innovations Inc.',
      position: 'CEO',
      text: 'Outstanding consulting services that helped us close our largest acquisition to date. The team was professional, knowledgeable, and delivered results beyond our expectations.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Global Ventures',
      position: 'CFO',
      text: 'Their expertise in fundraising was instrumental in securing our Series B funding. They connected us with the right investors and guided us through every step.',
      rating: 5
    },
    {
      name: 'James Williams',
      company: 'Manufacturing Corp',
      position: 'COO',
      text: 'The digital transformation strategy they developed completely changed how we operate. We saw immediate improvements in efficiency and cost savings.',
      rating: 5
    },
    {
      name: 'Sarah Thompson',
      company: 'Healthcare Partners',
      position: 'CEO',
      text: 'Exceptional team that really understood our business. They helped us navigate a complex merger and the integration was seamless.',
      rating: 5
    },
    {
      name: 'David Park',
      company: 'FinTech Solutions',
      position: 'Founder',
      text: 'Best consulting experience we\'ve had. They helped us build our entire executive team and the candidates they found have been phenomenal.',
      rating: 5
    },
    {
      name: 'Lisa Anderson',
      company: 'Retail Group',
      position: 'VP Strategy',
      text: 'Their market research and expansion strategy enabled us to successfully enter three new markets. Highly recommend their services.',
      rating: 5
    }
  ];

  return (
    <div className="testimonials-page">
      <section className="testimonials-hero" style={{
        backgroundImage: 'linear-gradient(rgba(10, 17, 40, 0.7), rgba(10, 17, 40, 0.7)), url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="testimonials-hero-content">
          <h1>Client Testimonials</h1>
          <p>Hear what our clients have to say about working with us</p>
        </div>
      </section>

      <section className="testimonials-grid-section">
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card-large">
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                  <p className="author-company">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

