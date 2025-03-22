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

  // console.log(projects);

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
        {/* <div className="project-section-titles">
          <span className="project-section-title">// What will our platform offer?</span>
        </div> */}

        {projects.data
          .sort((a, b) => b.id - a.id)
          .map((project) => (
            <div key={project.id}>
              <a
                // href={`${project.attributes.content.split("|")[0]}`}
                className="project-link"
                // target="_blank"
              >
                <div
                  className="project-item"
                  // data-id={project.attributes.coverVideo.data.id}
                  // data-slug={project.attributes.headerImage.data.attributes.url}
                >
                  <div className="project-item__title">
                    <h3>{project.attributes.title}</h3>
                    <p>{project.attributes.slug}</p>
                    {/* <p>{project.attributes.content.split("|")[1]}</p> */}
                  </div>

                  {/* <span className="span--desktop">
                    {project.attributes.slug}
                  </span> */}

                   {/* Image frame replacing the slug span */}
                  <div className="image-frame">
                    <img 
                      src={project.attributes.headerImage} 
                      alt={project.attributes.title}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(215, 26, 26, 0.92)"
                      }}
                    />
                  </div>

                  <span className="span--mobile">I &amp; O</span>
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
