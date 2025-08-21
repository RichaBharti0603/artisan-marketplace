import React from "react";
import "./LoginSignup.css";
import holidayBg from "../images/holiday-bg.jpg"; // ✅ Import image

const LoginSignup = () => {
  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${holidayBg})` }} // ✅ Apply here
    >
      <div className="login-box">
        <h2>Welcome to Vandana 🎄</h2>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <p className="signup-text">
            Don’t have an account? <a href="/signup">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
