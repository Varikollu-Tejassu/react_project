const express = require("express");
const creating = require("../../sequelize/models");
const table = creating.calendar;

const create = async (req, res, next) => {
  try {
    res.send("from");
  } catch (error) {
    res.status(400).send({ message: "duplicate" });
  }
};

const getevents = async (req, res) => {
  try {
    const gettingdata = await table.findAll();
    res.send(gettingdata);
  } catch (error) {
    console.log(error);
  }
};

const addevents = async (req, res) => {
    console.log("receiving req from fe");
  try {
    var event = {
      event_type: req.body.event_type,
      title: req.body.title,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      is_allday: (start_date && end_date) === "" ? true : false,
      other_details: req.body.other_details,
    };

    const gettingdata = await table.create(event);
    res.send(gettingdata);
  } catch (error) {
    console.log(error);
  }
};

const deleteevents = async (req, res) => {
  try {
    const { id } = req.params;
    const gettingdata = await table.destroy({
      where: { id: id },
    });
    res.send({ message: "deleted successfulluy" });
  } catch (error) {
    console.log(error);
  }
};

const updateevents = async (req, res) => {
  try {
    var event = {
      event_type: req.body.event_type,
      title: req.body.title,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      is_allday: (start_date && end_date) === "" ? true : false,
      other_details: req.body.other_details,
    };

    const { id } = req.params;

    const updatingdata = await table.update(event, {
      where: { id: id },
    });
    res.send({ message: "updated successfulluy" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { create, getevents, addevents, deleteevents, updateevents };
