import {
  createReminder,
  fetchReminders,
  fetchReminder,
  updateReminder,
  deleteReminder
} from '../repository/index.js'

/**
 * Handles the service level logic of creating a reminder with the use of createReminder() repository level method 
 * @param {*} data - reminderObject
 * @returns - createdReminderObject
 */
export const createReminderService = (data) => {
    const { userId, reminderTitle, startDate, endDate, startTime, customQuote, challenge, diary } = data
    return createReminder({ userId, reminderTitle, startDate, endDate, startTime, customQuote, challenge, diary })
}

/**
 * Handles the service level logic of fetching reminders specific to userId passed in the parameter.
 * fetchReminders(userId) repository level method is utilized. 
 * @param {*} userId 
 * @returns - remindersObjectArray
 */
export const fetchRemindersService = (userId) => {
    return fetchReminders(userId)
}

/**
 * Handles the service level logic of fetching reminder details specific to the reminderId passed in the parameter.
 * fetchReminder(reminderId) repository level method is utilized.
 * @param {*} reminderId 
 * @returns 
 */
export const fetchReminderService = (reminderId) => {
    return fetchReminder(reminderId)
}

/**
 * Handles the service level logic of updating reminder details specific to the reminderId passed in the parameters according to the
 * reminderObject details that are passed in the parameters.
 * updateReminder(reminderId, data) repository level method is utilized.
 * @param {*} reminderId 
 * @param {*} data - reminderObject
 * @returns - udpatedReminderObject
 */
export const updateReminderService = (reminderId, data) => {
    return updateReminder(reminderId, data)
}

/**
 * Handles the service level logic of deleting reminder details specific to the reminderId passed in the parameter.
 * deleteRemidner(reminderId) repository level method is utilized
 * @param {*} reminderId 
 * @returns 
 */
export const deleteReminderService = (reminderId) => {
    return deleteReminder(reminderId)
}
