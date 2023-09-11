// Importing required components
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginservice from  "../../services/signin-up/loginService";
import logo from "../../assets/images/login_bg.png";
import image2 from "../../assets/images/image2.png";

// Creating login component
const Login = () => {

  // Usesate hooks which initializs state value as an empty string
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

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

  const loginhandle = async (e)=>{
    e.preventDefault();
  loginservice.userLogin(email,password).then(response=>{
    if(response){
      navigate('/dashboard')
    }
  })
  }
 
  


  return (
    <div  className ="login-container" >
    <div className='login-image-container' id="my-div"> 
        <img src={logo} />
    </div>
    <div className="login-form">
          <div> 
              <img src={image2} />
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
  );
};

export default Login;
