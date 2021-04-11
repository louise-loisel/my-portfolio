import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <ul>
            <li className='nav-item'>
              <Link to="/">Portfolio</Link>
            </li>
            <li className='nav-item'>
              <Link to="/about">About</Link>
            </li>
            <li className='nav-item'>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
