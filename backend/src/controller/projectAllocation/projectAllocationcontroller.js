const express = require("express");
const creating = require("../../sequelize/models");
const moment = require('moment')
const table = creating.projectallocation;
const { Op } = require('sequelize')

const create = async (req, res) => {
  try {
    res.send("from");
  } catch (error) {
    res.status(400).send({ message: "duplicate" });
  }
};


const getprojectdetails = async (req,res)=>{
    try{
        const displaydata = await table.findAll()
        res.send(displaydata);
    }
    catch(error){
        console.log(error)
    }
}

module.exports ={create,getprojectdetails}
