
const express = require('express')
const {create,selectedEvents, selectedEventsbyweek} = require('../../controller/calendar/calendarcontroller')

var router = express.Router();



router.use('/selectedEventsbyweek', selectedEventsbyweek)

router.use('/:selected', selectedEvents)

router.use('/', create)




module.exports=router;