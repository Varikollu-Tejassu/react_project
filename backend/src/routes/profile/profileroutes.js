const express = require('express')
const {create, userdata,logindata} = require('../../controller/profile/profilecontroller')

var router = express.Router();



router.use('/profiledata', userdata)

router.use('/logindata', logindata)

// router.use('/:selected', selectedEvents)

router.use('/', create);




module.exports=router;