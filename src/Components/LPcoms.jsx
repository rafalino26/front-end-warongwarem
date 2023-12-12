import React from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";

export const LandingPage = () => {
  const navigate =  useNavigate()

  const fadeInProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }, // Adjust duration for a longer fade-in (in milliseconds)
  });
  
  return (
    <animated.div style={fadeInProps} className="landing-page">
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
      </animated.div>
  );
};

export default LandingPage;