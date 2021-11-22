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

router.post('/' , (req, res) => {
    const {email, password} = req.body;
    db.query("SELECT email,password FROM User WHERE email = " + "'" +email+"'", (err, rows, fields) => {
        if (!err){
            hash_password = rows[0].password;
            if (bcrypt.compareSync(password, hash_password)) {
              res.json("login success");
            }
            else {
                res.json("login fail");
            }
        }
        else
            console.log(err);
    })
} );

module.exports = router;