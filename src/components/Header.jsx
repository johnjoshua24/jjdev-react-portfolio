import React, { useEffect, useState, useRef, useCallback } from "react";
import logo from "../assets/jjdev-logo.png";
import "../styles/Header.css";
import { Link } from "react-scroll";
import DarkLightMode from "./DarkLightMode";
import '../globals/global.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Ultra-optimized scroll handler with debouncing
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Only process if scroll position actually changed significantly
    if (Math.abs(currentScrollY - lastScrollY.current) < 5) {
      return;
    }
    
    lastScrollY.current = currentScrollY;
    
    if (!ticking.current) {
      // Use setTimeout with 0ms for immediate execution in next tick
      setTimeout(() => {
        const shouldBeScrolled = currentScrollY > 50;
        setScrolled(prev => {
          // Only update state if it actually changed
          return prev !== shouldBeScrolled ? shouldBeScrolled : prev;
        });
        ticking.current = false;
      }, 0);
      ticking.current = true;
    }
  }, []);

  useEffect(() => {
    // Set initial state immediately
    setScrolled(window.scrollY > 50);
    
    // Use passive listener with optimized options
    const options = {
      passive: true,
      capture: false
    };
    
    window.addEventListener("scroll", handleScroll, options);

    return () => {
      window.removeEventListener("scroll", handleScroll, options);
    };
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
    <header
      className={`header-container headerFade-in flex items-center justify-between p-10 fixed top-0 w-full z-50 ${
        scrolled ? "scrolled" : ""
      }`}
      style={{
        // Aggressive hardware acceleration
        transform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden',
        perspective: '1000px',
        // Force compositing layer
        willChange: scrolled ? 'auto' : 'background-image'
      }}
    >
      <div className="logo-container">
        <img
          className="w-24 h-full object-cover object-center cursor-pointer"
          src={logo}
          alt="JJ Dev Logo"
          onClick={handleLogoClick}
          style={{
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
        />
      </div>

      <button
        className={`navbar-toggle ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        style={{
          transform: 'translateZ(0)',
          willChange: 'transform'
        }}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className="nav-sections">
        <ul 
          className={`flex items-center gap-12 ${menuOpen ? "active" : ""}`}
          style={{
            transform: 'translateZ(0)',
            willChange: menuOpen ? 'transform' : 'auto'
          }}
        >
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
      </nav>

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
          <button style={{ transform: 'translateZ(0)' }}>
            <span>Connect With Me</span>
          </button>
        </Link>
      </div>
      
      <div className="dark-light-toggle-container">
        <DarkLightMode/>
      </div>
    </header>
  );
};

export default Header;