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
