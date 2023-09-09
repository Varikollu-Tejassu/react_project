<<<<<<< HEAD
/* Import Section - Start */

/* React Imports - Start */
import React from 'react'

/* React Imports -End */

/* Import Section - End */


/* Function - Start */
const Login = () => {

  
  /* Render View Return - Start */

  return (
    <div>login</div>
  )

  /* Render View Return - End */
}
/* Function - End */
export default Login;
/* Export default functionName */
=======
// Importing required components
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from "../../assets/images/login_bg.png"
// Creating login component
const Login = () => {

  // Usesate hooks which initializs state value as an empty string
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <div  className ="login-container" >
    <div className='login-image-container'> 
        <img src={logo} />
    </div>
    <div className="login-form">
      <form className='login-form-container'>
         <h2>Sign In</h2>
        <input type="email" className= "input-field" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" className= "input-field" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br/>
        <button className='logbtn' class="login-btn" type="submit">Login</button>
        <p>Don't have account <Link to="/signup">Register here</ Link></p>
      </form>
    </div>
    </div>
  );
};

export default Login;































//   // HandleLogin function which store user login credentials and calls the backend to check wheather they are registered users or not and based respponse
//   // From server if the user exists then it navigates to user profile page and displays their data 
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {

//       // Calling backend server here
//       const response = await fetch('http://localhost:3000/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },

//         //passing login credentials to server for validation
//         body: JSON.stringify({ email, password }),
//       });

//       // If response ok (user registered or exist) navigates to profile page
//       if (response.ok) {
//         const userData = await response.json();
//         navigate('/profile', { state: { user: userData } });

//       } else {
//         const errorData = await response.json();
//         console.error('Error logging in:', errorData.error);
//       }

//     }

//     // Catching occuring error
//     catch (error) {
//       console.error('Error logging in:', error);
//     }
//   };
>>>>>>> origin/harinadhbuoy
