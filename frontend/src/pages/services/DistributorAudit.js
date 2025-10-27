import React from 'react';
import { FaTruck, FaChartLine, FaShieldAlt, FaUsers, FaCheckCircle, FaClock, FaArrowRight } from 'react-icons/fa';
import './ServicePage.css';

const DistributorAudit = () => {
  const features = [
    {
      icon: <FaTruck />,
      title: 'Distributor Operations Review',
      description: 'Comprehensive evaluation of distributor operations, processes, and performance metrics to ensure optimal channel management.'
    },
    {
      icon: <FaChartLine />,
      title: 'Sales Reporting Analysis',
      description: 'Detailed analysis of sales reports, data accuracy, and reporting compliance to identify performance gaps and control weaknesses.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Policy Compliance Check',
      description: 'Assessment of compliance with organizational policies, contractual obligations, and ethical standards across distribution channels.'
    },
    {
      icon: <FaUsers />,
      title: 'Performance Gap Identification',
      description: 'Identification of performance gaps, control weaknesses, and areas for improvement in distributor management and oversight.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Distributor Assessment',
      description: 'We begin by assessing distributor operations, sales performance, and compliance with organizational policies and procedures.'
    },
    {
      step: '02',
      title: 'Data Verification',
      description: 'Our team verifies sales data, inventory accuracy, order management, and sales discipline across all distribution channels.'
    },
    {
      step: '03',
      title: 'Compliance Evaluation',
      description: 'We evaluate adherence to contractual terms, ethical standards, and organizational policies to ensure channel accountability.'
    },
    {
      step: '04',
      title: 'Recommendations & Action Plan',
      description: 'We provide detailed recommendations to strengthen transparency, improve channel accountability, and safeguard brand integrity.'
    }
  ];

  const benefits = [
    'Strengthens transparency across distribution network',
    'Ensures contractual and ethical compliance',
    'Safeguards brand integrity and reputation',
    'Improves channel accountability',
    'Identifies performance gaps and weaknesses',
    'Enhances distributor management',
    'Reduces revenue leakage',
    'Provides actionable insights for optimization'
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="hero-background-overlay"></div>
        <div className="service-hero-container">
          <div className="hero-tagline">DISTRIBUTOR AUDIT</div>
          <h1>Distributor Audit Services</h1>
          <p className="hero-description">
            Our Distributor Audit delivers a comprehensive evaluation of distributor operations, sales reporting, and compliance with organizational policies. We assess inventory accuracy, order management, and sales discipline to identify performance gaps and control weaknesses.
          </p>
        </div>
      </section>

      <section className="service-overview">
        <div className="container">
          <div className="service-intro">
            <h2>Comprehensive Distributor Evaluation</h2>
            <p>
              This audit strengthens transparency across your distribution network, ensuring each channel operates within contractual and ethical standards. 
              Beyond Audit empowers brands to safeguard their integrity and improve channel accountability through systematic evaluation and monitoring.
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
          <h2>Our Distributor Audit Process</h2>
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
            <h2>Ready to Strengthen Your Distribution Network?</h2>
            <p>Let our expert team conduct a comprehensive distributor audit to improve channel accountability and safeguard your brand integrity.</p>
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

export default DistributorAudit;
