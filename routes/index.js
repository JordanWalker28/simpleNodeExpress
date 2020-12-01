const express = require('express')
const router = express.Router()
const profiles = {
	jordan: {
		name: 'Jordan Walker',
		image: '/images/me.jpg',
		company: 'Insightsoftware',
		languages: ['C#', 'Python', 'JavaScript']
	},
	bgates: {
		name: 'Bill Gates',
		image: '/images/billg.jpg',
		company: 'Microsoft',
		languages: ['C#', 'C++', 'C']
	},
	sjobs: {
		name: 'Steve Jobs',
		image: '/images/stevej.jpg',
		company: 'Apple',
		languages: ['Swift', 'Objective-C', 'Ruby']
	}
}

router.get('/',  (req,res,next) => {
    res.render('index', null)
})

router.post('/addprofile', (req, res) => {
	const body = req.body
	body['languages'] = req.body.languages.split(', ')

	profiles[body.username] = body

	res.redirect('/profile/' + body.username)
})

router.get('/query', (req, res) => {
	const name = req.query.name
	const occupation = req.query.occupation

	const data = {
		name: name,
		occupation: occupation
	}

})

router.get('/:profile/:username', (req, res) => {
	const profile = req.params.profile
	const username = req.params.username
	const currentProfile = profiles[username]

	if(currentProfile == null){
		res.json({
			confirmation: 'fail',
			message: 'Profile ' + username + ' not found'
		})

		return
	}

	res.render('profile', currentProfile)
	
})

module.exports = router

