import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="about">
      <div className="about-item">
        <span className="about__title">Our Team & Vision</span>
      </div>
      <br />
      <br />

      <div className="about-item">
        <p className="about-item__text">
          At <span>Luxe Couture</span>, we redefine <span>luxury fashion</span> by seamlessly blending technology with craftsmanship.
          Our mission is to empower individuals with <span>custom-fitted</span> apparel that not only fits flawlessly but also reflects their unique style.
          With our <span>“Build Your Own Design”</span> feature, we offer personalized creations for those who embrace life on their own terms.
          Rooted in innovation, sustainability, and an unwavering commitment to quality, we provide an exclusive experience where style meets individuality.
          Through <span>AI-based virtual try-ons</span> and a seamless design process, we make luxury fashion effortless, accessible, and truly one of a kind.
        </p>
      </div>

      <div className="about-container">
        <div className="about-item">
          <div className="about-item__image-container">
            <img src='/images/prax.png' alt="prax" className="about-item__image" />
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
            Shaurya excels in Business Operation and Execution expertise.
          </p>

          <div className="about-item__details">
            <p className="about-item__heading"><strong>Education:</strong></p>
            <ul className="about-item__list">
              <li>MS, Engineering @UCLA</li>
              <li>B.Tech, Engineering @NIT K</li>
            </ul>

            <p className="about-item__heading"><strong>Background:</strong></p>
            <ul className="about-item__list">
              <li>Engineer @XYZ</li>
              <li>Engineer @XYZ</li>
            </ul>
          </div>
        </div>

        <div className="about-item">
          <div className="about-item__image-container">
            <img src='/images/prax.png' alt="prax" className="about-item__image" />
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
            Prakash is the technological mastermind and product strategy behind Luxe.
          </p>

          <div className="about-item__details">
            <p className="about-item__heading"><strong>Education:</strong></p>
            <ul className="about-item__list">
              <li>MS, Computer Science @CSU Chico</li>
              <li>B.Tech, Computer Science @IIIT Jabalpur</li>
            </ul>

            <p className="about-item__heading"><strong>Background:</strong></p>
            <ul className="about-item__list">
              <li>Product Analyst @AWS</li>
              <li>Product Manager @Replicon</li>
              <li>Software Engineer @UpGrad</li>
            </ul>
          </div>
        </div>

        <div className="about-item">
          <div className="about-item__image-container">
            <img src='/images/prax.png' alt="prax" className="about-item__image" />
          </div>
          <h6 className="about-item__title">Laya Pentapalli</h6>
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
            Laya brings years of Consulting, Product Management and Sales expertise from industry.
          </p>

          <div className="about-item__details">
            <p className="about-item__heading"><strong>Education:</strong></p>
            <ul className="about-item__list">
              <li>MBA, Sales and Marketing @UCLA</li>
              <li>B.Tech, Engineering @SRM University</li>
            </ul>

            <p className="about-item__heading"><strong>Background:</strong></p>
            <ul className="about-item__list">
              <li>Consultant @XYZ</li>
              <li>Product @XYZ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
