import express from 'express'
import { createReminderController } from '../controllers/index.js'

const reminderRouter = express.Router()

reminderRouter.post('/', createReminderController)

export default reminderRouter
