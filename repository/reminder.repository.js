import { Reminder } from '../models/index.js'

/**
 * Handles the repository logic of creating a reminder.
 * Uses the reminderObject passed in the parameter
 * @param {*} data  - reminderObject
 * @returns Created reminder object
 */
export const createReminder = (data) =>
  Reminder.create(data);

/**
 * Handles the repository logic of fetching reminders specific to the userId passed in the parameter
 * @param {*} userId 
 * @returns RemindersObjectArray
 */
export const fetchReminders = (userId) =>
  Reminder.find({userId})

/**
 * Handles the repository logic of fetching reminder details specific to the reminderId passed in to the parameter
 * @param {*} reminderId 
 * @returns reminderObject
 */
export const fetchReminder = (reminderId) =>
  Reminder.findById(reminderId)

/**
 * Handles the repository logic of updating reminder details belonging to the reminderId passed in the parameter
 * The update data object is sent the parameter as well
 * @param {*} reminderId 
 * @param {*} data - reminderObject
 * @returns updatedReminderObject
 */
export const updateReminder = (reminderId, data) =>
  Reminder.findByIdAndUpdate(reminderId, data, { new: true })

/**
 * Handles the repository logic relating to deleteing reminder details specific to the reminderId passed in the parameter
 * @param {*} reminderId 
 * @returns 
 */
export const deleteReminder = (reminderId) =>
  Reminder.findByIdAndDelete(reminderId)
