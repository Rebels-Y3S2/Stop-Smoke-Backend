import express from 'express'
import { createReminderController, fetchRemindersController } from '../controllers/index.js'

const reminderRouter = express.Router()

reminderRouter.post('/', createReminderController)
reminderRouter.get('/', fetchRemindersController)

export default reminderRouter
