// Importing required components
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/images/login_bg.png";

// Creating signup component
const Signup = () => {
  // Usesate hooks which initializs state value as an empty string
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();

  // Handlesignup function which performs some validations and calls backend server for storing data in database
  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      console.error("password and confirm password din't matched");
      alert("password and confirm password din'nt match");
      setPasswordsMatch(false);
      return;
    }

    try {
      // Calling backend server here
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        // Passing user data to the server
        body: JSON.stringify({ name, email, password, dob }),
      });

      const data = await response.json();
      console.log("Signed up successfully with ID:", data.id);
      alert("Registration successful");
      navigate("/login");
    } catch (error) {
      // Catching occurring
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-image-container2">
        <img src={logo} />
      </div>
      <div className="login-form2">
        <form className="login-form-container2">
          <h2>Sign Up</h2>
          <input
            type="text"
            className="input-field"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className="input-field"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="date"
            className="input-field"
            placeholder="date of birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
          <input
            type="password"
            className="input-field"
            placeholder=" confirm Password"
            value={confirmpassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setPasswordsMatch(e.target.value === password);
            }}
            required
          />
          {!passwordsMatch && (
            <p style={{ color: "red" }}>passwords did'nt matched</p>
          )}
          <button type="submit" class="login-btn">
            Sign Up
          </button>
          <br />
          <p>
            Already have an account <Link to="/login">Click here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
