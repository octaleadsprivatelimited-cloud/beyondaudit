import React from 'react';
import { Link } from 'react-router-dom';
import { FaHandshake, FaChartLine, FaFileContract, FaCheckCircle } from 'react-icons/fa';
import './ServicePage.css';

const MergersAcquisitions = () => {
  const features = [
    { icon: <FaChartLine />, title: 'Valuation Analysis', text: 'Comprehensive financial modeling and valuation' },
    { icon: <FaFileContract />, title: 'Due Diligence', text: 'Thorough examination of all business aspects' },
    { icon: <FaHandshake />, title: 'Deal Negotiation', text: 'Expert negotiation for optimal terms' },
    { icon: <FaCheckCircle />, title: 'Post-Merger Integration', text: 'Seamless integration strategies' }
  ];

  const benefits = [
    'Strategic buyer identification and outreach',
    'Comprehensive financial and operational due diligence',
    'Valuation modeling and price optimization',
    'Deal structure design and negotiation support',
    'Regulatory compliance and approval management',
    'Post-merger integration planning and execution'
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="service-hero-content">
          <h1>Mergers & Acquisitions</h1>
          <p>Strategic guidance through complex M&A transactions with proven success</p>
        </div>
      </section>

      <section className="service-content">
        <div className="service-intro">
          <h2>Expert M&A Advisory Services</h2>
          <p>
            Our M&A team brings decades of experience across multiple industries, helping companies 
            navigate the complexities of mergers, acquisitions, and divestitures. We provide end-to-end 
            support from initial strategy through post-transaction integration.
          </p>
          <p>
            Whether you're acquiring a competitor, divesting a non-core business unit, or pursuing a 
            merger of equals, our team delivers the insights and execution support you need for success.
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
          <h2>Our M&A Services Include</h2>
          <div className="benefits-list">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <FaCheckCircle className="check-icon" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="service-cta">
          <h2>Ready to Discuss Your M&A Strategy?</h2>
          <p>Let our experts guide you through your next transaction</p>
          <Link to="/contact" className="btn btn-primary">Schedule a Consultation</Link>
        </div>
      </section>
    </div>
  );
};

export default MergersAcquisitions;

