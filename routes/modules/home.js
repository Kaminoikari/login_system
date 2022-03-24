const express = require('express')
const router = express.Router()
const User = require('../../models/accounts')
const session = require('express-session')

router.get('/', (req, res) => {
    const id = req.session.userId
    return User.findById(id)
        .lean()
        .then(user => {
            if (id) {
                console.log('authenticated')
                return res.render('welcome', { user })
            } else {
                console.log('not authenticated')
                return res.render('index')
            }
        })
})

module.exports = router