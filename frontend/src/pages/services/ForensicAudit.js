import React from 'react';
import { FaUserSecret, FaSearch, FaChartLine, FaShieldAlt, FaCheckCircle, FaClock, FaArrowRight } from 'react-icons/fa';
import './ServicePage.css';

const ForensicAudit = () => {
  const features = [
    {
      icon: <FaUserSecret />,
      title: 'Financial Irregularity Investigation',
      description: 'Specialized investigation of financial irregularities, anomalies, and suspicious transactions with precision and discretion.'
    },
    {
      icon: <FaSearch />,
      title: 'Fraud Detection Analysis',
      description: 'Comprehensive fraud detection analysis using advanced techniques to uncover potential fraudulent activities.'
    },
    {
      icon: <FaChartLine />,
      title: 'Digital Record Examination',
      description: 'Detailed examination of digital records, transactional data, and electronic evidence to trace financial activities.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Corporate Misconduct Review',
      description: 'Thorough review of corporate misconduct, ethical violations, and governance failures with factual accuracy.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Investigation Planning',
      description: 'We begin by planning the investigation, understanding the scope, and developing a systematic approach.'
    },
    {
      step: '02',
      title: 'Evidence Collection',
      description: 'Our team analyzes digital records, transactional data, and accounting evidence to uncover potential anomalies.'
    },
    {
      step: '03',
      title: 'Analysis & Documentation',
      description: 'We conduct detailed analysis, document findings, and identify control failures and irregularities.'
    },
    {
      step: '04',
      title: 'Reporting & Legal Support',
      description: 'We provide comprehensive reports and support legal proceedings while upholding integrity and transparency.'
    }
  ];

  const benefits = [
    'Supports legal proceedings and investigations',
    'Strengthens internal governance and controls',
    'Deters future risks and fraudulent activities',
    'Upholds integrity and transparency',
    'Ensures factual accuracy in investigations',
    'Provides expert witness support',
    'Protects organizational assets',
    'Maintains confidentiality and discretion'
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="hero-background-overlay"></div>
        <div className="service-hero-container">
          <div className="hero-tagline">FORENSIC AUDIT</div>
          <h1>Forensic Audit Services</h1>
          <p className="hero-description">
            Our Forensic Audit specializes in investigating financial irregularities, fraud, and corporate misconduct with precision and discretion. We analyze digital records, transactional data, and accounting evidence to uncover potential anomalies and control failures.
          </p>
        </div>
      </section>

      <section className="service-overview">
        <div className="container">
          <div className="service-intro">
            <h2>Specialized Fraud Investigation</h2>
            <p>
              This service supports legal proceedings, strengthens internal governance, and deters future risks. 
              Beyond Audit ensures that every investigation upholds integrity, transparency, and factual accuracy.
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
          <h2>Our Forensic Audit Process</h2>
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
            <h2>Need Expert Fraud Investigation?</h2>
            <p>Let our specialized forensic audit team investigate financial irregularities with precision, discretion, and factual accuracy.</p>
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

export default ForensicAudit;
