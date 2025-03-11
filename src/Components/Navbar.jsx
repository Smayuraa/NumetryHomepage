import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css"; 
import logo from '../assets/numetry-logo.jpg'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? "scrolled" : ""}`}>
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Company Logo" className="logo-img me-3" />
          <span className="logo-text"></span>
        </Link>

        {/* Navbar Toggle Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Menu Items */}
        <div className={`collapse navbar-collapse justify-content-center ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/about">ABOUT US</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/services">SERVICES</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/technologies">TECHNOLOGIES</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/industry">INDUSTRY</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/hire">HIRE DEVELOPER</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">CONTACT US</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/what-we-do">WHAT WE DO</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/training-courses">TRAINING & COURSES</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
