// Importing required components
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SignupService from  "../../services/signin-up/SignupService";
import logo from "../../assets/images/login_bg.png"
import image2 from "../../assets/images/image2.png";
import '../../App.css';
import { toast } from "react-toastify";



// Creating signup component
const Signup = () => {

  // Usesate hooks which initializs state value as an empty string
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();

  function checkBreakpoint() {
    if (window.matchMedia('(max-width: 600px)').matches) {
      // console.log(document.getElementById('my-div').classList)
      document.getElementById('my-div').classList.remove("login-image-container2")
      document.getElementById('my-div').classList.add("new")
    } 
    else {
    document.getElementById('my-div').classList.remove('new');
    document.getElementById('my-div').classList.add('login-image-container2');
    }
  }
  
  window.addEventListener('resize', checkBreakpoint);

  // Handlesignup function which performs some validations and calls backend server for storing data in database
  const handleSignUp = async (e) => {
    e.preventDefault();
    if(password.length>6){
      if(password !== confirmpassword){
        setPasswordsMatch(false);
      }else{
        SignupService.userRegistration(firstname,lastname,email,dob,password).then((res) =>{
        
                  if (res.status === 201) {
                    toast.success('Registered success', {
                      position: "top-right",
                      autoClose: 1000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                      });
          
          
                    navigate('/');
          
                  }
          
                  else if (res.status === 409) {
          
                    toast.warning("Email is already existed..",{
                      position: "top-right",
                      autoClose: 1000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    })
          
                  }
          
                }).catch((error) => {
          
                    console.error("Fetch error:", error);
          
                    toast.error("An error occurred during registration.");
                  });
              
                }
              }
    else{
      toast.warning("Email should be greater than 6 characters",{
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            })
    }
  }
  
 


  return (

    <div  className ="login-container" >
    <div className='login-image-container2' id="my-div"> 
        <img src={logo} alt='' />
    </div>
    <div className="login-form2">
          <div className='my-image'> 
              <img src={image2} alt='' />
          </div>
      <form className='login-form-container2' onSubmit={handleSignUp}>
      <h2>Sign Up</h2>
        <input type="text" className= "input-field" placeholder="Firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
        <input type="text" className= "input-field" placeholder="Lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
        <input type="email" className= "input-field" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="date" className= "input-field" placeholder="date of birth" value={dob} onChange={(e) => setDob(e.target.value)} required />
        <input type="password" className= "input-field" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="password"className= "input-field" placeholder=" confirm Password" value={confirmpassword} onChange={(e) => {
          setConfirmPassword(e.target.value);
          setPasswordsMatch(e.target.value === password);
        }} required />
        {!passwordsMatch && <p style={{ color: 'red' }}>passwords did'nt matched</p>}
        <button type="submit" class="login-btn">Sign Up</button><br/>
        <p>Already have an account <br/> <Link to="/">Click here</ Link></p>
      </form>
    </div>
    </div>
  );

};

export default Signup;