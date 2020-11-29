const express = require("express")
const path = require('path')
const hoganMiddleware = require('hogan-middleware').__express

const app = express()

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'mustache')
app.engine('mustache', hoganMiddleware)
 
app.get('/',  (req,res,next) => {
    res.send("Hello Jordan!")

})

app.get('/json',  (req,res,next) => {
    const data = {
        'greeting':"Hello Again!"
    }
    res.send(data)
})

app.get('/home', (req, res, next) => {
    res.render('home', null)
})
app.listen(3000)