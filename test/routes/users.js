'use strict';// per emprar expressions de js més modernes


const express = require('express')
const api = express.Router()


api.get('/get', (req, res) => {
    res.send('Sóc un get')
})


api.post('/post', (req, res) => {
    res.json(req.body)// et torna un json amb les dades. al postman vas al body, form-encode i poses els camps/dades amb els valors que vulguis
})


api.put('/put', (req, res) => {
    res.send('Sóc un put')
})


api.delete('/delete', (req, res) => {
    res.send('Sóc un delete')
})

module.exports = api