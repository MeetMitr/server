const express = require("express");
const router = express.Router();
const { uuid } = require('uuidv4');
const bcrypt = require('bcrypt');
const mysql = require("mysql");

const db= mysql.createConnection({
  user: "root",
  host: "34.87.51.10",
  password: "admin",
  database: "main",
});

router.get("/", (req, res) => {
  res.json({
    "00001": {
      name: "Poom's Party",
      datetime: "2001-03-05 01:01:01",
      location: "Address1",
    },
    "00002": {
      name: "ม็อบสนับสนุนสถาบัน",
      datetime: "2001-03-05 02:02:02",
      location: "Address2",
    },
    "00003": {
      name: "ม็อบสนับสนุนสถาบัน2",
      datetime: "2001-03-05 02:02:02",
      location: "Address2",
    },
    "00004": {
      name: "ม็อบสนับสนุนสถาบัน3",
      datetime: "2001-03-05 03:03:03",
      location: "Address3",
    },
    "00005": {
      name: "ม็อบสนับสนุนสถาบัน4",
      datetime: "2001-03-05 04:04:04",
      location: "Address4",
    },
    "00006": {
      name: "ม็อบสนับสนุนสถาบัน5",
      datetime: "2001-03-05 05:05:05",
      location: "Address5",
    },
    "00007": {
      name: "ม็อบสนับสนุนสถาบัน6",
      datetime: "2001-03-05 06:06:06",
      location: "Address6",
    },
  });
});

router.get("/:searchname", (req, res) => {
  console.log("finding...")
  const searchName = req.params.searchname;
  console.log(searchName)
  let sql = `SELECT * FROM Event WHERE name LIKE '%${searchName}%'`;
  db.query(sql, (err, result) => {
      if (err) throw err;
    console.log(result);
    res.json( result );

  });
  // res.json({ message: "Ahoy!", id: id });
});

module.exports = router;
