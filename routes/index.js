import express from 'express'
import diaryRouter from './diary.routes.js'
import reminderRouter from './reminder.routes.js'

const apiRouter = express.Router()

apiRouter.use('/reminders', reminderRouter)
apiRouter.use('/diaries', diaryRouter)

export default apiRouter
