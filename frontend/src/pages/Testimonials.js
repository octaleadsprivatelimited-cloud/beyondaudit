import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Deepak Saxena',
      position: 'Partner – Risk Advisory Services',
      company: 'Big 4',
      text: 'Beyond Audit delivered exactly what was committed. The assignments were executed across multiple locations with consistent quality and timely reporting. Their ability to manage last-mile audit execution stood out.',
      rating: 5
    },
    {
      name: 'Neha Patil',
      position: 'Senior Manager – Risk Advisory Services',
      company: 'Big 6',
      text: 'We engaged Beyond Audit for large-scale field and stock audits across several states. The coordination, auditor availability, and completion discipline were impressive, even in difficult locations.',
      rating: 5
    },
    {
      name: 'Rahul Mittal',
      position: 'Finance Controller',
      company: 'National Retail & Distribution Company',
      text: 'Finding reliable auditors at short notice has always been a challenge. Beyond Audit solved this efficiently with verified professionals and structured execution. Once assigned, the work was completed without follow-ups.',
      rating: 5
    },
    {
      name: 'Akshay Gupta',
      position: 'Senior Manager – Assurance & Risk Advisory',
      company: 'Mid-sized CA Firm',
      text: 'Beyond Audit supported us with multi-city audit execution where consistency was critical. Reporting was standardised, timelines were met, and communication remained clear throughout the engagement.',
      rating: 5
    },
    {
      name: 'Suresh Kumar',
      position: 'Head – Compliance & Internal Audit',
      company: 'Manufacturing Group',
      text: 'We required audit coverage across remote and non-metro locations. Beyond Audit demonstrated strong on-ground capability and ownership, ensuring assignments were completed as planned.',
      rating: 5
    },
    {
      name: 'Arjun Malhotra',
      position: 'Director – Finance & Risk',
      company: 'Financial Services Group',
      text: 'The Beyond Audit team understands audit realities very well. Their freelancer network, verification standards, and execution discipline make them a dependable partner for large audit requirements.',
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

