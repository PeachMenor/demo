import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("team");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    {
      id: "team",
      title: "Team",
      content: "Our team consists of passionate professionals dedicated to providing the best experience through PeachMenor. We bring together experts from various fields to create a product that truly makes a difference."
    },
    {
      id: "vision",
      title: "Vision",
      content: "At PeachMenor, we envision a world where technology enhances everyday experiences. Our mission is to create intuitive solutions that bring joy and efficiency to our users' lives, one peachy experience at a time."
    },
    {
      id: "contact",
      title: "Contact Us",
      content: "Have questions or feedback? We'd love to hear from you! Email us at contact@peachmenor.com or fill out our contact form on our website. We typically respond within 24 hours."
    }
  ];

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
          <div className="hamburger-menu" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="logo">
            <span className="highlight">Peach</span>Menor
          </div>
          <div className="contact">
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
        </div>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="menu-container"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="menu-close" onClick={toggleMenu}>
                <span></span>
                <span></span>
              </div>
              <div className="menu-content">
                <div className="menu-sidebar">
                  {menuItems.map((item) => (
                    <div 
                      key={item.id}
                      className={`menu-item ${activeTab === item.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(item.id)}
                    >
                      {item.title}
                    </div>
                  ))}
                </div>
                <div className="menu-details">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="tab-content"
                  >
                    <h2>{menuItems.find(item => item.id === activeTab)?.title}</h2>
                    <p>{menuItems.find(item => item.id === activeTab)?.content}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;