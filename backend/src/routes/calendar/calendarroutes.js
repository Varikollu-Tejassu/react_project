
const express = require('express')
const {create,selectedEvents, selectedEventsbyweek} = require('../../controller/calendar/calendarcontroller')

var router = express.Router();



router.get(`/selectedEventsbyweek/:selected`, selectedEventsbyweek)

router.get(`/:selected`, selectedEvents)

router.use('/', create)




module.exports=router;