const mongoose = require('mongoose')
const questionSchema = require("../questions/questions-schema")

const quizAttemptsSchema = mongoose.Schema({
    score: Number,
    quiz: {type: String, ref:'QuizzesModel'},
    answers: [questionSchema]
}, {collection:'quizAttempts'})

module.exports = quizAttemptsSchema