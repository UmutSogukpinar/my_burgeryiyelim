import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="main-navbar">
      <div className="navbar-content">
        <div className="logo-box">
          <Link to="/">
            <img
              src="/images/burgeryiyelim-logo.png"
              alt=""
              className="logo-amblem"
            />
          </Link>
        </div>
        <ul>
          <li><Link></Link></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
