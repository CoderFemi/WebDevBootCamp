const mongoose = require('mongoose')
const { dbConnection } = require('./mongoose')

dbConnection()

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);
const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });
console.log(amadeus)

Movie.insertMany([
    { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
    { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
    { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
    { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
    { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
])
    .then(data => {
        console.log("IT WORKED!")
        // console.log(data);
    })

Movie.findOne({ year: 2001 }).then(data => {
    console.log('Data has been found!', data)
})