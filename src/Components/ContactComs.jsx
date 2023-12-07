import React from "react";
import { useNavigate } from "react-router-dom";

export const ContactUsPage = () => {
  const navigate =  useNavigate()
  return (
    <div className="landing-page">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">WARONGWAREM</div>
          <div className="group">
          <div className="C1-wrapper">
              <p className="C1">
              We are here to assist you! Whether you have questions, need 
              assistance with reservations, or want to share your feedback, 
              feel free to get in touch with us. Your satisfaction is our priority.
              </p>
            </div>
            <div className="C2-wrapper">
              <p className="C2">
              Phone:<br />
              +6281 4444 78234 <br /> 
              Email:<br /> 
              WarongWarem@gmail.com
              </p>
            </div>
            <div className="C3-wrapper">
              <p className="C3">
              If you need to make changes to an existing reservation or cancel it, 
              please contact us at least 24 hours in advance. We understand that 
              plans can change, and we are here to accommodate your needs.
              </p>
            </div>
            <div className="C4-wrapper">
              <p className="C4">
              jl. Kampus Utara Blok Z no. 99 <br /> 
              <a href="https://maps.app.goo.gl/j5Nrdp3FzeWAyWdPA" target="_blank" rel="noopener noreferrer">
  Open in Google Maps
</a>

 
              </p>
            </div>
            <div className="group-2">
              <div className="overlap-group">
                <img className="line4" alt="marker.png" src="marker.png" />
                <button onClick={() => navigate('/CustomerDashboard')} className="text-wrapper-6">Home</button>
              </div>
              <div>
              <button onClick={() => navigate('/')}className="text-wrapper-3">Logout</button>
              </div>
              <div>
              <button onClick={() => navigate('/History')}className="text-wrapper-7">Reservation </button>
              </div>
              <div>
              <button onClick={() => navigate('/Contact Us')}className="text-wrapper-8">Contact Us </button>
              </div>
            </div>
          </div>
          <div className="Contact1">Contact WarongWarem</div>
          <div className="Contact2">Contact Information:</div>
          <div className="Contact3">Reservation Changes or Cancellations:</div>
          <div className="Contact4">Visit Us:</div>
        </div>
        <img className="img" alt="glass.jpg" src="glass.jpg" />
      </div>
    </div>
  );
};

export default ContactUsPage;