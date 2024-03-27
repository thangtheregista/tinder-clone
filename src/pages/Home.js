import React from "react";
import Nav from "../components/Nav";
import AuthModal from "../components/AuthModal";
import { useState } from "react";
import Test from "./Test";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const authToken = false;
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(true);
  };
  const handleClickSetSignUpFalse = () => {
    setShowModal(true);
    setIsSignUp(false);
  };
  return (
    <div className="overlay">
      <Nav
        minimal={false}
        authToken={authToken}
        showModal={showModal}
        // setShowModal={setShowModal}
        // setIsSignup={setIsSignUp}
        handleClickSetSignUpFalse={handleClickSetSignUpFalse}
      />
      <div className="home">
        <h1>Swipe Right</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Sign out" : "Create account"}
        </button>
        {showModal && (
          <AuthModal
            setShowModal={setShowModal}
            setIsSignUp={setIsSignUp}
            isSignUp={isSignUp}
          />
        )}
        <Test setIsSignUp={setIsSignUp} isSignUp={isSignUp} />
      </div>
    </div>
  );
}

export default Home;
