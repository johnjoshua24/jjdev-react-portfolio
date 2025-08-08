import React, { useEffect, useState, useRef, useCallback } from "react";
import logo from "../assets/jjdev-logo.png";
import "../styles/Header.css";
import { Link } from "react-scroll";
import DarkLightMode from "./DarkLightMode";
import '../globals/global.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const ticking = useRef(false);

  // Throttled scroll handler using requestAnimationFrame
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        const shouldBeScrolled = window.scrollY > 50;
        if (shouldBeScrolled !== scrolled) {
          setScrolled(shouldBeScrolled);
        }
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, [scrolled]);

  useEffect(() => {
    // Add passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const reloadPage = useCallback(() => {
    window.location.reload();
  }, []);

  const handleLogoClick = useCallback(() => {
    reloadPage();
    window.location.href = "/";
  }, [reloadPage]);

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <div
      className={`header-container headerFade-in flex items-center justify-between p-10 fixed top-0 w-full z-50 ${
        scrolled ? "scrolled" : ""
      }`}
      style={{
        // Add CSS properties for smoother rendering
        transform: 'translateZ(0)', // Force hardware acceleration
        backfaceVisibility: 'hidden',
        perspective: '1000px'
      }}
    >
      <div className="logo-container">
        <img
          className="w-24 h-full object-cover object-center cursor-pointer"
          src={logo}
          alt="JJ Dev Logo"
          onClick={handleLogoClick}
        />
      </div>

      <button
        className={`navbar-toggle ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <div className="nav-sections">
        <ul className={`flex items-center gap-12 ${menuOpen ? "active" : ""}`}>
          <li>
            <Link
              to="hero-section"
              smooth={true}
              duration={600}
              offset={-90}
              spy={true}
              activeClass="active"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about-section"
              smooth={true}
              duration={600}
              offset={-90}
              spy={true}
              activeClass="active"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="tools-section"
              smooth={true}
              duration={600}
              offset={-90}
              spy={true}
              activeClass="active"
              onClick={closeMenu}
            >
              Tech
            </Link>
          </li>
          <li>
            <Link
              to="project-section"
              smooth={true}
              duration={600}
              offset={-90}
              spy={true}
              activeClass="active"
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact-section"
              smooth={true}
              duration={600}
              offset={-90}
              spy={true}
              activeClass="active"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="button-container">
        <Link
          to="contact-section"
          smooth={true}
          duration={600}
          offset={-90}
          spy={true}
          activeClass="active"
          onClick={closeMenu}
        >
          <button>
            <span>Connect With Me</span>
          </button>
        </Link>
      </div>
      
      <div className="dark-light-toggle-container">
        <DarkLightMode/>
      </div>
    </div>
  );
};

export default Header;