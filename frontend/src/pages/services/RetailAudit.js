import React from 'react';
import { FaStore, FaEye, FaUsers, FaChartBar, FaCheckCircle, FaClock, FaArrowRight } from 'react-icons/fa';
import './ServicePage.css';

const RetailAudit = () => {
  const features = [
    {
      icon: <FaStore />,
      title: 'Store Operations Assessment',
      description: 'Comprehensive evaluation of store operations, staffing, and daily management practices to ensure optimal retail performance.'
    },
    {
      icon: <FaEye />,
      title: 'Merchandising Effectiveness Review',
      description: 'Assessment of visual display standards, product placement, and merchandising strategies to enhance customer experience.'
    },
    {
      icon: <FaUsers />,
      title: 'Customer Interaction Analysis',
      description: 'Evaluation of customer service standards, staff interactions, and customer satisfaction metrics across retail locations.'
    },
    {
      icon: <FaChartBar />,
      title: 'Operational Efficiency Check',
      description: 'Analysis of billing accuracy, inventory management, and operational processes to identify areas for improvement.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Store Assessment',
      description: 'We begin by assessing store operations, merchandising effectiveness, and policy compliance across retail locations.'
    },
    {
      step: '02',
      title: 'Visual Standards Evaluation',
      description: 'Our team evaluates visual display standards, customer interaction, billing accuracy, and operational efficiency.'
    },
    {
      step: '03',
      title: 'Performance Analysis',
      description: 'We analyze performance metrics, identify improvement areas, and benchmark against industry standards.'
    },
    {
      step: '04',
      title: 'Recommendations & Action Plan',
      description: 'We provide comprehensive recommendations to enhance brand consistency, operational discipline, and customer satisfaction.'
    }
  ];

  const benefits = [
    'Enhances brand consistency across locations',
    'Improves operational discipline and efficiency',
    'Increases customer satisfaction and loyalty',
    'Optimizes merchandising effectiveness',
    'Identifies performance improvement areas',
    'Ensures policy compliance',
    'Reduces operational costs',
    'Provides data-backed insights for peak performance'
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="hero-background-overlay"></div>
        <div className="service-hero-container">
          <div className="hero-tagline">RETAIL AUDIT</div>
          <h1>Retail Audit Services</h1>
          <p className="hero-description">
            The Retail Audit offers a granular assessment of store operations, merchandising effectiveness, and policy compliance across retail locations. We evaluate visual display standards, customer interaction, billing accuracy, and operational efficiency.
          </p>
        </div>
      </section>

      <section className="service-overview">
        <div className="container">
          <div className="service-intro">
            <h2>Comprehensive Retail Assessment</h2>
            <p>
              This comprehensive audit enhances brand consistency, operational discipline, and customer satisfaction. Our insights empower 
              retailers to achieve peak performance through data-backed improvements in every aspect of store management.
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
          <h2>Our Retail Audit Process</h2>
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
            <h2>Ready to Optimize Your Retail Operations?</h2>
            <p>Let our expert team conduct a comprehensive retail audit to enhance your store performance and customer satisfaction.</p>
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

export default RetailAudit;
