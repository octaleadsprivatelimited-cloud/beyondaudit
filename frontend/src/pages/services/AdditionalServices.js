import React from 'react';
import { Link } from 'react-router-dom';
import { FaCog, FaBook, FaUsers, FaChartLine, FaArrowRight } from 'react-icons/fa';
import './ServicePage.css';

const AdditionalServices = () => {
  const features = [
    {
      icon: <FaBook />,
      title: 'Bookkeeping',
      description: 'Professional bookkeeping services to maintain accurate financial records and ensure compliance.'
    },
    {
      icon: <FaUsers />,
      title: 'Payroll Management',
      description: 'Comprehensive payroll management services including salary processing, tax deductions, and compliance.'
    },
    {
      icon: <FaChartLine />,
      title: 'Financial Reporting',
      description: 'Professional financial reporting services including P&L statements, balance sheets, and cash flow statements.'
    },
    {
      icon: <FaCog />,
      title: 'Business Advisory',
      description: 'Strategic business advisory services to help you make informed decisions and grow your business.'
    }
  ];

  const benefits = [
    'Professional bookkeeping and record keeping',
    'Comprehensive payroll management services',
    'Accurate financial reporting and analysis',
    'Strategic business advisory support',
    'Cost-effective accounting solutions',
    'Expert knowledge of accounting standards'
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="hero-background-overlay"></div>
        <div className="service-hero-container">
          <div className="hero-tagline">ADDITIONAL SERVICES</div>
          <h1>Additional Services</h1>
          <p className="hero-description">Comprehensive accounting solutions including bookkeeping, payroll management, and business advisory services.</p>
        </div>
      </section>

      <section className="service-overview">
        <div className="service-description">
          <h2>Complete Accounting Solutions</h2>
          <p>
            Our additional services provide comprehensive accounting support to help businesses maintain 
            accurate financial records and make informed decisions. From bookkeeping to payroll management, 
            we offer complete accounting solutions tailored to your needs.
          </p>
          <p>
            Our experienced accounting professionals ensure that all your financial records are maintained 
            accurately and in compliance with applicable standards, giving you peace of mind and allowing 
            you to focus on growing your business.
          </p>
        </div>
      </section>

      <section className="service-features">
        <h2>Our Additional Services</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="service-benefits">
        <div className="benefits-content">
          <h2>Why Choose Our Additional Services</h2>
          <ul className="benefits-list">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="service-cta">
        <h2>Need Complete Accounting Support?</h2>
        <p>Let's discuss how we can help you maintain accurate financial records and grow your business</p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn btn-primary">
            Get Started <FaArrowRight />
          </Link>
          <Link to="/services" className="btn btn-outline">
            View All Services
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AdditionalServices;
