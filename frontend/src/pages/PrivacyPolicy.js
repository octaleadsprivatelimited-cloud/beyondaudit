import React from 'react';
import './LegalPages.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <h1>Privacy Policy</h1>
        <p>Last updated: October 17, 2025</p>
      </section>

      <section className="legal-content">
        <h2>1. Information We Collect</h2>
        <p>
          We collect information you provide directly to us, such as when you create an account, 
          fill out a form, or communicate with us. This may include your name, email address, 
          phone number, company information, and any other information you choose to provide.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Process your requests and transactions</li>
          <li>Send you technical notices and support messages</li>
          <li>Respond to your comments and questions</li>
          <li>Communicate with you about products, services, and events</li>
        </ul>

        <h2>3. Information Sharing</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share 
          your information only in the following circumstances: with your consent, to comply with 
          laws, to protect rights and safety, or with service providers who assist in our operations.
        </p>

        <h2>4. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal 
          information against unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2>5. Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal information. You may also 
          object to processing of your information or request restriction of processing.
        </p>

        <h2>6. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at 
          privacy@corporate-consulting.com
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

