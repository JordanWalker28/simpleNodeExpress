const express = require('express')
const router = express.Router()

router.get('/',  (req,res,next) => {
    res.send("Hello Jordan!")

})

router.get('/json',  (req,res,next) => {
    const data = {
        'greeting':"Hello Again!"
    }
    res.send(data)
})

router.get('/home', (req, res, next) => {
    res.render('home', null)
})

module.exports = router

