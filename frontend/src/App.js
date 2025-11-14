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
import StaffAugmentation from './pages/services/StaffAugmentation';
// New Core Audit Services
import StockAudit from './pages/services/StockAudit';
import QualityAudit from './pages/services/QualityAudit';
import DistributorAudit from './pages/services/DistributorAudit';
import NBFC from './pages/services/NBFC';
import RetailAudit from './pages/services/RetailAudit';
import InternalAudit from './pages/services/InternalAudit';
import FixedAssetAudit from './pages/services/FixedAssetAudit';
import WarehouseAudit from './pages/services/WarehouseAudit';
import DamageExpiryAudit from './pages/services/DamageExpiryAudit';
import ComplianceAudit from './pages/services/ComplianceAudit';
import CleanHygieneAudit from './pages/services/CleanHygieneAudit';
import ForensicAudit from './pages/services/ForensicAudit';
import MerchantAudit from './pages/services/MerchantAudit';
import ChecklistAudit from './pages/services/ChecklistAudit';
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
          <Route path="/services/staff-augmentation" element={<StaffAugmentation />} />
          {/* New Core Audit Services */}
          <Route path="/services/stock-audit" element={<StockAudit />} />
          <Route path="/services/quality-audit" element={<QualityAudit />} />
          <Route path="/services/distributor-audit" element={<DistributorAudit />} />
          <Route path="/services/nbfc-audit" element={<NBFC />} />
          <Route path="/services/retail-audit" element={<RetailAudit />} />
          <Route path="/services/internal-audit" element={<InternalAudit />} />
          <Route path="/services/fixed-asset-audit" element={<FixedAssetAudit />} />
          <Route path="/services/warehouse-audit" element={<WarehouseAudit />} />
          <Route path="/services/damage-expiry-audit" element={<DamageExpiryAudit />} />
          <Route path="/services/compliance-audit" element={<ComplianceAudit />} />
          <Route path="/services/clean-hygiene-audit" element={<CleanHygieneAudit />} />
          <Route path="/services/forensic-audit" element={<ForensicAudit />} />
          <Route path="/services/merchant-audit" element={<MerchantAudit />} />
          <Route path="/services/checklist-audit" element={<ChecklistAudit />} />
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

