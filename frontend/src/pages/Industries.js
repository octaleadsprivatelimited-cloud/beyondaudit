import React from 'react';
import './Industries.css';

const Industries = () => {
  const industries = [
    { name: 'Technology & Software', description: 'SaaS, enterprise software, cybersecurity, and emerging tech' },
    { name: 'Healthcare & Life Sciences', description: 'Hospitals, biotech, pharmaceuticals, medical devices' },
    { name: 'Financial Services', description: 'Banking, insurance, fintech, investment management' },
    { name: 'Manufacturing', description: 'Industrial, automotive, aerospace, consumer goods' },
    { name: 'Retail & E-commerce', description: 'Online and brick-and-mortar retail operations' },
    { name: 'Energy & Utilities', description: 'Oil & gas, renewables, power generation, utilities' },
    { name: 'Telecommunications', description: '5G, telecom infrastructure, network services' },
    { name: 'Real Estate', description: 'Commercial, residential, REITs, property management' },
    { name: 'Professional Services', description: 'Legal, accounting, consulting, business services' },
    { name: 'Media & Entertainment', description: 'Streaming, gaming, publishing, advertising' },
    { name: 'Transportation & Logistics', description: 'Supply chain, freight, last-mile delivery' },
    { name: 'Education', description: 'EdTech, universities, training, e-learning platforms' }
  ];

  return (
    <div className="industries-page">
      <section className="industries-hero">
        <div className="hero-background-overlay"></div>
        <div className="industries-hero-container">
          <div className="hero-tagline">SECTOR EXPERTISE</div>
          <h1>Industries</h1>
          <p className="hero-description">Our team of experienced chartered accountants and financial experts serves clients across diverse industries, bringing specialized knowledge and tailored solutions to meet each sector's unique challenges and regulatory requirements.</p>
        </div>
      </section>

      <section className="industries-intro">
        <h2>Cross-Industry Experience</h2>
        <p>
          Our consultants bring deep domain knowledge across 30+ industries, combining sector-specific 
          insights with proven methodologies to deliver exceptional results for our clients.
        </p>
      </section>

      <section className="industries-grid-section">
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <h3>{industry.name}</h3>
              <p>{industry.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="industries-cta">
        <h2>Your Industry, Our Expertise</h2>
        <p>Contact us to learn how we can help your business</p>
        <a href="/contact" className="btn btn-white">Get in Touch</a>
      </section>
    </div>
  );
};

export default Industries;

