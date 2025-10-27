import React from 'react';
import { FaWarehouse, FaTruck, FaShieldAlt, FaChartLine, FaCheckCircle, FaClock, FaArrowRight } from 'react-icons/fa';
import './ServicePage.css';

const WarehouseAudit = () => {
  const features = [
    {
      icon: <FaWarehouse />,
      title: 'Storage Practice Review',
      description: 'Comprehensive evaluation of storage practices, space utilization, and inventory organization to ensure optimal warehouse efficiency.'
    },
    {
      icon: <FaTruck />,
      title: 'Stock Handling Assessment',
      description: 'Assessment of stock handling procedures, inbound and outbound logistics, and material flow management.'
    },
    {
      icon: <FaChartLine />,
      title: 'Logistics Process Analysis',
      description: 'Detailed analysis of logistics processes, supply chain efficiency, and operational workflows.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Safety Protocol Verification',
      description: 'Verification of safety protocols, compliance with regulations, and risk management procedures.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Warehouse Assessment',
      description: 'We begin by assessing storage practices, stock handling, and operational efficiency across warehouse facilities.'
    },
    {
      step: '02',
      title: 'Process Evaluation',
      description: 'Our team reviews inbound and outbound logistics, safety protocols, and process optimization opportunities.'
    },
    {
      step: '03',
      title: 'Efficiency Analysis',
      description: 'We analyze warehouse performance, identify bottlenecks, and evaluate utilization of space and manpower.'
    },
    {
      step: '04',
      title: 'Recommendations & Action Plan',
      description: 'We provide actionable insights to transform warehouses into models of efficiency and accuracy.'
    }
  ];

  const benefits = [
    'Reduces discrepancies and errors',
    'Improves inventory flow and management',
    'Enhances utilization of space and manpower',
    'Transforms warehouses into efficiency models',
    'Optimizes logistics processes',
    'Ensures safety compliance',
    'Reduces operational costs',
    'Provides actionable insights for improvement'
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="hero-background-overlay"></div>
        <div className="service-hero-container">
          <div className="hero-tagline">WAREHOUSE AUDIT</div>
          <h1>Warehouse Audit Services</h1>
          <p className="hero-description">
            Our Warehouse Audit delivers a thorough examination of storage practices, stock handling, and operational efficiency. We review inbound and outbound logistics, safety protocols, and process optimization to ensure seamless warehouse performance.
          </p>
        </div>
      </section>

      <section className="service-overview">
        <div className="container">
          <div className="service-intro">
            <h2>Comprehensive Warehouse Assessment</h2>
            <p>
              This audit reduces discrepancies, improves inventory flow, and enhances utilization of space and manpower. 
              Through actionable insights, Beyond Audit helps organizations transform warehouses into models of efficiency and accuracy.
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
          <h2>Our Warehouse Audit Process</h2>
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
            <h2>Ready to Optimize Your Warehouse Operations?</h2>
            <p>Let our expert team conduct a comprehensive warehouse audit to transform your facility into a model of efficiency and accuracy.</p>
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

export default WarehouseAudit;
