const express = require("express");
const {
  create,
  selectedEvents,
  selectedEventsbyweek,
} = require("../../controller/calendar/calendarcontroller");

var router = express.Router();

router.use(`/selectedEventsbyweek/:selected`, selectedEventsbyweek);

router.get(`/:selected`, selectedEvents);

<<<<<<< HEAD
router.get(`/selectedEventsbyweek/:selected`, selectedEventsbyweek)

router.get(`/:selected`, selectedEvents)

router.use('/', create)




module.exports=router;
=======
router.use("/", create);

module.exports = router;
>>>>>>> cf87b9b011aa94ddb5617a2d5d03d6fcc361b17e
