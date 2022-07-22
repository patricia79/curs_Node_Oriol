"use strict"; // per emprar expressions de js més modernes

const express = require("express");
let UsuariController = require("../controllers/usuari");
let ImatgeController = require("../controllers/imatge");

const api = express.Router();
let multipart = require("connect-multiparty");

// middleware per a l'upload de fitxers: realitzar un middleware a on li hem de definir la ruta de
// la carpeta on volem guardar els fitxers

let md_upload = multipart({ uploadDir: "./uploads/users" });

api.post("/registre", UsuariController.guardarUsuari);
api.post("/veureusuari", UsuariController.veureUsuari);
api.get("/veuretotsusuaris", UsuariController.veureTotsUsuaris);
api.put("/actualitzar-usuari/:id", UsuariController.actualitzarUsuari);
api.delete("/borrarusuari/:id", UsuariController.borrarUsuari);

api.post("/upload-image-user/:id", [md_upload], ImatgeController.uploadImages);



/*
api.post("/post", (req, res) => {
  res.json(req.body); // et torna un json amb les dades. al postman vas al body, form-encode i poses els camps/dades amb els valors que vulguis
});
*/

module.exports = api;
