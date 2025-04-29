import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  const [openFaq, setOpenFaq] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const VisionContent = () => (
    <div className="about">
      <div className="about-item">
        <p className="about-item__text">
          <span>Mission</span> 
        </p>
        <p className="about-item__text">
          At PeachMenor AI, our mission is to empower individuals to embrace their true style with confidence through hyper-personalized, AI-driven fashion experiences. We aim to simplify wardrobe organization, enhance smarter outfit decisions, and make personal styling accessible to everyone. By bridging technology and individuality, PeachMenor AI helps people curate wardrobes that reflect who they are — making fashion more effortless, expressive, and tailored to each unique journey.
          </p>
      </div>

      <br></br>
      <br></br>

      <div className="about-item">
        <p className="about-item__text">
          <span>Vision</span> 
        </p>
        <p className="about-item__text">
Our vision at PeachMenor AI is to redefine the future of fashion by creating intelligent, sustainable wardrobes powered by technology. We envision a world where every closet is personalized, responsive, and aligned with the evolving lifestyles of individuals. By blending innovation, emotional expression, and conscious choices, PeachMenor AI strives to build a fashion ecosystem where personalization, sustainability, and smart living are at the heart of every style experience.
        </p>
      </div>


    </div>
  );

  // Team content is now a component rather than just text
  const TeamContent = () => (
    <div className="about-container">
      <div className="about-item">
        <div className="about-item__image-container">
          <img src='/images/cf1.png' alt="shaurya" className="about-item__image" />
        </div>
        <h6 className="about-item__title">Shaurya Seth</h6>
        <div className="about-item__subtitle">
          <span className="co-founder-button">Co-Founder, CEO</span>
          <a href="https://linkedin.com/in/shauryaseth1412" target="_blank" rel="noopener noreferrer" className="about-item__linkedin">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="about-item__icon">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
        <p className="about-item__text">
          Shaurya brings experience & strategic insight to global operations in supply chain management and manufacturing.
        </p>
  
        <div className="about-item__details">
          <p className="about-item__heading"><strong>Education:</strong></p>
          <ul className="about-item__list">
            <li>MS, Materials Engineering @UC Los Angeles</li>
            <li>B.Tech, Metallurgical Engineering @NIT Karnataka</li>
          </ul>
  
          <p className="about-item__heading"><strong>Background:</strong></p>
          <ul className="about-item__list">
            <li>PI Engineer @Analog Devices</li>
            <li>Engineer @Seagate Technology</li>
          </ul>
        </div>
      </div>

  
    </div>
  );

  const ContactUsContent = () => (
    <div id="contact-section" className="about-item contact-section">
      <div className="contact-text">
        <ul className="contact-list">
          <li>
            <span>San Francisco, California, United States</span>  
          </li>
          <li>
            <span>contact_us@peachmenor.com</span>  
          </li>
          <li>
            <span>+1-3102545745</span>
          </li>
          <li>
            <a href="https://forms.gle/qfFWRorTftNcMGHLA" target="_blank" className="contact-button">Contact Us</a>
          </li>
        </ul>
  
        <p className="contact-description">
          Have questions or feedback? We'd love to hear from you, We typically respond within 24-48 hours!
        </p>
      </div>    
    </div>
  );

  const CareerContent = () => (
    <div className="about-item careers-section">
      <p className="about-item__text careers-text">
        Our team is young, passionate, curious, motivated and dynamic, each individuals with their own personality. 
        We're enthusiastic about everything we do, and are creative, unstoppable, clever, proactive and never afraid to fail.
      </p>
      <div className="careers-cta">
        <span className="careers-question">WOULD YOU LIKE TO BE PART OF OUR TECH TEAM?
        </span>
        <span className="careers-question">
        <a 
          href="https://hire-me.notion.site/Careers-PeachMenor-1ab2e8ee212180968c76e4a1a9a875be" 
          target="_blank" 
          className="careers-button"
        >
          Open Positions
        </a>
        </span>
      </div>
    </div>
  );

  // const FaqContent = () => {
  //   const faqs = [
  //     {
  //       question: "How does PeachMenor's custom sizing work?",
  //       answer: "PeachMenor uses advanced AI technology to create perfectly fitted garments. Simply provide your measurements through our easy-to-follow guide, or upload photos for our AI to analyze. Our proprietary algorithm ensures each piece is tailored specifically to your unique body shape."
  //     },
  //     {
  //       question: "What makes PeachMenor different?",
  //       answer: "Unlike traditional fashion brands, PeachMenor offers true personalization through AI-driven technology. We don't just sell clothes; we create bespoke fashion experiences. Our platform combines precise body measurement AI, virtual try-on technology, and intelligent style curation to deliver custom designs that perfectly match individual body types, personal style preferences, and sustainability standards. Every garment is a unique expression of you."
  //     },
  //     {
  //       question: "How long does it take to receive my custom order?",
  //       answer: "With options for standard delivery and express delivery, you can track your order to be delivered within a reasonable amount of time for the best in house quality you deserve."
  //     },
  //     {
  //       question: "What is our return policy for custom items?",
  //       answer: "While custom items are highly specific to your needs, we offer an option for returns on them within 7 days of receiving the order. We stand by the guarantee of what you see is what you receive."
  //     }
  //   ];

  //   return (
  //     <div className="faq-container">
  //       {faqs.map((faq, index) => (
  //         <div key={index} className="faq-item">
  //           <div 
  //             className={`faq-question ${openFaq === index ? 'active' : ''}`} 
  //             onClick={() => toggleFaq(index)}
  //           >
  //             <span>{faq.question}</span>
  //             <div className="faq-icon">
  //               {openFaq === index ? 
  //                 <span className="minus"></span> : 
  //                 <span className="plus"></span>
  //               }
  //             </div>
  //           </div>
  //           <AnimatePresence>
  //             {openFaq === index && (
  //               <motion.div 
  //                 className="faq-answer"
  //                 initial={{ height: 0, opacity: 0 }}
  //                 animate={{ height: "auto", opacity: 1 }}
  //                 exit={{ height: 0, opacity: 0 }}
  //                 transition={{ duration: 0.3 }}
  //               >
  //                 <p>{faq.answer}</p>
  //               </motion.div>
  //             )}
  //           </AnimatePresence>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // };

  // Reordered menu items - Vision first, then Team
  const menuItems = [
    {
      id: "about",
      title: "ABOUT",
      content: <VisionContent />    
    },
    {
      id: "team",
      title: "TEAM",
      content: <TeamContent />
    },
    {
      id: "contact",
      title: "CONTACT",
      content: <ContactUsContent />     
    },
    {
      id: "career",
      title: "CAREERS",
      content: <CareerContent />     
    },
    // {
    //   id: "faq",
    //   title: "FAQ",
    //   content: <FaqContent />     
    // }
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
                    {typeof menuItems.find(item => item.id === activeTab)?.content === 'string' ? (
                      <>
                        <h2>{menuItems.find(item => item.id === activeTab)?.title}</h2>
                        <p>{menuItems.find(item => item.id === activeTab)?.content}</p>
                      </>
                    ) : (
                      <>
                        <h2>{menuItems.find(item => item.id === activeTab)?.title}</h2>
                        {menuItems.find(item => item.id === activeTab)?.content}
                      </>
                    )}
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
