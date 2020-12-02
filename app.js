const express = require("express")
const path = require('path')
const hoganMiddleware = require('hogan-middleware').__express
const indexRouter = require('./routes/index.js')
const registerRouter = require('./routes/register.js')
const port = 3000
var bodyParser = require('body-parser');

const timestamp = (req, res, next) => {
    const timestamp = new Date()
    req.timestamp = timestamp.toString()
    next()
  }
  


const app = express()

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'mustache')
app.engine('mustache', hoganMiddleware)
app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', indexRouter)
app.use('/register', registerRouter)
app.use(timestamp)
app.listen(port)

console.log('Server running on http://localhost:' + port)