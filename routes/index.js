const express = require('express')
const router = express.Router()
const profiles = {
	jordan: {
		username: 'jordan',
		name: 'Jordan Walker',
		image: '/images/me.jpg',
		company: 'Insightsoftware',
		languages: ['C#', 'Python', 'JavaScript']
	},
	bgates: {
		username: 'bgates',
		name: 'Bill Gates',
		image: '/images/billg.jpg',
		company: 'Microsoft',
		languages: ['C#', 'C++', 'C']
	},
	sjobs: {
		username: 'sjobs',
		name: 'Steve Jobs',
		image: '/images/stevej.jpg',
		company: 'Apple',
		languages: ['Swift', 'Objective-C', 'Ruby']
	}
}

router.get('/', (req, res) => {
	res.render('index', {text: 'This is the dynamic data. Open index.js from the routes directory to see.'})
})

router.get('/profiles', (req, res) => {
	const keys = Object.keys(profiles)
	const list = []
	keys.forEach(key => {
		list.push(profiles[key])
	})

	const data = {
		profiles: list,
		timestamp: req.timestamp
	}

	res.render('profiles', data)
})

router.post('/createprofile', (req, res) => {
	const body = req.body
	body['languages'] = req.body.languages.split(', ')

	profiles[body.username] = body
	res.json({
		confirmation: 'success',
		data: profiles[body.username]
	})
	// res.redirect('/profile/'+body.username)
})

router.post('/addprofile', (req, res) => {
	const body = req.body
	body['languages'] = req.body.languages.split(', ')

	profiles[body.username] = body
	res.redirect('/profile/'+body.username)
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
	const currentProfile = profiles[username]

	if (currentProfile == null){
		res.json({
			confirmation: 'fail',
			message: 'Profile ' + username + ' not found'
		})

		return
	}

	currentProfile.timestamp = req.timestamp
	res.render('profile', currentProfile)
})

module.exports = router