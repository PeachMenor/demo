import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("vision");
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
          At <span>PeachMenor</span>, we redefine <span>premium fashion</span> by seamlessly blending technology with craftsmanship.
          Our mission is to empower individuals with <span>custom-fitted</span> apparel that not only fits flawlessly but also reflects their unique style.
          With our <span>Build Your Own Design</span> feature, we offer personalized creations for those who embrace life on their own terms.
          Rooted in innovation, sustainability, and an unwavering commitment to quality, we provide an exclusive experience where style meets individuality.
          Through <span>AI-based virtual try-ons</span> and a seamless design process, we make premium fashion effortless, accessible, and truly one of a kind.
        </p>
        <br></br>
        <p className="about-item__text">
        We envision a world where fashion transcends boundaries, where every individual experiences the luxury of perfectly tailored clothing that celebrates their unique identity. PeachMenor aspires to pioneer the intersection of cutting-edge technology and timeless craftsmanship, creating a new paradigm in premium fashion where personalization is paramount.
        Our vision is to cultivate a global community that values individuality, quality, and conscious consumption—transforming how people express themselves through what they wear.
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
          <span className="co-founder-button">Co-Founder</span>
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
  
      {/* The other team members follow the same pattern - I've kept them as is since the CSS will apply to all */}
      <div className="about-item">
        <div className="about-item__image-container">
          <img src='/images/cf2.png' alt="prax" className="about-item__image" />
        </div>
        <h6 className="about-item__title">Prakash Nidhi Verma</h6>
        <div className="about-item__subtitle">
          <span className="co-founder-button">Co-Founder</span>
          <a href="https://linkedin.com/in/pnidhi26" target="_blank" rel="noopener noreferrer" className="about-item__linkedin">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="about-item__icon">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
        <p className="about-item__text">
          Prakash is the technological mastermind and product strategist behind PeachMenor.
        </p>
  
        <div className="about-item__details">
          <p className="about-item__heading"><strong>Education:</strong></p>
          <ul className="about-item__list">
            <li>MS, Computer Science @California State University</li>
            <li>B.Tech, Computer Science @IIIT Jabalpur</li>
          </ul>
  
          <p className="about-item__heading"><strong>Background:</strong></p>
          <ul className="about-item__list">
            <li>Product Analyst @Amazon (AWS)</li>
            <li>Product Manager @Replicon</li>
            <li>Software Engineer @UpGrad</li>
          </ul>
        </div>
      </div>
  
      <div className="about-item">
        <div className="about-item__image-container">
          <img src='/images/cf3.png' alt="laya" className="about-item__image" />
        </div>
        <h6 className="about-item__title">Sri Laya Pentapalli</h6>
        <div className="about-item__subtitle">
          <span className="co-founder-button">Co-Founder</span>
          <a href="https://linkedin.com/in/srilayap" target="_blank" rel="noopener noreferrer" className="about-item__linkedin">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="about-item__icon">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
        <p className="about-item__text">
          Laya brings years of Consulting, Management and Sales expertise from supply chain industry.
        </p>
  
        <div className="about-item__details">
          <p className="about-item__heading"><strong>Education:</strong></p>
          <ul className="about-item__list">
            <li>MBA, General @UC Los Angeles</li>
            <li>MEM, Sales & Marketing @Audencia France</li>
            <li>B.Tech, EEE @SRM Chennai</li>
          </ul>
  
          <p className="about-item__heading"><strong>Background:</strong></p>
          <ul className="about-item__list">
            <li>Growth Product Manager @Milkyway X</li>
            <li>Senior Lead Consultant @ADP</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const ContactUsContent = () => (
    <div className="about-item">
      <p className="about-item__text">
        Have questions or feedback? We'd love to hear from you! Email us at <span>contact_us@peachmenor.com</span> or fill out our contact form <a href="https://forms.gle/qfFWRorTftNcMGHLA" target="_blank">Here</a>. We typically respond within 24 hours.
      </p>
    </div>
  );

  const FaqContent = () => {
    const faqs = [
      {
        question: "How does PeachMenor's custom sizing work?",
        answer: "PeachMenor uses advanced AI technology to create perfectly fitted garments. Simply provide your measurements through our easy-to-follow guide, or upload photos for our AI to analyze. Our proprietary algorithm ensures each piece is tailored specifically to your unique body shape."
      },
      {
        question: "What makes PeachMenor different from other custom clothing brands?",
        answer: "PeachMenor stands apart through our combination of cutting-edge technology, premium sustainable materials, and unparalleled customization options. Our 'Build Your Own Design' feature lets you create truly one-of-a-kind pieces while our AI-powered virtual try-on gives you confidence in your selections before purchasing."
      },
      {
        question: "How long does it take to receive my custom order?",
        answer: "Most custom orders are completed and shipped within 10-14 business days. This timeframe allows our expert craftspeople to meticulously create your personalized garment. For special rush orders, please contact our customer service team directly."
      },
      {
        question: "What is your return policy for custom items?",
        answer: "While custom items are created specifically for you, we stand behind our fit guarantee. If your garment doesn't fit perfectly, we'll adjust it free of charge. For other issues, we offer store credit or exchanges within 30 days. Please note that highly personalized designs may be subject to our specialized return policy."
      }
    ];

    return (
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div 
              className={`faq-question ${openFaq === index ? 'active' : ''}`} 
              onClick={() => toggleFaq(index)}
            >
              <span>{faq.question}</span>
              <div className="faq-icon">
                {openFaq === index ? 
                  <span className="minus"></span> : 
                  <span className="plus"></span>
                }
              </div>
            </div>
            <AnimatePresence>
              {openFaq === index && (
                <motion.div 
                  className="faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    );
  };

  // Reordered menu items - Vision first, then Team
  const menuItems = [
    {
      id: "vision",
      title: "Vision & Mission",
      content: <VisionContent />    
    },
    {
      id: "team",
      title: "Team",
      content: <TeamContent />
    },
    {
      id: "contact",
      title: "Contact Us",
      content: <ContactUsContent />     
    },
    {
      id: "faq",
      title: "FAQ",
      content: <FaqContent />     
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