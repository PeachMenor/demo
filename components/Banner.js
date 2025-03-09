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
              maxWidth: "100%",
              height: "auto"
            }} 
          />
        </motion.div>

        {/* Waitlist content on the right */}
        <motion.div
          className="waitlist-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0.8,
            delay: 0.8,
          }}
        >
          <span className="waitlist-message">
            <span className="waitlist-heading">
              Join Pre-Sale WaitList
            </span>
            <br />
            <button 
              onClick={() => window.open('https://forms.gle/mj251ndoMVKHupYU6', '_blank', 'noopener,noreferrer')}
              className="waitlist-button"
              style={{ 
                backgroundColor: '#ba0d71', 
                border: 'none', 
                padding: '10px 15px', 
                color: 'white', 
                cursor: 'pointer', 
                fontWeight: 'bold', 
                borderRadius: '5px',
                marginTop: '0px' 
              }}
            >
              Join Peachy Club
            </button>
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;