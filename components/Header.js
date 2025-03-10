import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 1.2,
        }}
        className="header"
      >
        <div className="header-inner">
          <div className="logo">
            <span className="highlight">Peach</span>Menor
          </div>
          {/* <nav className="nav">
            <li>
              <a href="#projects">Offerings</a>
            </li>
          </nav> */}
          <div className="contact">
            {/* <a href="#footer">Join Waitlist</a> */}
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
          </div>
          <div className="hamburger-menu">
            <span></span>
            <span></span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
