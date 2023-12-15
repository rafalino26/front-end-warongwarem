import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import axios from 'axios';

export const Signin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const fadeInProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const handleSignIn = async () => {
    if (email && password) {
      try {
        const response = await axios.post('https://wwbe.my.id/api/login', {
          email,
          password,
        });
  
        const { token, role } = response.data;
  
        // Store the token and role in localStorage
        localStorage.setItem('jwtToken', token);
        localStorage.setItem('userRole', role);
  
        // Redirect based on the user's role
        switch (role) {
          case 'customer':
            navigate('/CustomerDashboard');
            break;
          case 'waiter':
            navigate('/WaitersDb');
            break;
          case 'manager':
            navigate('/Managers');
            break;
          default:
            console.error('Unknown role');
        }
      } catch (error) {
        // Handle login failure (e.g., show error message)
        console.error('Login failed');
      }
    }
  };
  

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    handleSignIn();
  };

  return (
    <animated.div style={fadeInProps} className="signup-page">
      <form onSubmit={handleFormSubmit}>
        <div className="div">
          <div className="overlap">
            <div className="text-wrapper">WARONGWAREM</div>
            <div className="group">
              <div className="Lets-get-start-wrapper">
                <p className="Lets-get-start">Sign In</p>
              </div>
              <div className="sign-in-inner">
                <input
                  className="frame-input2"
                  placeholder="*required"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <b className="email-address2">Email address</b>
              <div className="password-wrapper2">
                <b className="password2">Password</b>
              </div>
              <div className="password-input-wrapper">
                <input
                  className="sign-in-child"
                  placeholder="*required"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                />
                <label>
                  <input
                    type="checkbox"
                    onChange={() => setShowPassword(!showPassword)}
                  />
                  Show Password
                </label>
              </div>
              <button
                type="submit"
                className="sign-in-container"
                disabled={!email || !password}
              >
                <b className="sign-in2">sign in</b>
              </button>
              <div className="group-2">
                <div className="overlap-group">
                  <img className="line" alt="marker.png" src="marker.png" />
                  <button onClick={() => navigate('/')} className="text-wrapper-2">Home</button>
                </div>
                <div>
                  <button onClick={() => navigate('/Signup')} className="text-wrapper-3">Login</button>
                </div>
                <div>
                  <button onClick={() => navigate('/AboutUs')} className="text-wrapper-4">About Us</button>
                </div>
              </div>
              <div className="donthaveaccount">don't have an account?</div>
              <button onClick={() => navigate('/SignUp')} className="sign-up1" target="_blank">
                sign up
              </button>
            </div>
          </div>
          <img className="img6" alt="page6.jpg" src="page6.jpg" />
        </div>
      </form>
    </animated.div>
  );
};

export default Signin;