const quizAttemptsDao = require("../daos/quiz-attempts-dao")

const findAttemptsForQuiz = (qzid) => quizAttemptsDao.findAttemptsForQuiz(qzid)

const createAttempt = (qzid, attempt) => quizAttemptsDao.createAttempt(qzid, attempt)

module.exports = {findAttemptsForQuiz, createAttempt}