import React from 'react';
import { FaCheckCircle, FaChartBar, FaCogs, FaShieldAlt, FaUsers, FaClock, FaArrowRight } from 'react-icons/fa';
import './ServicePage.css';

const QualityAudit = () => {
  const features = [
    {
      icon: <FaCheckCircle />,
      title: 'Process Integrity Assessment',
      description: 'Comprehensive evaluation of production and service processes to ensure they meet quality standards and operational requirements.'
    },
    {
      icon: <FaChartBar />,
      title: 'Quality Framework Benchmarking',
      description: 'Benchmarking operational standards against internal protocols and international quality frameworks like ISO, Six Sigma, and TQM.'
    },
    {
      icon: <FaCogs />,
      title: 'Performance Consistency Review',
      description: 'Analysis of performance metrics and consistency across different production lines, departments, and service delivery channels.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Improvement Area Identification',
      description: 'Identification of deviations, inefficiencies, and areas for improvement to elevate quality assurance mechanisms.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Quality Standards Review',
      description: 'We begin by reviewing your current quality standards, processes, and benchmarks against industry best practices.'
    },
    {
      step: '02',
      title: 'Process Evaluation',
      description: 'Our team conducts detailed evaluation of production processes, service delivery, and quality control mechanisms.'
    },
    {
      step: '03',
      title: 'Performance Analysis',
      description: 'We analyze performance data, identify inconsistencies, and benchmark against internal and external standards.'
    },
    {
      step: '04',
      title: 'Recommendations & Action Plan',
      description: 'We provide comprehensive recommendations and action plans to embed reliability, compliance, and trust into every stage of delivery.'
    }
  ];

  const benefits = [
    'Ensures sustained performance consistency',
    'Identifies process deviations and inefficiencies',
    'Elevates quality assurance mechanisms',
    'Embeds reliability and compliance',
    'Improves customer satisfaction',
    'Reduces defects and rework',
    'Enhances brand reputation',
    'Provides competitive advantage'
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="hero-background-overlay"></div>
        <div className="service-hero-container">
          <div className="hero-tagline">QUALITY AUDIT</div>
          <h1>Quality Audit Services</h1>
          <p className="hero-description">
            The Quality Audit by Beyond Audit provides a holistic assessment of process integrity and product excellence across production and service lines. We benchmark operational standards against internal protocols and international quality frameworks to ensure sustained performance consistency.
          </p>
        </div>
      </section>

      <section className="service-overview">
        <div className="container">
          <div className="service-intro">
            <h2>Comprehensive Quality Assessment</h2>
            <p>
              Our Quality Audit helps organizations elevate quality assurance mechanisms by identifying deviations, inefficiencies, and improvement areas. 
              Our goal is to embed reliability, compliance, and trust into every stage of delivery through systematic evaluation and benchmarking.
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
          <h2>Our Quality Audit Process</h2>
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
            <h2>Ready to Elevate Your Quality Standards?</h2>
            <p>Let our expert team conduct a comprehensive quality audit to improve your processes and ensure sustained performance consistency.</p>
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

export default QualityAudit;
