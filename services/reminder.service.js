import { createReminder, fetchReminders, fetchReminder } from '../repository/index.js'
import responseMessages from '../utils/responseMessages.js'

// Create reminder service logic
export const createReminderService = async (data) => {
  try {
    await createReminder({ data })
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
