// CustDashboardPage.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CustDashboardPage = () => {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [persons, setPersons] = useState("");
  const [personsError, setPersonsError] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [tableType, setTableType] = useState("regular");
  const [errorMessage, setErrorMessage] = useState("");
  const [isFullRent, setIsFullRent] = useState(false);

  const handlePersonsChange = (e) => {
    const inputPersons = e.target.value;
    setPersons(inputPersons);

    if (inputPersons < 1 || inputPersons > 6) {
      setPersonsError("Please select a number of persons between 1 and 6.");
    } else {
      setPersonsError("");
    }
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    setTime(selectedTime);

    if (!isTimeInRange(selectedTime)) {
      setErrorMessage("Please select a time between 18:00 and 23:00.");
    } else {
      setErrorMessage("");
    }
  };

  const isTimeInRange = (selectedTime) => {
    const timeParts = selectedTime.split(":");
    const hours = parseInt(timeParts[0], 10);
    return hours >= 18 && hours <= 23;
  };

  const handleTableTypeChange = (e) => {
    setTableType(e.target.value);
  };

  const isBookingAllowed = () => {
    return (
      (persons.trim() !== "" &&
        date.trim() !== "" &&
        time.trim() !== "" &&
        tableType.trim() !== "" &&
        personsError === "" &&
        errorMessage === "") ||
      isFullRent
    );
  };

  const handleBookNowClick = () => {
    if (isBookingAllowed()) {
      if (isTimeInRange(time)) {
        setShowPopup(true);
        setErrorMessage("");
      } else {
        setErrorMessage("Please select a time between 18:00 and 23:00.");
      }
    } else {
      setErrorMessage("Please fill in all the required fields before booking.");
    }
  };

  const showPopupFunction = () => {
    setShowPopup(true);
  };

  const handleOkButtonClick = () => {
    setShowPopup(false);
    navigate("/Reservation", {
      state: {
        persons,
        date,
        time,
        tableType,
        isFullRent,
      },
    });
  };

  const handleFullRentChange = (e) => {
    setIsFullRent(e.target.checked);
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
                <button onClick={() => navigate("/Reservation")} className="text-wrapper-7">
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
        <img className="img1" alt="page1.jpg" src="page1.jpg" />
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
          <label htmlFor="fullRent" className="full-rent-label">
            FULL RENT
          </label>
          <input
            type="checkbox"
            id="fullRent"
            checked={isFullRent}
            onChange={handleFullRentChange}
          />
        </div>
        <div className="date-inner">
          <input className="date-input" placeholder="date" type="date" value={date} onChange={handleDateChange} />
        </div>
        <div className="time-inner">
          <input
            className="time-input"
            placeholder="time"
            type="time"
            value={time}
            onChange={handleTimeChange}
            min="18:00"
            max="23:00"
          />
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
        {personsError && <div className="error-message3">{personsError}</div>}
        {errorMessage && <div className="error-message2">{errorMessage}</div>}
      </div>

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
