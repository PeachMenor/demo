import { motion } from "framer-motion";
// Import the image at the top of your file
const imagePath = "/images/comingsoon.avif";

const Banner = () => {
  return (
    <motion.div className="banner">
      <div className="banner-content">
        {/* Image on the left */}
        <motion.div
          className="banner-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.8,
            delay: 0.5,
          }}
          >
          <img 
            src={imagePath}
            alt="Banner promotional image" 
            style={{ 
              borderRadius: "20px",
              maxWidth: "90%", // Increased from 100%
              width: "auto",
              height: "auto",
              margin: "0 auto", // Center the image
              display: "block" // Needed for margin auto to work
            }} 
          />
        </motion.div>

        {/* Waitlist content on the right */}
        {/* <motion.div
          className="waitlist-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0.8,
            delay: 0.8,
          }}
        >
        </motion.div> */}
      </div>
    </motion.div>
  );
};

export default Banner;