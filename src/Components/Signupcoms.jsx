import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const SignupPage = () => {
  const navigate = useNavigate();

  // state untuk menyimpan nilai input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // new state untuk menyimpan nilai role (default: customer)
  const [role, setRole] = useState("customer");

  // state untuk menyimpan pesan error
  const [error, setError] = useState(null);

  // State to manage the success popup
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // fungsi untuk mengubah state ketika input berubah
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
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

  // fungsi untuk memeriksa apakah password dan confirm password sama
  const checkPasswordMatch = (newPassword, newConfirmPassword) => {
    if (newPassword !== newConfirmPassword) {
      // jika tidak sama
      setError("Password didn't match"); // ubah state error menjadi pesan ini
    } else {
      // jika sama
      setError(null); // ubah state error menjadi null
    }
  };

  // fungsi untuk menangani klik tombol sign up
  const handleSignUp = async () => {
    if (!name || !email || !password || !confirmPassword || error) {
      // Tambahkan logika tambahan jika diperlukan untuk menangani form yang tidak valid
      return;
    }

    try {
      // Replace the following line with your actual API integration using axios
      const response = await axios.post('http://localhost:8000/api/register', {
        name,
        email,
        password,
        confirmPassword,
        role, // include the user role in the request
      });

      // Handle successful signup response here
      console.log('Signup successful:', response.data);

      // Show the success popup
      setShowSuccessPopup(true);
    } catch (error) {
      // Handle error scenarios
      console.error('Signup failed:', error.response ? error.response.data : error.message);
      // Update error state to display appropriate message to the user
      setError('Signup failed. Please try again.');
    }
  };

  // Function to handle OK button click in the success popup
  const handleOkButtonClick = () => {
    // Navigate to the verification page
    navigate('/Verification');
    // Hide the success popup
    setShowSuccessPopup(false);
  };

  return (
    <div className="signup-page">
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
            {/* hidden input field for user role */}
            <input type="hidden" name="role" value={role} />
            {/* elemen untuk menampilkan pesan error */}
            {error && <div className="error-message">{error}</div>}
            <button
              onClick={handleSignUp}
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
                <img className="line" alt="marker.png" src="marker.png" />
                <button onClick={() => navigate('/')} className="text-wrapper-2">
                  Home
                </button>
              </div>
              <div>
                <button onClick={() => navigate('/Signup')} className="text-wrapper-3">
                  Login
                </button>
              </div>
              <div>
                <button onClick={() => navigate('/AboutUs')} className="text-wrapper-4">About Us </button>
              </div>
            </div>
          </div>
        </div>
        <img className="img" alt="glass.jpg" src="glass.jpg" />
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="success-popup">
          <p>Your account has been successfully created!</p>
          <button onClick={handleOkButtonClick}>OK</button>
        </div>
      )}
    </div>
  );
};

export default SignupPage;
