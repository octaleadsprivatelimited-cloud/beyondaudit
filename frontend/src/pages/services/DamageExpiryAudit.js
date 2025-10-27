import React from 'react';
import { FaExclamationTriangle, FaSearch, FaChartLine, FaShieldAlt, FaCheckCircle, FaClock, FaArrowRight } from 'react-icons/fa';
import './ServicePage.css';

const DamageExpiryAudit = () => {
  const features = [
    {
      icon: <FaExclamationTriangle />,
      title: 'Product Deterioration Assessment',
      description: 'Comprehensive identification and assessment of product deterioration, damage, and quality issues across inventory.'
    },
    {
      icon: <FaSearch />,
      title: 'Wastage Analysis',
      description: 'Detailed analysis of wastage patterns, root causes, and financial impact of inventory losses.'
    },
    {
      icon: <FaChartLine />,
      title: 'Root Cause Identification',
      description: 'Systematic identification of root causes behind product damage, expiry, and inventory management inefficiencies.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Preventive Control Evaluation',
      description: 'Evaluation of preventive controls, corrective measures, and risk mitigation strategies to minimize losses.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Damage Assessment',
      description: 'We begin by identifying product deterioration, wastage, and inefficiencies in inventory management.'
    },
    {
      step: '02',
      title: 'Root Cause Analysis',
      description: 'Our team assesses root causes, evaluates preventive controls, and analyzes wastage patterns.'
    },
    {
      step: '03',
      title: 'Impact Evaluation',
      description: 'We evaluate financial and reputational impact, and assess effectiveness of current control measures.'
    },
    {
      step: '04',
      title: 'Recommendations & Action Plan',
      description: 'We propose corrective measures to minimize losses and strengthen supply chain discipline.'
    }
  ];

  const benefits = [
    'Minimizes financial and reputational losses',
    'Strengthens supply chain discipline',
    'Ensures only viable products reach customers',
    'Upholds quality assurance standards',
    'Protects brand credibility',
    'Reduces wastage and spoilage',
    'Improves inventory management',
    'Provides preventive control strategies'
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="hero-background-overlay"></div>
        <div className="service-hero-container">
          <div className="hero-tagline">DAMAGE & EXPIRY AUDIT</div>
          <h1>Damage & Expiry Audit Services</h1>
          <p className="hero-description">
            The Damage & Expiry Audit focuses on identifying product deterioration, wastage, and inefficiencies in inventory management. We assess root causes, evaluate preventive controls, and propose corrective measures to minimize financial and reputational losses.
          </p>
        </div>
      </section>

      <section className="service-overview">
        <div className="container">
          <div className="service-intro">
            <h2>Comprehensive Damage Assessment</h2>
            <p>
              This audit strengthens supply chain discipline and ensures that only viable products reach customers. 
              Beyond Audit enables businesses to uphold quality assurance and protect brand credibility through systematic evaluation.
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
          <h2>Our Damage & Expiry Audit Process</h2>
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
            <h2>Ready to Minimize Product Losses?</h2>
            <p>Let our expert team conduct a comprehensive damage & expiry audit to protect your brand credibility and reduce wastage.</p>
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

export default DamageExpiryAudit;
