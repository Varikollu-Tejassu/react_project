import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authenticateUser from '../../services/authenticate/Authenticate';
import axios from 'axios'
const Protected = (props) => {
    const navigate = useNavigate();
    const {Component} = props
    console.log("in protected")
    useEffect(()=>{
    let login = localStorage.getItem('login')
    if(!login){
        navigate('/')
    }
    }
);


  return (
    <div>
        <Component/>
      
    </div>
  )
}

export default Protected
