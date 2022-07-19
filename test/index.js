let mongoose = require('mongoose')
const express = require('express')


mongoose.connect('mongodb://localhost:27017/curs_nodejs', (err, res) => {
    if (err) {
        throw err
    } else {
       console.log('Connected to database')}
    })

    const app = express()
    const port = 3000

    app.get('/', (req, res) => {
        res.send('Hello girls')
    })

    app.listen(port, ()=>{
        console.log(`Server's exemple`);
    })