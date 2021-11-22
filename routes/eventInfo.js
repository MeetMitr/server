const express = require('express');
const router = express.Router();
const db = require('../models/database')
//to do : send -> name, hostUserId, description, location(address, district, province, zipcode)
//                createTimestamp 

router.get("/:eventId", (req, res) => {
    var eventId = req.params;
    let sql = "SELECT * FROM Event WHERE eventId = "+ "'"+eventId.eventId+"'";
    db.query(sql, (err, result) => {
        if (err) throw err;
      console.log(result);
      res.json( result );
    });
});

module.exports = router;