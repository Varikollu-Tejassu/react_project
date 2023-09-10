
const express = require('express')
const {create,getdata,postdata} = require('../../controller/manageEvents/manageEventscontroller')

const{ verifyuser}= require('../../middleware/authentication')

var router = express.Router();




router.get('/', verifyuser , create)

router.get('/:id',getdata)

router.post('/add',postdata)


module.exports=router;