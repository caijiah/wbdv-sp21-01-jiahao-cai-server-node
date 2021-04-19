const quizzesService = require("../services/quizzes-service")

module.exports = (app) => {
    const findAllQuizzes = (req, res) => {
        quizzesService.findAllQuizzes()
            .then((quizzes) => {
                res.json(quizzes)
            })
    }
    const findQuizById = (req, res) => {
        const quizId = req.params['qzid']
        quizzesService.findQuizById(quizId)
            .then((quiz)=> {
                res.json(quiz)
            })
    }

    app.get("/api/quizzes", findAllQuizzes)
    app.get("/api/quizzes/:qzid", findQuizById)
}