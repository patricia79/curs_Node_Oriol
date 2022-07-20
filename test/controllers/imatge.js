"use strict"; // per emprar expressions de js més modernes

const imatge = require("../models/imatge");
let Imatge = require("../models/imatge");

    function uploadImages(req, res) {
        let imatge = new Imatge();
        let userId = req.params.id;
        let file_name = "No pujat...";
    
        //anem a comprobar si rebem quelcom per les variables globals de la petició files
    
        if(req.files){
            //si rebem algun fitxer
            let file_path = req.files.image.path;
            let file_split = file_path.split("\\");// el split separa el path per els \
            file_name = file_split[2];
            // console.log(file_split);// per provar i veure si he recuperat el nom del fitxer correcte
            imatge.arxiu = file_name // poblem l'objecte amb el nom del fitxer
            imatge.usuari = userId // poblem l'objecte amb l'id del'usuari

           let ext_split = file_path.split("\.")
            let file_ext = ext_split[1]

            if(file_ext == "png" || file_ext == "jpg" || file_ext == "jpeg" || file_ext == "gif"){
                //si el fitxer és una imatge
                imatge.save((err, imatgeGuardada) => {
                    if(err){
                        res.status(500).send({message: "Error al guardar la imatge"})
                    }else{
                        if(!imatgeGuardada){
                            res.status(404).send({message: "No s'ha guardat la imatge"})
                        }else{
                            res.status(200).send({imatge: imatgeGuardada})
                        }
                    }
                })
            } else {
                //si no és una imatge
                res.status(404).send({message: "Extensió no vàlida"})
            }
        }}
    


module.exports = uploadImages