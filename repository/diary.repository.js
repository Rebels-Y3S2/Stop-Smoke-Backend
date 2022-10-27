import { Diary } from '../models/index.js';

// Create diary repository logic
export const createDiary = (data) =>
  Diary.create(data);

// Fetch diary repository logic
export const fetchDiaries = () =>
  Diary.find()

// Fetch diary repository logic
export const fetchDiary = (id) =>
  Diary.findById(id)

// Update diary repository logic
export const updateDiary = (id, data) =>
  Diary.findByIdAndUpdate(id, data, { new: true })

// Delete diary repository logic
export const deleteDiary = (id) =>
  Diary.findByIdAndDelete(id)
