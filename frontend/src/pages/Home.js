import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBoxes, FaCheckCircle, FaTruck, FaClipboardList, FaUniversity, FaStore, FaSearch, FaBuilding, FaWarehouse, FaExclamationTriangle, FaShieldAlt, FaBroom, FaUserSecret, FaHandshake, FaArrowRight, FaStar, FaUsers } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Home.css';

// Fix for default marker icons in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Create custom red marker icon
const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Slugify function for logo paths
const slugify = (text) => text
  .toString()
  .toLowerCase()
  .replace(/&/g, 'and')
  .replace(/\//g, ' ')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)+/g, '');

const Home = () => {
  useEffect(() => {
    // Ensure map tiles load properly after component mounts
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: <FaBoxes />,
      title: 'Stock Audit',
      description: 'Exhaustive verification of physical inventory vis-à-vis book records for precision and transparency.',
      link: '/services/stock-audit'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Quality Audit',
      description: 'Holistic assessment of process integrity and product excellence across production lines.',
      link: '/services/quality-audit'
    },
    {
      icon: <FaTruck />,
      title: 'Distributor Audit',
      description: 'Comprehensive evaluation of distributor operations and compliance with organizational policies.',
      link: '/services/distributor-audit'
    },
    {
      icon: <FaClipboardList />,
      title: 'Checklist-Based Audit',
      description: 'Structured, metric-driven approach measuring performance against defined control parameters.',
      link: '/services/checklist-audit'
    },
    {
      icon: <FaUniversity />,
      title: 'NBFC Audit',
      description: 'In-depth review of financial operations and regulatory adherence for Non-Banking Financial Companies.',
      link: '/services/nbfc-audit'
    },
    {
      icon: <FaStore />,
      title: 'Retail Audit',
      description: 'Granular assessment of store operations, merchandising effectiveness, and policy compliance.',
      link: '/services/retail-audit'
    },
    {
      icon: <FaSearch />,
      title: 'Internal Audit',
      description: 'Independent evaluation of internal control frameworks and governance processes.',
      link: '/services/internal-audit'
    },
    {
      icon: <FaBuilding />,
      title: 'Fixed Asset Audit',
      description: 'Complete verification of asset existence, ownership, condition, and valuation.',
      link: '/services/fixed-asset-audit'
    },
    {
      icon: <FaWarehouse />,
      title: 'Warehouse Audit',
      description: 'Thorough examination of storage practices, stock handling, and operational efficiency.',
      link: '/services/warehouse-audit'
    },
    {
      icon: <FaExclamationTriangle />,
      title: 'Damage & Expiry Audit',
      description: 'Identification of product deterioration, wastage, and inventory management inefficiencies.',
      link: '/services/damage-expiry-audit'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Compliance Audit',
      description: 'Exhaustive examination of adherence to statutory regulations and industry mandates.',
      link: '/services/compliance-audit'
    },
    {
      icon: <FaBroom />,
      title: 'Clean & Hygiene Audit',
      description: 'Assessment of workplace sanitation, safety, and environmental management standards.',
      link: '/services/clean-hygiene-audit'
    },
    {
      icon: <FaUserSecret />,
      title: 'Forensic Audit',
      description: 'Investigation of financial irregularities, fraud, and corporate misconduct with precision.',
      link: '/services/forensic-audit'
    },
    {
      icon: <FaHandshake />,
      title: 'Merchant Audit',
      description: 'Meticulous review of merchant transactions, pricing structures, and operational adherence.',
      link: '/services/merchant-audit'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Qualified Professionals' },
    { number: '5+', label: 'Years of Excellence' },
    { number: '25,000+', label: 'Locations Covered' },
    { number: '99.9%', label: 'Client Satisfaction' }
  ];

  // Top brand logos to display
  const topBrandLogos = [
    { name: 'Tata Motors' },
    { name: 'Maruti Suzuki' },
    { name: 'HDFC' },
    { name: 'ICICI' },
    { name: 'Lenskart' },
    { name: 'KFC' },
    { name: 'Apollo' },
    { name: 'BMW' },
    { name: 'Audi' },
    { name: 'Toyota' },
    { name: 'Hyundai' },
    { name: 'Honda' }
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

  // Major locations across India where we serve
  const locations = [
    { name: 'Mumbai', lat: 19.0760, lng: 72.8777 },
    { name: 'Delhi', lat: 28.6139, lng: 77.2090 },
    { name: 'Bangalore', lat: 12.9716, lng: 77.5946 },
    { name: 'Hyderabad', lat: 17.3850, lng: 78.4867 },
    { name: 'Chennai', lat: 13.0827, lng: 80.2707 },
    { name: 'Kolkata', lat: 22.5726, lng: 88.3639 },
    { name: 'Pune', lat: 18.5204, lng: 73.8567 },
    { name: 'Ahmedabad', lat: 23.0225, lng: 72.5714 },
    { name: 'Jaipur', lat: 26.9124, lng: 75.7873 },
    { name: 'Surat', lat: 21.1702, lng: 72.8311 },
    { name: 'Lucknow', lat: 26.8467, lng: 80.9462 },
    { name: 'Kanpur', lat: 26.4499, lng: 80.3319 },
    { name: 'Nagpur', lat: 21.1458, lng: 79.0882 },
    { name: 'Indore', lat: 22.7196, lng: 75.8577 },
    { name: 'Thane', lat: 19.2183, lng: 72.9781 },
    { name: 'Bhopal', lat: 23.2599, lng: 77.4126 },
    { name: 'Visakhapatnam', lat: 17.6868, lng: 83.2185 },
    { name: 'Vijayawada', lat: 16.5062, lng: 80.6480 },
    { name: 'Patna', lat: 25.5941, lng: 85.1376 },
    { name: 'Vadodara', lat: 22.3072, lng: 73.1812 },
    { name: 'Ghaziabad', lat: 28.6692, lng: 77.4538 },
    { name: 'Ludhiana', lat: 30.9010, lng: 75.8573 },
    { name: 'Agra', lat: 27.1767, lng: 78.0081 },
    { name: 'Nashik', lat: 19.9975, lng: 73.7898 },
    { name: 'Faridabad', lat: 28.4089, lng: 77.3178 },
    { name: 'Meerut', lat: 28.9845, lng: 77.7064 },
    { name: 'Coimbatore', lat: 11.0168, lng: 76.9558 },
    { name: 'Kochi', lat: 9.9312, lng: 76.2673 },
    { name: 'Thiruvananthapuram', lat: 8.5241, lng: 76.9366 },
    { name: 'Madurai', lat: 9.9252, lng: 78.1198 },
    { name: 'Mangalore', lat: 12.9141, lng: 74.8560 },
    { name: 'Puducherry', lat: 11.9139, lng: 79.8145 },
    { name: 'Mysuru', lat: 12.2958, lng: 76.6394 },
    { name: 'Colombo, Sri Lanka', lat: 6.9271, lng: 79.8612 },
    { name: 'Kandy, Sri Lanka', lat: 7.2906, lng: 80.6337 }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Kumar Industries',
      text: 'Professional tax planning that saved us significant money and ensured full compliance.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      company: 'Sharma & Associates',
      text: 'Their audit services helped us streamline our financial processes and improve efficiency.',
      rating: 5
    }
  ];

  return (
    <div className="home">
      {/* Hero Section - Deloitte Inspired */}
      <section className="hero" style={{
        backgroundImage: 'linear-gradient(rgba(10, 17, 40, 0.85), rgba(10, 17, 40, 0.85)), url(/images/homepage-hero-consulting.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="hero-container">
          <div className="hero-content animate-fade-in">
        <h1 className="hero-title">
          India's Leading<br />
          <span className="hero-accent">Freelance finance professionals hiring platform</span>
        </h1>
        <p className="hero-subtitle">
          Redefining the audit and compliance ecosystem through flawless, data-driven audit services powered by precision, integrity, and intelligence. Our pan-India network of 50,000+ qualified professionals delivers unmatched accuracy, transparency, and efficiency across all audit services with complete manpower support.
        </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">
                Let's Connect <FaArrowRight />
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Explore Our Services
              </Link>
            </div>
          </div>
          <div className="hero-links">
            <Link to="/services/audit-assurance" className="hero-link">
              <div className="hero-link-icon"><FaShieldAlt /></div>
              <div>
                <h3>Assurance Services</h3>
                <p>Comprehensive audit and verification solutions</p>
              </div>
            </Link>
            <Link to="/services/staff-augmentation" className="hero-link">
              <div className="hero-link-icon"><FaUsers /></div>
              <div>
                <h3>Staff Augmentation Services</h3>
                <p>Expert finance professionals on demand</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Locations Map Section */}
      <section className="locations-map-section">
        <div className="section-header">
          <h2 className="section-title">Our Pan-India Presence</h2>
          <p className="section-description">
            Serving clients across 25,000+ locations nationwide with our extensive network of qualified professionals
          </p>
        </div>
        <div className="map-container">
          <MapContainer
            center={[20.5937, 78.9629]}
            zoom={5}
            minZoom={4}
            maxZoom={10}
            maxBounds={[[6.5, 68.0], [37.0, 97.0]]}
            maxBoundsViscosity={1.0}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((location, index) => (
              <Marker
                key={index}
                position={[location.lat, location.lng]}
                icon={redIcon}
              >
                <Popup>
                  <strong>{location.name}</strong>
                  <br />
                  Service Location
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card animate-fade-in">
              <h2 className="stat-number">{stat.number}</h2>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="why-choose-content">
          <div className="why-choose-text">
        <span className="section-subtitle">Why Choose Us</span>
        <h2 className="section-title">India's Pacesetter in Audit Intelligence</h2>
        <p>
          Beyond Audit leads India's audit intelligence revolution with our robust pan-India network of 50,000+ qualified professionals. We combine human expertise with digital precision to deliver flawless, data-driven audit services that set new benchmarks in speed, reliability, and technological integration. We provide complete manpower support for all audit services.
        </p>
        <ul className="why-choose-list">
          <li>✓ Pan-India network of 50,000+ Chartered Accountants, CMAs, and finance specialists</li>
          <li>✓ Complete manpower provision for all audit services across India</li>
          <li>✓ Data-driven audit services powered by precision, integrity, and intelligence</li>
          <li>✓ End-to-end service delivery with dedicated professional teams</li>
          <li>✓ Technological adoption and intelligence-driven assurance</li>
        </ul>
            <Link to="/why-choose-us" className="btn btn-primary">
              Learn More About Us
            </Link>
          </div>
          <div className="why-choose-visual">
            <h3 className="top-industries-title">Trusted by Leading Brands</h3>
            <div className="top-industries-grid">
              {topBrandLogos.map((brand, index) => (
                <div key={index} className="logo-card-home">
                  <img
                    src={getInitialSrc(brand.name)}
                    alt={brand.name + ' logo'}
                    className="brand-logo-home"
                    data-src-idx="0"
                    onError={(e) => onLogoError(e, brand.name)}
                  />
                  <div className="logo-fallback-home" aria-hidden="true">
                    <span>{brand.name.substring(0, 2).toUpperCase()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-header">
          <span className="section-subtitle">Client Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="section-footer">
          <Link to="/testimonials" className="btn btn-outline">
            Read More Testimonials
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;

