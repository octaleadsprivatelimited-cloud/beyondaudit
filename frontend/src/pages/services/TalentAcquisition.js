import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaSearch, FaStar, FaCheckCircle, FaUserTie, FaHandshake } from 'react-icons/fa';
import './ServicePage.css';

const TalentAcquisition = () => {
  const features = [
    { icon: <FaSearch />, title: 'Executive Search', text: 'Finding C-level and senior leadership talent' },
    { icon: <FaUsers />, title: 'Bulk Hiring', text: 'Scaling teams quickly and efficiently' },
    { icon: <FaStar />, title: 'Specialized Recruitment', text: 'Niche and hard-to-fill positions' },
    { icon: <FaUserTie />, title: 'Assessment Services', text: 'Comprehensive candidate evaluation' },
    { icon: <FaHandshake />, title: 'Onboarding Support', text: 'Ensuring successful integration' },
    { icon: <FaCheckCircle />, title: 'Retention Strategies', text: 'Programs to retain top talent' }
  ];

  const benefits = [
    'Executive and leadership recruitment',
    'Technical and specialized talent acquisition',
    'Volume hiring and team building',
    'Candidate assessment and screening',
    'Compensation benchmarking and negotiation',
    'Onboarding and integration support',
    'Employer branding and recruitment marketing',
    'Talent pipeline development'
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="hero-background-overlay"></div>
        <div className="service-hero-container">
          <div className="hero-tagline">TALENT SERVICES</div>
          <h1>Talent Acquisition Services</h1>
          <p className="hero-description">Finding and securing top-tier talent for your organization</p>
        </div>
      </section>

      <section className="service-content">
        <div className="service-intro">
          <h2>Build Your Dream Team</h2>
          <p>
            Your people are your greatest asset. Our talent acquisition services help you identify, 
            attract, and retain the best talent in your industry. From executive search to volume 
            hiring, we have the expertise and network to deliver results.
          </p>
          <p>
            With access to a global talent pool and proven recruitment methodologies, we've 
            successfully placed thousands of professionals across diverse industries and roles.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="service-benefits">
          <h2>Comprehensive Talent Solutions</h2>
          <div className="benefits-list">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <FaCheckCircle className="check-icon" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="service-stats">
          <div className="stat-item">
            <h3>5,000+</h3>
            <p>Successful Placements</p>
          </div>
          <div className="stat-item">
            <h3>90%</h3>
            <p>Retention Rate</p>
          </div>
          <div className="stat-item">
            <h3>30 Days</h3>
            <p>Average Time to Hire</p>
          </div>
        </div>

        <div className="service-cta">
          <h2>Need to Build Your Team?</h2>
          <p>Connect with our talent acquisition experts</p>
          <Link to="/contact" className="btn btn-primary">Start Hiring</Link>
        </div>
      </section>
    </div>
  );
};

export default TalentAcquisition;

