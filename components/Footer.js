import { useState } from "react";

const Footer = () => {
  const [active, setActive] = useState(false);

  return (
    <footer id="footer">
      <div className="footer-container">
        {/* Three evenly spaced columns */}
        <div className="footer-columns">
          {/* Column 1: Contact Us */}
          <div className="footer-column">
            <h1>PeachMenor</h1>
            <br></br>
            <ul>
            <li>
                <span>San Francisco, California</span>  
              </li>
              <li>
                <span>contact_us@peachmenor.com</span>  
              </li>
              <li>
                <span>Phone: +1-3102545745</span>
              </li>
              <li>
                <a href="https://forms.gle/qfFWRorTftNcMGHLA" target="_blank">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Social Links */}
          <div className="footer-column">
            <h1>Get in Touch</h1>
            <br></br>
            <div className="email-container">
              <a href="https://hire-me.notion.site/Careers-PeachMenor-1ab2e8ee212180968c76e4a1a9a875be" target="_blank" rel="noopener noreferrer" className="hiring-link">
                We are Hiring!
              </a>
            </div>
            <br></br>
            <ul>
              <li>
                <a href="https://www.instagram.com/peachmenor" target="_blank">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/peachmenor/" target="_blank">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="footer-column">
            <h1>Company</h1>
            <br></br>
            <ul>
              <li>
                <span>About Us</span>
              </li>
              <li>
                <span>Our Mission</span>
              </li>
              <li>
                <span>Our Vision</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom - Now with better spacing */}
        <div className="footer-bottom">
          <span className="copy">PeachMenor | All Rights Reserved &copy; 2025</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
