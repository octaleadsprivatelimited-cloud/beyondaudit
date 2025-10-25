import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileInvoice, FaShieldAlt, FaSearch, FaChartBar, FaArrowRight } from 'react-icons/fa';
import './ServicePage.css';

const AuditAssurance = () => {
  const features = [
    {
      icon: <FaFileInvoice />,
      title: 'Financial Audits',
      description: 'Comprehensive financial statement audits ensuring accuracy and compliance with accounting standards.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Internal Audits',
      description: 'Independent internal audit services to evaluate and improve your internal controls and processes.'
    },
    {
      icon: <FaSearch />,
      title: 'Compliance Audits',
      description: 'Thorough compliance audits to ensure adherence to regulatory requirements and industry standards.'
    },
    {
      icon: <FaChartBar />,
      title: 'Risk Assessment',
      description: 'Comprehensive risk assessment and management to identify and mitigate potential financial risks.'
    }
  ];

  const benefits = [
    'Independent verification of financial statements',
    'Enhanced credibility with stakeholders',
    'Identification of operational inefficiencies',
    'Improved internal controls and processes',
    'Compliance with regulatory requirements',
    'Professional audit reports and recommendations'
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="service-hero-content">
          <div className="service-icon-large">
            <FaFileInvoice />
          </div>
          <h1>Audit & Assurance</h1>
          <p>Comprehensive audit services ensuring financial accuracy and regulatory compliance for your business.</p>
        </div>
      </section>

      <section className="service-overview">
        <div className="service-description">
          <h2>Professional Audit Services</h2>
          <p>
            Our audit and assurance services provide independent verification of your financial statements, 
            ensuring accuracy, compliance, and transparency. We help businesses maintain credibility with 
            stakeholders while identifying opportunities for improvement.
          </p>
          <p>
            Our qualified audit team follows international auditing standards and brings extensive experience 
            in various industries, ensuring thorough and reliable audit services tailored to your specific needs.
          </p>
        </div>
      </section>

      <section className="service-features">
        <h2>Our Audit Services</h2>
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
          <h2>Why Choose Our Audit Services</h2>
          <ul className="benefits-list">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="service-cta">
        <h2>Need Professional Audit Services?</h2>
        <p>Let's discuss how we can help ensure your financial accuracy and compliance</p>
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

export default AuditAssurance;
