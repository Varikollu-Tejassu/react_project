const express = require("express");
const creating = require("../../sequelize/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config();

const table = creating.signinUp;

const login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await table.findOne({ where: { email: email } });
  if (user) {
    const password_valid = await bcrypt.compare(password, user.password);
    if (password_valid) {
      const email = user.email;
      const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1d",
      });
      // document.cookie =`token=${response.data.token}`;
      console.log(" in ",token)
      res.status(200).json({ token: token });
    } else {
      res.status(400).json({ Error: "Password Incorrect" });
    }
  } else {
    res.status(404).json({ Error: "User does not exist" });
  }
};

const register = async (req, res, next) => {
 try{
  const { email } = req.body;

  const user = await table.findOne({ where: { email: email } });
  if (!user) {
    const salt = await bcrypt.genSalt(10);
    var usr = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      dob: req.body.dob,
      password: await bcrypt.hash(req.body.password, salt),
    };
    created_user = await table.create(usr);
    res.status(201).json(created_user);
  } else {

    res.status(200).send('User already exists');

  }

} catch (error) {

  console.error('Error creating user:', error);

  res.status(500).json({ error: 'Internal server error' });

}

};

const create = async (req, res) => {
  try {
    const { email } = req.params;
    const gettingdata = await table.findOne({
      where: {
        email: email,
      },
    });
    res.send(gettingdata);
  } catch (error) {
    res.status(400).send({ message: "duplicate" });
  }
};

module.exports = { login, register, create };
