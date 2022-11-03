import { Challenge } from '../models/index.js';

// Create diary repository logic
export const saveChallenge = (data) =>
Challenge.create(data);

// Fetch diary repository logic
export const fetchChallengesByUserID = (userId) =>
Challenge.find({userId})

// Fetch diary repository logic
export const fetchChallengeById = (id) =>
Challenge.findById(id)

// Update diary repository logic
export const updateChallengeById = (id, data) =>
Challenge.findByIdAndUpdate(id, data, { new: true })

// Delete diary repository logic
export const deleteChallengeById = (id) =>
  Challenge.findByIdAndDelete(id)
