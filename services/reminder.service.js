import { createReminder } from '../repository/index.js'
import responseMessages from '../utils/responseMessages.js'

// Create reminder service logic
export const createReminderService = async (data) => {
  await createReminder({ data })
  return Promise.resolve(responseMessages.SAVE_SUCCESS)
}
