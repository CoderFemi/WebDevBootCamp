const mongoose = require('mongoose');

const dbConnection = () => {
    mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("MONGODB Connection is up and running!")
        })
        .catch(err => {
            console.log("OH NO ERROR!!!!")
            console.log(err)
        })
}

module.exports = { dbConnection }