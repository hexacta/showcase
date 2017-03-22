import React from "react";
import { Link } from "react-router-dom";
import logo from "./hexacta.png";
import "./NavBar.css";

function NavBar() {
  return (
    <div id="navbar">
      <a href="https://www.hexacta.com">
        <img src={logo} className="navbar-logo" alt="Hexacta" />
      </a>
      <nav className="navbar-tabs">
        <Link to="/" className="active"><span>Experiments</span></Link>
        <a href="https://medium.com/hexacta"><span>Blog</span></a>
      </nav>
    </div>
  );
}

export default NavBar;
