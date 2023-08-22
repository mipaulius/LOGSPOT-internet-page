import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Toolbar.css';
import SignUpButton from '../images/button.svg';
import PushedButton from '../images/button-pushed.svg';
import LogspotLogo from '../images/logo.svg'

const Toolbar = () => {
  const [isButtonPushed, setIsButtonPushed] = useState(false);

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
      <Link to="/sign-up">
        <img
          className="sign-up-button"
          src={isButtonPushed ? PushedButton : SignUpButton}
          alt="button for signing in"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />
      </Link>
    </div>
  );
};

export default Toolbar;
