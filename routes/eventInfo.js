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

router.post("/",(req,res,next) => {
    // var userId = req.query.userId;
    // var eventId = req.query.eventId;
    const {userId, eventId} = req.body;
    console.log("----->" + userId);
    console.log("----->" + eventId);
    var sql1 = "SELECT userId, eventId, status FROM UserJoinEvent WHERE userId = " + "'"+userId+"' && " + "eventId = '"+eventId+"'" ;
    db.query(sql1, function (err, result) {
        if (result[0] == null) {
            var sql2 = `INSERT INTO UserJoinEvent (userId, eventId, status) VALUES (${"'"+userId+"'"}, ${"'"+eventId+"'"}, 1)`;
            db.query(sql2, function (err, result) {
                if (err) throw err;
                console.log("join event success")
                res.json("join event success")
            });
        } else {
            if(result[0].status == 1){
                var sql3 = "UPDATE UserJoinEvent SET status='0' WHERE userId = " + "'"+userId+"' && " + "eventId = '"+eventId+"'";
            }else{
                var sql3 = "UPDATE UserJoinEvent SET status='1' WHERE userId = " + "'"+userId+"' && " + "eventId = '"+eventId+"'";
            }
            db.query(sql3, function (err, result) {
                if (err) throw err;
                console.log("update status success")
                res.json("update status success")
            });
            console.log("-------------")

            //var sql3 = "UPDATE UserJoinEvent SET status = 1 where userId = " + "'"+userId+"' &&" + "eventId = '"+eventId+"'"
            //console.log(result[0].status)
            // console.log(result[0] == null)
            //res.json(result)
        }
    });


    // var sql2 = `INSERT INTO UserJoinEvent (userId, eventId, status) VALUES (${"'"+userId+"'"}, ${"'"+eventId+"'"}, 1)`;
    // db.query(sql2, function (err, result) {
    //     if (err) throw err;
    //     console.log("join event success")
    //     res.json("join event success")
    // });
});
module.exports = router;