import React from "react";
import whiteLogo from "../images/tinder_logo_white.png";
import colorLogo from "../images/color-logo-tinder.png";
function Nav({ minimal, showModal, handleClickSetSignUpFalse }) {
  // const handleClick = () => {
  //   setShowModal(true);
  //   setIsSignUp(false);
  // };
  const authToken = false;
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
