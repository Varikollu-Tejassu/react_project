const express = require("express");
const {
  login,
  register,
} = require("../../controller/signin-up/signinUpcontroller");

var router = express.Router();

router.post("/login", login);

router.post("/register", register);

<<<<<<< HEAD

router.post('/login',login)

router.post('/register',register)








module.exports=router;
=======
module.exports = router;
>>>>>>> cf87b9b011aa94ddb5617a2d5d03d6fcc361b17e
