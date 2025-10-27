import React from 'react';
import { Link } from 'react-router-dom';
import { FaBoxes, FaCheckCircle, FaTruck, FaClipboardList, FaUniversity, FaStore, FaSearch, FaBuilding, FaWarehouse, FaExclamationTriangle, FaShieldAlt, FaBroom, FaUserSecret, FaHandshake, FaArrowRight, FaStar, FaCalculator, FaFileInvoice, FaChartBar } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const services = [
    {
      icon: <FaBoxes />,
      title: 'Stock Audit',
      description: 'Exhaustive verification of physical inventory vis-à-vis book records for precision and transparency.',
      link: '/services/stock-audit'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Quality Audit',
      description: 'Holistic assessment of process integrity and product excellence across production lines.',
      link: '/services/quality-audit'
    },
    {
      icon: <FaTruck />,
      title: 'Distributor Audit',
      description: 'Comprehensive evaluation of distributor operations and compliance with organizational policies.',
      link: '/services/distributor-audit'
    },
    {
      icon: <FaClipboardList />,
      title: 'Checklist-Based Audit',
      description: 'Structured, metric-driven approach measuring performance against defined control parameters.',
      link: '/services/checklist-audit'
    },
    {
      icon: <FaUniversity />,
      title: 'NBFC Audit',
      description: 'In-depth review of financial operations and regulatory adherence for Non-Banking Financial Companies.',
      link: '/services/nbfc-audit'
    },
    {
      icon: <FaStore />,
      title: 'Retail Audit',
      description: 'Granular assessment of store operations, merchandising effectiveness, and policy compliance.',
      link: '/services/retail-audit'
    },
    {
      icon: <FaSearch />,
      title: 'Internal Audit',
      description: 'Independent evaluation of internal control frameworks and governance processes.',
      link: '/services/internal-audit'
    },
    {
      icon: <FaBuilding />,
      title: 'Fixed Asset Audit',
      description: 'Complete verification of asset existence, ownership, condition, and valuation.',
      link: '/services/fixed-asset-audit'
    },
    {
      icon: <FaWarehouse />,
      title: 'Warehouse Audit',
      description: 'Thorough examination of storage practices, stock handling, and operational efficiency.',
      link: '/services/warehouse-audit'
    },
    {
      icon: <FaExclamationTriangle />,
      title: 'Damage & Expiry Audit',
      description: 'Identification of product deterioration, wastage, and inventory management inefficiencies.',
      link: '/services/damage-expiry-audit'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Compliance Audit',
      description: 'Exhaustive examination of adherence to statutory regulations and industry mandates.',
      link: '/services/compliance-audit'
    },
    {
      icon: <FaBroom />,
      title: 'Clean & Hygiene Audit',
      description: 'Assessment of workplace sanitation, safety, and environmental management standards.',
      link: '/services/clean-hygiene-audit'
    },
    {
      icon: <FaUserSecret />,
      title: 'Forensic Audit',
      description: 'Investigation of financial irregularities, fraud, and corporate misconduct with precision.',
      link: '/services/forensic-audit'
    },
    {
      icon: <FaHandshake />,
      title: 'Merchant Audit',
      description: 'Meticulous review of merchant transactions, pricing structures, and operational adherence.',
      link: '/services/merchant-audit'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Qualified Professionals' },
    { number: '15+', label: 'Years of Excellence' },
    { number: '500+', label: 'Businesses Served' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Kumar Industries',
      text: 'Professional tax planning that saved us significant money and ensured full compliance.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      company: 'Sharma & Associates',
      text: 'Their audit services helped us streamline our financial processes and improve efficiency.',
      rating: 5
    }
  ];

  return (
    <div className="home">
      {/* Hero Section - Deloitte Inspired */}
      <section className="hero" style={{
        backgroundImage: 'linear-gradient(rgba(10, 17, 40, 0.85), rgba(10, 17, 40, 0.85)), url(/images/homepage-hero-consulting.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="hero-container">
          <div className="hero-content animate-fade-in">
        <h1 className="hero-title">
          India's Leading<br />
          <span className="hero-accent">Field Verification</span><br />
          & Audit Intelligence
        </h1>
        <p className="hero-subtitle">
          Redefining the audit and compliance ecosystem through flawless, data-driven field verification powered by precision, integrity, and intelligence. Our pan-India network of 10,000+ qualified professionals delivers unmatched accuracy, transparency, and efficiency across all audit services with complete manpower support.
        </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">
                Let's Connect <FaArrowRight />
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Explore Our Services
              </Link>
            </div>
          </div>
          <div className="hero-links">
            <Link to="/services/tax-planning" className="hero-link">
              <div className="hero-link-icon"><FaCalculator /></div>
              <div>
                <h3>Tax Planning</h3>
                <p>Expert tax strategies and compliance</p>
              </div>
            </Link>
            <Link to="/services/audit-assurance" className="hero-link">
              <div className="hero-link-icon"><FaFileInvoice /></div>
              <div>
                <h3>Audit & Assurance</h3>
                <p>Comprehensive financial audits</p>
              </div>
            </Link>
            <Link to="/services/financial-advisory" className="hero-link">
              <div className="hero-link-icon"><FaChartBar /></div>
              <div>
                <h3>Financial Advisory</h3>
                <p>Strategic financial planning</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-header">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-description">
            Comprehensive consulting solutions tailored to your business needs
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <Link to={service.link} className="service-link">
                Learn More <FaArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card animate-fade-in">
              <h2 className="stat-number">{stat.number}</h2>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="why-choose-content">
          <div className="why-choose-text">
        <span className="section-subtitle">Why Choose Us</span>
        <h2 className="section-title">India's Pacesetter in Field Verification</h2>
        <p>
          Beyond Audit leads India's audit intelligence revolution with our robust pan-India network of 10,000+ qualified professionals. We combine human expertise with digital precision to deliver flawless, data-driven field verification that sets new benchmarks in speed, reliability, and technological integration. We provide complete manpower support for all audit services.
        </p>
        <ul className="why-choose-list">
          <li>✓ Pan-India network of 10,000+ Chartered Accountants, CMAs, and finance specialists</li>
          <li>✓ Complete manpower provision for all audit services across India</li>
          <li>✓ Data-driven field verification powered by precision, integrity, and intelligence</li>
          <li>✓ End-to-end service delivery with dedicated professional teams</li>
          <li>✓ Technological adoption and intelligence-driven assurance</li>
        </ul>
            <Link to="/why-choose-us" className="btn btn-primary">
              Learn More About Us
            </Link>
          </div>
          <div className="why-choose-visual">
            <div className="visual-stat">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div className="visual-stat">
              <h3>10+</h3>
              <p>Chartered Accountants</p>
            </div>
            <div className="visual-stat">
              <h3>500+</h3>
              <p>Businesses Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-header">
          <span className="section-subtitle">Client Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="section-footer">
          <Link to="/testimonials" className="btn btn-outline">
            Read More Testimonials
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;

