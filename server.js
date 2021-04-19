const express = require('express')
const app = express()

require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI

const mongoose = require('mongoose');
mongoose.connect(MONGODB_URI,
                 {useNewUrlParser: true, useUnifiedTopology: true});

// configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
               'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
               'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)
require('./controllers/quiz-attempts-controller')(app)

app.listen(process.env.PORT || 4000)