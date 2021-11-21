const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    var events = [

    {
        eventId : eventId,
        eventName : eventName,
        dateTime : dateTime,
        location : location
    }
    ]
    res.json({ });
});

router.get("/:evnetId", (req, res) => {
    var eventId = req.params
    res.json({ message: eventId });
});

// router.post("/",(req,res,next) => {
//     const {firstName, lastName, password, email, birthdate, gender} = req.body ;
//     res.json({"message" : password })
// });

module.exports = router;