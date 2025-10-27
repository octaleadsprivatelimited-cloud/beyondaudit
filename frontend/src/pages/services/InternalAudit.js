import React from 'react';
import { FaSearch, FaShieldAlt, FaChartLine, FaCogs, FaCheckCircle, FaClock, FaArrowRight } from 'react-icons/fa';
import './ServicePage.css';

const InternalAudit = () => {
  const features = [
    {
      icon: <FaSearch />,
      title: 'Internal Control Evaluation',
      description: 'Comprehensive evaluation of internal control frameworks, governance processes, and risk mitigation strategies.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Governance Process Review',
      description: 'Assessment of governance processes, board oversight, and management controls to ensure effective organizational governance.'
    },
    {
      icon: <FaChartLine />,
      title: 'Risk Mitigation Assessment',
      description: 'Evaluation of risk mitigation strategies, control effectiveness, and risk management frameworks across the organization.'
    },
    {
      icon: <FaCogs />,
      title: 'Process Enhancement Opportunities',
      description: 'Identification of inefficiencies and opportunities for process enhancement in key financial and operational activities.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Control Framework Assessment',
      description: 'We begin by assessing internal control frameworks, governance processes, and risk mitigation strategies.'
    },
    {
      step: '02',
      title: 'Financial & Operational Analysis',
      description: 'Our team analyzes key financial and operational activities to identify inefficiencies and control gaps.'
    },
    {
      step: '03',
      title: 'Risk Evaluation',
      description: 'We evaluate risk management systems, identify vulnerabilities, and assess control effectiveness.'
    },
    {
      step: '04',
      title: 'Recommendations & Action Plan',
      description: 'We provide comprehensive recommendations to strengthen organizational resilience and ensure regulatory compliance.'
    }
  ];

  const benefits = [
    'Strengthens organizational resilience',
    'Ensures regulatory compliance',
    'Supports informed decision-making',
    'Builds robust control systems',
    'Inspires transparency and accountability',
    'Identifies process enhancement opportunities',
    'Improves risk management',
    'Provides independent assurance'
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="hero-background-overlay"></div>
        <div className="service-hero-container">
          <div className="hero-tagline">INTERNAL AUDIT</div>
          <h1>Internal Audit Services</h1>
          <p className="hero-description">
            Our Internal Audit provides an independent and systematic evaluation of internal control frameworks, governance processes, and risk mitigation strategies. By analyzing key financial and operational activities, we identify inefficiencies and opportunities for process enhancement.
          </p>
        </div>
      </section>

      <section className="service-overview">
        <div className="container">
          <div className="service-intro">
            <h2>Independent Control Evaluation</h2>
            <p>
              Our approach strengthens organizational resilience, ensures regulatory compliance, and supports informed decision-making. 
              Beyond Audit partners with you to build robust systems that inspire transparency and accountability.
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
          <h2>Our Internal Audit Process</h2>
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
            <h2>Ready to Strengthen Your Internal Controls?</h2>
            <p>Let our expert team conduct a comprehensive internal audit to build robust systems and ensure organizational resilience.</p>
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

export default InternalAudit;
