"use strict"; // per emprar expressions de js més modernes

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let user_routes = require("./routes/users");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", user_routes); // definir ruta base sobre la que treballarem

/*
const funcioTest = () => {
    console.log('funcioTest');
}

const funcioTest2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(true)
        }, 3000)
        })}

//middle1
app.use((req, res, next) => {
    setTimeout(() => {
    console.log('Middleware 1')
    funcioTest()
    next()
    }, 2000)
   

})

//middle2
app.use(async (req, res, next) => {
    const resProm = await funcioTest2()
    console.log('Middleware 2, resProm: ', resProm) // el resProm es true
     next()
   })
 */

module.exports = app;
