import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <footer id="footer">
      <div className="footer-container">
        {/* Newsletter Section */}
        <div className="newsletter-section">
          <h3>GET IN TOUCH</h3>
          
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="social-links">
          <a href="https://www.linkedin.com/company/peachmenor" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          <a href="https://www.instagram.com/peachmenor" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
          {/* <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">TIKTOK</a> */}
          {/* <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">FACEBOOK</a> */}
          <a href="https://x.com/PeachMenor82076" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://www.youtube.com/channel/UCr4dgNXgSgSe5Gk_zs5rs5A" target="_blank" rel="noopener noreferrer">YOUTUBE</a>
        </div>

        {/* Privacy/Legal Links */}
        <div className="legal-links">
          <a>PEACHMENOR | ALL RIGHTS RESERVED &copy; 2025</a>
          {/* <a href="/cookie-preferences">COOKIE AND AD PREFERENCES</a>
          <a href="/privacy-policy">PRIVACY AND COOKIES POLICY</a> */}
          <a href="/terms">TERMS OF USE</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;