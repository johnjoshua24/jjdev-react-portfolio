import React, { useEffect, useState } from "react";
import "../styles/Hero.css";
import fbicon from "../assets/facebook-color-svgrepo-com.svg";
import igicon from "../assets/instagram-1-svgrepo-com.svg";
import github from "../assets/github-color-svgrepo-com.svg";
import heroimage from "../assets/hero-pic.JPG";
import '../globals/global.css'

const heroTitles = [
  "Hi, I'm John Joshua Canlas",
  "A Front End Developer",
  "Welcome to My Portfolio",
];

export const Hero = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1500;

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayText === heroTitles[index]) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % heroTitles.length);
    } else {
      timeout = setTimeout(
        () => {
          const fullText = heroTitles[index];
          setDisplayText(
            isDeleting
              ? fullText.substring(0, displayText.length - 1)
              : fullText.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <div
      className="hero-container flex items-center justify-center mb-50"
      id="hero-section"
    >
      <div className="hero-sections flex items-center justify-center">
        <div className="left-section heroLeftFade-in flex flex-col items-center">
          <div className="hero-name mt-20 flex items-center justify-center w-full">
            <h1 className="text-4xl font-bold">
              {displayText}
              <span className="ml-1 animate-blink">|</span>

              <style>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
            </h1>
          </div>
          <div className="hero-paragraph flex items-center justify-center mt-6">
            <p>
              I'm an aspiring front-end developer from the Philippines looking
              to get some practical experience and advance in this dynamic
              industry.
            </p>
          </div>
          <div className="hero-socials flex items-center justify-center gap-6 mt-6">
            <a
              href="https://www.facebook.com/BoyGigil24"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="fbicon" src={fbicon} />
            </a>
            <a
              href="https://www.instagram.com/boygigil24/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="igicon" src={igicon} />
            </a>
            <a
              href="https://github.com/johnjoshua24"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img className="githubicon" src={github} />
            </a>
          </div>
          <div className="hero-button-container flex items-start justify-start mt-10">
            <a
              href="/johnjoshua-canlas-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <span>Hire Me</span>
              </button>
            </a>
          </div>
        </div>

        <div className="right-section heroRightFade-in flex items-center justify-center mt-20 w-full">
          <div className="hero-image flex items-center justify-center">
            <img src={heroimage} />
          </div>
        </div>
      </div>

      
    </div>
  );
};
