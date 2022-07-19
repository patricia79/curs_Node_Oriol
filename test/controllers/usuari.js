"use strict"; // per emprar expressions de js més modernes

let Usuari = require("../models/usuari");


function guardarUsuari(req, res) {
let usuari = new Usuari();
let params = req.body // recollim totes les dades que arriben en la peticio amb el metode post

usuari.nom = params.nom;
usuari.cognom = params.cognom;
usuari.email = params.email;
usuari.clau = params.clau;

if(usuari.nom != null && usuari.cognom != null && usuari.email != null && usuari.clau != null){
    usuari.save((err, usuariStored) => {
        if(err){
            res.status(500).send({message: "Error al guardar l'usuari"});
        }else{
            if(!usuariStored){
                res.status(404).send({message: "No s'ha registrat l'usuari"});
            }else{
                res.status(200).send({usuari: usuariStored});
            }}
})}else{
    res.status(402).send({message: "Indica tots els camps/dades"});
}
}

module.exports = { 
    guardarUsuari 
};
