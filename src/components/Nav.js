import React from "react";
import whiteLogo from "../images/tinder_logo_white.png";
import colorLogo from "../images/color-logo-tinder.png";
import { useState } from "react";
function Nav({ minimal, authToken, showModal, setShowModal, setIsSignUp }) {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(true);
  };
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? colorLogo : whiteLogo} />
      </div>
      {!authToken && !minimal && (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          Login
        </button>
      )}
    </nav>
  );
}

export default Nav;
