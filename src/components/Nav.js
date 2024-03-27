import React from "react";
import whiteLogo from "../images/tinder_logo_white.png";
import colorLogo from "../images/color-logo-tinder.png";
function Nav({ minimal, authToken, showModal, handleClickSetSignUpFalse }) {
  // const handleClick = () => {
  //   setShowModal(true);
  //   setIsSignUp(false);
  // };
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? colorLogo : whiteLogo} />
      </div>
      {!authToken && !minimal && (
        <button
          className="nav-button"
          onClick={handleClickSetSignUpFalse}
          disabled={showModal}
        >
          Login
        </button>
      )}
    </nav>
  );
}

export default Nav;
