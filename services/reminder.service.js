import { createReminder, fetchReminders } from '../repository/index.js'
import responseMessages from '../utils/responseMessages.js'

// Create reminder service logic
export const createReminderService = async (data) => {
  await createReminder({ data })
  return Promise.resolve(responseMessages.SAVE_SUCCESS)
}

// Fetch reminders service logic
export const fetchRemindersService = async () => {
  const reminders = await fetchReminders()
  return Promise.resolve(reminders)
}
