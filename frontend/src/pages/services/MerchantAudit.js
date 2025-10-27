import React from 'react';
import { FaHandshake, FaChartLine, FaShieldAlt, FaCheckCircle, FaClock, FaArrowRight } from 'react-icons/fa';
import './ServicePage.css';

const MerchantAudit = () => {
  const features = [
    {
      icon: <FaHandshake />,
      title: 'Merchant Transaction Review',
      description: 'Comprehensive review of merchant transactions, payment processing, and settlement procedures to ensure accuracy and integrity.'
    },
    {
      icon: <FaChartLine />,
      title: 'Pricing Structure Analysis',
      description: 'Detailed analysis of pricing structures, promotional activities, and revenue recognition to identify discrepancies.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Settlement Integrity Check',
      description: 'Verification of settlement integrity, payment accuracy, and financial reconciliation processes.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Promotional Compliance Assessment',
      description: 'Assessment of promotional compliance, policy adherence, and operational consistency across merchant operations.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Merchant Assessment',
      description: 'We begin by reviewing merchant transactions, pricing structures, and operational adherence to corporate guidelines.'
    },
    {
      step: '02',
      title: 'Data Verification',
      description: 'Our team assesses data accuracy, settlement integrity, and promotional compliance across merchant channels.'
    },
    {
      step: '03',
      title: 'Revenue Analysis',
      description: 'We analyze revenue patterns, identify leakage points, and evaluate merchant performance consistency.'
    },
    {
      step: '04',
      title: 'Recommendations & Action Plan',
      description: 'We provide recommendations to safeguard against revenue leakage and ensure disciplined merchant operations.'
    }
  ];

  const benefits = [
    'Safeguards against revenue leakage',
    'Ensures consistency in merchant performance',
    'Improves reliability in financial reporting',
    'Sustains brand trust and integrity',
    'Enhances merchant accountability',
    'Reduces financial discrepancies',
    'Improves operational discipline',
    'Provides transparent merchant operations'
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="hero-background-overlay"></div>
        <div className="service-hero-container">
          <div className="hero-tagline">MERCHANT AUDIT</div>
          <h1>Merchant Audit Services</h1>
          <p className="hero-description">
            The Merchant Audit provides a meticulous review of merchant transactions, pricing structures, and operational adherence to corporate guidelines. We assess data accuracy, settlement integrity, and promotional compliance to safeguard against revenue leakage.
          </p>
        </div>
      </section>

      <section className="service-overview">
        <div className="container">
          <div className="service-intro">
            <h2>Comprehensive Merchant Evaluation</h2>
            <p>
              This audit ensures consistency in merchant performance and reliability in financial reporting. 
              Beyond Audit empowers organizations to sustain brand trust through disciplined, transparent merchant operations.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-process">
        <div className="container">
          <h2>Our Merchant Audit Process</h2>
          <div className="process-timeline">
            {process.map((item, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{item.step}</div>
                <div className="step-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-benefits">
        <div className="container">
          <h2>Key Benefits</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <FaCheckCircle className="benefit-icon" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Safeguard Your Revenue?</h2>
            <p>Let our expert team conduct a comprehensive merchant audit to ensure disciplined and transparent merchant operations.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                Get Started <FaArrowRight />
              </a>
              <a href="/services" className="btn btn-secondary">
                View All Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MerchantAudit;
