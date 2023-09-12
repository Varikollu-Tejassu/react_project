<<<<<<< HEAD
// src/App.js

// Importing required components
import React from 'react';
import Signup from './components/signin-up/Signup';
import Login from './components/signin-up/login';
// import User_profile from './components/';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div className="app">

      {/* Routing */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
         {/* <Route path="/profile" element={<User_profile />} />  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};
=======
/* Import Section - Start */

/* React Imports - Start */

import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"

/* React Imports -End */

/* Project components Imports - Start */

import Login from './components/signin-up/login';
import Signup from './components/signin-up/Signup';
import Calendar from "./components/calendar/Calendar"
import Layout from './components/layout/Layout';
import Profile from "./components/profile/Profile";
import ManageEvents from './components/manageEvents/ManageEvents';
import ProjectAllocation from './components/projectAllocation/ProjectAllocation';
// import Protected from './components/authenticate/Protected';

/* Project components Imports -End */

/* Import Section - End */



/* Function - Start */
function App() {
 
  
/* Render View Return - Start */
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/dashboard" element={<Layout/>}>
          <Route path="/dashboard/" element={<Calendar/>}/>
          <Route path="/dashboard/projectallocation" element={<ProjectAllocation/>}/>
          <Route path="/dashboard/manageevents" element={<ManageEvents/>}/>
          <Route path="/dashboard/profile" element={<Profile/>}/>
      </Route>

     </Routes>
     </BrowserRouter>

    </div>
  );

  /* Render View Return - End */
}
>>>>>>> cc87bb8f32e2fd239673bb77420df6d7d85aceab


/* Function - End */

/* Export default functionName */

export default App;







