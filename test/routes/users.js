"use strict"; // per emprar expressions de js més modernes

const express = require("express");
let UsuariController = require("../controllers/usuari");

const api = express.Router();

api.post("/registre", UsuariController.guardarUsuari);
api.post("/veureusuari", UsuariController.veureUsuari);
api.get("/veuretotsusuaris", UsuariController.veureTotsUsuaris);
api.put("/actualitzar-usuari/:id", UsuariController.actualitzarUsuari);
/*
api.post("/post", (req, res) => {
  res.json(req.body); // et torna un json amb les dades. al postman vas al body, form-encode i poses els camps/dades amb els valors que vulguis
});
*/

module.exports = api;
