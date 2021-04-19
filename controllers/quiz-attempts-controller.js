const quizAttemptsService = require("../services/quiz-attempts-service")

module.exports = (app) => {
    const createAttempt = (req, res) => {
        const quizId = req.params.qzid
        const attempt = req.body
        quizAttemptsService.createAttempt(quizId, attempt)
            .then(actualAttempt => res.json(actualAttempt))
    }

    const findAttemptsForQuiz = (req, res) => {
        const quizId = req.params.qzid
        quizAttemptsService.findAttemptsForQuiz(quizId)
            .then(attempts => res.json(attempts))
    }

    app.post("/api/quizzes/:qid/attempts", createAttempt)
    app.get("/api/quizzes/:qid/attempts", findAttemptsForQuiz)
}