const express = require('express');
const mysql = require("mysql");
const router = express.Router();
const { uuid } = require('uuidv4');
const bcrypt = require('bcrypt');

const db= mysql.createConnection({
    user: "root",
    host: "34.87.51.10",
    password: "admin",
    database: "main",
});

// router.get("/", (req, res) => {
//     let sql = "SELECT * FROM User";
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//       console.log(result);
//     //   res.json( result );
//       console.log(uuid())
//     });
// });

router.post("/",(req,res,next) => {
    db.connect(function(err) {
        if (err) throw err;
        const {firstName, lastName, password, email, birthdate, gender} = req.body;
        const password_hash = bcrypt.hashSync(password, 10);
        var sql = `INSERT INTO User (userId, email, gender, profileName, phoneNo, bio, birthdate, password, firstName, middleName, lastName, hideGender, numberOfPenalty) VALUES (${"'"+uuid()+"'"},${"'"+email+"'"}, ${"'"+gender+"'"},'profileName', '','',${"'"+birthdate+"'"},${"'"+password_hash+"'"}, ${"'"+firstName+"'"},'',${"'"+lastName+"'"},0,0)`;
        db.query(sql, function (err, result) {
          if (err) throw err;
          console.log("register success")
          res.json("register success")
        });
      });
});

// var sql = "select * from User"
// db.connect(function(err) {
//     if (err) throw err;
//     var sql = "INSERT INTO User (userId, email, gender, profileName, phoneNo, bio, birthdate, password, firstName, middleName, lastName, hideGender, numberOfPenalty) VALUES ('123abcd','example1@gmail.com', 'female','thisisProfilename', '08088888','bio','2000-01-01','8C6976E5B5410415BDE908BD4DEE15DFB167A9C873FC4BB8A81F6F2AB448A918','first','mid','last',0,0)";
//     db.query(sql, function (err, result) {
//       if (err) throw err;
//       /*Use the result object to get the id:*/
//     //   console.log("1 record inserted, ID: " + result.insertId);
//     });
//   });

module.exports = router;