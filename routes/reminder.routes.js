import express from 'express'
import { createReminderController, fetchReminderController, fetchRemindersController } from '../controllers/index.js'

const reminderRouter = express.Router()

reminderRouter.post('/', createReminderController)
reminderRouter.get('/', fetchRemindersController)
reminderRouter.get('/:id', fetchReminderController)

export default reminderRouter
