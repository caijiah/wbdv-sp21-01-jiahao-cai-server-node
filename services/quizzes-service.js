const quizzesDao = require("../daos/quizzes-dao")

const findAllQuizzes = () => {
    return quizzesDao.findAllQuizzes()
}

const findQuizById = (quizId) => {
    return quizzesDao.findQuizById(quizId)
}

// return quizzesModel
//     .findById(quizId)
//     .populate("questions")
//     .exec()

module.exports = {
    findAllQuizzes, findQuizById
}