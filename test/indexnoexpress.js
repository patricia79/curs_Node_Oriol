let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/curs_nodejs', (err, res) => {
    if (err) {
        throw err
    } else {
       console.log('Connected to database')}
    })

    const http = require('http')
    const hostname = '127.0.0.1'
    const port = 3000
    const server = http.createServer((req, res) => { // tot això ho emmagatzemo a la cte server
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')// a la capçaleera de la petició un texte pla
        res.end('Hello World\n')// contesto un string
    })
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`)
    })
    












