import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '3rem' }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you’re looking for doesn’t exist.</p>
      <a
        href="https://jjdev-portfolio.vercel.app/"
        style={{ color: 'blue', textDecoration: 'underline' }}
      >
        Go to Portfolio
      </a>
    </div>
  );
};

export default NotFound;
