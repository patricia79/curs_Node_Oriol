let mongoose = require('mongoose')
const app = require('./app')
const port = 3000




mongoose.connect('mongodb://localhost:27017/curs_nodejs', (err, res) => {
    if (err) {
        throw err
    } else {
        app.listen(port, ()=>{
            console.log(`Server's exemple`);
        })
       console.log('Connected to database')}
    })

    
    
