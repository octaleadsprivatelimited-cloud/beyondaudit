import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalculator, FaFileInvoice, FaShieldAlt, FaChartLine, FaArrowRight } from 'react-icons/fa';
import './ServicePage.css';

const TaxPlanning = () => {
  const features = [
    {
      icon: <FaCalculator />,
      title: 'Tax Strategy Development',
      description: 'Customized tax strategies to minimize your tax liability while ensuring full compliance with all regulations.'
    },
    {
      icon: <FaFileInvoice />,
      title: 'Tax Return Preparation',
      description: 'Professional preparation and filing of individual and business tax returns with accuracy and timeliness.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Tax Compliance',
      description: 'Ongoing compliance management to ensure you meet all tax obligations and deadlines.'
    },
    {
      icon: <FaChartLine />,
      title: 'Tax Advisory',
      description: 'Expert advice on tax implications of business decisions and investment strategies.'
    }
  ];

  const benefits = [
    'Minimize tax liability through strategic planning',
    'Ensure full compliance with tax regulations',
    'Professional tax return preparation and filing',
    'Ongoing tax advisory and support',
    'Expert knowledge of current tax laws',
    'Timely and accurate tax submissions'
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="service-hero-content">
          <h1>Tax Planning & Compliance</h1>
          <p>Expert tax strategies and compliance services to optimize your financial position and ensure regulatory compliance.</p>
          <div className="hero-cta-buttons">
            <Link to="/contact" className="btn-hero-primary">
              Get Started Free
            </Link>
            <Link to="/services" className="btn-hero-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="service-overview">
        <div className="service-description">
          <h2>Comprehensive Tax Solutions</h2>
          <p>
            Our tax planning and compliance services are designed to help individuals and businesses 
            optimize their tax position while ensuring full compliance with all applicable tax laws. 
            We provide strategic tax planning, professional return preparation, and ongoing compliance support.
          </p>
          <p>
            Our team of qualified chartered accountants stays up-to-date with the latest tax regulations 
            and changes, ensuring that you benefit from the most current tax strategies and remain 
            compliant with all requirements.
          </p>
        </div>
      </section>

      <section className="service-features">
        <h2>Our Tax Services</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="service-benefits">
        <div className="benefits-content">
          <h2>Why Choose Our Tax Services</h2>
          <ul className="benefits-list">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="service-cta">
        <h2>Ready to Optimize Your Tax Strategy?</h2>
        <p>Let's discuss how we can help you minimize your tax liability and ensure compliance</p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn btn-primary">
            Get Started <FaArrowRight />
          </Link>
          <Link to="/services" className="btn btn-outline">
            View All Services
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TaxPlanning;
