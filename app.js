const express = require("express");
const mysql = require("mysql");
const initServer = require('./configs/database.js');
const cors = require("cors");
const mongoose = require('mongoose');
const User = require('./models/user')

//import routers
const indexRouter = require('./routes/index');
const eventRouter = require('./routes/events');
const registerRouter = require('./routes/register');
const eventFeedRouter = require('./routes/eventFeed');
const eventInfoRouter = require('./routes/eventInfo');

var app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "34.124.227.137",
    password: "admin",
    database: "test",
});

app.use('/', indexRouter);
app.use('/event', eventRouter);
app.use('/register', registerRouter);
app.use('/eventFeed', eventFeedRouter);
app.use('/eventInfo', eventInfoRouter);


app.get("/test", (req, res) => {
    db.query("select * from name", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


app.get("/mongo", (req, res) => {
    User.find(function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
})



//connect db + start server
const PORT = process.env.PORT || 4000;
initServer().then(result => {
    app.listen(PORT, (req, res) => {
        console.log(`Server Started at PORT ${PORT}`);
    });
});