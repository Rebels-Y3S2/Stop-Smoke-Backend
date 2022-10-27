import mongoose from 'mongoose'

const { Schema } = mongoose

// Reminder data model
const ReminderSchema = new Schema(
  {
    reminderTitle: String,
    startDate: Date,
    endDate: Date,
    customQuote: String,
    challenge: String,
    diary: String
  },
  { timestamps: true }
)

export const Reminder = mongoose.model('Reminder', ReminderSchema)
