import React from 'react';
import { FaUniversity, FaShieldAlt, FaChartLine, FaFileContract, FaCheckCircle, FaClock, FaArrowRight } from 'react-icons/fa';
import './ServicePage.css';

const NBFC = () => {
  const features = [
    {
      icon: <FaUniversity />,
      title: 'Financial Operations Review',
      description: 'Comprehensive review of financial operations, loan portfolios, and investment activities to ensure sound financial management.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Risk Management Assessment',
      description: 'Evaluation of risk management systems, credit risk assessment, and mitigation strategies to ensure robust risk controls.'
    },
    {
      icon: <FaChartLine />,
      title: 'RBI Guidelines Compliance',
      description: 'Assessment of compliance with RBI guidelines, statutory mandates, and regulatory requirements specific to NBFCs.'
    },
    {
      icon: <FaFileContract />,
      title: 'Loan Documentation Analysis',
      description: 'Detailed analysis of loan documentation, compliance procedures, and internal controls to ensure regulatory adherence.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Regulatory Compliance Review',
      description: 'We begin by reviewing compliance with RBI guidelines, statutory mandates, and regulatory requirements specific to NBFCs.'
    },
    {
      step: '02',
      title: 'Financial Operations Analysis',
      description: 'Our team examines financial operations, loan documentation, and compliance procedures to ensure alignment with regulations.'
    },
    {
      step: '03',
      title: 'Risk Assessment',
      description: 'We assess risk management systems, identify areas of exposure, and evaluate operational lapses and reporting inaccuracies.'
    },
    {
      step: '04',
      title: 'Recommendations & Action Plan',
      description: 'We provide comprehensive recommendations to maintain financial integrity, investor confidence, and regulatory trust.'
    }
  ];

  const benefits = [
    'Ensures alignment with RBI guidelines',
    'Maintains financial integrity and transparency',
    'Builds investor confidence',
    'Ensures regulatory trust and compliance',
    'Identifies areas of exposure and risk',
    'Improves operational efficiency',
    'Reduces regulatory penalties',
    'Provides actionable insights for improvement'
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="hero-background-overlay"></div>
        <div className="service-hero-container">
          <div className="hero-tagline">NBFC AUDIT</div>
          <h1>NBFC Audit Services</h1>
          <p className="hero-description">
            Our NBFC Audit provides an in-depth review of financial operations, risk management systems, and regulatory adherence specific to Non-Banking Financial Companies. We examine loan documentation, compliance procedures, and internal controls to ensure alignment with RBI guidelines and statutory mandates.
          </p>
        </div>
      </section>

      <section className="service-overview">
        <div className="container">
          <div className="service-intro">
            <h2>Comprehensive NBFC Compliance</h2>
            <p>
              The audit identifies areas of exposure, operational lapses, and reporting inaccuracies. Beyond Audit enables NBFCs to maintain 
              financial integrity, investor confidence, and regulatory trust through systematic evaluation and compliance assessment.
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
          <h2>Our NBFC Audit Process</h2>
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
            <h2>Ready to Ensure NBFC Compliance?</h2>
            <p>Let our expert team conduct a comprehensive NBFC audit to maintain financial integrity and regulatory compliance.</p>
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

export default NBFC;
