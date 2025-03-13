import React from "react";
import { Helmet } from "react-helmet";
import "../styles/AboutUs.css";
import missionImg from "../assets/mission.png"
import visionImg from '../assets/vision.png'

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Numetry Technologies</title>
        <meta 
          name="description" 
          content="Numetry Technologies is a global leader in web and mobile app development, cloud computing, and digital transformation." 
        />
      </Helmet>

      <div className="aboutus-container">
        <h1 className="aboutus-heading">Innovating for a Digital Future</h1>

        {/* Mission Section */}
        <div className="aboutus-section">
          <img src={missionImg} alt="Our Mission" className="aboutus-image" />
          <div className="aboutus-text mission">
            <h2 className="aboutus-subheading">OUR <span className="highlight">MISSION</span></h2>
            <p>
              Numetry Technologies strives to be the catalyst for your business success and 
              competitive edge by leveraging industry-best practices and a team of seasoned 
              experts. We are committed to delivering world-class, innovative products and 
              services that provide exceptional value for money to our customers.
            </p>
            <p>
              Our mission is to empower businesses with cutting-edge solutions, enabling 
              them to stay ahead in an ever-evolving digital landscape. Through continuous 
              innovation, strategic insights, and customer-centric approaches, we ensure 
              that our clients achieve sustainable growth and operational excellence.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="aboutus-section vision">
          <img src={visionImg} alt="Our Vision" className="aboutus-image" />
          <div className="aboutus-text">
            <h2 className="aboutus-subheading">OUR <span className="highlight">VISION</span></h2>
            <p>
              Our vision is to become the industry leader in delivering bespoke technology 
              services on a global scale, empowering businesses to reach their fullest potential. 
            </p>
            <p>
              We are committed to fostering a thriving work environment, cultivating a healthy 
              work culture, and promoting continuous growth and development within our team. 
              By driving innovation and excellence, we aim to revolutionize industries, enabling 
              organizations to achieve unparalleled success in an ever-evolving technological landscape.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
