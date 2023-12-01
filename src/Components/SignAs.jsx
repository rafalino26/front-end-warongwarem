import React from "react";
import { useNavigate } from "react-router-dom";

export const SignInAsPage  = () => {
  const navigate =  useNavigate()
  return (
    <div className="signInAs-page">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">WARONGWAREM</div>
          <div className="group">
            <div className="Sign-in-as-wrapper">
              <p className="Sign-in-as">
                Sign In As
              </p>
            </div>
    <button onClick={() => navigate('/SignInAsCustomers')}className="customers">Customers</button>
    <div >
      <button onClick={() => navigate('/SignInAsWaiters')}className="waiters">Waiters</button>
    </div>
    <div>
      <button onClick={() => navigate('/SignInAsManagers')}className="managers">Managers</button>
      </div>
            <div className="group-2">
              <div className="overlap-group">
                <img className="line" alt="marker.png" src="marker.png" />
                <button onClick={() => navigate('/')}className="text-wrapper-2">Home</button>
              </div>
              <div>
              <div className="text-wrapper-3">Login</div>
              </div>
            </div>
          </div>
        </div>
        <img className="img" alt="glass.jpg" src="glass.jpg" />
      </div>
    </div>
  );
};

export default SignInAsPage;