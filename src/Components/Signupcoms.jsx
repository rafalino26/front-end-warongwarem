import React from "react";
import { useNavigate } from "react-router-dom";

export const SignupPage  = () => {
  const navigate =  useNavigate()
  return (
    <div className="signup-page">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">WARONGWAREM</div>
          <div className="group">
            <div className="Lets-get-start-wrapper">
              <p className="Lets-get-start">
                Lets get you started
              </p>
            </div>
            <div className="sign-up-inner">
      <input className="frame-input" placeholder="*required" type="text" />
    </div>
    <b className="email-address1">Email address</b>
    <div className="password-wrapper">
      <b className="password1">Password</b>
    </div>
    <input className="sign-up-child" placeholder="*required" type="text" />
    <button onClick={() => navigate('/SigninAs')}className="sign-up-container">
      <b className="sign-up2">sign up</b>
    </button>
    <div className="sign-up-item" />
    <b className="already-a-user1">Already a user?</b>

    <button onClick={() => navigate('/SigninAs')} className="sign-in1" target="_blank">
      sign in
      </button>
            <div className="group-2">
              <div className="overlap-group">
                <img className="line" alt="marker.png" src="marker.png" />
                <button onClick={() => navigate('/')}className="text-wrapper-2">Home</button>
              </div>
              <div>
              <button onClick={() => navigate('/Signup')}className="text-wrapper-3">Login</button>
              </div>
            </div>
          </div>
        </div>
        <img className="img" alt="glass.jpg" src="glass.jpg" />
      </div>
    </div>
  );
};

export default SignupPage;