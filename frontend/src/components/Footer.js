import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight, FaChevronRight } from 'react-icons/fa';
import axios from 'axios';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNewsletter = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/newsletter', { email });
      setMessage('Successfully subscribed!');
      setEmail('');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  const services = [
    { name: 'Stock Audit', path: '/services/stock-audit', desc: 'Physical inventory verification' },
    { name: 'Quality Audit', path: '/services/quality-audit', desc: 'Process integrity assessment' },
    { name: 'Distributor Audit', path: '/services/distributor-audit', desc: 'Operations evaluation' },
    { name: 'NBFC Audit', path: '/services/nbfc-audit', desc: 'Financial operations review' },
    { name: 'Retail Audit', path: '/services/retail-audit', desc: 'Store operations assessment' },
    { name: 'Internal Audit', path: '/services/internal-audit', desc: 'Control framework evaluation' },
    { name: 'Compliance Audit', path: '/services/compliance-audit', desc: 'Regulatory adherence' },
    { name: 'Forensic Audit', path: '/services/forensic-audit', desc: 'Fraud investigation' }
  ];

  const company = [
    { name: 'About Us', path: '/about' },
    { name: "Founder's Note", path: '/#founders-note' },
    { name: 'Testimonials', path: '/testimonials' }
  ];

  const resources = [
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog & Insights', path: '/blog' },
    { name: 'Industries', path: '/industries' }
  ];

  const quickLinks = [
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <footer className="footer">
      {/* CTA Banner */}
      <div className="footer-cta">
        <div className="footer-cta-content">
          <h2>Ready to Engage Our Expertise</h2>
          <div className="footer-cta-actions">
            <Link to="/contact" className="footer-cta-button">
              Client ? <FaArrowRight />
            </Link>
            <Link to="/contact?type=jobs" className="footer-cta-button alt">
              Freelancer ? <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>

      {/* Mega Menu Section */}
      <div className="footer-mega-menu">
        <div className="footer-mega-content">
          {/* Brand Section */}
          <div className="footer-brand-section">
            <div className="footer-logo">
              <img
                src="/images/1-removebg-preview.png"
                alt="Beyond Audit"
                className="footer-logo-image"
              />
            </div>
            <p className="footer-description">
              Beyond Audit is India's leading provider of audit and verification services. Our pan-India network of 10,000+ qualified professionals delivers flawless, data-driven field verification powered by precision, integrity, and intelligence.
            </p>
            
            <div className="footer-contact-cards">
              <div className="contact-card">
                <FaPhone className="contact-icon" />
                <div>
                  <span className="contact-label">Call Us</span>
                  <a href="tel:+919019372711" className="contact-value">+91-9019372711</a>
                </div>
              </div>
              <div className="contact-card">
                <FaEnvelope className="contact-icon" />
                <div>
                  <span className="contact-label">Email Us</span>
                  <a href="mailto:mail@beyondaudit.in" className="contact-value">mail@beyondaudit.in</a>
                </div>
              </div>
              <div className="contact-card">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <span className="contact-label">Visit Us</span>
                  <span className="contact-value">50-80-7/A, 2nd floor Anjana Enclave, Gurudwara, Visakhapatnam, Andhra Pradesh 530016</span>
                </div>
              </div>
            </div>

            <div className="social-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="footer-column">
            <h4 className="footer-column-title">Our Services</h4>
            <ul className="footer-links-list">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="footer-link">
                    <FaChevronRight className="link-icon" />
                    <div>
                      <span className="link-name">{service.name}</span>
                      <span className="link-desc">{service.desc}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-column">
            <h4 className="footer-column-title">Company</h4>
            <ul className="footer-links-list">
              {company.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="footer-link">
                    <FaChevronRight className="link-icon" />
                    <span className="link-name">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="footer-column">
            <h4 className="footer-column-title">Resources</h4>
            <ul className="footer-links-list">
              {resources.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="footer-link">
                    <FaChevronRight className="link-icon" />
                    <span className="link-name">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="footer-quick-links">
              <h4 className="footer-column-title">Quick Links</h4>
              <ul className="footer-links-list compact">
                {quickLinks.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path} className="footer-link small">
                      <FaChevronRight className="link-icon" />
                      <span className="link-name">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="footer-newsletter-section">
            <h4 className="footer-column-title">Stay Updated</h4>
            <p className="newsletter-description">
              Get insights & updates
            </p>
            <form className="newsletter-form" onSubmit={handleNewsletter}>
              <div className="newsletter-input-wrapper">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-button">
                  Subscribe
                </button>
              </div>
              {message && <p className="newsletter-message">{message}</p>}
            </form>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2025 Beyond Audit. Developed By <a href="https://www.octaleads.com/" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>Octaleads Pvt Ltd</a>.</p>
          <div className="footer-bottom-links">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

