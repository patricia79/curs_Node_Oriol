'use strict';// per emprar expressions de js més modernes

let Usuari = require('../models/usuari')
let Imatge = require('../models/imatge')

function proves(req, res) {
    res.status(200).send({message:'Provant controlador usuari'})
    }

module.exports = { proves }