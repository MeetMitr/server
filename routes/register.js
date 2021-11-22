const express = require('express');
const mysql = require("mysql");
const router = express.Router();

const db= mysql.createConnection({
    user: "root",
    host: "34.87.51.10",
    password: "admin",
    database: "main",
});

router.get("/", (req, res) => {
    let sql = "SELECT * FROM Event";
    db.query(sql, (err, result) => {
        if (err) throw err;
      console.log(result);
      res.json( result );
    });
});

router.post("/",(req,res,next) => {
    const {firstName, lastName, password, email, birthdate, gender} = req.body ;
    res.json({"message" : password })
});

module.exports = router;