import {
  createReminderService,
  deleteReminderService,
  fetchReminderService,
  fetchRemindersService,
  updateReminderService
} from '../services/index.js'
import responseMessages from '../utils/responseMessages.js'
import Success from '../utils/success.js'
import httpStatusCodes from '../utils/httpStatusCodes.js'

// Create reminder controller logic
export const createReminderController = async (req, res) => {
  const reminder = await createReminderService(req.body)
  res.json(Success(reminder, responseMessages.SAVE_SUCCESS))
}

// Fetch reminders controller logic
export const fetchRemindersController = async (req, res) => {
  const reminders = await fetchRemindersService()
  reminders.length === 0
    ? res.status(httpStatusCodes.NO_CONTENT).json(responseMessages.NO_CONTENT)
    : res.json(Success(reminders, responseMessages.FETCH_SUCCESS))
}

// Fetch reminder controller logic
export const fetchReminderController = async (req, res) => {
  const reminder = await fetchReminderService(req.params.id)
  !reminder
    ? res.status(httpStatusCodes.NO_CONTENT).json(responseMessages.NO_CONTENT)
    : res.json(Success(reminder, responseMessages.FETCH_SUCCESS))
}

// Update reminder controller logic
export const updateReminderController = async (req, res) => {
  const reminder = await updateReminderService(req.params.id, req.body)
  !reminder
    ? res.status(httpStatusCodes.NO_CONTENT).json(responseMessages.NO_CONTENT)
    : res.json(Success(reminder, responseMessages.UPDATE_SUCCESS))
}

// Delete reminder controller logic
export const deleteReminderController = async (req, res) => {
  const reminder = await deleteReminderService(req.params.id)
  !reminder
    ? res.status(httpStatusCodes.NO_CONTENT).json(responseMessages.NO_CONTENT)
    : res.json(Success(reminder, responseMessages.DELETE_SUCCESS))
}
