import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import sampleData from "../assets/data/SampleData";

const ImageFollower = () => {
  const [imagePos, setImagePos] = useState({ x: 0, y: 0 });
  const [hoveredImage, setHoveredImage] = useState(null);
  const [hoveredImageSlug, setHoveredImageSlug] = useState(null);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const imageRef = useRef(null);

  gsap.config({ nullTargetWarn: false });

  useEffect(() => {
    gsap.to(imageRef.current, {
      duration: 0.4,
      left: imagePos.x - 150,
      top: imagePos.y - 112,
      ease: "Power1.out",
    });
  }, [imagePos]);

  return (
    isImageVisible && (
      <div
        className="hover-image"
        ref={imageRef}
        style={{
          left: imagePos.x - 150,
          top: imagePos.y - 112,
        }}
      >
        <img src={hoveredImageSlug} alt="" />
      </div>
    )
  );
};

const Projects = () => {
  const projects = {
    data: sampleData.map(project => ({
      id: project.id,
      attributes: {
        title: project.title,
        slug: project.slug,
        content: `${project.iframeLink}|${project.title}`,
        headerImage: project.mediaUrl
      }
    }))
  };

  return (
    <motion.div
      transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
      className="transition-image final"
      layoutId="main-image-1"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
        className="scroll"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}
        >
          Customer Benefits
        </motion.span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 1.8,
        }}
        className="projects"
        id="projects"
      >
        {projects.data
          .sort((a, b) => b.id - a.id)
          .map((project, index) => (
            <div key={project.id} className={`project-container ${index % 2 === 0 ? 'even' : 'odd'}`}>
              <a className="project-link">
                <div className="project-item">
                  <div className="project-content">
                    <div className="project-item__title">
                      <h3>{project.attributes.title}</h3>
                      <p>{project.attributes.slug}</p>
                    </div>

                    <div className="image-card">
                      <div className="image-card-bg"></div>
                      <div className="image-frame">
                        <img 
                          src={project.attributes.headerImage} 
                          alt={project.attributes.title}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <ImageFollower />
            </div>
          ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;