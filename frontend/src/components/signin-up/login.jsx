/* Import Section - Start */

/* React Imports - Start */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import logo from "../../assets/images/login_bg.png"


/* React Imports -End */

/* Import Section - End */


/* Function - Start */
=======
import "../../services/signin-up/loginService";
import logo from "../../assets/images/login_bg.png";
import image2 from "../../assets/images/image2.png";

// Creating login component
>>>>>>> origin/harinadhbuoy
const Login = () => {

    // Usesate hooks which initializs state value as an empty string
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  /* Render View Return - Start */

  function checkBreakpoint() {
    if (window.matchMedia('(max-width: 600px)').matches) {
      // console.log(document.getElementById('my-div').classList)
      document.getElementById('my-div').classList.remove("login-image-container")
      document.getElementById('my-div').classList.add("new")
    } 
    else {
    document.getElementById('my-div').classList.remove('new');
    document.getElementById('my-div').classList.add('login-image-container');
    }
  }
  
  window.addEventListener('resize', checkBreakpoint);
  


  return (
    <div  className ="login-container" >
    <div className='login-image-container' id="my-div"> 
        <img src={logo} />
    </div>
    <div className="login-form">
          <div> 
              <img src={image2} />
          </div>
      <form className='login-form-container' onSubmit={loginSubmit}>
         <h2>Sign In</h2>
        <input type="email" className= "input-field" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" className= "input-field" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br/>
        <button className='logbtn' class="login-btn" type="submit">Login</button>
        <p>Don't have account <Link to="/signup">Register here</ Link></p>
      </form>
    </div>
    </div>
  )

  /* Render View Return - End */
}
/* Function - End */
export default Login;
<<<<<<< HEAD
/* Export default functionName */
=======































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
