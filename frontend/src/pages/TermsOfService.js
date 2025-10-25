import React from 'react';
import './LegalPages.css';

const TermsOfService = () => {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <h1>Terms of Service</h1>
        <p>Last updated: October 17, 2025</p>
      </section>

      <section className="legal-content">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using this website, you accept and agree to be bound by the terms and 
          provisions of this agreement. If you do not agree to these terms, please do not use our website.
        </p>

        <h2>2. Use of Services</h2>
        <p>
          You agree to use our services only for lawful purposes and in accordance with these Terms. 
          You agree not to use our services in any way that could damage, disable, or impair our systems.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics, logos, and software, is the property 
          of Corporate Consulting Solutions and is protected by copyright and other intellectual 
          property laws.
        </p>

        <h2>4. Disclaimer of Warranties</h2>
        <p>
          Our services are provided "as is" without warranties of any kind, either express or implied. 
          We do not warrant that our services will be uninterrupted or error-free.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          We shall not be liable for any indirect, incidental, special, consequential, or punitive 
          damages resulting from your use of or inability to use our services.
        </p>

        <h2>6. Modifications</h2>
        <p>
          We reserve the right to modify these terms at any time. We will notify users of any 
          material changes by posting the new Terms of Service on this page.
        </p>

        <h2>7. Contact Information</h2>
        <p>
          For questions about these Terms of Service, please contact us at legal@corporate-consulting.com
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;

