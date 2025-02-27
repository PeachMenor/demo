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
            <h1>Get in Touch</h1>
            <br></br>
            <ul>
            <li>
                <span>San Francisco, California</span>  
              </li>
              <li>
                <span>support@luxe.com</span>  
              </li>
              <li>
                <span>+1 234 567 89</span>
              </li>
              <li>
                <a href="">Contact us</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Social Links */}
          <div className="footer-column">
            <h1>Company</h1>
            <br></br>
            <div className="email-container">
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="hiring-link">
                We are Hiring!
              </a>
            </div>
            <br></br>
            <ul>
              <li>
                <a href="https://instagram.com/" target="_blank">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/" target="_blank">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="footer-column">
            <h1>Offerings</h1>
            <br></br>
            <ul>
              <li>
                <span>AI-based Fashion Sense</span>
              </li>
              <li>
                <span>Virtual Store & Try-ons</span>
              </li>
              <li>
                <span>Luxury Customizable Clothings</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom - Now with better spacing */}
        <div className="footer-bottom">
          <span className="copy">LUXE | All Rights Reserved &copy; 2025</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
