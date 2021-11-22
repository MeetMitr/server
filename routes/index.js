const express = require('express');
const router = express.Router();

router.get("/add" , (req,res) => {
    var a = req.query.x
    var b = req.query.y
    res.send({"ans" : a, "ans2" : b})
})

router.get("/", (req, res) => {
    //res.json({ message: "Ahoy!" });
    if(req.query.admin === 'true'){
        next()
    } else {
        res.send('No auth')
    }
});

module.exports = router;