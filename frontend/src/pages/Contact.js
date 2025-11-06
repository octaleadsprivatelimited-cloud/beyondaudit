import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formType, setFormType] = useState('client'); // 'client' | 'hiring'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    role: '',
    resumeUrl: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  // Initialize form type from query param (?type=jobs)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    if (type === 'jobs' || type === 'hiring') {
      setFormType('hiring');
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      await axios.post('http://localhost:5000/api/contact', { ...formData, formType });
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', service: '', role: '', resumeUrl: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const offices = [
    {
      city: 'Hyderabad',
      address: 'Hyderabad, Telangana, India - 500016',
      phone: '+91 90193 72711',
      email: 'mail@beyondaudit.in'
    }
  ];

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="hero-background-overlay"></div>
        <div className="contact-hero-container">
          <div className="hero-tagline">CONTACT US</div>
          <h1>Get in Touch</h1>
          <p className="hero-description">Let's discuss how we can help transform your business</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          <div className="contact-form-tabs">
            <button
              type="button"
              className={`contact-tab ${formType === 'client' ? 'active' : ''}`}
              onClick={() => setFormType('client')}
            >
              Client Inquiry
            </button>
            <button
              type="button"
              className={`contact-tab ${formType === 'hiring' ? 'active' : ''}`}
              onClick={() => setFormType('hiring')}
            >
              Job Hiring
            </button>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@company.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              {formType === 'client' && (
                <div className="form-group">
                  <label>Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                  />
                </div>
              )}
              {formType === 'hiring' && (
                <div className="form-group">
                  <label>Desired Role</label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="e.g., Internal Auditor"
                  />
                </div>
              )}
            </div>

            {formType === 'client' && (
              <div className="form-group">
                <label>Service Interested In</label>
                <select name="service" value={formData.service} onChange={handleChange}>
                  <option value="">Select a service</option>
                  <option value="stock-audit">Stock Audit</option>
                  <option value="quality-audit">Quality Audit</option>
                  <option value="distributor-audit">Distributor Audit</option>
                  <option value="checklist-audit">Checklist-Based Audit</option>
                  <option value="nbfc-audit">NBFC Audit</option>
                  <option value="retail-audit">Retail Audit</option>
                  <option value="internal-audit">Internal Audit</option>
                  <option value="fixed-asset-audit">Fixed Asset Audit</option>
                  <option value="warehouse-audit">Warehouse Audit</option>
                  <option value="damage-expiry-audit">Damage & Expiry Audit</option>
                  <option value="compliance-audit">Compliance Audit</option>
                  <option value="clean-hygiene-audit">Clean and Hygiene Audit</option>
                  <option value="forensic-audit">Forensic Audit</option>
                  <option value="merchant-audit">Merchant Audit</option>
                  <option value="other">Other Services</option>
                </select>
              </div>
            )}
            {formType === 'hiring' && (
              <div className="form-group">
                <label>Resume URL</label>
                <input
                  type="url"
                  name="resumeUrl"
                  value={formData.resumeUrl}
                  onChange={handleChange}
                  placeholder="Link to your resume (Google Drive, etc.)"
                />
              </div>
            )}

            <div className="form-group">
              <label>Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder={formType === 'client' ? 'Tell us about your needs...' : 'Tell us about your experience, location and availability...'}
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="form-message success">Thank you! We'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="form-message error">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>

        <div className="contact-info-section">
          <div className="info-card">
            <FaPhone className="info-icon" />
            <h3>Phone</h3>
            <p>+91 90193 72711</p>
            <p className="info-detail">Mon-Fri, 9am-6pm IST</p>
          </div>

          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <h3>Email</h3>
            <p>mail@beyondaudit.in</p>
            <p className="info-detail">We'll respond within 24 hours</p>
          </div>

          <div className="info-card">
            <FaClock className="info-icon" />
            <h3>Business Hours</h3>
            <p>Monday - Friday</p>
            <p className="info-detail">9:00 AM - 6:00 PM IST</p>
          </div>
        </div>
      </section>

      <section className="offices-section">
        <h2>Our Office</h2>
        <div className="offices-grid">
          {offices.map((office, index) => (
            <div key={index} className="office-card">
              <h3>{office.city}</h3>
              <p><FaMapMarkerAlt /> {office.address}</p>
              <p><FaPhone /> {office.phone}</p>
              <p><FaEnvelope /> {office.email}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;

