const express = require("express")
const { handleSignin, handleSignup } = require("./controller")

const router = express.Router()

router.route('/signin').post(handleSignin)

router.route('/signup').post(handleSignup)

module.exports = router
