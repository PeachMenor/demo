import { useState } from "react";

const Footer = () => {
  const [active, setActive] = useState(false);

  return (
    <footer id="footer">
      <div className="footer-container">
        {/* Three evenly spaced columns */}
        <div className="footer-columns">
          {/* Column 1: Contact Us */}
          

          {/* Column 2: Social Links */}
          <div className="footer-column">
            <h1>Get in Touch</h1>
            <br></br>
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
