var express = require('express')
var app = express()

app.get('/', (req, res) => {
    res.json({ message: 'Ahoy!' })
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT ${PORT}`);
});


