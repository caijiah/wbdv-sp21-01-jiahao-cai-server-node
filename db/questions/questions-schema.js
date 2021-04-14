const mongoose = require("mongoose")

const questionSchema = mongoose.Schema({
    _id: String,
    title: String,
    question: String,
    correct: String,
    answer: String,
    type: {type: String, enum: ['TRUE_FALSE', 'MULTIPLE_CHOICES', 'FILL_BLANKS']},
    choices : [String],
}, {collection: "questions"})

module.exports = questionSchema