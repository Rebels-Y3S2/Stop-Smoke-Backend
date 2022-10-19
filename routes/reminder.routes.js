import express from 'express'
import { createReminderController, fetchReminderController, fetchRemindersController, updateReminderController } from '../controllers/index.js'

const reminderRouter = express.Router()

reminderRouter.post('/', createReminderController)
reminderRouter.get('/', fetchRemindersController)
reminderRouter.get('/:id', fetchReminderController)
reminderRouter.put('/:id', updateReminderController)

export default reminderRouter
