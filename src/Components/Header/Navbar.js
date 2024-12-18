import React from "react";
import "./navbar.css";
import logo from "../../assets/Logo.png"; // تأكد من وجود صورة الشعار

const Navbar = () => {
  // Test
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-logo">
          <img src={logo} alt="Academix Logo" />
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">People</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
        </ul>
        <div>
          <button className="download-btn">Download the app for free</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
