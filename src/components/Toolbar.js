import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import './Toolbar.css';
import SignUpButton from '../images/button-orange2.svg';
import SignUpButtonBlack from '../images/button-orange.svg';
import PushedButton from '../images/button-pushed-orange.svg';
import LogspotLogo from '../images/logspot-logo.svg';
import LogspotLogoNew from '../images/logspot-logo-new.svg';

const Header = () => {
  const location = useLocation(); // Get the current location
  const shouldHideBorder = location.pathname === '/';

  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonPushed, setIsButtonPushed] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuLinkClick = () => {
    setMenuOpen(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseDown = () => {
    setIsButtonPushed(true);
  };

  const handleMouseUp = () => {
    setIsButtonPushed(false);
  };

  return (
    <div className={`header ${shouldHideBorder ? 'no-border' : ''}`}>
      <div className="menu-icon-container">
  <div className="logspot-logo-new">
    <Link to="/" onClick={handleMenuLinkClick}>
      <img src={LogspotLogo} alt="company logo" />
    </Link>
  </div>
  <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
    <div className="menu-line"></div>
    <div className="menu-line"></div>
    <div className="menu-line"></div>
  </div>
</div>

<div className={`menu-dropdown ${menuOpen ? 'open' : ''}`}>
  <Link to="/" onClick={handleMenuLinkClick}>
    <div className="logspot-logo">
      <img src={LogspotLogo} alt="company logo" />
    </div>
  </Link>
  {menuOpen && (
    <Link to="/" className="header-toolbar" onClick={handleMenuLinkClick}>
      Home
    </Link>
  )}
  <Link to="/home" className="header-toolbar" onClick={handleMenuLinkClick}>
    For Talents
  </Link>
  <Link to="/it-hiring" className="header-toolbar" onClick={handleMenuLinkClick}>
    For Employers
  </Link>
  <Link to="/about" className="header-toolbar" onClick={handleMenuLinkClick}>
    About Us
  </Link>
  {/* <Link to="/login" className="login-toolbar" onClick={handleMenuLinkClick}>
    Login
  </Link> */}
  <Link to="/sign-up" className="sign-up-container" onClick={handleMenuLinkClick}>
    <img
      className="sign-up-button"
      src={isButtonPushed ? PushedButton : (isHovered ? SignUpButtonBlack : SignUpButton)}
      alt="button for signing in"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    />
  </Link>
</div>

    </div>
  );
};

export default Header;
