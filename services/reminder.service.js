import {
  createReminder,
  fetchReminders,
  fetchReminder,
  updateReminder,
  deleteReminder
} from '../repository/index.js'

// Create reminder service logic
export const createReminderService = (data) => {
    const { reminderTitle, startDate, endDate, customQuote, challenge, diary } = data
    return createReminder({ reminderTitle, startDate, endDate, customQuote, challenge, diary })
}

// Fetch reminders service logic
export const fetchRemindersService = () => {
    return fetchReminders()
}

// Fetch reminder service logic
export const fetchReminderService = (id) => {
    return fetchReminder(id)
}

// Update reminder service logic
export const updateReminderService = (id, data) => {
    return updateReminder(id, data)
}

// Delete reminder service logic
export const deleteReminderService = (id) => {
    return deleteReminder(id)
}
