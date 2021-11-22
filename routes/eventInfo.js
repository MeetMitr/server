const express = require('express');
const router = express.Router();
const mysql = require("mysql");
//to do : send -> name, hostUserId, description, location(address, district, province, zipcode)
//                createTimestamp 

const db= mysql.createConnection({
    user: "root",
    host: "34.87.51.10",
    password: "admin",
    database: "main",
});

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