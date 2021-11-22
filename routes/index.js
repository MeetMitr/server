const express = require('express');
const router = express.Router();
const mysql = require("mysql");
const bcrypt = require('bcrypt');
const db = mysql.createConnection({
    user: "root",
    host: "34.87.51.10",
    password: "admin",
    database: "main",
});


// router.get("/add" , (req,res) => {
//     var a = req.query.x
//     var b = req.query.y
//     res.send({"ans" : a, "ans2" : b})
// })

// console.log("hello");
router.get("/", (req, res) => {
    // console.log("hello");
    // const {email, password} = req.body;
    // let sql = "SELECT email,password FROM User WHERE email = " + "'" +email+"'";
    // db.query(sql, (err, result) => {
    //     if (err) throw err;
    //   console.log(result);
    //   res.json( result );
    // });
    db.connect(function(err) {
        if (err) throw err;
        const {email, password} = req.body;
        var hash_password = "";
        var sql = "SELECT email,password FROM User WHERE email = " + "'" +email+"'";
        db.query(sql, function (err, result) {
          if (err) throw err;
          hash_password = result[0].password;
          if (bcrypt.compareSync(password, hash_password)) {
            res.json("login success");
            console.log("succ");
          }
          else {
              res.json("login fail");
              console.log("fail");
          }
        });
      });

    //res.json({ message: "Ahoy!" });
    // if(req.query.admin === 'true'){
    //     next()
    // } else {
    //     res.send('No auth')
    // }
});

module.exports = router;