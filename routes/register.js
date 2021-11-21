const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "let's register!" });
});

router.post("/",(req,res,next) => {
    const {firstName, lastName, password, email, birthdate, gender} = req.body ;
    res.json({"message" : password })
});

module.exports = router;