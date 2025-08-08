import React from "react";
import "../styles/Footer.css";
import fbicon from "../assets/facebook-color-svgrepo-com.svg";
import igicon from "../assets/instagram-1-svgrepo-com.svg";
import github from "../assets/github-color-svgrepo-com.svg";
import footerlogo from "../assets/jjdev-logo.png";
import { Link } from "react-router-dom";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const reloadPage = () => window.location.reload();

  return (
    <div className="footer-container flex flex-col items-center justify-center mt-50 gap-4">
      <hr />
      <div className="footer-socials flex items-center justify-center gap-4">
        <a href="https://www.facebook.com/BoyGigil24" target="_blank">
          <img src={fbicon} alt="Facebook"/>
        </a>
        <a href="https://www.instagram.com/boygigil24/" target="_blank">
          <img src={igicon} alt="Instagram"/>
        </a>
        <a href="https://github.com/johnjoshua24" target="_blank">
          <img src={github} alt="GitHub"/>
        </a>
      </div>

      <div className="footer-logo flex flex-col items-center justify-center">
        <img
          src={footerlogo}
          alt="Footer Logo"
          onClick={() => {
            reloadPage();
            window.location.href = "/";
          }}
        />
      </div>

      <div className="footer-copyright flex flex-col items-center justify-center">
        <p>Copyright © {currentYear} JJDEV</p>
      </div>

      <div className="footer-terms-policy flex gap-6">
        <Link to="/terms" className="mb-2">
          Terms of Service
        </Link>
        <Link to="/privacy" className="mb-2">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
