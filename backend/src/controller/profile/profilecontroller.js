const express = require("express");
const creating = require("../../sequelize/models");
const moment = require("moment");
const table1 = creating.profile;
const table2 = creating.signinUp;

const { Op } = require("sequelize");

const userdata = async (req, res) => {
  const email = req.body.email;
  try {
    const getdata1 = await table1.findOne({
      where: { email: email },
    });

    res.send(getdata1);
  } catch (error) {
    console.log(error);
  }
};

const logindata = async (req, res) => {
  const email = req.body.email;
  try {
    const getdata2 = await table2.findOne({
      where: { email: email },
    });

    res.send(getdata2);
  } catch (error) {
    console.log(error);
  }
};

const create = async (req, res) => {
  try {
    res.send("from");
  } catch (error) {
    res.status(400).send({ message: "duplicate" });
  }
};

module.exports = { create, userdata, logindata };
