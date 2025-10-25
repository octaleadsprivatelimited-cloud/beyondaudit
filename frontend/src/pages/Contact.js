import React, { useState } from 'react';
import axios from 'axios';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
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
      <section className="contact-hero" style={{
        backgroundImage: 'linear-gradient(rgba(10, 17, 40, 0.7), rgba(10, 17, 40, 0.7)), url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="contact-hero-content">
          <h1>Get in Touch</h1>
          <p>Let's discuss how we can help transform your business</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
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
            </div>

            <div className="form-group">
              <label>Service Interested In</label>
              <select name="service" value={formData.service} onChange={handleChange}>
                <option value="">Select a service</option>
                <option value="tax-planning">Tax Planning & Compliance</option>
                <option value="audit-assurance">Audit & Assurance</option>
                <option value="financial-advisory">Financial Advisory</option>
                <option value="business-setup">Business Setup & Compliance</option>
                <option value="additional-services">Additional Services</option>
                <option value="other">Other Services</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell us about your needs..."
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

