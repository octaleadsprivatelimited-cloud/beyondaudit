import React from 'react';
import { FaBroom, FaShieldAlt, FaEye, FaChartLine, FaCheckCircle, FaClock, FaArrowRight } from 'react-icons/fa';
import './ServicePage.css';

const CleanHygieneAudit = () => {
  const features = [
    {
      icon: <FaBroom />,
      title: 'Workplace Sanitation Check',
      description: 'Comprehensive assessment of workplace sanitation, cleanliness standards, and hygiene practices across facilities.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Safety Standards Assessment',
      description: 'Evaluation of safety standards, health regulations compliance, and workplace safety protocols.'
    },
    {
      icon: <FaEye />,
      title: 'Environmental Management Review',
      description: 'Review of environmental management practices, waste disposal systems, and sustainability initiatives.'
    },
    {
      icon: <FaChartLine />,
      title: 'Waste Disposal System Inspection',
      description: 'Inspection of waste disposal systems, maintenance routines, and environmental compliance measures.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Facility Assessment',
      description: 'We begin by assessing workplace sanitation, safety, and environmental management standards.'
    },
    {
      step: '02',
      title: 'Compliance Evaluation',
      description: 'Our team inspects facilities, maintenance routines, and waste disposal systems for compliance.'
    },
    {
      step: '03',
      title: 'Standards Verification',
      description: 'We verify compliance with health and safety regulations and global best practices.'
    },
    {
      step: '04',
      title: 'Recommendations & Action Plan',
      description: 'We provide recommendations to promote a healthier, safer, and more productive environment.'
    }
  ];

  const benefits = [
    'Promotes healthier work environment',
    'Ensures safety for employees and customers',
    'Improves productivity and morale',
    'Projects professionalism and excellence',
    'Ensures compliance with health regulations',
    'Reduces health and safety risks',
    'Enhances brand reputation',
    'Provides framework for continuous improvement'
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="hero-background-overlay"></div>
        <div className="service-hero-container">
          <div className="hero-tagline">CLEAN & HYGIENE AUDIT</div>
          <h1>Clean & Hygiene Audit Services</h1>
          <p className="hero-description">
            The Clean and Hygiene Audit assesses workplace sanitation, safety, and environmental management standards in alignment with global best practices. We inspect facilities, maintenance routines, and waste disposal systems to verify compliance with health and safety regulations.
          </p>
        </div>
      </section>

      <section className="service-overview">
        <div className="container">
          <div className="service-intro">
            <h2>Comprehensive Hygiene Assessment</h2>
            <p>
              This audit promotes a healthier, safer, and more productive environment for employees and customers alike. 
              Beyond Audit helps organizations project professionalism through excellence in hygiene and maintenance.
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
          <h2>Our Clean & Hygiene Audit Process</h2>
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
            <h2>Ready to Enhance Workplace Hygiene?</h2>
            <p>Let our expert team conduct a comprehensive clean & hygiene audit to promote a healthier and safer work environment.</p>
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

export default CleanHygieneAudit;
