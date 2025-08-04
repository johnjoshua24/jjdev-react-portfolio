import React, { useEffect, useState } from "react";
import logo from "../assets/jjdev-logo.png";
import "../styles/Header.css";
import { Link } from "react-scroll";
import DarkLightMode from "./DarkLightMode";
import '../globals/global.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const reloadPage = () => window.location.reload();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={`header-container headerFade-in flex items-center justify-between p-10 fixed top-0 w-full z-50 ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="logo-container">
        <img
          className="w-24 h-full object-cover object-center cursor-pointer"
          src={logo}
          alt=""
          onClick={() => {
            reloadPage();
            window.location.href = "/";
          }}
        />
      </div>

      <button
        className={`navbar-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
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
              onClick={() => setMenuOpen(false)}
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
              onClick={() => setMenuOpen(false)}
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
              onClick={() => setMenuOpen(false)}
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
              onClick={() => setMenuOpen(false)}
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
              onClick={() => setMenuOpen(false)}
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
          onClick={() => setMenuOpen(false)}
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
