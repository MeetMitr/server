const express = require('express');

const router = express.Router();
const { uuid } = require('uuidv4');
const bcrypt = require('bcrypt');
const db = require('../models/database')

router.post("/",(req,res) => {
    const {firstName, lastName, password, email, birthdate, gender} = req.body;
    console.log("HELLO" + firstName)
    const password_hash = bcrypt.hashSync(password, 10);
    var sql = `INSERT INTO User (userId, email, gender, profileName, phoneNo, bio, birthdate, password, firstName, middleName, lastName, hideGender, numberOfPenalty) VALUES ('${uuid()}','${email}', '${gender}','', '','','${birthdate}','${password_hash}', '${firstName}','','${lastName}',0,0)`;
    db.query(sql, function (err) {
        if (err) throw err;
        console.log("register success")
        res.json("register success")
    });
});

module.exports = router;