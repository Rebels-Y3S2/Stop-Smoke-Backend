import mongoose from "mongoose";

const { Schema } = mongoose;

const Userschema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    description: String,
    type: String,
  },
  { timestamps: true },
  { versionKey: false },
);

Userschema.index({ createdAt: 1 });

export const User = mongoose.model("User", Userschema);