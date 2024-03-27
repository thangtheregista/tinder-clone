import React from "react";
import Nav from "../components/Nav";
import AuthModal from "../components/AuthModal";
import { useState } from "react";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const authToken = false;
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(true);
  };
  return (
    <div className="overlay">
      <Nav
        minimal={false}
        authToken={authToken}
        showModal={showModal}
        setShowModal={setShowModal}
        setIsSignup={setIsSignUp}
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
      </div>
    </div>
  );
}

export default Home;
