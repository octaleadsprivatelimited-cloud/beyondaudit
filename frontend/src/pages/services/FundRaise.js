import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaUsers, FaHandshake, FaCheckCircle, FaRocket } from 'react-icons/fa';
import './ServicePage.css';

const FundRaise = () => {
  const features = [
    { icon: <FaChartLine />, title: 'Capital Strategy', text: 'Tailored funding strategies for your growth stage' },
    { icon: <FaUsers />, title: 'Investor Relations', text: 'Building relationships with the right investors' },
    { icon: <FaHandshake />, title: 'Deal Execution', text: 'Managing the fundraising process end-to-end' },
    { icon: <FaRocket />, title: 'Growth Planning', text: 'Strategic planning for capital deployment' }
  ];

  const benefits = [
    'Seed, Series A-D, and late-stage funding',
    'Private equity and venture capital placement',
    'Strategic investor identification and targeting',
    'Pitch deck development and refinement',
    'Financial modeling and projections',
    'Term sheet negotiation and deal closing',
    'Post-funding strategic advisory'
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="service-hero-content">
          <h1>Fund Raise Services</h1>
          <p>Expert support in securing capital and navigating investment landscapes</p>
        </div>
      </section>

      <section className="service-content">
        <div className="service-intro">
          <h2>Strategic Capital Raising</h2>
          <p>
            Securing the right capital at the right time is critical to your company's success. Our 
            fundraising experts help you navigate the complex world of venture capital, private equity, 
            and strategic investments.
          </p>
          <p>
            We've successfully raised over $5B for our clients across various industries and stages, 
            from early-stage startups to established enterprises seeking growth capital.
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
          <h2>Comprehensive Fundraising Support</h2>
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
            <h3>$5B+</h3>
            <p>Capital Raised</p>
          </div>
          <div className="stat-item">
            <h3>200+</h3>
            <p>Successful Rounds</p>
          </div>
          <div className="stat-item">
            <h3>95%</h3>
            <p>Success Rate</p>
          </div>
        </div>

        <div className="service-cta">
          <h2>Ready to Raise Capital?</h2>
          <p>Connect with our fundraising experts today</p>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default FundRaise;

