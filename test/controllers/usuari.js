"use strict"; // per emprar expressions de js més modernes

let Usuari = require("../models/usuari");

function guardarUsuari(req, res) {
  let usuari = new Usuari();
  let params = req.body; // recollim totes les dades que arriben en la peticio amb el metode post

  usuari.nom = params.nom;
  usuari.cognom = params.cognom;
  usuari.email = params.email;
  usuari.clau = params.clau;

  if (
    usuari.nom != null &&
    usuari.cognom != null &&
    usuari.email != null &&
    usuari.clau != null
  ) {
    usuari.save((err, usuariStored) => {
      if (err) {
        res.status(500).send({ message: "Error al guardar l'usuari" });
      } else {
        if (!usuariStored) {
          res.status(404).send({ message: "No s'ha registrat l'usuari" });
        } else {
          res.status(200).send({ usuari: usuariStored });
        }
      }
    });
  } else {
    res.status(402).send({ message: "Indica tots els camps/dades" });
  }
}

function veureUsuari(req, res) {
  let params = req.body;
  let email = params.email; // recollim el email que arriba en la peticio amb el metode post

  Usuari.findOne({ email: email.toLowerCase() }, (err, usuari) => {
    //permet cercar un registre per una propietat i hem de definir-li una arrow function amb l'error i l'objecte
    if (err) {
      res.status(500).send({ message: "Error en la sol·licitud" });
    } else {
      if (!usuari) {
        res.status(404).send({ message: "Les credencials no son correctes" });
      } else {
        res.status(200).send({ usuari }); //si no indiquem cap propietat, emprarà la de l'usuari que coincideix amb el nom de l'objecte
      }
    }
  });
}

module.exports = {
  guardarUsuari,
  veureUsuari
};
