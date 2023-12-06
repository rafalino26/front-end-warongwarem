import React from "react";
import { useNavigate } from "react-router-dom";

export const HistoryPage = () => {
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
                <img className="line5" alt="marker.png" src="marker.png" />
                <button onClick={() => navigate('/CustomerDashboard')} className="text-wrapper-6">Home</button>
              </div>
              <div>
              <button onClick={() => navigate('/')}className="text-wrapper-3">Logout</button>
              </div>
              <div>
              <button onClick={() => navigate('/History')}className="text-wrapper-7">History </button>
              </div>
              <div>
              <button onClick={() => navigate('/ContactUs')}className="text-wrapper-8">Contact Us </button>
              </div>
            </div>
          </div>
          <div className="EAT-for-LIFE">History Page</div>
        </div>
        <img className="img" alt="glass.jpg" src="glass.jpg" />
      </div>
    </div>
  );
};

export default HistoryPage;