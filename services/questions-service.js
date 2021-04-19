const questionsDao = require("../../daos/questions-dao")


const findAllQuestions = () => {
    return questionsDao.findAllQuestions()
}

const findQuestionsForQuiz = (qzid) => {
    return questionsDao.findQuestionsForQuiz(qzid)
}

const findQuestionById = (quid) => {
    return questionsDao.findQuestionById(quid)
}


module.exports = { findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz
}