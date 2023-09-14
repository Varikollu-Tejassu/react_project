const express = require('express')
const {create, userdata,logindata} = require('../../controller/profile/profilecontroller');
const { verifyuser } = require('../../middleware/authentication');

var router = express.Router();



router.get(`/profiledata/:email`, userdata)

router.get('/logindata/:email', logindata)

// router.use('/:selected', selectedEvents)

router.use('/',verifyuser, create);




module.exports=router;