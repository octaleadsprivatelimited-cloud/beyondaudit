import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Team.css';

const Team = () => {
  const leadership = [
    {
      name: 'Manoj Kumar',
      role: 'Founder & Managing Partner',
      bio: 'Chartered Accountant with over 20 years of experience in tax planning, audit services, and financial advisory. Manoj now leads collaborative audit squads that blend technology with human insight for every engagement.',
      expertise: 'Collaborative Audit Strategy, Tax Planning, Financial Advisory'
    },
    {
      name: 'Priya Sharma',
      role: 'Partner - Tax & Compliance',
      bio: 'Chartered Accountant specializing in direct and indirect taxation. Priya orchestrates cross-functional teams to streamline compliance journeys for enterprises across India.',
      expertise: 'Tax Collaboration Pods, GST Compliance, Direct Taxation'
    },
    {
      name: 'Arjun Patel',
      role: 'Partner - Audit & Assurance',
      bio: 'Chartered Accountant with extensive experience in statutory audits, internal audits, and process improvements. Arjun curates multi-city field teams that ensure accuracy and reliability at scale.',
      expertise: 'Field Collaboration, Statutory Audit, Risk Assessment'
    },
    {
      name: 'Ananya Reddy',
      role: 'Partner - Financial Advisory',
      bio: 'Chartered Accountant providing strategic financial guidance to businesses. Ananya builds collaborative advisory guilds that pilot data-backed decisions for every client.',
      expertise: 'Collaborative Advisory, Business Planning, Cash Flow Management'
    }
  ];

  const consultants = [
    { name: 'Vikram Singh', role: 'Senior Chartered Accountant', specialty: 'Collaborative Tax Pods' },
    { name: 'Kavya Iyer', role: 'Senior Chartered Accountant', specialty: 'Audit Field Squads' },
    { name: 'Aditya Gupta', role: 'Senior Chartered Accountant', specialty: 'GST & Indirect Taxes' },
    { name: 'Nisha Verma', role: 'Senior Chartered Accountant', specialty: 'Financial Advisory Collective' },
    { name: 'Rohan Desai', role: 'Chartered Accountant', specialty: 'Entity Set-up Taskforce' },
    { name: 'Sneha Malhotra', role: 'Chartered Accountant', specialty: 'Accounts Collaboration Hub' },
    { name: 'Karthik Menon', role: 'Chartered Accountant', specialty: 'Internal Audit & Controls' },
    { name: 'Divya Nair', role: 'Chartered Accountant', specialty: 'Tax Return Partnerships' }
  ];

  return (
    <div className="team-page">
      <section className="team-hero">
        <div className="hero-background-overlay"></div>
        <div className="team-hero-container">
          <div className="hero-tagline">COLLABORATE</div>
          <h1>Collaborate With Our Experts</h1>
          <p className="hero-description">Build a tailored audit squad with Beyond Audit’s nationwide network of specialists, ready to deploy wherever you need insight.</p>
        </div>
      </section>

      <section className="team-intro">
        <h2>A Collaborative Network of Specialists</h2>
        <p>
          Collaboration is at the heart of our delivery model. From the first discovery call to the final compliance checklist,
          we assemble cross-functional pods of chartered accountants, analysts, and field executives who work alongside your
          teams. Every engagement is supported by shared playbooks, real-time coordination, and transparent communication.
        </p>
        <p>
          Whether you require nationwide field verification or a dedicated advisory collective, we mobilize professionals who
          blend domain expertise with local insight. Together, we co-create solutions that are measurable, compliant, and built
          for long-term partnerships.
        </p>
      </section>

      <section className="leadership-section">
        <h2>Collaboration Leads</h2>
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
        <h2>Extended Collaborators</h2>
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

    </div>
  );
};

export default Team;

