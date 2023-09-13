// Importing required components
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginservice from  "../../services/signin-up/loginService";
import logo from "../../assets/images/login_bg.png";
import image2 from "../../assets/images/image2.png";

<<<<<<< HEAD
/* React Imports - Start */

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SigninService from  "../../services/signin-up/loginService";
import logo from "../../assets/images/login_bg.png";
import image2 from "../../assets/images/image2.png";
import 'react-toastify/dist/ReactToastify.css';
import {  toast } from 'react-toastify';

/* React Imports -End */

/* Import Section - End */


/* Function - Start */
=======
// Creating login component
>>>>>>> cf87b9b011aa94ddb5617a2d5d03d6fcc361b17e
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

<<<<<<< HEAD
=======
  // Usesate hooks which initializs state value as an empty string
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

>>>>>>> cf87b9b011aa94ddb5617a2d5d03d6fcc361b17e
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
<<<<<<< HEAD
  
  window.addEventListener('resize', checkBreakpoint);

  const loginhandle = async (e)=>{
    e.preventDefault();
  SigninService.userLogin(email,password).then(response=>{
    if(response.statusText==="OK"){
      console.log(response.data.token)
      document.cookie = response.data.token;
      toast.success('Login success', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

      navigate('/dashboard')

    }
    if(response.status===400){
      toast.warning("Invalid Username or Password", {position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"})
    }
    
  }).catch((error) => {

    console.error("Fetch error:", error);

    toast.error("Invalid Username or Password.",{
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });

  });
  }
=======
>>>>>>> cf87b9b011aa94ddb5617a2d5d03d6fcc361b17e
  
  window.addEventListener('resize', checkBreakpoint);

  const loginhandle = async (e)=>{
    e.preventDefault();
  loginservice.userLogin(email,password).then(response=>{
    if(response){
      alert("LOGIN SUCCESSFULL")
      navigate('/dashboard')
    }
    else{
      alert("Invalid Credentials");
    }
  })
  }
 
  


  return (
    <div  className ="login-container" >
    <div className='login-image-container' id="my-div"> 
<<<<<<< HEAD
        <img src={logo} alt='' />
    </div>
    <div className="login-form">
          <div> 
              <img src={image2} alt='' />
=======
        <img src={logo} />
    </div>
    <div className="login-form">
          <div> 
              <img src={image2} />
>>>>>>> cf87b9b011aa94ddb5617a2d5d03d6fcc361b17e
          </div>
      <form className='login-form-container' onSubmit={loginhandle}>
         <h2>Sign In</h2>
        <input type="email" className= "input-field" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" className= "input-field" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br/>
        <button className='logbtn' class="login-btn" type="submit">Login</button>
        <p>Don't have account <Link to="/signup">Register here</ Link></p>
      </form>
    </div>
    </div>
<<<<<<< HEAD
  )
=======
  );
};
>>>>>>> cf87b9b011aa94ddb5617a2d5d03d6fcc361b17e

export default Login;
