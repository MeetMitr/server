const express = require('express')
const mysql = require('mysql')
const app = express()
const cors =require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "admin",
    database: "test"
})

app.get('/', (req, res) => {
    res.json({ message: 'Ahoy!' })
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT ${PORT}`);
});


