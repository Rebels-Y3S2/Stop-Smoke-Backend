import mongoose from "mongoose";

const { Schema } = mongoose;

// Challenge data model
const ChallengeSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    name: { type: String, required: true },
    duration: { type: Number },
    type: { type: Number },
    tasks: { type: Array, required: true },
    isStarted: { type: Boolean, default: false },
    startDate: { type: Date },
  },
  { timestamps: true }
);

export const Challenge = mongoose.model("Challenge", ChallengeSchema);
