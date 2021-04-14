// const quizzes = require('./quizzes.json')
const quizzesModel = require("../../db/quizzes/quizzes-model")

const createQuiz = () => {}
const findAllQuizzes = () => {
    // return quizzes
    return quizzesModel.find()
}

const findQuizById = (quizId) => {
    return quizzesModel
        .findById(quizId)
        .populate("questions")
        .exec()
}

const updateQuiz = () => {}
const deleteQuiz = () => {}

module.exports = {
    createQuiz, findAllQuizzes, findQuizById, updateQuiz, deleteQuiz
}