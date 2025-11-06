import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronDown, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
    setMobileServicesOpen(false);
  }, [location]);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileServices = (e) => {
    e.preventDefault();
    setMobileServicesOpen(!mobileServicesOpen);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <span className="logo-text">Beyond Audit</span>
          </Link>

          {/* Desktop Menu */}
          <div className="navbar-menu-desktop">
            <Link to="/about" className="navbar-link">Who we are</Link>
            
            <div 
              className="navbar-dropdown"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link to="/services" className="navbar-link dropdown-trigger">
                Services <FaChevronDown className="dropdown-icon" />
              </Link>
              <div className={`dropdown-menu ${servicesDropdown ? 'show' : ''}`}>
                <div className="dropdown-content">
                  <Link to="/services/stock-audit" className="dropdown-item">
                    <strong>Stock Audit</strong>
                    <span className="item-desc">Physical inventory verification</span>
                  </Link>
                  <Link to="/services/quality-audit" className="dropdown-item">
                    <strong>Quality Audit</strong>
                    <span className="item-desc">Process integrity assessment</span>
                  </Link>
                  <Link to="/services/distributor-audit" className="dropdown-item">
                    <strong>Distributor Audit</strong>
                    <span className="item-desc">Operations & compliance evaluation</span>
                  </Link>
                  <Link to="/services/nbfc-audit" className="dropdown-item">
                    <strong>NBFC Audit</strong>
                    <span className="item-desc">Financial operations review</span>
                  </Link>
                  <Link to="/services/retail-audit" className="dropdown-item">
                    <strong>Retail Audit</strong>
                    <span className="item-desc">Store operations assessment</span>
                  </Link>
                  <Link to="/services/internal-audit" className="dropdown-item">
                    <strong>Internal Audit</strong>
                    <span className="item-desc">Control framework evaluation</span>
                  </Link>
                  <Link to="/services/compliance-audit" className="dropdown-item">
                    <strong>Compliance Audit</strong>
                    <span className="item-desc">Regulatory adherence review</span>
                  </Link>
                  <Link to="/services/forensic-audit" className="dropdown-item">
                    <strong>Forensic Audit</strong>
                    <span className="item-desc">Fraud investigation</span>
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/industries" className="navbar-link">Industries</Link>
            <Link to="/case-studies" className="navbar-link">Our thinking</Link>
            <Link to="/team" className="navbar-link">Team</Link>
            <Link to="/blog" className="navbar-link">Blog</Link>
            <Link to="/contact" className="navbar-link navbar-cta">
              <span className="cta-emoji">👤</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="navbar-toggle" onClick={toggleMobileMenu}>
            <span className={`hamburger ${isOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu-overlay"
            onClick={toggleMobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            <div className="mobile-menu-inner">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 100 }}
              >
                <Link to="/about" className="mobile-link">
                  <div className="link-dot"></div>
                  <span>Who we are</span>
                </Link>
              </motion.div>
              
              <motion.div
                className="mobile-dropdown"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, type: 'spring', stiffness: 100 }}
              >
                <button className="mobile-link dropdown-trigger" onClick={toggleMobileServices}>
                  <div className="link-dot"></div>
                  <span>Services</span>
                  <motion.div
                    animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="dropdown-icon-wrapper"
                  >
                    <FaChevronDown className="dropdown-icon" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      className="mobile-dropdown-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <Link to="/services" className="mobile-dropdown-item view-all-services">
                          <div className="dropdown-dot"></div>
                          View All Services
                        </Link>
                        <Link to="/services/stock-audit" className="mobile-dropdown-item">
                          <div className="dropdown-dot"></div>
                          Stock Audit
                        </Link>
                        <Link to="/services/quality-audit" className="mobile-dropdown-item">
                          <div className="dropdown-dot"></div>
                          Quality Audit
                        </Link>
                        <Link to="/services/distributor-audit" className="mobile-dropdown-item">
                          <div className="dropdown-dot"></div>
                          Distributor Audit
                        </Link>
                        <Link to="/services/nbfc-audit" className="mobile-dropdown-item">
                          <div className="dropdown-dot"></div>
                          NBFC Audit
                        </Link>
                        <Link to="/services/retail-audit" className="mobile-dropdown-item">
                          <div className="dropdown-dot"></div>
                          Retail Audit
                        </Link>
                        <Link to="/services/internal-audit" className="mobile-dropdown-item">
                          <div className="dropdown-dot"></div>
                          Internal Audit
                        </Link>
                        <Link to="/services/compliance-audit" className="mobile-dropdown-item">
                          <div className="dropdown-dot"></div>
                          Compliance Audit
                        </Link>
                        <Link to="/services/forensic-audit" className="mobile-dropdown-item">
                          <div className="dropdown-dot"></div>
                          Forensic Audit
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
              >
                <Link to="/industries" className="mobile-link">
                  <div className="link-dot"></div>
                  <span>Industries</span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, type: 'spring', stiffness: 100 }}
              >
                <Link to="/case-studies" className="mobile-link">
                  <div className="link-dot"></div>
                  <span>Our thinking</span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
              >
                <Link to="/team" className="mobile-link">
                  <div className="link-dot"></div>
                  <span>Team</span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, type: 'spring', stiffness: 100 }}
              >
                <Link to="/blog" className="mobile-link">
                  <div className="link-dot"></div>
                  <span>Blog</span>
                </Link>
              </motion.div>
              
              <motion.div 
                className="mobile-menu-footer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
              >
                <div className="mobile-contact-info">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <FaPhone /> +91 90193 72711
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 }}
                  >
                    <FaEnvelope /> mail@beyondaudit.in
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <FaMapMarkerAlt /> Vishakapatnam
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65 }}
                  >
                    <FaMapMarkerAlt /> Andhra Pradesh, India
                  </motion.p>
                </div>
                <motion.div
                  className="mobile-maps-section"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="maps-title">
                    <FaMapMarkerAlt /> Our Location
                  </div>
                  <div className="maps-embed">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1234567890!2d83.2185!3d17.6868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sVishakapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                      width="100%"
                      height="100"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Beyond Audit Location - Vishakapatnam"
                    ></iframe>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

