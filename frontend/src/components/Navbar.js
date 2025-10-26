import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronDown, FaPhone, FaEnvelope } from 'react-icons/fa';
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
              <span className="navbar-link dropdown-trigger">
                Services <FaChevronDown className="dropdown-icon" />
              </span>
              <div className={`dropdown-menu ${servicesDropdown ? 'show' : ''}`}>
                <div className="dropdown-content">
                  <Link to="/services" className="dropdown-item featured">
                    <strong>All Services</strong>
                    <span className="item-desc">Complete overview</span>
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/services/tax-planning" className="dropdown-item">
                    <strong>Tax Planning & Compliance</strong>
                    <span className="item-desc">Expert tax strategies</span>
                  </Link>
                  <Link to="/services/audit-assurance" className="dropdown-item">
                    <strong>Audit & Assurance</strong>
                    <span className="item-desc">Financial audit services</span>
                  </Link>
                  <Link to="/services/financial-advisory" className="dropdown-item">
                    <strong>Financial Advisory</strong>
                    <span className="item-desc">Strategic financial planning</span>
                  </Link>
                  <Link to="/services/business-setup" className="dropdown-item">
                    <strong>Business Setup & Compliance</strong>
                    <span className="item-desc">Company registration & compliance</span>
                  </Link>
                  <Link to="/services/additional-services" className="dropdown-item">
                    <strong>Additional Services</strong>
                    <span className="item-desc">Bookkeeping & payroll</span>
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
                        <Link to="/services" className="mobile-dropdown-item">
                          <div className="dropdown-dot"></div>
                          All Services
                        </Link>
                        <Link to="/services/tax-planning" className="mobile-dropdown-item">
                          <div className="dropdown-dot"></div>
                          Tax Planning & Compliance
                        </Link>
                        <Link to="/services/audit-assurance" className="mobile-dropdown-item">
                          <div className="dropdown-dot"></div>
                          Audit & Assurance
                        </Link>
                        <Link to="/services/financial-advisory" className="mobile-dropdown-item">
                          <div className="dropdown-dot"></div>
                          Financial Advisory
                        </Link>
                        <Link to="/services/business-setup" className="mobile-dropdown-item">
                          <div className="dropdown-dot"></div>
                          Business Setup & Compliance
                        </Link>
                        <Link to="/services/additional-services" className="mobile-dropdown-item">
                          <div className="dropdown-dot"></div>
                          Additional Services
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
                <Link to="/contact" className="mobile-cta">
                  Get In Touch
                </Link>
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
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

