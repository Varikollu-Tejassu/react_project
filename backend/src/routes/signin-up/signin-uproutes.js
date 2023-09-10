
const express = require('express')
const {login,register,create} = require('../../controller/signin-up/signinUpcontroller')


var router = express.Router();




router.get('/login',login)

router.post('/register',register)

router.get('/:email',create)






module.exports=router;