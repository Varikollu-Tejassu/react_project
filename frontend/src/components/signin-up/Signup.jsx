// Importing required components
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
<<<<<<< HEAD
import "../../services/signin-up/SignupService";
import logo from "../../assets/images/login_bg.png"
import image2 from "../../assets/images/image2.png"
=======
import SignupService from  "../../services/signin-up/SignupService";
import logo from "../../assets/images/login_bg.png"
import image2 from "../../assets/images/image2.png";
import '../../App.css';


>>>>>>> cc87bb8f32e2fd239673bb77420df6d7d85aceab

// Creating signup component
const Signup = () => {

  // Usesate hooks which initializs state value as an empty string
<<<<<<< HEAD
  const [name, setName] = useState('');
=======
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
>>>>>>> cc87bb8f32e2fd239673bb77420df6d7d85aceab
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

    if (password !== confirmpassword) {
      console.error("password and confirm password din't matched");
      alert("password and confirm password din'nt match");
      setPasswordsMatch(false);
      return;
    }

    try {
<<<<<<< HEAD
      // Calling backend server here
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        // Passing user data to the server 
        body: JSON.stringify({ name, email, password, dob }),
      });

      const data = await response.json();
      console.log('Signed up successfully with ID:', data.id);
      alert("Registration successful");
      navigate('/login');
    }

    // Catching occurring
=======
  
    
      SignupService.userRegistration(firstname,lastname,email,dob,password).then((response) =>{
        navigate('/')
      })
      .catch((error) => console.log(error));


    }

    
>>>>>>> cc87bb8f32e2fd239673bb77420df6d7d85aceab
    catch (error) {
      console.error('Error signing up:', error);
    }
  };


  return (

    <div  className ="login-container" >
    <div className='login-image-container2' id="my-div"> 
<<<<<<< HEAD
        <img src={logo} />
    </div>
    <div className="login-form2">
          <div className='my-image'> 
              <img src={image2} />
          </div>
      <form className='login-form-container2'>
      <h2>Sign Up</h2>
        <input type="text" className= "input-field" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
=======
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
>>>>>>> cc87bb8f32e2fd239673bb77420df6d7d85aceab
        <input type="email" className= "input-field" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="date" className= "input-field" placeholder="date of birth" value={dob} onChange={(e) => setDob(e.target.value)} required />
        <input type="password" className= "input-field" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="password"className= "input-field" placeholder=" confirm Password" value={confirmpassword} onChange={(e) => {
          setConfirmPassword(e.target.value);
          setPasswordsMatch(e.target.value === password);
        }} required />
        {!passwordsMatch && <p style={{ color: 'red' }}>passwords did'nt matched</p>}
        <button type="submit" class="login-btn">Sign Up</button><br/>
<<<<<<< HEAD
        <p>Already have an account <Link to="/login">Click here</ Link></p>
=======
        <p>Already have an account <br/> <Link to="/">Click here</ Link></p>
>>>>>>> cc87bb8f32e2fd239673bb77420df6d7d85aceab
      </form>
    </div>
    </div>
  );
<<<<<<< HEAD
=======

>>>>>>> cc87bb8f32e2fd239673bb77420df6d7d85aceab
};

export default Signup;