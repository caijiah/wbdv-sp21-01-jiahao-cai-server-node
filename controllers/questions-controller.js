const questionsService = require("../services/questions/questions-service")

module.exports = (app) => {
    const findQuestionsForQuiz = (req, res) => {
        const qzid = req.params['qzid']
        res.send(questionsService.findQuestionsForQuiz(qzid))
    }

    const findAllQuestions = (req, res) => {
        res.send(questionsService.findAllQuestions())
    }

    app.get("/api/quizzes/:qzid/questions", findQuestionsForQuiz)
    app.get("/api/questions", findAllQuestions)
}