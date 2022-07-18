let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/curs_nodejs', (err, res) => {
    if (err) {
        throw err
    } else {
       console.log('Connected to database')}
    })












