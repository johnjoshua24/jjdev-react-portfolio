import React, { useRef } from "react";
import "../styles/Projects.css";
import coming1 from "../assets/coming-soon1.jpg";
import coming2 from "../assets/coming-soon2.jpg";
import coming3 from "../assets/coming-soon3.jpg";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import '../globals/global.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const projectsData = [
  {
    projectImage: coming1,
    projectTitle: "Coming Soon 1",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ducimus quae, rem explicabo harum quo dolor aspernatur hic animi corrupti iure modi, tempore eum, consequatur labore amet maxime! Laboriosam, accusantium!",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    projectImage: coming2,
    projectTitle: "Coming Soon 2",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ducimus quae, rem explicabo harum quo dolor aspernatur hic animi corrupti iure modi, tempore eum, consequatur labore amet maxime! Laboriosam, accusantium!",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    projectImage: coming3,
    projectTitle: "Coming Soon 3",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ducimus quae, rem explicabo harum quo dolor aspernatur hic animi corrupti iure modi, tempore eum, consequatur labore amet maxime! Laboriosam, accusantium!",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

const ProjectCard = ({ project }) => {

  const projectTemplateContainerRef = useRef(null);
const {scrollYProgress} = useScroll({
target: projectTemplateContainerRef,
offset: ["start end", "end end"],
});

const projectsImageOpacityAnimation = useSpring(useTransform(scrollYProgress, [0,1],[0,1]),{stiffness: 60, damping: 15});
const projectsImageSlideAnimation = useSpring(useTransform(scrollYProgress, [0,1],[-50,0]),{stiffness: 60, damping: 15});

const projectsTitleOpacityAnimation = useSpring(useTransform(scrollYProgress, [0.2,1],[0,1]),{stiffness: 60, damping: 15});
const projectsTitleSlideAnimation = useSpring(useTransform(scrollYProgress, [0.2,1],[-50,0]),{stiffness: 60, damping: 15});

const projectsDescriptionOpacityAnimation = useSpring(useTransform(scrollYProgress, [0.6,1],[0,1]),{stiffness: 60, damping: 15});
const projectsDescriptionSlideAnimation = useSpring(useTransform(scrollYProgress, [0.6,1],[-50,0]),{stiffness: 60, damping: 15});

const projectsTechnologiesOpacityAnimation = useSpring(useTransform(scrollYProgress, [0.8,1],[0,1]),{stiffness: 60, damping: 15});
const projectsTechnologiesSlideAnimation = useSpring(useTransform(scrollYProgress, [0.8,1],[-50,0]),{stiffness: 60, damping: 15});

  return (
    <div className="projects-template-container flex items-center justify-center mt-10" ref={projectTemplateContainerRef}>
      <div className="template-sections flex items-center justify-center gap-5">
        <motion.div className="project-image-sections flex items-center gap-5" style={{opacity: projectsImageOpacityAnimation, x: projectsImageSlideAnimation}}>
           <LazyLoadImage
    src={project.projectImage}
    alt={project.projectTitle}
    effect="blur"     
    wrapperClassName="" 
  />
        </motion.div>

        <div className="project-texts-descriptions flex flex-col justify-center gap-6 w-full max-w-[500px]">
          <motion.div className="project-title flex items-center" style={{opacity: projectsTitleOpacityAnimation, x: projectsTitleSlideAnimation}}>
            {project.projectTitle}
          </motion.div>
          <motion.div className="project-description flex items-center" style={{opacity: projectsDescriptionOpacityAnimation, x: projectsDescriptionSlideAnimation}}>
            {project.projectDescription}
          </motion.div>
          <motion.div className="project-technologies flex flex-wrap items-center gap-5" style={{opacity: projectsTechnologiesOpacityAnimation, x: projectsTechnologiesSlideAnimation}}>
            {project.technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {


const projectContainerRef = useRef(null);
const {scrollYProgress} = useScroll({
target: projectContainerRef,
offset: ["start end", "end end"],
});

const projectTitleOpacityAnimation = useSpring(useTransform(scrollYProgress, [0,1],[0,1]),{stiffness: 60, damping: 15});
const projectTitleSlideAnimation = useSpring(useTransform(scrollYProgress, [0,1],[50,0]),{stiffness: 60, damping: 15});






  return (
    <div
      className="projects-container flex flex-col items-center justify-center mb-50"
      id="project-section" ref={projectContainerRef}
    >
      <div className="projects-title flex flex-col items-center justify-center">
        <motion.h1 style={{opacity: projectTitleOpacityAnimation, y: projectTitleSlideAnimation}}>MY WORKS</motion.h1>
      </div>

      <motion.div
        id="projects"
        className="projects-horizontal-container flex flex-col items-center justify-center"
      >
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
