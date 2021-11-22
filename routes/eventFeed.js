const express = require('express');
const router = express.Router();
const db = require('../models/database')

router.get("/", (req, res) => {
    // var events = [

    // {
    //     eventId : eventId,
    //     eventName : eventName,
    //     dateTime : dateTime,
    //     location : location
    // }
    // ]
    let sql = "SELECT eventId,name,takePlace,district,province FROM Event";
    db.query(sql, (err, result) => {
        if (err) throw err;
      console.log(result);
      res.json( result );
    });
});

router.get("/:eventId", (req, res) => {
    var eventId = req.params
    res.json({ message: eventId });
});

// router.post("/",(req,res,next) => {
//     const {firstName, lastName, password, email, birthdate, gender} = req.body ;
//     res.json({"message" : password })
// });

module.exports = router;