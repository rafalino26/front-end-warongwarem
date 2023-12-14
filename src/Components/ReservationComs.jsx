import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const ReservationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [reservationStatus, setReservationStatus] = useState("WAITING");
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    persons: "",
    date: "",
    time: "",
    tableType: "",
    isFullRent: false,
  });

  // Function to fetch reservation details from the backend
  const fetchReservationDetails = async () => {
    try {
      const response = await fetch(`/api/reservations/${bookingData.id}`);
      const data = await response.json();

      // Update reservation status
      setReservationStatus(data.status);

      // Update reservation details
      setBookingData({
        ...bookingData,
        name: data.name || "", // Update name or set as empty string if not present
        email: data.email || "", // Update email or set as empty string if not present
        date: data.date || "", // Update date or set as empty string if not present
        time: data.time || "", // Update time or set as empty string if not present
        tableType: data.tableType || "", // Update tableType or set as empty string if not present
        persons: data.persons || "", // Update persons or set as empty string if not present
        // Add other properties as needed
      });
    } catch (error) {
      console.error("Error fetching reservation details:", error);
    }
  };

  useEffect(() => {
    if (location.state) {
      setBookingData(location.state);

      // Start the periodic polling when the component mounts
      const pollingInterval = setInterval(() => {
        // Fetch reservation details from the backend
        fetchReservationDetails();
      }, 5000); // Adjust the polling interval as needed (e.g., every 5 seconds)

      // Cleanup the interval when the component unmounts
      return () => clearInterval(pollingInterval);
    }
  }, [location.state]);

  const fadeInProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }, // Adjust duration for a longer fade-in (in milliseconds)
  });

  const handleConfirmation = () => {
    // Logic for handling confirmation by waiter
    setReservationStatus("CONFIRMED");
  };

  const handleRejection = () => {
    // Logic for handling rejection by waiter
    setReservationStatus("REJECTED");
  };

  return (
    <animated.div style={fadeInProps} className="landing-page">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">WARONGWAREM</div>
          <div className="your-bookings">YOUR BOOKINGS</div>
          <div className="group">
            <div className="group-2">
              <div className="overlap-group">
              <img className="line5" alt="marker.png" src="marker.png" />
                <img className="line8" alt="marker.png" src="marker.png" />
                <div>
                  <img className="date-ongoing" alt="date.png" src="date.png" />
                  <div className="date-message">{bookingData.date || "dd/mm/yyyy"}</div>
                </div>
                <div>
                  <img className="table-ongoing" alt="table.png" src="table.png" />
                  <div className="table-message">{bookingData.tableType || "regular"}</div>
                </div>
                <div>
                  <img className="person-ongoing" alt="person.png" src="person.png" />
                  <div className="person-message">{bookingData.persons || "5"} persons</div>
                </div>
                <div>
                  <img className="time-ongoing" alt="clock.png" src="clock.png" />
                  <div className="time-message">{bookingData.time || "22:00"}</div>
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
                <button onClick={() => navigate('/')} className="text-wrapper-3">Logout</button>
              </div>
              <div>
                <button onClick={() => navigate('/Reservation')} className="text-wrapper-7">Reservation </button>
              </div>
              <div>
                <button onClick={() => navigate('/ContactUs')} className="text-wrapper-8">Contact Us </button>
              </div>
            </div>
          </div>
        </div>
        <img className="img3" alt="page3.jpg" src="page3.jpg" />
      </div>
    </animated.div>
  );
};

export default ReservationPage;
