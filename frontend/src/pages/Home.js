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

// Red pin icon for map markers
const redPinIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  iconRetinaUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
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
    { name: 'Honda' },
    { name: 'MG Motors' },
    { name: 'Airtel' },
    { name: 'HFCL' }
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

  // Major locations across India where we serve (Odisha, Mumbai, Kolkata, Ahmedabad, Delhi, Visakhapatnam highlighted)
  const locations = [
    { name: 'Bhubaneswar, Odisha', lat: 20.2961, lng: 85.8245 },
    { name: 'Mumbai', lat: 19.0760, lng: 72.8777 },
    { name: 'Kolkata', lat: 22.5726, lng: 88.3639 },
    { name: 'Ahmedabad', lat: 23.0225, lng: 72.5714 },
    { name: 'Delhi', lat: 28.6139, lng: 77.2090 },
    { name: 'Visakhapatnam', lat: 17.6868, lng: 83.2185 },
    { name: 'Bangalore', lat: 12.9716, lng: 77.5946 },
    { name: 'Hyderabad', lat: 17.3850, lng: 78.4867 },
    { name: 'Chennai', lat: 13.0827, lng: 80.2707 },
    { name: 'Pune', lat: 18.5204, lng: 73.8567 },
    { name: 'Jaipur', lat: 26.9124, lng: 75.7873 },
    { name: 'Surat', lat: 21.1702, lng: 72.8311 },
    { name: 'Lucknow', lat: 26.8467, lng: 80.9462 },
    { name: 'Kanpur', lat: 26.4499, lng: 80.3319 },
    { name: 'Nagpur', lat: 21.1458, lng: 79.0882 },
    { name: 'Indore', lat: 22.7196, lng: 75.8577 },
    { name: 'Thane', lat: 19.2183, lng: 72.9781 },
    { name: 'Bhopal', lat: 23.2599, lng: 77.4126 },
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
    // Additional South Indian cities - Karnataka
    { name: 'Hubli', lat: 15.3647, lng: 75.1240 },
    { name: 'Belagavi', lat: 15.8497, lng: 74.4977 },
    { name: 'Davanagere', lat: 14.4644, lng: 75.9218 },
    { name: 'Gulbarga', lat: 17.3297, lng: 76.8343 },
    { name: 'Tumkur', lat: 13.3409, lng: 77.1010 },
    { name: 'Udupi', lat: 13.3409, lng: 74.7421 },
    { name: 'Shimoga', lat: 13.9299, lng: 75.5681 },
    { name: 'Bellary', lat: 15.1394, lng: 76.9214 },
    // Additional South Indian cities - Tamil Nadu
    { name: 'Tiruchirappalli', lat: 10.7905, lng: 78.7047 },
    { name: 'Salem', lat: 11.6643, lng: 78.1460 },
    { name: 'Tirunelveli', lat: 8.7139, lng: 77.7567 },
    { name: 'Erode', lat: 11.3410, lng: 77.7172 },
    { name: 'Vellore', lat: 12.9166, lng: 79.1325 },
    { name: 'Tiruppur', lat: 11.1085, lng: 77.3411 },
    { name: 'Thanjavur', lat: 10.7870, lng: 79.1378 },
    { name: 'Dindigul', lat: 10.3689, lng: 77.9804 },
    { name: 'Karur', lat: 10.9600, lng: 78.0760 },
    { name: 'Namakkal', lat: 11.2226, lng: 78.1687 },
    // Additional South Indian cities - Kerala
    { name: 'Kozhikode', lat: 11.2588, lng: 75.7804 },
    { name: 'Thrissur', lat: 10.5276, lng: 76.2144 },
    { name: 'Kannur', lat: 11.8745, lng: 75.3704 },
    { name: 'Kollam', lat: 8.8932, lng: 76.6141 },
    { name: 'Alappuzha', lat: 9.4981, lng: 76.3388 },
    { name: 'Palakkad', lat: 10.7867, lng: 76.6548 },
    { name: 'Kottayam', lat: 9.5916, lng: 76.5222 },
    // Additional South Indian cities - Andhra Pradesh
    { name: 'Guntur', lat: 16.3067, lng: 80.4365 },
    { name: 'Nellore', lat: 14.4426, lng: 79.9865 },
    { name: 'Tirupati', lat: 13.6288, lng: 79.4192 },
    { name: 'Kurnool', lat: 15.8281, lng: 78.0373 },
    { name: 'Kakinada', lat: 16.9891, lng: 82.2475 },
    { name: 'Rajahmundry', lat: 17.0005, lng: 81.8040 },
    { name: 'Anantapur', lat: 14.6819, lng: 77.6006 },
    { name: 'Eluru', lat: 16.7050, lng: 81.1000 },
    // Additional South Indian cities - Telangana
    { name: 'Warangal', lat: 17.9689, lng: 79.5941 },
    { name: 'Nizamabad', lat: 18.6715, lng: 78.0948 },
    { name: 'Karimnagar', lat: 18.4386, lng: 79.1288 },
    { name: 'Khammam', lat: 17.2473, lng: 80.1514 },
    // Additional South Indian cities - Goa
    { name: 'Panaji', lat: 15.4909, lng: 73.8278 },
    { name: 'Vasco da Gama', lat: 15.3860, lng: 73.8265 },
    { name: 'Colombo, Sri Lanka', lat: 6.9271, lng: 79.8612 },
    { name: 'Kandy, Sri Lanka', lat: 7.2906, lng: 80.6337 }
  ];

  const testimonials = [
    {
      name: 'Deepak Saxena',
      position: 'Partner – Risk Advisory Services',
      company: 'Big 4',
      text: 'Beyond Audit delivered exactly what was committed. The assignments were executed across multiple locations with consistent quality and timely reporting. Their ability to manage last-mile audit execution stood out.',
      rating: 5
    },
    {
      name: 'Neha Patil',
      position: 'Senior Manager – Risk Advisory Services',
      company: 'Big 6',
      text: 'We engaged Beyond Audit for large-scale field and stock audits across several states. The coordination, auditor availability, and completion discipline were impressive, even in difficult locations.',
      rating: 5
    },
    {
      name: 'Rahul Mittal',
      position: 'Finance Controller',
      company: 'National Retail & Distribution Company',
      text: 'Finding reliable auditors at short notice has always been a challenge. Beyond Audit solved this efficiently with verified professionals and structured execution. Once assigned, the work was completed without follow-ups.',
      rating: 5
    },
    {
      name: 'Akshay Gupta',
      position: 'Senior Manager – Assurance & Risk Advisory',
      company: 'Mid-sized CA Firm',
      text: 'Beyond Audit supported us with multi-city audit execution where consistency was critical. Reporting was standardised, timelines were met, and communication remained clear throughout the engagement.',
      rating: 5
    },
    {
      name: 'Suresh Kumar',
      position: 'Head – Compliance & Internal Audit',
      company: 'Manufacturing Group',
      text: 'We required audit coverage across remote and non-metro locations. Beyond Audit demonstrated strong on-ground capability and ownership, ensuring assignments were completed as planned.',
      rating: 5
    },
    {
      name: 'Arjun Malhotra',
      position: 'Director – Finance & Risk',
      company: 'Financial Services Group',
      text: 'The Beyond Audit team understands audit realities very well. Their freelancer network, verification standards, and execution discipline make them a dependable partner for large audit requirements.',
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
            <Link to="/services#assurance-services" className="hero-link">
              <div className="hero-link-icon"><FaShieldAlt /></div>
              <div>
                <h3>Assurance Services</h3>
                <p>Comprehensive audit and verification solutions</p>
              </div>
            </Link>
            <Link to="/services#staff-augmentation" className="hero-link">
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
                icon={redPinIcon}
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
        <div className="section-header">
          <h2 className="section-title">End to End Verification</h2>
        </div>
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
          <li>Pan-India network of 50,000+ Chartered Accountants, CMAs, and finance specialists.</li>
          <li>Complete manpower provision for all audit services across India.</li>
          <li>Data-driven audit services powered by precision, integrity, and intelligence.</li>
          <li>End-to-end service delivery with dedicated professional teams.</li>
          <li>Technological adoption and intelligence-driven assurance.</li>
        </ul>
            <Link to="/about" className="btn btn-primary">
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
                <p>{testimonial.position}{testimonial.position && testimonial.company ? ' · ' : ''}{testimonial.company}</p>
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

