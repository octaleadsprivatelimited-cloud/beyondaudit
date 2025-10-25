import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartBar, FaPiggyBank, FaCalculator, FaChartLine, FaArrowRight } from 'react-icons/fa';
import './ServicePage.css';

const FinancialAdvisory = () => {
  const features = [
    {
      icon: <FaChartBar />,
      title: 'Financial Planning',
      description: 'Comprehensive financial planning services to help you achieve your long-term financial goals.'
    },
    {
      icon: <FaPiggyBank />,
      title: 'Investment Advisory',
      description: 'Expert investment advice and portfolio management to optimize your investment returns.'
    },
    {
      icon: <FaCalculator />,
      title: 'Budgeting & Forecasting',
      description: 'Professional budgeting and financial forecasting to guide your business decisions.'
    },
    {
      icon: <FaChartLine />,
      title: 'Cash Flow Management',
      description: 'Strategic cash flow management to ensure optimal liquidity and financial stability.'
    }
  ];

  const benefits = [
    'Strategic financial planning and guidance',
    'Expert investment advice and management',
    'Improved cash flow and liquidity management',
    'Professional budgeting and forecasting',
    'Risk assessment and mitigation strategies',
    'Long-term financial goal achievement'
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="service-hero-content">
          <div className="service-icon-large">
            <FaChartBar />
          </div>
          <h1>Financial Advisory</h1>
          <p>Strategic financial planning and advisory services to help you make informed financial decisions and achieve your goals.</p>
        </div>
      </section>

      <section className="service-overview">
        <div className="service-description">
          <h2>Comprehensive Financial Guidance</h2>
          <p>
            Our financial advisory services provide strategic guidance to help individuals and businesses 
            make informed financial decisions. We offer comprehensive financial planning, investment advice, 
            and ongoing support to help you achieve your financial objectives.
          </p>
          <p>
            Our experienced financial advisors work closely with you to understand your unique situation 
            and develop customized strategies that align with your goals and risk tolerance.
          </p>
        </div>
      </section>

      <section className="service-features">
        <h2>Our Financial Services</h2>
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
          <h2>Why Choose Our Financial Advisory</h2>
          <ul className="benefits-list">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="service-cta">
        <h2>Ready to Optimize Your Finances?</h2>
        <p>Let's discuss how we can help you achieve your financial goals</p>
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

export default FinancialAdvisory;
