import { createReminderService } from '../services/index.js'
import responseMessages from '../utils/responseMessages.js'
import Success from '../utils/success.js'

// Create reminder controller logic
export const createReminderController = async (req, res) => {
  const reminder = await createReminderService(req.body)
  res.json(Success(reminder, responseMessages.SAVE_SUCCESS))
}
