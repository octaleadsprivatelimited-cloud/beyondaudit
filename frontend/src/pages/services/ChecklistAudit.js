import React from 'react';
import { FaClipboardList, FaChartBar, FaCheckCircle, FaCogs, FaClock, FaArrowRight } from 'react-icons/fa';
import './ServicePage.css';

const ChecklistAudit = () => {
  const features = [
    {
      icon: <FaClipboardList />,
      title: 'Customized Checklist Creation',
      description: 'Development of customized checklists aligned with operational, statutory, and compliance objectives for your specific needs.'
    },
    {
      icon: <FaChartBar />,
      title: 'Metric-Driven Evaluation',
      description: 'Structured, metric-driven approach designed to measure performance against precisely defined control parameters.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Standardized Process Review',
      description: 'Systematic review of processes across branches, outlets, and departments to ensure consistent evaluation standards.'
    },
    {
      icon: <FaCogs />,
      title: 'Continuous Improvement Insights',
      description: 'Delivery of measurable insights that drive continuous improvement and organizational excellence.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Checklist Development',
      description: 'We begin by curating customized checklists aligned with your operational, statutory, and compliance objectives.'
    },
    {
      step: '02',
      title: 'Systematic Evaluation',
      description: 'Our team conducts systematic evaluation using metric-driven approach against precisely defined control parameters.'
    },
    {
      step: '03',
      title: 'Consistent Assessment',
      description: 'We ensure consistent evaluation across branches, outlets, and departments with meticulous verification of each audit point.'
    },
    {
      step: '04',
      title: 'Insights & Recommendations',
      description: 'We provide measurable insights and recommendations that drive continuous improvement and organizational excellence.'
    }
  ];

  const benefits = [
    'Standardizes processes across locations',
    'Delivers measurable insights for improvement',
    'Drives continuous improvement initiatives',
    'Ensures consistent evaluation standards',
    'Provides structured audit approach',
    'Enhances organizational excellence',
    'Improves operational efficiency',
    'Enables data-driven decision making'
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="hero-background-overlay"></div>
        <div className="service-hero-container">
          <div className="hero-tagline">CHECKLIST-BASED AUDIT</div>
          <h1>Checklist-Based Audit Services</h1>
          <p className="hero-description">
            The Checklist-Based Audit is a structured, metric-driven approach designed to measure performance against precisely defined control parameters. Our team curates customized checklists aligned with operational, statutory, and compliance objectives.
          </p>
        </div>
      </section>

      <section className="service-overview">
        <div className="container">
          <div className="service-intro">
            <h2>Structured Performance Measurement</h2>
            <p>
              Each audit point is verified meticulously to ensure consistent evaluation across branches, outlets, and departments. 
              This approach not only standardizes processes but also delivers measurable insights that drive continuous improvement and organizational excellence.
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
          <h2>Our Checklist-Based Audit Process</h2>
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
            <h2>Ready to Standardize Your Processes?</h2>
            <p>Let our expert team conduct a comprehensive checklist-based audit to drive continuous improvement and organizational excellence.</p>
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

export default ChecklistAudit;
