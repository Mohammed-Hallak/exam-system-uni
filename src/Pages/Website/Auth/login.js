import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import Navbar from "../../../Components/Header/Navbar";
import logo from "../../../assets/Academix.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      // Fake
      const response = await axios.post("https://api.example.com/login", {
        email,
        password,
      });
      console.log("Response:", response.data);
      alert("Login successful!");
    } catch (error) {
      console.error("Error:", error);
      alert("Login failed!");
    }
  };

  return (
    <div>

      <Navbar />
      
      <div className="login-wrapper">
        <div className="content">
          <div className="login-box">
            <h2>Welcome Back</h2>
            <p>Enter your email and password to sign in</p>
            <form onSubmit={handleSubmit}>
              <label>Email</label>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label>Password</label>
              <input
                type="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <div className="remember-me">
                <label className="switch">
                  <input type="checkbox" id="remember" />
                  <span className="slider"></span>
                </label>
                <label htmlFor="remember">Remember me</label>
              </div>

              <button type="submit" className="sign-in-btn">
                Sign In
              </button>
            </form>

            <div className="signup">
              <p>
                Don't have an account? <a href="#">Sign up</a>
              </p>
            </div>
          </div>
        </div>

        
        <div className="side-background">
          <img src={logo} alt="Academix Logo" />
        </div>
      </div>
    </div>
  );
};

export default Login;
