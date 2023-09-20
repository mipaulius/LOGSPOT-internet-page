import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Toolbar.css';
import SignUpButton from '../images/button.svg';
import SignUpButtonBlack from '../images/button-orange.svg';
import PushedButton from '../images/button-pushed-orange.svg';
import LogspotLogo from '../images/logo.svg';
import LogspotLogoNew from '../images/logo-new.svg';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [isHovered, setIsHovered] = useState(false);
  const [isButtonPushed, setIsButtonPushed] = useState(false);

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

 
    <div className="header">
      
      <div className="menu-icon-container" onClick={toggleMenu}>
      <div className="logspot-logo-new">
        <img src={LogspotLogoNew} alt="company logo" />
      </div>
  <div className={`menu-icon ${menuOpen ? 'open' : ''}`}>
    <div className="menu-line"></div>
    <div className="menu-line"></div>
    <div className="menu-line"></div>
  </div>
      
</div>


     

      <div className={`menu-dropdown ${menuOpen ? 'open' : ''}`}>
         
      <Link to="/">
        <div className="logspot-logo">
          <img src={LogspotLogo} alt="company logo" />
        </div>
      </Link>

        <Link to="/home" className="header-toolbar" onClick={toggleMenu}>
          For Talents
        </Link>
        <Link to="/it-hiring" className="header-toolbar" onClick={toggleMenu}>
          Hirring
        </Link>
        <Link to="/about" className="header-toolbar" onClick={toggleMenu}>
          About
        </Link>
        <Link to="/login" className="login-toolbar" onClick={toggleMenu}>
          Login
        </Link>
        <Link to="/sign-up" className="sign-up-container">
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
