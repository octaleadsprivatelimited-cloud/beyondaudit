import React, { useState } from 'react';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Careers.css';

const Careers = () => {
  const [showForm, setShowForm] = useState(false);

  const positions = [
    {
      title: 'Senior Audit Manager - Stock Audit',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      description: 'Lead stock audit engagements across multiple locations. Manage audit teams and ensure quality deliverables.'
    },
    {
      title: 'Quality Audit Specialist',
      location: 'Bangalore, Karnataka',
      type: 'Full-time',
      description: 'Conduct quality audits for manufacturing and service organizations. Assess process integrity and compliance.'
    },
    {
      title: 'Field Auditor - Retail & Distribution',
      location: 'Delhi NCR',
      type: 'Full-time',
      description: 'Execute field audits for retail outlets and distribution networks. Verify inventory and compliance adherence.'
    },
    {
      title: 'Compliance Audit Associate',
      location: 'Hyderabad, Telangana',
      type: 'Full-time',
      description: 'Support compliance audit projects for NBFC and financial institutions. Ensure regulatory adherence.'
    },
    {
      title: 'Internal Audit Consultant',
      location: 'Pune, Maharashtra',
      type: 'Full-time',
      description: 'Conduct internal audits and assess control frameworks. Provide recommendations for process improvements.'
    },
    {
      title: 'Forensic Audit Investigator',
      location: 'Chennai, Tamil Nadu',
      type: 'Full-time',
      description: 'Investigate financial irregularities and fraud cases. Analyze digital records and prepare detailed reports.'
    },
    {
      title: 'Warehouse Audit Executive',
      location: 'Ahmedabad, Gujarat',
      type: 'Full-time',
      description: 'Perform warehouse audits and verify storage practices. Evaluate inventory management and operational efficiency.'
    },
    {
      title: 'Fixed Asset Auditor',
      location: 'Kolkata, West Bengal',
      type: 'Full-time',
      description: 'Verify physical existence and valuation of fixed assets. Reconcile asset records with physical verification.'
    }
  ];

  const benefits = [
    'Competitive salary and bonuses',
    'Comprehensive health insurance',
    'Professional development budget',
    'Flexible work arrangements',
    'Generous PTO policy',
    'Retirement planning support'
  ];

  return (
    <div className="careers-page">
      <section className="careers-hero">
        <div className="hero-background-overlay"></div>
        <div className="careers-hero-container">
          <div className="hero-tagline">CAREERS</div>
          <h1>Join Our Team</h1>
          <p className="hero-description">Build your career with a leading global consulting firm</p>
        </div>
      </section>

      <section className="careers-intro">
        <h2>Why Work With Us</h2>
        <p>
          At Beyond Audit, you'll work alongside industry experts on challenging, 
          high-impact projects for leading companies across India. We invest in our people through 
          continuous learning, mentorship, and career development opportunities.
        </p>
      </section>

      <section className="staffing-section">
        <div className="staffing-content">
          <h2>Staffing & Augmentation Services</h2>
          <p className="staffing-description">
            Beyond Audit provides comprehensive staffing and augmentation services to businesses across India. 
            Our pan-India network of 50,000+ qualified professionals enables us to deliver skilled manpower 
            for all audit and compliance needs.
          </p>
          <div className="staffing-features">
            <div className="staffing-feature">
              <h3>Qualified Professionals</h3>
              <p>Access to Chartered Accountants, CMAs, and finance specialists across India</p>
            </div>
            <div className="staffing-feature">
              <h3>Flexible Engagement</h3>
              <p>Short-term, long-term, and project-based staffing solutions tailored to your needs</p>
            </div>
            <div className="staffing-feature">
              <h3>Complete Manpower Support</h3>
              <p>End-to-end staffing for all audit services with dedicated professional teams</p>
            </div>
            <div className="staffing-feature">
              <h3>Pan-India Coverage</h3>
              <p>Nationwide presence ensuring rapid deployment of qualified resources</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <h2>Benefits & Perks</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              ✓ {benefit}
            </div>
          ))}
        </div>
      </section>

      <section className="positions-section">
        <h2>Open Positions</h2>
        <div className="positions-grid">
          {positions.map((position, index) => (
            <div key={index} className="position-card">
              <h3>{position.title}</h3>
              <div className="position-details">
                <span><FaMapMarkerAlt /> {position.location}</span>
                <span><FaClock /> {position.type}</span>
              </div>
              <p>{position.description}</p>
              <button onClick={() => setShowForm(true)} className="btn btn-primary">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {showForm && (
        <div className="application-modal">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setShowForm(false)}>×</button>
            <h2>Submit Your Application</h2>
            <p>Send your resume and cover letter to: careers@corporate-consulting.com</p>
            <button onClick={() => setShowForm(false)} className="btn btn-primary">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;

