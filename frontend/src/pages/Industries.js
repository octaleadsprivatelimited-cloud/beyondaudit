import React from 'react';
import './Industries.css';

const Industries = () => {
  // Industries grid hidden; removing data to avoid unused variable warnings

  // Brand logos (provide assets at /public/images/logos or update URLs)
  const slugify = (text) => text
    .toString()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\//g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

  const brandLogos = [
    { name: 'Nissan' },
    { name: 'Renault' },
    { name: 'Mahindra' },
    { name: 'Audi' },
    { name: 'BMW' },
    { name: 'Skoda' },
    { name: 'Hyundai' },
    { name: 'Honda' },
    { name: 'Lamborghini' },
    { name: 'Volkswagen' },
    { name: 'KFC' },
    { name: 'Pizza Hut' },
    { name: 'Apollo' },
    { name: 'Mankind Pharma' },
    { name: 'GSK Pharma' },
    { name: 'DeHaat' },
    { name: 'FIITJEE' },
    { name: 'ICICI' },
    { name: 'Lenskart' },
    { name: 'MakeMyTrip' },
    { name: 'OYO' },
    { name: 'TCPL / TATA' },
    { name: 'MTR' },
    { name: 'Eastern' },
    { name: 'Blinkit' },
    { name: 'Cadence' },
    { name: 'Campa Cola' },
    { name: 'Macmillan' },
    { name: 'UCB' },
    { name: 'Max' },
    { name: 'Lifestyle' },
    { name: 'HDFC' },
    { name: 'Philip Morris' },
    { name: 'Kamal Watch Co' },
    { name: 'Omega Boutique' },
    { name: 'Tata Motors' },
    { name: 'Cars24' },
    { name: 'Airtel Payments Bank' },
    { name: 'Airtel' },
    { name: 'Heritage' },
    { name: 'Maruti Suzuki' },
    { name: 'Hero' },
    { name: 'HFCL' },
    { name: 'MG Motors' },
    { name: 'Atomberg' },
    { name: 'Toyota' },
    { name: 'Eicher' },
    { name: 'Royal Enfield' },
    { name: 'Land Rover' },
    { name: 'Jaguar' },
    { name: 'KIA' },
    { name: 'TVS' },
    { name: 'Axis' },
    { name: 'Ecom' }
  ];

  const getInitialSrc = (name) => `/images/industries/${slugify(name)}.png`;
  const fallbackExts = ['avif', 'svg', 'jpg', 'jpeg', 'webp'];
  const onLogoError = (e, name) => {
    const idxAttr = e.currentTarget.getAttribute('data-src-idx') || '0';
    const idx = parseInt(idxAttr, 10);
    if (idx < fallbackExts.length) {
      e.currentTarget.setAttribute('data-src-idx', String(idx + 1));
      e.currentTarget.src = `/images/industries/${slugify(name)}.${fallbackExts[idx]}`;
    } else {
      e.currentTarget.style.display = 'none';
      const fallback = e.currentTarget.nextSibling;
      if (fallback) fallback.style.display = 'flex';
    }
  };

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

      {/* Cross-Industry Experience section intentionally hidden */}

      {/* Industries cards section intentionally hidden */}

      <section className="industry-logos-section">
        <div className="industry-logos-intro">
          <h2>Trusted Across Leading Industries</h2>
          <p>Logos shown are for reference of sectors served. All trademarks and logos belong to their respective owners.</p>
        </div>
        <div className="industry-logos-grid">
          {brandLogos.map((brand, idx) => (
            <div key={idx} className="logo-card" title={brand.name}>
              <img
                src={getInitialSrc(brand.name)}
                alt={brand.name + ' logo'}
                className="brand-logo"
                data-src-idx="0"
                onError={(e) => onLogoError(e, brand.name)}
              />
              <div className="logo-fallback" aria-hidden="true">
                <span>{brand.name.substring(0, 2).toUpperCase()}</span>
              </div>
              <div className="brand-name">{brand.name}</div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Industries;

