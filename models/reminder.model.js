import mongoose from 'mongoose'

const { Schema } = mongoose

// Reminder data model
const ReminderSchema = new Schema(
  {
    userId: {type: Schema.Types.ObjectId, ref: "User", required: true},
    reminderTitle: String,
    startDate: String,
    endDate: String,
    startTime: String,
    customQuote: String,
    challenge: String,
    diary: String
  },
  { timestamps: true }
)

export const Reminder = mongoose.model('Reminder', ReminderSchema)
