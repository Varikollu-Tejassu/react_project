/* Import Section - Start */

/* React Imports - Start */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/images/login_bg.png"


/* React Imports -End */

/* Import Section - End */


/* Function - Start */
const Login = () => {

    // Usesate hooks which initializs state value as an empty string
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  /* Render View Return - Start */

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
  )

  /* Render View Return - End */
}
/* Function - End */
export default Login;
/* Export default functionName */