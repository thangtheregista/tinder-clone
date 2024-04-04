import React from "react";

function Test({ setIsSignUp, isSignUp }) {
  const handleClick = () => {
    setIsSignUp(false);
  };
  return (
    <div>
      <button onClick={handleClick}></button>
    </div>
  );
}

export default Test;
