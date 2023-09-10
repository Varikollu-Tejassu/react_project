
const express = require('express')
const {create,getdata, postdata} = require('../../controller/calendar/calendarcontroller')

var router = express.Router();




router.get('/',create)

router.get('/:id',getdata)

router.post('/add',postdata)


module.exports=router;