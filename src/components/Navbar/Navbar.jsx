import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='left'>
        <h1>Mayank Raj.</h1>
      </div>
      <div className='right'>
        <input type='checkbox' id='check' />
        <label htmlFor="check" className="checkBtn">
          <i className="fa-solid fa-bars"></i>
        </label>
        <ul className="list">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About me</NavLink></li>
          <li><NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink></li>
          <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact me</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
