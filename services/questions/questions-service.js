const questions = require('./questions.json')

const createQuestion = () => {}
const createQuestionForQuiz = () => {}

const findAllQuestions = () => {
    return questions
}

const findQuestionsForQuiz = (qzid) => {
    return questions.filter(question => question.quizId === qzid)
}

const findQuestionById = (quid) => {
    return questions.find(question => question._id === quid)
}

const updateQuestion = () => {}
const deleteQuestion = () => {}

module.exports = {
    createQuestion, findAllQuestions,
    findQuestionById, updateQuestion,
    deleteQuestion, createQuestionForQuiz,
    findQuestionsForQuiz
}