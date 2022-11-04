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
    challenge:{type: Schema.Types.ObjectId, ref: "Challenge"} ,
    diary: {type: Schema.Types.ObjectId, ref: "Diary"}
  },
  { timestamps: true }
)

export const Reminder = mongoose.model('Reminder', ReminderSchema)
