import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalculator, FaFileInvoice, FaChartBar, FaShieldAlt, FaCog, FaArrowRight } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaCalculator />,
      title: 'Tax Planning & Compliance',
      description: 'Expert tax strategies and compliance services to optimize your financial position. We help minimize tax liability while ensuring full regulatory compliance.',
      features: ['Tax Planning', 'Return Filing', 'Compliance Management', 'Tax Advisory'],
      link: '/services/tax-planning',
      image: '/images/tax-advisory.png'
    },
    {
      icon: <FaFileInvoice />,
      title: 'Audit & Assurance',
      description: 'Comprehensive audit services ensuring financial accuracy and regulatory compliance. We provide independent verification of your financial statements.',
      features: ['Financial Audits', 'Internal Audits', 'Compliance Audits', 'Risk Assessment'],
      link: '/services/audit-assurance',
      image: '/images/audit-and-assurance-services.png'
    },
    {
      icon: <FaChartBar />,
      title: 'Financial Advisory',
      description: 'Strategic financial planning and advisory services for business growth. We help you make informed financial decisions for long-term success.',
      features: ['Financial Planning', 'Investment Advisory', 'Budgeting', 'Cash Flow Management'],
      link: '/services/financial-advisory',
      image: '/images/financial-services.webp'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Business Setup & Compliance',
      description: 'Complete business registration and ongoing compliance management. From company formation to regulatory compliance, we handle it all.',
      features: ['Company Registration', 'GST Registration', 'Compliance Management', 'Regulatory Filings'],
      link: '/services/business-setup',
      image: '/images/business-setup-compliance.png'
    },
    {
      icon: <FaCog />,
      title: 'Additional Services',
      description: 'Comprehensive accounting solutions including bookkeeping, payroll management, financial reporting, and business advisory services.',
      features: ['Bookkeeping', 'Payroll Management', 'Financial Reporting', 'Business Advisory'],
      link: '/services/additional-services',
      image: '/images/additional-services.webp'
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="hero-background-overlay"></div>
        <div className="services-hero-container">
          <div className="hero-tagline">OUR SERVICES</div>
          <h1>Beyond Audit Services</h1>
          <p className="hero-description">Professional accounting and financial services designed to optimize your business performance</p>
        </div>
      </section>

      <section className="services-overview">
        <div className="section-intro">
          <h2>Services</h2>
          <p>
            Beyond Audit provides comprehensive accounting and financial services across all critical business functions. 
            Our team of qualified chartered accountants brings deep expertise in tax laws, financial regulations, 
            and business compliance to help you achieve your financial objectives.
          </p>
        </div>

        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-detail-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-detail-icon">{service.icon}</div>
              <div className="service-detail-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-features-list">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <Link to={service.link} className="service-detail-link">
                  Learn More <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="services-cta">
        <h2>Need Professional Accounting Services?</h2>
        <p>Let's discuss your financial needs and find the right accounting solution for your business</p>
        <Link to="/contact" className="btn btn-white">Contact Us Today</Link>
      </section>
    </div>
  );
};

export default Services;

