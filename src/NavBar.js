import React from "react";
import logo from "./hexacta.png";
import "./NavBar.css";

function NavBar() {
  return (
    <div id="navbar">
      <a href="https://www.hexacta.com">
        <img src={logo} className="navbar-logo" alt="Hexacta" />
      </a>
      <nav className="navbar-tabs">
        <span className="active">Experiments</span>
        <span>Blog</span>
      </nav>
    </div>
  );
}

export default NavBar;
