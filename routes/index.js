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

router.get('/query', (req, res) => {
	const name = req.query.name
	const occupation = req.query.occupation

	const data = {
		name: name,
		occupation: occupation
	}

	res.render('profile', data)
})

router.get('/:path', (req, res) => {
	const path = req.params.path

	res.json({
		data: path
	})

})

router.get('/:profile/:username', (req, res) => {
	const profile = req.params.profile
	const username = req.params.username

	res.json({
		profile: profile,
		username: username
	})
})

module.exports = router

