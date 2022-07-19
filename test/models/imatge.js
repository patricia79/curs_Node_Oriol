"use strict"; // per emprar expressions de js més modernes

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ImatgeSchema = Schema({
  arxiu: String,
  usuari: { type: Schema.ObjectId, ref: "Usuari" },
});

module.exports = mongoose.model("Imatge", ImatgeSchema);
