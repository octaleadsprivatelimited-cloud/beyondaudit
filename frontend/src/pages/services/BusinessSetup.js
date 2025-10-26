import React from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaBuilding, FaFileContract, FaCog, FaArrowRight } from 'react-icons/fa';
import './ServicePage.css';

const BusinessSetup = () => {
  const features = [
    {
      icon: <FaBuilding />,
      title: 'Company Registration',
      description: 'Complete company registration services including private limited, LLP, and partnership firm registration.'
    },
    {
      icon: <FaFileContract />,
      title: 'GST Registration',
      description: 'Professional GST registration and compliance services to ensure smooth business operations.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Compliance Management',
      description: 'Ongoing compliance management to ensure adherence to all regulatory requirements and deadlines.'
    },
    {
      icon: <FaCog />,
      title: 'Regulatory Filings',
      description: 'Timely filing of all required regulatory documents and returns to maintain compliance.'
    }
  ];

  const benefits = [
    'Complete business registration and setup',
    'Professional GST registration and compliance',
    'Ongoing regulatory compliance management',
    'Expert guidance on business structure',
    'Timely filing of all required documents',
    'Comprehensive compliance support'
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="hero-background-overlay"></div>
        <div className="service-hero-container">
          <div className="hero-tagline">BUSINESS SERVICES</div>
          <h1>Business Setup & Compliance</h1>
          <p className="hero-description">Complete business registration and ongoing compliance management services to ensure your business operates smoothly.</p>
        </div>
      </section>

      <section className="service-overview">
        <div className="service-description">
          <h2>Comprehensive Business Solutions</h2>
          <p>
            Our business setup and compliance services provide end-to-end support for new and existing businesses. 
            From company registration to ongoing compliance management, we ensure your business meets all regulatory 
            requirements and operates efficiently.
          </p>
          <p>
            Our experienced team handles all the complex paperwork and regulatory requirements, allowing you to 
            focus on growing your business while we ensure full compliance with all applicable laws and regulations.
          </p>
        </div>
      </section>

      <section className="service-features">
        <h2>Our Business Services</h2>
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
          <h2>Why Choose Our Business Services</h2>
          <ul className="benefits-list">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="service-cta">
        <h2>Ready to Start Your Business?</h2>
        <p>Let's discuss how we can help you set up and maintain your business compliance</p>
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

export default BusinessSetup;
