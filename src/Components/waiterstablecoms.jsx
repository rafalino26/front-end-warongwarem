import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const WaiterstableComs = () => {
  const navigate = useNavigate();
  return (
    <div className="waiter-window">
      <div className="overlap"></div>
      <button class="logoutwaiter-btn" onClick={() => navigate("/")}>
        <img class="Logoutwaiter" alt="Power Off" src="/poweroff-1@2x.png" />
      </button>
      <button class="tablewaiter-btn" onClick={() => navigate("/wt")}>
        <img class="Tablewaiter" alt="Table" src="icsharptablerestaurant.svg" />
      </button>
      <button class="mainwaiter-btn" onClick={() => navigate("/WaitersDb")}>
        <img class="Mainwaiter" alt="Main" src="group.svg" />
      </button>
      <div className="overlap-group">
        <div className="stable-table-row">
          <div className="checkbox" />
          <div className="stable-table-grid">
            <div className="stable-table-cell">
              <div className="text-wrapper">Table No</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper">Table type</div>
            </div>
            <div className="div">
              <div className="text-wrapper">Persons</div>
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
              <div className="text-wrapper-40">1</div>
            </div>
            <div className="stable-table-cell-3">
              <div className="text-wrapper-41">Indoor</div>
            </div>
            <div className="stable-table-cell-4">
              <div className="text-wrapper-42">2</div>
            </div>
            <div className="stable-table-cell-5">
              <div className="text-wrapper-43">Available</div>
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
      

      <div className="rectangle-3" />
      <p className="warong-warem">
        <span className="span">Warong</span>
        <span className="text-wrapper-14">Warem Waiter</span>
      </p>

    </div>
  );
};

export default WaiterstableComs;




