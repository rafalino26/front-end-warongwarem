import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useSpring, animated } from "react-spring";

export const SignupPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("customer");
  const [error, setError] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(null); // Reset email error when the user starts typing
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordMatch(newPassword, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    checkPasswordMatch(password, newConfirmPassword);
  };

  const checkPasswordMatch = (newPassword, newConfirmPassword) => {
    if (newPassword !== newConfirmPassword) {
      setError("Password didn't match");
    } else {
      setError(null);
    }
  };

  const fadeInProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const handleSignUp = async () => {
    if (!name || !email || !password || !confirmPassword || error) {
      return;
    }

    // Check email format using a simple regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Email not valid. Please use a valid email.");
      return;
    }

    // Check password length
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    try {
      const response = await axios.post('https://wwbe.my.id/api/register', {
        name,
        email,
        password,
        confirmPassword,
        role,
      });

      console.log('Signup successful:', response.data);
      setShowSuccessPopup(true);
    } catch (error) {
      console.error('Signup failed:', error.response ? error.response.data : error.message);
      setError('Signup failed. Please try again.');
    }
  };

  const handleOkButtonClick = () => {
    navigate('/SignIn');
    setShowSuccessPopup(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    handleSignUp();
  };

  return (
    <animated.div style={fadeInProps} className="signup-page">
      <form onSubmit={handleFormSubmit}>
        <div className="div">
          <div className="overlap">
            <div className="text-wrapper">WARONGWAREM</div>
            <div className="group">
              <div className="Lets-get-start-wrapper">
                <p className="Lets-get-start">Lets get you started</p>
              </div>
              <div className="Name-inner">
                <input
                  className="frame-input-name"
                  placeholder="*required"
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <b className="emailaddress1">Email address</b>
              <div className="sign-up-inner">
                <input
                  className="frame-input"
                  placeholder="*required"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>

              <b className="Name">Name</b>
              <div className="passwordwrapper">
                <b className="password1">Password</b>
              </div>
              <input
                className="sign-up-child"
                placeholder="*required"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
              {error && password && password.length < 8 && (
                <div className="error-message1">Password must be at least 8 characters.</div>
              )}
              <div className="passwordwrapper2">
                <b className="password3">Confirm Password</b>
              </div>
              <input
                className="sign-up-child2"
                placeholder="*required"
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <input type="hidden" name="role" value={role} />
              {error && <div className="error-message">{error}</div>}
              <button
                type="submit"
                className="sign-up-container"
                disabled={!name || !email || !password || !confirmPassword || error}
              >
                <b className="sign-up2">sign up</b>
              </button>
              <div className="sign-up-item" />
              <b className="already-a-user1">Already a user?</b>

              <button onClick={() => navigate('/SignIn')} className="sign-in1" target="_blank">
                sign in
              </button>
              <div className="group-2">
                <div className="overlap-group">
                  <img className="line20" alt="marker.png" src="marker.png" />
                  <button onClick={() => navigate('/')} className="text-wrapper-2">
                    Home
                  </button>
                </div>
                <div>
                  <button onClick={() => navigate('/Signup')} className="text-wrapper-3">
                    Register
                  </button>
                </div>
                <div>
                  <button onClick={() => navigate('/AboutUs')} className="text-wrapper-4">About Us </button>
                </div>
              </div>
            </div>
          </div>
          <img className="img5" alt="page5.jpg" src="page5.jpg" />
        </div>
      </form>

      {showSuccessPopup && (
        <div className="success-popup">
          <p>Your account has been successfully created!</p>
          <button onClick={handleOkButtonClick}>OK</button>
        </div>
      )}
    </animated.div>
  );
};

export default SignupPage;
