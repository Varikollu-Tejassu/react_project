const express = require('express');

const dotenv =require('dotenv')

const cors = require('cors')

const mysql2 = require('mysql2')

const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const calendar = require('./routes/calendar/calendarroutes')
const manageEvents = require('./routes/manageEvents/manageEventsroutes')
// const profile = require('./routes/profile/profileroutes')
// const profileAllocation = require('./routes/projectAllocation/projectAllocationroutes')
const signinUp =  require('./routes/signin-up/signin-uproutes')

dotenv.config();
const app = express()


const corsOptions ={
    origin:process.env.AUTH_URL,
    credentials:true,
   
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));



//routes
app.use("/api/calendar",calendar)
app.use("/api/manageEvents",manageEvents)
// app.use("/api/profile",profile)
// app.use("/api/projectAllocation",profileAllocation,)
app.use("/api/signinUp",signinUp)






app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });



//when unmatched routes are found

app.use(async(req,res)=>{
    res.status(404).send('Route is not found.');
})

const db = require("./sequelize/models")
db.sequelize.sync(
  // to create tables everytime
  // {force:true}
  ).then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});


const port= process.env.PORT

// app.listen(port,()=>{
//     console.log(`server is running on ${port}`);
// });

module.exports=app;