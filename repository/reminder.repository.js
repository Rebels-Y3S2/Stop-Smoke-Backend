import { Reminder } from '../models/index.js'
import AppError from '../utils/appError.js'

// Create reminder repository logic
export const createReminder = (data) =>
  Reminder.create(data);

// Fetch reminders repository logic
export const fetchReminders = (userId) =>
  Reminder.find({userId})

// Fetch reminder repository logic
export const fetchReminder = (id) =>
  Reminder.findById(id)

// Update reminder repository logic
export const updateReminder = (id, data) =>
  Reminder.findByIdAndUpdate(id, data, { new: true })

// Delete reminder repository logic
export const deleteReminder = (id) =>
  Reminder.findByIdAndDelete(id)
