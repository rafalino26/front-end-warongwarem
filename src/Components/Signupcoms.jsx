import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignupPage = () => {
  const navigate = useNavigate();

  // state untuk menyimpan nilai input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // state untuk menyimpan pesan error
  const [error, setError] = useState(null);

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
  const handleSignUp = () => {
    if (!name || !email || !password || !confirmPassword || error) {
      // Tambahkan logika tambahan jika diperlukan untuk menangani form yang tidak valid
      return;
    }

    // Logika untuk melakukan sign up, bisa Anda tambahkan sesuai kebutuhan

    // Navigasi ke halaman sign-in setelah berhasil sign up
    navigate('/SignIn');
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
            <div className="sign-up-inner">
              <input
                className="frame-input"
                placeholder="*required"
                type="text"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <b className="emailaddress1">Email address</b>
            <div className="Name-inner">
              <input
                className="frame-input-name"
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
              <button onClick={() => navigate('/AboutUs')}className="text-wrapper-4">About Us </button>
              </div>
              <div>
              <button onClick={() => navigate('/ContactUs')}className="text-wrapper-5">Contact Us </button>
              </div>
            </div>
          </div>
        </div>
        <img className="img" alt="glass.jpg" src="glass.jpg" />
      </div>
    </div>
  );
};

export default SignupPage;
