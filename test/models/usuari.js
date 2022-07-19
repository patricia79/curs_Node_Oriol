'use strict';// per emprar expressions de js més modernes

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let UsuariSchema = Schema({
    nom: String,
    cognom: String,
    email: String,
    clau: String
})

module.exports = mongoose.model('Usuari', UsuariSchema)