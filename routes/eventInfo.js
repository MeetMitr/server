const express = require('express');
const router = express.Router();

router.get("/:eventId", (req, res) => {
    res.json({ message: "Hello eventInfo!" });
});

router.get("/:eventId/about", (req, res) => {
    res.json({ message: "Hello eventInfo!" });
});

router.get("/:eventId/location", (req, res) => {
    res.json({ message: "Hello eventInfo!" });
});

router.get("/:eventId/att", (req, res) => {
    res.json({ message: "Hello eventInfo!" });
});

router.get("/:eventId/date", (req, res) => {
    res.json({ message: "Hello eventInfo!" });
});

router.get("/:eventId/imageUrl", (req, res) => {
    res.json({ message: "Hello eventInfo!" });
});

router.post("/:eventId",(req,res,next) => {
    const {isJoin} = req.body ;
    res.json({"message" : req.params.eventId + isJoin })
});

module.exports = router;