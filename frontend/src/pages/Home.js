import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalculator, FaFileInvoice, FaChartBar, FaShieldAlt, FaArrowRight, FaStar } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const services = [
    {
      icon: <FaCalculator />,
      title: 'Tax Planning & Compliance',
      description: 'Expert tax strategies and compliance services to optimize your financial position.',
      link: '/services/tax-planning'
    },
    {
      icon: <FaFileInvoice />,
      title: 'Audit & Assurance',
      description: 'Comprehensive audit services ensuring financial accuracy and regulatory compliance.',
      link: '/services/audit-assurance'
    },
    {
      icon: <FaChartBar />,
      title: 'Financial Advisory',
      description: 'Strategic financial planning and advisory services for business growth.',
      link: '/services/financial-advisory'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Business Setup & Compliance',
      description: 'Complete business registration and ongoing compliance management.',
      link: '/services/business-setup'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Tax Returns Filed' },
    { number: '500+', label: 'Businesses Served' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '15+', label: 'Years Experience' }
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
              Expert Accounting<br />
              <span className="hero-accent">Services</span>
            </h1>
            <p className="hero-subtitle">
              Professional chartered accounting services including tax planning, audit & assurance, financial advisory, and business compliance. Beyond Audit helps businesses and individuals navigate complex financial landscapes with confidence and expertise.
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
            <h2 className="section-title">Trusted Accounting Expertise</h2>
            <p>
              With over 15 years of accounting expertise, we've helped hundreds of businesses 
              and individuals achieve their financial goals. Our team of qualified chartered 
              accountants brings deep knowledge of tax laws, financial regulations, and business compliance.
            </p>
            <ul className="why-choose-list">
              <li>✓ Qualified chartered accountants with extensive experience</li>
              <li>✓ Personalized financial strategies for your unique needs</li>
              <li>✓ Complete support from setup to ongoing compliance</li>
              <li>✓ Up-to-date knowledge of changing tax laws and regulations</li>
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

