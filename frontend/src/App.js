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

export default App;







