import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Team.css';

const Team = () => {
  const leadership = [
    {
      name: 'Manoj Kumar',
      role: 'Founder & Managing Partner',
      bio: 'Chartered Accountant with over 20 years of experience in tax planning, audit services, and financial advisory. Manoj leads the firm with expertise in complex taxation and compliance matters.',
      expertise: 'Tax Planning, Audit Services, Financial Advisory'
    },
    {
      name: 'Priya Sharma',
      role: 'Partner - Tax & Compliance',
      bio: 'Chartered Accountant specializing in direct and indirect taxation. Priya has helped hundreds of clients optimize their tax burden while ensuring 100% regulatory compliance.',
      expertise: 'Tax Planning, GST Compliance, Direct Taxation'
    },
    {
      name: 'Arjun Patel',
      role: 'Partner - Audit & Assurance',
      bio: 'Chartered Accountant with extensive experience in statutory audits, internal audits, and process improvements. Arjun ensures financial accuracy and regulatory compliance.',
      expertise: 'Statutory Audit, Internal Audit, Risk Assessment'
    },
    {
      name: 'Ananya Reddy',
      role: 'Partner - Financial Advisory',
      bio: 'Chartered Accountant providing strategic financial guidance to businesses. Ananya specializes in financial restructuring, cash flow management, and business advisory services.',
      expertise: 'Financial Planning, Business Advisory, Cash Flow Management'
    }
  ];

  const consultants = [
    { name: 'Vikram Singh', role: 'Senior Chartered Accountant', specialty: 'Tax Planning & Compliance' },
    { name: 'Kavya Iyer', role: 'Senior Chartered Accountant', specialty: 'Audit & Assurance' },
    { name: 'Aditya Gupta', role: 'Senior Chartered Accountant', specialty: 'GST & Indirect Taxes' },
    { name: 'Nisha Verma', role: 'Senior Chartered Accountant', specialty: 'Financial Advisory' },
    { name: 'Rohan Desai', role: 'Chartered Accountant', specialty: 'Company Formation & ROC' },
    { name: 'Sneha Malhotra', role: 'Chartered Accountant', specialty: 'Bookkeeping & Accounts' },
    { name: 'Karthik Menon', role: 'Chartered Accountant', specialty: 'Internal Audit & Controls' },
    { name: 'Divya Nair', role: 'Chartered Accountant', specialty: 'Tax Return Filing' }
  ];

  return (
    <div className="team-page">
      <section className="team-hero" style={{
        backgroundImage: 'linear-gradient(rgba(10, 17, 40, 0.7), rgba(10, 17, 40, 0.7)), url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="team-hero-content">
          <h1>Our Team</h1>
          <p>Meet the experienced chartered accountants dedicated to your financial success</p>
        </div>
      </section>

      <section className="team-intro">
        <h2>Expert Chartered Accountants</h2>
        <p>
          Our team comprises qualified and experienced Chartered Accountants with deep expertise in 
          taxation, auditing, financial advisory, and compliance. With years of combined experience 
          serving businesses across industries, we bring practical knowledge and professional 
          excellence to every engagement.
        </p>
      </section>

      <section className="leadership-section">
        <h2>Leadership Team</h2>
        <div className="leadership-grid">
          {leadership.map((leader, index) => (
            <div key={index} className="team-member-card">
              <div className="member-avatar">
                <div className="avatar-placeholder">
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <h3>{leader.name}</h3>
              <p className="member-role">{leader.role}</p>
              <p className="member-bio">{leader.bio}</p>
              <p className="member-expertise"><strong>Expertise:</strong> {leader.expertise}</p>
              <div className="member-social">
                <button className="social-btn" aria-label="LinkedIn"><FaLinkedin /></button>
                <button className="social-btn" aria-label="Email"><FaEnvelope /></button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="consultants-section">
        <h2>Our Team</h2>
        <div className="consultants-grid">
          {consultants.map((consultant, index) => (
            <div key={index} className="consultant-card">
              <div className="consultant-avatar">
                {consultant.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="consultant-info">
                <h4>{consultant.name}</h4>
                <p className="consultant-role">{consultant.role}</p>
                <p className="consultant-specialty">{consultant.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="join-team">
        <h2>Join Our Team</h2>
        <p>We're always looking for qualified Chartered Accountants and accounting professionals to join our growing team</p>
        <a href="/careers" className="btn btn-primary">View Open Positions</a>
      </section>
    </div>
  );
};

export default Team;

