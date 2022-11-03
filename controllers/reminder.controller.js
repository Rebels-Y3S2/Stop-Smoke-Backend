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

/**
 * Handles the controller level logic relating to creating a reminder with the request body.
 * createReminder(data) service level method is utilized. 
 * @param {*} req 
 * @param {*} res 
 */
export const createReminderController = async (req, res) => {
  try{
    const reminder = await createReminderService(req.body)
    res.json(Success(reminder, responseMessages.SAVE_SUCCESS))
  }catch(error){
    res.json(error)
  }
}

/**
 * Handles the controller level logic relating to fetching reminders specific to userId passed in request parameters
 * fetchRemindersService(userId) service level method is utilized.
 * @param {*} req 
 * @param {*} res 
 */
export const fetchRemindersController = async (req, res) => {
  try{
    const reminders = await fetchRemindersService(req.params.userId)
    reminders.length === 0
      ? res.status(httpStatusCodes.NO_CONTENT).json(responseMessages.NO_CONTENT)
      : res.json(Success(reminders, responseMessages.FETCH_SUCCESS))
  }catch(error){
    res.json(error)
  }
}

/**
 * Handles the controller level logic relating to fetching reminder details specific to reminderId passed in request parameters
 * fetchReminderService(reminderId) service level method is utilized.
 * @param {*} req 
 * @param {*} res 
 */
export const fetchReminderController = async (req, res) => {
  try{
    const reminder = await fetchReminderService(req.params.id)
    !reminder
      ? res.status(httpStatusCodes.NO_CONTENT).json(responseMessages.NO_CONTENT)
      : res.json(Success(reminder, responseMessages.FETCH_SUCCESS))
  }catch(error){
    res.json(error)
  }
}

/**
 * Handles the controller level logic relating to updating reminder details specific to reminderId passed in request parameters 
 * according to the data that is passsed in the request body.
 * udpateReminderService(reminderId, data) service level method is utilized.
 * @param {*} req 
 * @param {*} res 
 */
export const updateReminderController = async (req, res) => {
  try{
    const reminder = await updateReminderService(req.params.id, req.body)
    !reminder
      ? res.status(httpStatusCodes.NO_CONTENT).json(responseMessages.NO_CONTENT)
      : res.json(Success(reminder, responseMessages.UPDATE_SUCCESS))
  }catch(error){
    res.json(error)
  }
}

/**
 * Handles the controller level logic relating to deleting reminder details specific to reminderId passed in the request parameters.
 * deleteReminderService(reminderId) service level method is utilized.
 * @param {*} req 
 * @param {*} res 
 */
export const deleteReminderController = async (req, res) => {
  try{
    const reminder = await deleteReminderService(req.params.id)
    !reminder
      ? res.status(httpStatusCodes.NO_CONTENT).json(responseMessages.NO_CONTENT)
      : res.json(Success(reminder, responseMessages.DELETE_SUCCESS))
  }catch(error){
    res.json(error)
  }
}
