import mongoose from 'mongoose'

const { Schema } = mongoose

// Diary data model
const DiarySchema = new Schema(
  {
    userId: {type: Schema.Types.ObjectId, ref: "user", required: true},
    title: {type:String, required: true},
    description: {type: String, required: true},
    isFavorite: {type: Boolean, default: false, required: true}
  },
  { timestamps: true }
)

export const Diary = mongoose.model('Diary', DiarySchema)
