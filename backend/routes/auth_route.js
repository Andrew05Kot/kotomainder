const express = require('express')
const controller = require('../controllers/auth_controller')
const router = express.Router()

router.get('/login', controller.login)
router.get('/register', controller.register)

module.exports = router