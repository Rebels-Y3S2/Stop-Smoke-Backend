import { Challenge } from '../models/index.js';

// Create challenge repository logic
export const saveChallenge = (data) =>
Challenge.create(data);

// Fetch challenge repository logic
export const fetchChallengesByUserID = (userId) =>
Challenge.find({userId})

// Fetch challenge repository logic
export const fetchChallengeById = (id) =>
Challenge.findById(id)

// Update challenge repository logic
export const updateChallengeById = (id, data) =>
Challenge.findByIdAndUpdate(id, data, { new: true })

// Delete challenge repository logic
export const deleteChallengeById = (id) =>
  Challenge.findByIdAndDelete(id)
