import express from 'express'
import {
  createReminderController,
  fetchReminderController,
  fetchRemindersController,
  updateReminderController,
  deleteReminderController
} from '../controllers/index.js'

const reminderRouter = express.Router()

reminderRouter.post('/', createReminderController)
reminderRouter.get('/', fetchRemindersController)
reminderRouter.get('/:id', fetchReminderController)
reminderRouter.put('/:id', updateReminderController)
reminderRouter.delete('/:id', deleteReminderController)

export default reminderRouter
