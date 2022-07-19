const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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


app.get('/get', (req, res) => {
    res.send('Sóc un get')
})


app.post('/post', (req, res) => {
    res.json(req.body)// et torna un json amb les dades. al postman vas al body, form-encode i poses els camps/dades amb els valors que vulguis
})


app.put('/put', (req, res) => {
    res.send('Sóc un put')
})


app.delete('/delete', (req, res) => {
    res.send('Sóc un delete')
})




module.exports = app