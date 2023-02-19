const express = require('express')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth_route')
const planRoutes = require('./routes/plan_route')
const cryptoInfoRoutes = require('./routes/crypto_info_route')


const app = express()

app.use(require('morgan')('dev'))
app.use(require('cors')())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)
app.use('/api/plan', planRoutes)
app.use('/api/crypto-info', cryptoInfoRoutes)
module.exports = app