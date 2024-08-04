import React, { useState } from "react";
import "./style.scss";
import Login from "../../components/login";
import SignUP from "../../components/signUp";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2 className="title">{isSignUp ? "Sign Up" : "Login"}</h2>
          <div className="form-container">
            {!isSignUp ? <Login /> : <SignUP />}
          </div>
          <div className="toggle-container">
            <p>
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
              <span onClick={toggleForm} className="toggle-link">
                {isSignUp ? "Login" : "Sign Up"}
              </span>
            </p>
          </div>
      </div>
    </div>
  );
};

export default AuthPage;
