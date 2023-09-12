
const express = require('express')
const {create, getevents,addevents,deleteevents,updateevents} = require('../../controller/manageEvents/manageEventscontroller')

const{ verifyuser}= require('../../middleware/authentication')

var router = express.Router();




router.get('/', verifyuser , create)

router.use('/getevent',getevents)

router.post('/addevent', addevents)

router.patch('/updateevent/:id', updateevents)

router.delete('/deleteevent/:id', deleteevents)

module.exports=router;