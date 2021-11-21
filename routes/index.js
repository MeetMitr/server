const express = require('express');
const router = express.Router();

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "admin" ,
//   password : "admin"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

router.get("/add" , (req,res) => {
    var a = req.query.x
    var b = req.query.y
    res.send({"ans" : a, "ans2" : b})
    // res.json({ message: "Ahoy!" });

})

// router.get("/register", (req, res) => {
//     res.json({ message: "let's register!" });
// });

router.get("/", (req, res) => {
    res.json({ message: "Ahoy!" });
});

// router.post("/register",(req,res,next) => {
//     const {firstName, lastName, password, email, birthdate, gender} = req.body ;
//     // res.json({"message" : password })
// });




module.exports = router;