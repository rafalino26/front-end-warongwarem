import React from "react";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate =  useNavigate()
  return (
    <div className="landing-page">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">WARONGWAREM</div>
          <div className="group">
            <div className="welcome-where-we-wrapper">
              <p className="welcome-where-we">
                WELCOME, WHERE WE BELIEVE THAT FOOD IS MORE THAN JUST SUSTENANCE - IT&#39;S AN EXPERIENCE. OUR MENU
                FEATURES A VARIETY OF DISHES THAT ARE EXPERTLY PREPARED WITH FRESH, LOCALLY SOURCED INGREDIENTS AND
                SERVED IN A WARM AND INVITING ATMOSPHERE.
              </p>
            </div>
            <div className="group-2">
              <div className="overlap-group">
                <img className="line" alt="marker.png" src="marker.png" />
                <button className="text-wrapper-2">Home</button>
              </div>
              <div>
              <button onClick={() => navigate('/Signup')}className="text-wrapper-3">Login</button>
              </div>
              <div>
              <button onClick={() => navigate('/AboutUs')}className="text-wrapper-4">About Us </button>
              </div>
            </div>
          </div>
          <div className="EAT-for-LIFE">EAT FOR LIFE</div>
        </div>
        <img className="img" alt="glass.jpg" src="glass.jpg" />
      </div>
    </div>
  );
};

export default LandingPage;