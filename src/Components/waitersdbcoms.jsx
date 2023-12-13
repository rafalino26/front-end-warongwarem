// WaiterComs.jsx

import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const WaiterComs = () => {
  const navigate = useNavigate();
  const [showNotesPopup, setShowNotesPopup] = useState(false);
  const [notes, setNotes] = useState('');

  const handleNotesClick = () => {
    setShowNotesPopup(true);
  }

  const handleOkClick = () => {
    // Handle saving notes or any other logic here
    setShowNotesPopup(false);
  }

  return (
    <div className="waiter-window">
      <div className="overlap"></div>
      <button className="logoutwaiter-btn" onClick={() => navigate("/")}>
        <img className="Logoutwaiter" alt="Power Off" src="/poweroff-1@2x.png" />
      </button>
      <button onClick={handleNotesClick}>
        <img className="notes" alt="notes.png" src="notes.png" />
      </button>
      <button className="tablewaiter-btn" onClick={() => navigate("/WaitersTable")}>
        <img className="Tablewaiter" alt="Table" src="icsharptablerestaurant.svg" />
      </button>
      <button className="mainwaiter-btn" onClick={() => navigate("/WaitersDb")}>
        <img className="Mainwaiter" alt="Main" src="group.svg" />
      </button>
      <button className="accept-btn">
        <img className="Acceptwaiter" alt="Accept" src="group.svg" />
      </button>
      <button className="rejection-btn">
        <img className="rejectionwaiter" alt="reject" src="group.svg" />
      </button>
      <div className="overlap-group">
        <div className="stable-table-row">
          <div className="checkbox" />
          <div className="stable-table-grid">
            <div className="stable-table-cell">
              <div className="text-wrapper">Name</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper">Email</div>
            </div>
            <div className="div">
              <div className="text-wrapper">Time</div>
            </div>
            <div className="stable-table-cell-2">
              <div className="text-wrapper">Date</div>
            </div>
            <div className="stable-table-cell-2">
              <div className="text-wrapper">People</div>
            </div>
            <div className="stable-table-cell-2">
              <div className="text-wrapper">Table Type</div>
            </div>
            <div className="stable-table-cell-2">
              <div className="text-wrapper">Status</div>
            </div>
          </div>
        </div>
        <div className="stable-table-row-2">
          <div className="checkbox-2" />
          <div className="stable-table-grid">
            <div className="stable-table-cell">
              <div className="text-wrapper-30">Cindy</div>
            </div>
            <div className="stable-table-cell-3">
              <div className="text-wrapper-20">cindy21@gmail.com</div>
            </div>
            <div className="stable-table-cell-4">
              <div className="text-wrapper-3">01:00 PM</div>
            </div>
            <div className="stable-table-cell-5">
              <div className="text-wrapper-2">01/12/2023</div>
            </div>
            <div className="stable-table-cell-5">
              <div className="text-wrapper-23">2</div>
            </div>
            <div className="stable-table-cell-6">
              <div className="text-wrapper-26">Indoor</div>
            </div>
            <div className="stable-table-cell-2">
              <div className="group">
                <div className="overlap-group-2">
                  <div className="text-wrapper-5">Notes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notes Popup */}
      {showNotesPopup && (
        <div className="notes-popup">
          <input
            type="text"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Enter notes..."
          />
          <button onClick={handleOkClick}>OK</button>
        </div>
      )}

      <div className="rectangle-3" />
      <p className="warong-warem">
        <span className="span">Warong</span>
        <span className="text-wrapper-14">Warem Waiter</span>
      </p>
    </div>
  );
};

export default WaiterComs;
