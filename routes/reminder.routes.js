import express from 'express'
import {
  createReminderController,
  fetchReminderController,
  fetchRemindersController,
  updateReminderController,
  deleteReminderController
} from '../controllers/index.js'

// Creates Router instance
const reminderRouter = express.Router()

reminderRouter.post('/', createReminderController)
reminderRouter.get('/users/:userId', fetchRemindersController)
reminderRouter.get('/:id', fetchReminderController)
reminderRouter.put('/:id', updateReminderController)
reminderRouter.delete('/:id', deleteReminderController)

export default reminderRouter
