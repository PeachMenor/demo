import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="about">
      <div className="about-item">
        <span className="about__title">Our Mission and Vision</span>
      </div>
      <br />
      <br />

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


      <div className="about-container">

        <div className="about-item">
          <div className="about-item__image-container">
            <img src='/images/cf1.png' alt="shaurya" className="about-item__image" />
          </div>
          <h6 className="about-item__title">Shaurya Seth</h6>
          <div className="about-item__subtitle">
            <span className="orange-background">Co-Founder</span>
            <a href="https://linkedin.com/in/shauryaseth1412" target="_blank" rel="noopener noreferrer" className="about-item__linkedin">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="about-item__icon">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
          <p className="about-item__text">
           Shaurya brings strategic insight to global operations in supply chain management experience from the manufacturing sector.
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

        <div className="about-item">
          <div className="about-item__image-container">
            <img src='/images/cf2.png' alt="prax" className="about-item__image" />
          </div>
          <h6 className="about-item__title">Prakash Nidhi Verma</h6>
          <div className="about-item__subtitle">
            <span className="orange-background">Co-Founder</span>
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
            <span className="orange-background">Co-Founder</span>
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


    </div>
  );
};

export default About;
