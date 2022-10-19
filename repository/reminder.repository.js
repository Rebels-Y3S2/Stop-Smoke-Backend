import { Reminder } from '../models/index.js'
import AppError from '../utils/appError.js'

// Create reminder repository logic
export const createReminder = (data) =>
  Reminder.create(data)
    .then((reminder) => {
      return Promise.resolve(reminder)
    }).catch((error) => {
      throw new AppError(error._message)
    })

// Fetch reminders repository logic
export const fetchReminders = () =>
  Reminder.find()
    .then((reminders) => {
      return Promise.resolve(reminders)
    }).catch((error) => {
      throw new AppError(error._message)
    })

// Fetch reminder repository logic
export const fetchReminder = (id) =>
  Reminder.findById(id)
    .then((reminder) => {
      return Promise.resolve(reminder)
    }).catch((error) => {
      throw new AppError(error)
    })

// Update reminder repository logic
export const updateReminder = (id, data) =>
  Reminder.findByIdAndUpdate(id, data, { new: true })
    .then((reminder) => {
      return Promise.resolve(reminder)
    }).catch((error) => {
      throw new AppError(error)
    })
