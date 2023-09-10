

const express = require('express');
const creating = require('../../sequelize/models');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')


dotenv.config();

const table = creating.signinUp


const login = async(req,res)=>{
const user = await table.findOne({ where : {email:'hims@gmail.com'}});
 if(user){
    const password_valid = await bcrypt.compare('tejas123.',user.password);
    if(password_valid){
        const email = user.email
        const token = jwt.sign({ email },process.env.JWT_SECRET_KEY,{expiresIn:'1d'});
        res.cookie('token',token)
        res.status(200).json({ token : token });
    } else {
      res.status(400).json({ error : "Password Incorrect" });
    }
  
  }else{
    res.status(404).json({ error : "User does not exist" });
  }
  
  };






  const register= async(req, res, next)=>{
    //res.status(201).json(req.body);
    //add new user and return 201
    const salt = await bcrypt.genSalt(10);
    var usr = {
      first_name : req.body.first_name,
      last_name : req.body.last_name,
      email : req.body.email,
      dob : req.body.dob,
      password : await bcrypt.hash(req.body.password, salt)

    };
    // var usr = {
    //     first_name : 'hoimansgu',
    //     last_name : 'tejas',
    //     email : 'himash@gmail.com',
    //     dob : '2022-10-10',
    //     password :"hhdfgkhdfkg"
  
    //   };
    created_user = await table.create(usr);
    res.status(201).json(created_user);
  };








  const create = async (req,res)=>{

    try{
        const{email}=req.params;
        const gettingdata = await table.findOne({
            where : {
                email:email
            }
        })
        res.send(gettingdata);

    }
    catch(error){
        res.status(400).send({message:"duplicate"})
    }
}
  




module.exports ={login,register,create}
