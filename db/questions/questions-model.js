const questionsSchema = require("./questions-schema")

const mongoose = require('mongoose')

const questionsModel = mongoose
    .model("QuestionsModel", questionsSchema)

module.exports = questionsModel