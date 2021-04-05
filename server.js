const express = require('express')
const app = express()

const quizzesController = require('./controllers/quizzes-controller')
quizzesController(app)

app.listen(3000)