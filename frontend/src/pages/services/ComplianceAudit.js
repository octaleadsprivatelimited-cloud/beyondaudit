import React from 'react';
import { FaShieldAlt, FaFileContract, FaChartLine, FaCheckCircle, FaClock, FaArrowRight } from 'react-icons/fa';
import './ServicePage.css';

const ComplianceAudit = () => {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: 'Statutory Regulation Compliance',
      description: 'Comprehensive examination of adherence to statutory regulations, legal requirements, and government mandates.'
    },
    {
      icon: <FaFileContract />,
      title: 'Internal Policy Adherence',
      description: 'Assessment of compliance with internal policies, procedures, and organizational guidelines.'
    },
    {
      icon: <FaChartLine />,
      title: 'Industry Mandate Verification',
      description: 'Verification of compliance with industry-specific mandates, standards, and best practices.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Risk Mitigation Assessment',
      description: 'Evaluation of risk mitigation strategies, control effectiveness, and compliance monitoring systems.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Compliance Assessment',
      description: 'We begin by examining adherence to statutory regulations, internal policies, and industry-specific mandates.'
    },
    {
      step: '02',
      title: 'System & Procedure Evaluation',
      description: 'Our team evaluates systems, procedures, and documentation to ensure full legal conformity.'
    },
    {
      step: '03',
      title: 'Risk Analysis',
      description: 'We assess compliance risks, identify gaps, and evaluate effectiveness of risk mitigation measures.'
    },
    {
      step: '04',
      title: 'Recommendations & Action Plan',
      description: 'We provide comprehensive recommendations to safeguard organizations from penalties and governance lapses.'
    }
  ];

  const benefits = [
    'Safeguards from penalties and governance lapses',
    'Enhances transparency and ethical operations',
    'Ensures full legal conformity',
    'Provides risk mitigation strategies',
    'Improves compliance monitoring',
    'Reduces regulatory risks',
    'Builds stakeholder confidence',
    'Ensures business remains compliant and credible'
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="hero-background-overlay"></div>
        <div className="service-hero-container">
          <div className="hero-tagline">COMPLIANCE AUDIT</div>
          <h1>Compliance Audit Services</h1>
          <p className="hero-description">
            Our Compliance Audit is an exhaustive examination of adherence to statutory regulations, internal policies, and industry-specific mandates. We evaluate systems, procedures, and documentation to ensure full legal conformity and risk mitigation.
          </p>
        </div>
      </section>

      <section className="service-overview">
        <div className="container">
          <div className="service-intro">
            <h2>Comprehensive Compliance Assessment</h2>
            <p>
              This audit safeguards organizations from penalties and governance lapses while enhancing transparency and ethical operations. 
              Beyond Audit's expertise ensures that your business remains compliant, credible, and future-ready.
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
          <h2>Our Compliance Audit Process</h2>
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
            <h2>Ready to Ensure Full Compliance?</h2>
            <p>Let our expert team conduct a comprehensive compliance audit to safeguard your organization and ensure regulatory adherence.</p>
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

export default ComplianceAudit;
