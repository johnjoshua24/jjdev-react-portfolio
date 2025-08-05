import React, { useRef } from "react";
import "../styles/Tools.css";
import html3dlogo from "../assets/3d_html.png";
import css3dlogo from "../assets/3d_css.png";
import js3dlogo from "../assets/3d_javascript.png";
import react3dlogo from "../assets/3d_react.png";
import wordpress3dlogo from "../assets/3d_wordpress.png";
import elementor3dlogo from "../assets/3d_elementor.png";
import figma3dlogo from "../assets/3d_figma.png";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Tools = () => {
  const containerAnimationReference = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerAnimationReference,
    offset: ["start end", "end end"],
  });

  const toolsTitleSpringAnimation = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1]),
    { stiffness: 60, damping: 15 }
  );
  const toolsTitleSlideSpringAnimation = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, 0]),
    { stiffness: 60, damping: 15 }
  );
  const toolsParagraphSpringAnimation = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1]),
    { stiffness: 60, damping: 15 }
  );
  const toolsParagraphSlideSpringXAnimation = useSpring(
    useTransform(scrollYProgress, [0, 1], [-50, 0]),
    { stiffness: 60, damping: 15 }
  );

 const htmlScale = useSpring(
  useTransform(scrollYProgress, [0.2, 1], [0, 1]),
  { stiffness: 60, damping: 15 }
);
const htmlOpacity = useSpring(
  useTransform(scrollYProgress, [0.2, 1], [0, 1]),
  { stiffness: 60, damping: 15 }
);

const cssScale = useSpring(
  useTransform(scrollYProgress, [0.35, 1], [0, 1]),
  { stiffness: 60, damping: 15 }
);
const cssOpacity = useSpring(
  useTransform(scrollYProgress, [0.35, 1], [0, 1]),
  { stiffness: 60, damping: 15 }
);

const jsScale = useSpring(
  useTransform(scrollYProgress, [0.5, 1], [0, 1]),
  { stiffness: 60, damping: 15 }
);
const jsOpacity = useSpring(
  useTransform(scrollYProgress, [0.5, 1], [0, 1]),
  { stiffness: 60, damping: 15 }
);

const reactScale = useSpring(
  useTransform(scrollYProgress, [0.65, 1], [0, 1]),
  { stiffness: 60, damping: 15 }
);
const reactOpacity = useSpring(
  useTransform(scrollYProgress, [0.65, 1], [0, 1]),
  { stiffness: 60, damping: 15 }
);

const wordpressScale = useSpring(
  useTransform(scrollYProgress, [0.8, 1], [0, 1]),
  { stiffness: 60, damping: 15 }
);
const wordpressOpacity = useSpring(
  useTransform(scrollYProgress, [0.8, 1], [0, 1]),
  { stiffness: 60, damping: 15 }
);

const elementorScale = useSpring(
  useTransform(scrollYProgress, [0.9, 1], [0, 1]),
  { stiffness: 60, damping: 15 }
);
const elementorOpacity = useSpring(
  useTransform(scrollYProgress, [0.9, 1], [0, 1]),
  { stiffness: 60, damping: 15 }
);

const figmaScale = useSpring(
  useTransform(scrollYProgress, [0.95, 1], [0, 1]),
  { stiffness: 60, damping: 15 }
);
const figmaOpacity = useSpring(
  useTransform(scrollYProgress, [0.95, 1], [0, 1]),
  { stiffness: 60, damping: 15 }
);


  return (
    <div
      className="tools-container flex flex-col items-center justify-center mb-50"
      id="tools-section"
      ref={containerAnimationReference}
    >
      <div className="tools-title flex items-center justify-center">
        <motion.h1
          style={{
            opacity: toolsTitleSpringAnimation,
            y: toolsTitleSlideSpringAnimation,
          }}
        >
          TECHNOLOGIES
        </motion.h1>
      </div>

      <div className="tools-sections flex items-center justify-center mt-10">
        <div className="tools-left-section flex items-center justify-center w-full">
          <motion.p
            style={{
              opacity: toolsParagraphSpringAnimation,
              x: toolsParagraphSlideSpringXAnimation,
            }}
          >
            Ever since I learned even the basics of web development, I became
            even more passionate about the field. This interest led me to dive
            deeper through self-study, exploring the technologies and skill sets
            necessary to build websites. Since then, I've gained knowledge with
            the following technologies.
          </motion.p>
        </div>

        <div className="tools-right-section">
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content"
            target="_blank"
          >
            <motion.div className="image-inner" style={{ scale: htmlScale, opacity:  htmlOpacity}}>
              <img src={html3dlogo} />
            </motion.div>
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
          >
            <motion.div className="image-inner" style={{ scale: cssScale, opacity:  cssOpacity}}>
              <img src={css3dlogo} />
            </motion.div>
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            <motion.div className="image-inner" style={{ scale: jsScale, opacity:  jsOpacity}}>
              <img src={js3dlogo} />
            </motion.div>
          </a>
          <a href="https://react.dev/" target="_blank">
            <motion.div className="image-inner" style={{ scale: reactScale, opacity:  reactOpacity}}>
              <img src={react3dlogo} />
            </motion.div>
          </a>
          <a
            href="https://kinsta.com/knowledgebase/what-is-wordpress/"
            target="_blank"
          >
            <motion.div
              className="image-inner"
              style={{ scale: wordpressScale, opacity:  wordpressOpacity}}
            >
              <img src={wordpress3dlogo} />
            </motion.div>
          </a>
          <a
            href="https://www.wpzoom.com/blog/what-is-elementor/"
            target="_blank"
          >
            <motion.div
              className="image-inner"
              style={{ scale: elementorScale, opacity:  elementorOpacity}}
            >
              <img src={elementor3dlogo} />
            </motion.div>
          </a>
          <a
            href="https://www.nobledesktop.com/learn/figma/what-is-figma"
            target="_blank"
          >
            <motion.div className="image-inner" style={{ scale: figmaScale, opacity:  figmaOpacity}}>
              <img src={figma3dlogo} />
            </motion.div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tools;
