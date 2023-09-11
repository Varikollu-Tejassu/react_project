
const express = require('express')
const {login,register} = require('../../controller/signin-up/signinUpcontroller')


var router = express.Router();




router.get('/login',login)

router.post('/register',register)








module.exports=router;