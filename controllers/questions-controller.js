const questionsService = require("../services/questions-service")

module.exports = (app) => {
    const findQuestionsForQuiz = (req, res) => {
        const qzid = req.params['qzid']
        questionsService.findQuestionsForQuiz(qzid)
            .then((questions) => {
                res.json(questions)
            })
    }

    const findAllQuestions = (req, res) => {
        questionsService.findAllQuestions()
            .then((questions) => {
                res.json(questions)
            })
    }

    const findQuestionById = (req, res) => {
        const quid = req.params['quid']
        questionsService.findQuestionById(quid)
            .then(question => {
                res.json(question)
            })
    }

    app.get("/api/quizzes/:qzid/questions", findQuestionsForQuiz)
    app.get("/api/questions", findAllQuestions)
    app.get("/api/questions/:quid", findQuestionById)

}