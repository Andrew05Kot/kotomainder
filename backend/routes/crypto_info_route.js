const express = require('express')
const controller = require('../controllers/crypto_info_controller.js')
const router = express.Router()

router.get('/', controller.getAll)

module.exports = router