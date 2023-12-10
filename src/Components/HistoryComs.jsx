import React from "react";
import { useNavigate } from "react-router-dom";

export const HistoryPage = () => {
  const navigate =  useNavigate()
  return (
    <div className="landing-page">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">WARONGWAREM</div>
          <div className="your-bookings">YOUR BOOKINGS</div>
          <div className="group">
            <div className="group-2">
              <div className="overlap-group">
                <img className="line5" alt="marker.png" src="marker.png" />
                <img className="line7" alt="marker.png" src="marker.png" />
                <div className="ongoing-name">Names</div>
                <div className="ongoing-email">galnoelkevin@gmail.com</div>
                <img className="line8" alt="marker.png" src="marker.png" />
                <div>
                <img className="date-ongoing" alt="date.png" src="date.png" />
                </div>
                <div>
                <img className="table-ongoing" alt="table.png" src="table.png" />
                </div>
                <div>
                <img className="person-ongoing" alt="person.png" src="person.png" />
                </div>
                <img className="line9" alt="marker.png" src="marker.png" />
                <div className="status-ongoing">CONFIRMED</div>
                <img className="line10" alt="marker.png" src="marker.png" />
                <button onClick={() => navigate('/CustomerDashboard')} className="text-wrapper-6">Home</button>
              </div>
              <div>
              <button onClick={() => navigate('/')}className="text-wrapper-3">Logout</button>
              </div>
              <div>
              <button onClick={() => navigate('/History')}className="text-wrapper-7">Reservation </button>
              </div>
              <div>
              <button onClick={() => navigate('/ContactUs')}className="text-wrapper-8">Contact Us </button>
              </div>
            </div>
          </div>
        </div>
        <img className="img" alt="glass.jpg" src="glass.jpg" />
      </div>
    </div>
  );
};

export default HistoryPage;