const mongoose = require('mongoose');


//const mongoURI = "mongodb+srv://admin:admin@cluster0.eyww5.mongodb.net/nosql";
const mongoURI = "mongodb://localhost:27017/myapp";

const initServer = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to DB !!");
    } catch (e) {
        console.log(e);
        throw e;
    }
};

module.exports = initServer;