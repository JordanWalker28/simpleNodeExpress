const express = require("express")
const path = require('path')
const hoganMiddleware = require('hogan-middleware').__express
const indexRouter = require('./routes/index.js')
const port = 3000

const app = express()

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'mustache')
app.engine('mustache', hoganMiddleware)
app.use(express.static(path.join(__dirname, "public")))
app.use('/', indexRouter)
app.listen(port)

console.log('Server running on http://localhost:' + port)