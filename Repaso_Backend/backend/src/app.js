const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { router } = require('./routes')
const app = express()
// Server port
const PORT = process.env.PORT || 4000
// Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
// Routes
app.use(router)

module.exports = { app, PORT }
