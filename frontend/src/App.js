import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import TaxPlanning from './pages/services/TaxPlanning';
import AuditAssurance from './pages/services/AuditAssurance';
import FinancialAdvisory from './pages/services/FinancialAdvisory';
import BusinessSetup from './pages/services/BusinessSetup';
import AdditionalServices from './pages/services/AdditionalServices';
import Industries from './pages/Industries';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Team from './pages/Team';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Resources from './pages/Resources';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import OurApproach from './pages/OurApproach';
import WhyChooseUs from './pages/WhyChooseUs';
import Partners from './pages/Partners';
import News from './pages/News';
import Events from './pages/Events';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <WhatsAppButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/tax-planning" element={<TaxPlanning />} />
          <Route path="/services/audit-assurance" element={<AuditAssurance />} />
          <Route path="/services/financial-advisory" element={<FinancialAdvisory />} />
          <Route path="/services/business-setup" element={<BusinessSetup />} />
          <Route path="/services/additional-services" element={<AdditionalServices />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/our-approach" element={<OurApproach />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

