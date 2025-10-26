import React from 'react';
import { Link } from 'react-router-dom';
import { FaLightbulb, FaCog, FaChartLine, FaCheckCircle, FaRocket, FaUsers } from 'react-icons/fa';
import './ServicePage.css';

const BusinessConsulting = () => {
  const features = [
    { icon: <FaLightbulb />, title: 'Strategy Development', text: 'Comprehensive business strategy and planning' },
    { icon: <FaCog />, title: 'Operations Optimization', text: 'Streamlining processes for maximum efficiency' },
    { icon: <FaChartLine />, title: 'Performance Management', text: 'KPI tracking and continuous improvement' },
    { icon: <FaRocket />, title: 'Growth Acceleration', text: 'Strategies to scale your business rapidly' },
    { icon: <FaUsers />, title: 'Change Management', text: 'Guiding organizational transformation' },
    { icon: <FaCheckCircle />, title: 'Risk Management', text: 'Identifying and mitigating business risks' }
  ];

  const benefits = [
    'Strategic planning and business model innovation',
    'Market entry and expansion strategies',
    'Operational excellence and process improvement',
    'Digital transformation initiatives',
    'Organizational design and restructuring',
    'Performance improvement programs',
    'Cost optimization and efficiency enhancement',
    'Sustainability and ESG consulting'
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="hero-background-overlay"></div>
        <div className="service-hero-container">
          <div className="hero-tagline">CONSULTING</div>
          <h1>Business Consulting</h1>
          <p className="hero-description">Comprehensive business strategies to drive growth and efficiency</p>
        </div>
      </section>

      <section className="service-content">
        <div className="service-intro">
          <h2>Transform Your Business</h2>
          <p>
            Our business consulting services help organizations of all sizes achieve their strategic 
            objectives. From strategy development to operational excellence, we provide the insights 
            and execution support you need to succeed.
          </p>
          <p>
            With experience across 30+ industries, our consultants bring best practices and innovative 
            solutions tailored to your unique challenges and opportunities.
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
          <h2>Our Consulting Services</h2>
          <div className="benefits-list">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <FaCheckCircle className="check-icon" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="service-approach">
          <h2>Our Approach</h2>
          <div className="approach-steps">
            <div className="approach-step">
              <div className="step-number">1</div>
              <h3>Assess</h3>
              <p>Deep dive into your current state and challenges</p>
            </div>
            <div className="approach-step">
              <div className="step-number">2</div>
              <h3>Strategize</h3>
              <p>Develop customized solutions and roadmaps</p>
            </div>
            <div className="approach-step">
              <div className="step-number">3</div>
              <h3>Implement</h3>
              <p>Execute with your team for lasting results</p>
            </div>
            <div className="approach-step">
              <div className="step-number">4</div>
              <h3>Optimize</h3>
              <p>Continuous improvement and refinement</p>
            </div>
          </div>
        </div>

        <div className="service-cta">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's discuss how we can help you achieve your goals</p>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </div>
  );
};

export default BusinessConsulting;

