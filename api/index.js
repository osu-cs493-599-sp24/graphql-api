const { Router } = require('express')

const lodgingsRouter = require('./lodgings')
const reservationsRouter = require('./reservations')
const usersRouter = require('./users')

const apiRouter = Router()

apiRouter.use('/lodgings', lodgingsRouter)
apiRouter.use('/reservations', reservationsRouter)
apiRouter.use('/users', usersRouter)

module.exports = apiRouter
