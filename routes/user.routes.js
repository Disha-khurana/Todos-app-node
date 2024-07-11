const express = require('express')
const { login, signup , getLogin , getSignup,setBookmark, getUserProfile } = require('../controller/user.controller')
const auth = require("../middlewares/auth")

const router = express.Router()


router.get('/login' , getLogin)
router.get('/signup' , getSignup)
router.post('/login' , login)
router.post('/signup' , signup )
router.get('/profile',auth,getUserProfile)
router.get('/:id/set',setBookmark)



module.exports = router