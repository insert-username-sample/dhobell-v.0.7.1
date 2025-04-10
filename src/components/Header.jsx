import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleAuth = () => {
    setIsMenuOpen(false);
    navigate('/coming-soon');
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <Link to="/"><img src={logo} alt="Dhobell Logo" className="logo" /></Link>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/services" onClick={closeMenu}>Services</Link>
          <Link to="/pricing" onClick={closeMenu}>Pricing</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
          <Link to="/your-orders" onClick={closeMenu}>Your Orders</Link>
          <div className="mobile-auth-buttons">
            <button className="login-btn" onClick={handleAuth}>Login</button>
            <button className="signup-btn" onClick={handleAuth}>Sign Up</button>
          </div>
        </nav>
        <div className="desktop-auth-buttons">
          <button className="login-btn" onClick={handleAuth}>Login</button>
          <button className="signup-btn" onClick={handleAuth}>Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;