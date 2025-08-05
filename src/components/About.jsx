import React, { useRef } from "react";
import "../styles/About.css";
import aboutimg from "../assets/about-pic.JPG";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const About = () => {
  const containerAnimationReference = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerAnimationReference,
    offset: ["start end", "end end"],
  });

  const titlesmoothOpacity = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1]),
    { stiffness: 60, damping: 15 }
  );
  const titlesmoothY = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, 0]),
    { stiffness: 60, damping: 15 }
  );

  const smoothParagraphOpacity = useSpring(
    useTransform(scrollYProgress, [0.2, 0.8], [0, 1]),
    { stiffness: 60, damping: 15 }
  );
  const smoothParagraphY = useSpring(
    useTransform(scrollYProgress, [0.2, 0.8], [50, 0]),
    { stiffness: 60, damping: 15 }
  );

  const smoothImageOpacity = useSpring(
    useTransform(scrollYProgress, [0.2, 0.8], [0, 1]),
    { stiffness: 60, damping: 15 }
  );
  const smoothImageY = useSpring(
    useTransform(scrollYProgress, [0.2, 0.8], [50, 0]),
    { stiffness: 60, damping: 15 }
  );

  return (
    <div
      className="about-container flex flex-col items-center justify-center mb-50"
      id="about-section"
      ref={containerAnimationReference}
    >
      <div className="about-title flex flex-col items-center justify-center">
        <motion.h1 style={{ opacity: titlesmoothOpacity, y: titlesmoothY }}>
          ABOUT ME
        </motion.h1>
      </div>
      <div className="about-sections flex items-center justify-center mt-10">
        <div className="about-left-section flex items-center justify-center">
          <motion.img
            src={aboutimg}
            style={{ opacity: smoothImageOpacity, y: smoothImageY }}
          />
        </div>
        <div className="about-right-section flex items-center justify-start">
          <motion.p
            style={{ opacity: smoothParagraphOpacity, y: smoothParagraphY }}
          >
            I'm an aspiring front-end developer looking to get some practical
            experience and advance in this dynamic industry. Building
            responsive, aesthetically pleasing, and user-friendly web interfaces
            that produce significant digital experiences is my passion.
            Developing my technical and problem-solving abilities through
            practical projects and teamwork with experienced professionals is my
            primary objective.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
