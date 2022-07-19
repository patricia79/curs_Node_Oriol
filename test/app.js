const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/get', (req, res) => {
    res.send('Sóc un get')
})


app.post('/post', (req, res) => {
    res.send('Sóc un post')
})


app.put('/put', (req, res) => {
    res.send('Sóc un put')
})


app.delete('/delete', (req, res) => {
    res.send('Sóc un delete')
})




module.exports = app