const express = require('express')
const authRoutes = require('./routes/auth_route')
const planRoutes = require('./routes/plan_route')
const cryptoInfoRoutes = require('./routes/crypto_info_route')
const app = express()

app.use('/api/auth', authRoutes)
app.use('/api/plan', planRoutes)
app.use('/api/crypto-info', cryptoInfoRoutes)
module.exports = app