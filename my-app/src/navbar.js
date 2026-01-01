import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // Use separate CSS file

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://img.studyclap.com/img/institute/logo/0cbf4db533-nielit-ropar.jpg"
          alt="NIELIT Ropar"
        />
        <h1 class="happy">राष्ट्रीय इलेक्ट्रॉनिकी एवं सूचना प्रौद्योगिकी संस्थान<br></br>

National Institute of Electronics & Information Technology
(DEEMED TO BE UNIVERSITY)
</h1>
      </div>

      <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/studentactivity">Student Life</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contactquery">Contact Query</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/registration">Register</Link>
        <Link to="/signupage">Signup</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/login">Login</Link>
        <Link to="/appointmentpage">Appointment</Link>
      </div>

      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <div className={`bar ${isMobileMenuOpen ? "change" : ""}`}></div>
        <div className={`bar ${isMobileMenuOpen ? "change" : ""}`}></div>
        <div className={`bar ${isMobileMenuOpen ? "change" : ""}`}></div>
      </div>
    </nav>
  );
}

export default Navbar;
