import React, { useEffect, useState } from 'react';
import '../styles/ContactUs.css'; 
import { motion } from 'framer-motion';
import "@fortawesome/fontawesome-free/css/all.min.css";

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  return (
    <>
      <div className={`contact-page-container ${isVisible ? "show-elements" : ""}`}>
        <motion.div
          className="contact-page"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-left">
            <motion.img 
              src="https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/contact-us/contactus-hero.png"
              alt="Company Logo" 
              className="footer-logo img-fluid"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>

          <div className="contact-right">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Contact Us
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              We'd love to hear from you! Feel free to reach out to us for any inquiries or support.
            </motion.p>

            <motion.div
              className="contact-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.7 }}
            >
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <input type="phone" placeholder="Your Phone Number" required />

                <select id="service" name="service">
                  <option value="select services">Select Services</option>
                  <option value="website-development">Website Development</option>
                  <option value="mobile-app-development">Mobile App Development</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="hire-developers">Hire Developers</option>
                  <option value="database-technologies">Database Technologies</option>
                  <option value="corporate-training">Corporate Training</option>
                </select>

                <textarea placeholder="Your Message" required></textarea>
                <br />
                <button type="submit">Submit</button>

                <motion.div
                  className="contact-info"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                >
                  <div className='icons'>
                    <p><i className="fab fa-skype"></i> NumetryT</p>
                    <p><i className="fas fa-envelope"></i> <a href="mailto:info@numetry.in">info@numetry.in</a></p>
                  </div>
                  <p><i className="fas fa-map-marker-alt"></i> Regus, Skye one Unit No 101, 1st Floor, Kalyani Nagar, Pune- 411006, Maharashtra</p>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ContactUs;


