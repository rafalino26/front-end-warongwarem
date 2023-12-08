import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CustDashboardPage = () => {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [persons, setPersons] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [tableType, setTableType] = useState("regular");

  const handlePersonsChange = (e) => {
    setPersons(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleTableTypeChange = (e) => {
    setTableType(e.target.value);
  };

  const isBookingAllowed = () => {
    return persons.trim() !== "" && date.trim() !== "" && time.trim() !== "" && tableType.trim() !== "";
  };

  const handleBookNowClick = () => {
    if (isBookingAllowed()) {
      // Add your logic to send booking information to the server if needed
      showPopupFunction();
    } else {
      alert("Please fill in all the required fields before booking.");
    }
  };

  const showPopupFunction = () => {
    setShowPopup(true);
  };

  const handleOkButtonClick = () => {
    setShowPopup(false);
  };

  return (
    <div className="landing-page">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">WARONGWAREM</div>
          <div className="group">
            <div className="group-2">
              <div className="overlap-group">
                <img className="line6" alt="marker.png" src="marker.png" />
                <button className="text-wrapper-6">Home</button>
              </div>
              <div>
                <button onClick={() => navigate("/")} className="text-wrapper-3">
                  Logout
                </button>
              </div>
              <div>
                <button onClick={() => navigate("/History")} className="text-wrapper-7">
                  Reservation
                </button>
              </div>
              <div>
                <button onClick={() => navigate("/ContactUs")} className="text-wrapper-8">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          <div className="Cust-home">It's reservation time!</div>
        </div>
        <img className="img" alt="glass.jpg" src="glass.jpg" />
        <div className="person-inner">
          <input
            className="person-input"
            placeholder="persons"
            type="number"
            max="6"
            min="1"
            value={persons}
            onChange={handlePersonsChange}
          />
        </div>
        <div className="date-inner">
          <input className="date-input" placeholder="date" type="date" value={date} onChange={handleDateChange} />
        </div>
        <div className="time-inner">
          <input className="time-input" placeholder="time" type="time" value={time} onChange={handleTimeChange} />
        </div>
        <div className="table-inner">
          <label htmlFor="tableType" className="table-label">
            Table Type:
          </label>
          <select
            className="table-input"
            id="tableType"
            value={tableType}
            onChange={handleTableTypeChange}
          >
            <option value="regular">Regular</option>
            <option value="outdoor">Outdoor</option>
            <option value="vip">VIP</option>
          </select>
        </div>
        <button onClick={handleBookNowClick} className="BOOKNOW" target="_blank" disabled={!isBookingAllowed()}>
          BOOK NOW
        </button>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup">
          <p>Your booking is already sent. Please wait until we confirm your booking.</p>
          <button onClick={handleOkButtonClick}>OK</button>
        </div>
      )}
    </div>
  );
};

export default CustDashboardPage;
