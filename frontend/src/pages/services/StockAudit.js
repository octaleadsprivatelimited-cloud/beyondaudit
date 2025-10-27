import React from 'react';
import { FaBoxes, FaCheckCircle, FaChartLine, FaShieldAlt, FaUsers, FaClock, FaArrowRight } from 'react-icons/fa';
import './ServicePage.css';

const StockAudit = () => {
  const features = [
    {
      icon: <FaBoxes />,
      title: 'Physical Inventory Verification',
      description: 'Comprehensive counting and verification of all physical inventory items against book records to ensure accuracy and prevent discrepancies.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Book Record Reconciliation',
      description: 'Detailed reconciliation of inventory records with accounting books to identify and resolve any mismatches or inconsistencies.'
    },
    {
      icon: <FaChartLine />,
      title: 'Supply Chain Analysis',
      description: 'Evaluation of inventory flow, procurement processes, and supply chain efficiency to optimize stock management practices.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Internal Control Assessment',
      description: 'Review of internal controls, security measures, and access controls to prevent inventory leakages and ensure accountability.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Planning & Preparation',
      description: 'We begin by understanding your inventory structure, locations, and specific requirements to develop a comprehensive audit plan.'
    },
    {
      step: '02',
      title: 'Physical Verification',
      description: 'Our team conducts systematic physical counting of all inventory items across all locations with proper documentation.'
    },
    {
      step: '03',
      title: 'Reconciliation & Analysis',
      description: 'We reconcile physical counts with book records, identify discrepancies, and analyze root causes of any variances.'
    },
    {
      step: '04',
      title: 'Reporting & Recommendations',
      description: 'We provide detailed reports with findings, recommendations for improvement, and action plans to strengthen inventory controls.'
    }
  ];

  const benefits = [
    'Prevents inventory leakages and pilferage',
    'Ensures accurate financial reporting',
    'Identifies inefficiencies in stock management',
    'Strengthens internal controls and security',
    'Improves supply chain visibility',
    'Reduces carrying costs and obsolescence',
    'Enhances compliance with accounting standards',
    'Provides actionable insights for optimization'
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="hero-background-overlay"></div>
        <div className="service-hero-container">
          <div className="hero-tagline">STOCK AUDIT</div>
          <h1>Stock Audit Services</h1>
          <p className="hero-description">
            Our Stock Audit delivers an exhaustive verification of physical inventory vis-à-vis book records to ensure precision, transparency, and accountability. Through systematic sampling, reconciliation, and process evaluation, we identify discrepancies and inefficiencies across the supply chain. We provide complete manpower support with our qualified professionals.
          </p>
        </div>
      </section>

      <section className="service-overview">
        <div className="container">
          <div className="service-intro">
            <h2>Comprehensive Stock Verification</h2>
            <p>
              Beyond Audit's Stock Audit service reinforces internal controls, prevents inventory leakages, and enhances reporting accuracy. 
              We help organizations maintain dependable and optimized stock management practices across all operational levels through 
              our pan-India network of qualified professionals with complete manpower support.
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
          <h2>Our Stock Audit Process</h2>
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
            <h2>Ready to Optimize Your Inventory Management?</h2>
            <p>Let our expert team conduct a comprehensive stock audit to strengthen your inventory controls and improve operational efficiency.</p>
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

export default StockAudit;
