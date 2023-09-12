const express = require("express");
const creating = require("../../sequelize/models");
const moment = require('moment')
const table = creating.calendar;
const { Op } = require('sequelize')

const create = async (req, res) => {
  try {
    res.send("from");
  } catch (error) {
    res.status(400).send({ message: "duplicate" });
  }
};

const selectedEvents = async (req, res) => {
  const { selected } = req.params;
  if (selected === "All") {
    try {
      const getselectedevents = await table.findAll();
      res.send(getselectedevents);
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const getselectedevents = await table.findAll({
        where: {
         event_type : selected,
        },
      });
      res.send(getselectedevents);
    } catch (error) {
      console.log(error);
    }
  }
};



const selectedEventsbyweek = async (req, res) => {
  const { selected } = req.params;
  if (selected === "All") {
      try {
        const getselectedevents = await table.findAll({
            where: {
                start_date: {
                    [Op.gte]: moment().toDate(),
                    [Op.lte]: moment().add(7, 'days').toDate()
                },
              },
        });
        res.send(getselectedevents);
      } catch (error) {
        console.log(error);
      }
    
  }else{
    try {
      const getselectedevents = await table.findAll({
        where: {
         event_type : selected,
         start_date: {
          [Op.gte]: moment().toDate(),
          [Op.lte]: moment().add(7, 'days').toDate()
      },
    },
      });
    res.send(getselectedevents);
    } catch (error) {
      console.log(error);
    }
  }
};






module.exports = {create,selectedEvents,selectedEventsbyweek}