import React from 'react';
import '../styles/Privacy.css'

const PrivacyPolicy = () => {
  return (
    <div className='privacy-container flex flex-col items-center justify-center gap-4'>
      <h1 className='mt-20'>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> July 23, 2025</p>

      <p>
        This Privacy Policy explains how <strong>John Joshua Canlas</strong> collects, uses, and protects any information
        you provide while using this website.
      </p>

      <h2>1. Information I Collect</h2>
      <p>I may collect the following types of information:</p>
      <ul>
        <li>
          <strong>Personal Information:</strong> When you use the contact form, your name or company name, email address, and message are submitted through
          the Web3Forms API service.
        </li>
        <li>
          <strong>Usage Data:</strong> Anonymous usage data such as browser type, time spent on pages, and referring URLs may be collected through browser tools or third-party services.
        </li>
      </ul>

      <h2>2. How I Use Your Information</h2>
      <p>Your information is used solely for the following purposes:</p>
      <ul>
        <li>Responding to messages submitted via the contact form</li>
        <li>Improving the website’s performance and user experience</li>
        <li>Analyzing general usage trends (non-personal data)</li>
      </ul>

      <h2>3. Third-Party Services</h2>
      <p>This website uses the following third-party services:</p>
      <ul>
        <li>
          <strong>Web3Forms:</strong> Used to handle form submissions securely. Data sent through the contact form is processed according to Web3Forms’
          <a href="https://web3forms.com/privacy-policy" target="_blank" rel="noopener noreferrer"> Privacy Policy</a>.
        </li>
        <li>
          <strong>Embedded Links:</strong> This site contains links to my profiles on <a href="https://www.facebook.com/BoyGigil24" target="_blank" rel="noopener noreferrer">Facebook</a>,
          <a href="https://www.instagram.com/boygigil24/" target="_blank" rel="noopener noreferrer"> Instagram</a>, and
          <a href="https://github.com/johnjoshua24" target="_blank" rel="noopener noreferrer"> GitHub</a>. Clicking these links may allow those platforms to collect data in accordance with their own policies.
        </li>
      </ul>

      <h2>4. Cookies</h2>
      <p>
        This site does not intentionally use cookies. However, embedded links or external services (e.g. Facebook, Instagram) may set cookies
        or track user behavior through their own systems.
      </p>

      <h2>5. Data Security</h2>
      <p>
        Reasonable steps are taken to protect the personal information submitted through this site. However, no transmission over the internet is 100% secure.
      </p>

      <h2>6. Your Rights</h2>
      <p>
        You may request to access, update, or delete your personal information at any time by contacting me directly.
      </p>

      <h2>7. Changes to This Policy</h2>
      <p>
        This Privacy Policy may be updated periodically. All changes will be posted on this page with a revised effective date.
      </p>

      <h2>8. Contact</h2>
      <p>If you have any questions about this Privacy Policy, please contact:</p>
      <ul>
        <li>Email: <strong>canlas.johnjoshua24@gmail.com</strong></li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
