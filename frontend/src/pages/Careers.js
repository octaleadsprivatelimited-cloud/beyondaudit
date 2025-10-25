import React, { useState } from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Careers.css';

const Careers = () => {
  const [showForm, setShowForm] = useState(false);

  const positions = [
    {
      title: 'Senior Consultant - M&A',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Lead complex M&A engagements for Fortune 500 clients.'
    },
    {
      title: 'Business Analyst',
      location: 'London, UK',
      type: 'Full-time',
      description: 'Support consulting projects with data analysis and strategic insights.'
    },
    {
      title: 'Strategy Consultant',
      location: 'Singapore',
      type: 'Full-time',
      description: 'Develop and implement business strategies for global clients.'
    },
    {
      title: 'Talent Acquisition Specialist',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Help clients build high-performance teams.'
    }
  ];

  const benefits = [
    'Competitive salary and bonuses',
    'Comprehensive health insurance',
    'Professional development budget',
    'Flexible work arrangements',
    'Generous PTO policy',
    'Retirement planning support'
  ];

  return (
    <div className="careers-page">
      <section className="careers-hero" style={{
        backgroundImage: 'linear-gradient(rgba(10, 17, 40, 0.7), rgba(10, 17, 40, 0.7)), url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="careers-hero-content">
          <h1>Join Our Team</h1>
          <p>Build your career with a leading global consulting firm</p>
        </div>
      </section>

      <section className="careers-intro">
        <h2>Why Work With Us</h2>
        <p>
          At Corporate Consulting Solutions, you'll work alongside industry experts on challenging, 
          high-impact projects for the world's leading companies. We invest in our people through 
          continuous learning, mentorship, and career development opportunities.
        </p>
      </section>

      <section className="benefits-section">
        <h2>Benefits & Perks</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              ✓ {benefit}
            </div>
          ))}
        </div>
      </section>

      <section className="positions-section">
        <h2>Open Positions</h2>
        <div className="positions-grid">
          {positions.map((position, index) => (
            <div key={index} className="position-card">
              <h3>{position.title}</h3>
              <div className="position-details">
                <span><FaMapMarkerAlt /> {position.location}</span>
                <span><FaClock /> {position.type}</span>
              </div>
              <p>{position.description}</p>
              <button onClick={() => setShowForm(true)} className="btn btn-primary">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {showForm && (
        <div className="application-modal">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setShowForm(false)}>×</button>
            <h2>Submit Your Application</h2>
            <p>Send your resume and cover letter to: careers@corporate-consulting.com</p>
            <button onClick={() => setShowForm(false)} className="btn btn-primary">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;

