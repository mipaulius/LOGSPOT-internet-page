import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Toolbar.css';
import SignUpButton from '../images/button.svg';
import SignUpButtonBlack from '../images/button-orange.svg'; // Import the hover image
import PushedButton from '../images/button-pushed-orange.svg';
import LogspotLogo from '../images/logo.svg'

const Toolbar = () => {
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
      <Link to="/"><div className="logspot-logo"><img
          src={LogspotLogo}
          alt="company logo"/></div></Link>
      <Link to="/home"><div className="header-toolbar">For Talents</div></Link>
      <Link to="/it-hiring"><div className="header-toolbar">For Employers</div></Link>
      <Link to="/about"><div className="header-toolbar">About</div></Link>
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
  );
};

export default Toolbar;
