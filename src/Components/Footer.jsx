import "../styles/Footer.css"; 
import { Link } from "react-router-dom";
import { FaLinkedin, FaSkype, FaInstagram, FaYoutube } from "react-icons/fa"; // Import social media icons
import logo from '../assets/numetry-logo.jpg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row align-items-center py-3">
            <hr />
          
          {/* Left - Logo */}
          <div className="col-md-3 text-md-start text-center">
            <img src={logo} alt="Company Logo" className="footer-logo img-fluid" />
          </div>

          {/* Middle - Links */}
          <div className="col-md-6 text-center">
            <div className="row">
              <div className="col-6 col-md-4">
                <br />
                <h4 className="footer-heading">IMPORTANT LINKS</h4>
                <ul className="list-unstyled">
                  <li><Link to="/" className="footer-link">Home</Link></li>
                  <li><Link to="/about" className="footer-link">About Us</Link></li>
                  <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
                </ul>
              </div>
              <div className="col-6 col-md-4">
                <br />
                <h4 className="footer-heading">HIRE DEVELOPERS</h4>
                <ul className="list-unstyled">
                  <li><Link to="/android" className="footer-link">Android</Link></li>
                  <li><Link to="/ios" className="footer-link">iOS</Link></li>
                  <li><Link to="/dotnet" className="footer-link">.NET</Link></li>
                  <li><Link to="/laravel" className="footer-link">Laravel</Link></li>
                </ul>
              </div>

              {/* Quick Links with Social Media Icons on the Right */}
              <div className="col-6 col-md-4">
                <br />
                <div className="quick-links-wrapper">
                  <div>
                    <h4 className="footer-heading">QUICK LINKS</h4>
                    <ul className="list-unstyled">
                      <li><Link to="/technologies" className="footer-link">Technologies</Link></li>
                      <li><Link to="/hire-developer" className="footer-link">Hire Developer</Link></li>
                      <li><Link to="/industry" className="footer-link">Industry</Link></li>
                      <li><Link to="/what-we-do" className="footer-link">What We Do</Link></li>
                    </ul>
                  </div>

                  {/* Social Media Icons */}
                  <div className="footer-social">
                    <a href="https://www.linkedin.com/company/numetry-technologies" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="social-icon" />
                    </a>
                    <a href="skype:live:.cid.b4f5463535fc4c10" target="_blank" rel="noopener noreferrer">
                      <FaSkype className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com/numetry_technologies2025?igsh=ZmViY2NyYnE0bmJu" target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="social-icon" />
                    </a>
                    <a href="https://www.youtube.com/@NumetryTechnologies" target="_blank" rel="noopener noreferrer">
                      <FaYoutube className="social-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
          

          {/* Right - Google Map */}
          <div className="col-md-3 text-md-end text-center">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.734298904037!2d73.67859657597413!3d18.720710063028786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b1aed119c097%3A0x3bbb370271831e11!2sNumetry%20Technologies%2C%20Pune!5e0!3m2!1sen!2sin!4v1738909108215!5m2!1sen!2sin"
              className="footer-map"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p className="mb-0">&copy; 2025 Numetry Technologies. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
