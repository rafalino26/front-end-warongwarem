import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const ManagersTableComs = () => {
  const navigate = useNavigate();
  return (
    <div className="waiter-window">
      <div className="overlap"></div>
      <button class="logoutwaiter-btn" onClick={() => navigate("/")}>
      <div className="navbar3">Logout</div>
      </button>
      <button class="tablewaiter-btn" onClick={() => navigate("/ManagersTable")}>
      <div className="navbar2">Table</div>
      </button>
      <button class="mainwaiter-btn" onClick={() => navigate("/Managers")}>
      <div className="navbar1">Dasboard</div>
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
        <span className="text-wrapper-14">Warem Managers</span>
      </p>

    </div>
  );
};

export default ManagersTableComs;




