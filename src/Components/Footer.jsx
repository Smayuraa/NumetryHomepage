import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { FaLinkedin, FaSkype, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from '../assets/numetry-logo.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <div className="container-fluid">
        <div className="footer-top">
          {/* Left - Logo */}
          <div className="footer-logo-container">
            <img src={logo} alt="Numetry Logo" className="footer-logo" />
          </div>

          {/* Middle - Links */}
          <div className="footer-links">
            <div className="footer-section">
              <h4>IMPORTANT LINKS</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>HIRE DEVELOPERS</h4>
              <ul>
                <li><Link to="/android">Android</Link></li>
                <li><Link to="/ios">iOS</Link></li>
                <li><Link to="/dotnet">.NET</Link></li>
                <li><Link to="/laravel">Laravel</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>QUICK LINKS</h4>
              <ul>
                <li><Link to="/technologies">Technologies</Link></li>
                <li><Link to="/hire-developer">Hire Developer</Link></li>
                <li><Link to="/industry">Industry</Link></li>
                <li><Link to="/what-we-do">What We Do</Link></li>
              </ul>
            </div>
          </div>

          {/* Right - Social Media & Google Map */}
          <div className="footer-right">
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/numetry-technologies" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="skype:live:.cid.b4f5463535fc4c10" target="_blank" rel="noopener noreferrer"><FaSkype /></a>
              <a href="https://www.instagram.com/numetry_technologies2025?igsh=ZmViY2NyYnE0bmJu" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.youtube.com/@NumetryTechnologies" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>

            <div className="footer-map">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.734298904037!2d73.67859657597413!3d18.720710063028786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b1aed119c097%3A0x3bbb370271831e11!2sNumetry%20Technologies%2C%20Pune!5e0!3m2!1sen!2sin!4v1738909108215!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>&copy; 2025 Numetry Technologies. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
