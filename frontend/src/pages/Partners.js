import React from 'react';
import './Partners.css';

const Partners = () => {
  const partners = [
    'Leading Global Bank', 'Tech Giants', 'Investment Firms', 'Industry Associations',
    'Academic Institutions', 'Law Firms', 'Accounting Firms', 'Technology Providers'
  ];

  return (
    <div className="partners-page">
      <section className="partners-hero" style={{
        backgroundImage: 'linear-gradient(rgba(10, 17, 40, 0.7), rgba(10, 17, 40, 0.7)), url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="partners-hero-content">
          <h1>Our Partners</h1>
          <p>Collaborating with industry leaders to deliver exceptional value</p>
        </div>
      </section>

      <section className="partners-content">
        <h2>Strategic Partnerships</h2>
        <p>
          We maintain strategic partnerships with leading organizations across industries to provide 
          our clients with comprehensive solutions and unparalleled expertise.
        </p>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <h3>{partner}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Partners;

