import { createReminder, fetchReminders, fetchReminder, updateReminder } from '../repository/index.js'
import responseMessages from '../utils/responseMessages.js'

// Create reminder service logic
export const createReminderService = async (data) => {
  try {
    const { reminderTitle, startDate, endDate, customQuote, challenge, diary } = data
    await createReminder({ reminderTitle, startDate, endDate, customQuote, challenge, diary })
    return Promise.resolve(responseMessages.SAVE_SUCCESS)
  } catch (error) {
    console.log(error)
  }
}

// Fetch reminders service logic
export const fetchRemindersService = async () => {
  try {
    const reminders = await fetchReminders()
    return Promise.resolve(reminders)
  } catch (error) {
    console.log(error)
  }
}

// Fetch reminder service logic
export const fetchReminderService = async (id) => {
  try {
    const reminder = await fetchReminder(id)
    return Promise.resolve(reminder)
  } catch (error) {
    console.log(error)
  }
}

// Update reminder service logic
export const updateReminderService = async (id, data) => {
  try {
    const reminder = await updateReminder(id, data)
    return Promise.resolve(reminder)
  } catch (error) {
    console.log(error)
  }
}
