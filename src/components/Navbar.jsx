import React from "react";
import { NavLink } from "react-router-dom";
import "./styling/Navbar.css";

function Navbar() {
  return (
    <div className="nav-container">
      <header className="header">
        <div className="logo">MindEase</div>
        {/* <button className="login-button">Login</button> */}
      </header>
      <nav className="nav-bar">
        <NavLink to="/" className="nav-link" activeClassName="active">
          Home
        </NavLink>
        {/* <NavLink to="/stats" className="nav-link" activeClassName="active">
          Stats
        </NavLink> */}
        <NavLink to="/recommendations" className="nav-link" activeClassName="active">
          Recommendations
        </NavLink>
        <NavLink to="/feedback" className="nav-link" activeClassName="active">
          Feedback
        </NavLink>
        <NavLink to="/profile" className="nav-link" activeClassName="active">
          Profile
        </NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="active">
          About Us
        </NavLink>
      </nav>
      
    </div>
  );
}

export default Navbar;
