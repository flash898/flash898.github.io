import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="header-content">
      <div className="header-content-name">
        <h3>Thyago Pessoa</h3>
      </div >
      <div className="nav-content">
        <Link exact to="/" className="nav-content-link">
          <p>Home</p>
        </Link>
        <Link to="/about" className="nav-content-link">
          <p>About</p>
        </Link>
        <Link to="/projects" className="nav-content-link">
          <p>Works</p>
        </Link>
        <Link to="/contact" className="nav-content-link">
          <p>Contact</p>
        </Link>
      </div>
    </div>
  )
}
