import express from 'express'
import reminderRouter from './reminder.routes.js'

const apiRouter = express.Router()

apiRouter.use('/reminders', reminderRouter)

export default apiRouter
