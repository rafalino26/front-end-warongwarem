import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ReservationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [reservationStatus, setReservationStatus] = useState("WAITING");
  const [bookingData, setBookingData] = useState({
    persons: "",
    date: "",
    time: "",
    tableType: "",
    isFullRent: false,
  });

  useEffect(() => {
    if (location.state) {
      setBookingData(location.state);
    }
  }, [location.state]);

  const handleConfirmation = () => {
    // Logic for handling confirmation by waiter
    setReservationStatus("CONFIRMED");
  };

  const handleRejection = () => {
    // Logic for handling rejection by waiter
    setReservationStatus("REJECTED");
  };

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
                <div className="date-message">dd/mm/yyy</div>
                </div>
                <div>
                <img className="table-ongoing" alt="table.png" src="table.png" />
                <div className="table-message">regular</div>
                </div>
                <div>
                <img className="person-ongoing" alt="person.png" src="person.png" />
                <div className="person-message">5 persons</div>
                </div>
                <img className="line9" alt="marker.png" src="marker.png" />
                <div className="ongoing-status">WAITING...</div>
                <img className="line10" alt="marker.png" src="marker.png" />
                <div className="ongoing-status">{reservationStatus}</div>
                {reservationStatus === "WAITING" && (
                <div className="status-message">
                 Please wait until we confirm your booking.
                </div>
                )}
                {reservationStatus === "CONFIRMED" && (
               <div className="status-message">
               Your booking has been confirmed! We look forward to serving you.
               </div>
                )}
                 {reservationStatus === "REJECTED" && (
                <div className="status-message">
                We regret to inform you that your booking has been rejected. Please contact us for further assistance.
               </div>
                )}
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
        <img className="img3" alt="page3.jpg" src="page3.jpg" />
      </div>
    </div>
  );
};

export default ReservationPage;