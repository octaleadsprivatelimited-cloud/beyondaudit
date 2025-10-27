import React from 'react';
import { FaBuilding, FaCheckCircle, FaChartLine, FaShieldAlt, FaClock, FaArrowRight } from 'react-icons/fa';
import './ServicePage.css';

const FixedAssetAudit = () => {
  const features = [
    {
      icon: <FaBuilding />,
      title: 'Asset Existence Verification',
      description: 'Comprehensive verification of asset existence, location, and condition to ensure accurate asset records and prevent misstatement.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Ownership Confirmation',
      description: 'Detailed confirmation of asset ownership, title verification, and legal documentation to ensure proper asset rights.'
    },
    {
      icon: <FaChartLine />,
      title: 'Condition Assessment',
      description: 'Thorough assessment of asset condition, depreciation calculations, and valuation accuracy to ensure proper accounting treatment.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Valuation Accuracy Check',
      description: 'Verification of asset valuation, capitalization, depreciation, and disposal procedures to ensure compliance with accounting standards.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Asset Inventory',
      description: 'We begin by conducting a comprehensive inventory of all fixed assets, verifying existence and location.'
    },
    {
      step: '02',
      title: 'Ownership Verification',
      description: 'Our team verifies asset ownership, reviews legal documentation, and confirms title and rights.'
    },
    {
      step: '03',
      title: 'Condition & Valuation Assessment',
      description: 'We assess asset condition, verify valuation accuracy, and review depreciation and disposal procedures.'
    },
    {
      step: '04',
      title: 'Compliance & Recommendations',
      description: 'We ensure compliance with accounting standards and provide recommendations for efficient resource management.'
    }
  ];

  const benefits = [
    'Mitigates risk of misstatement',
    'Ensures better asset utilization',
    'Promotes compliance with accounting standards',
    'Provides precise asset visibility',
    'Improves resource management',
    'Prevents asset leakage and fraud',
    'Enhances financial reporting accuracy',
    'Provides framework for efficient asset management'
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="hero-background-overlay"></div>
        <div className="service-hero-container">
          <div className="hero-tagline">FIXED ASSET AUDIT</div>
          <h1>Fixed Asset Audit Services</h1>
          <p className="hero-description">
            The Fixed Asset Audit ensures complete verification of asset existence, ownership, condition, and valuation. We reconcile records with physical assets to confirm accuracy in capitalization, depreciation, and disposal.
          </p>
        </div>
      </section>

      <section className="service-overview">
        <div className="container">
          <div className="service-intro">
            <h2>Comprehensive Asset Verification</h2>
            <p>
              This audit mitigates the risk of misstatement, ensures better asset utilization, and promotes compliance with accounting standards. 
              Beyond Audit provides you with precise asset visibility and a framework for efficient resource management.
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
          <h2>Our Fixed Asset Audit Process</h2>
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
            <h2>Ready to Optimize Your Asset Management?</h2>
            <p>Let our expert team conduct a comprehensive fixed asset audit to ensure accurate asset records and efficient resource management.</p>
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

export default FixedAssetAudit;
