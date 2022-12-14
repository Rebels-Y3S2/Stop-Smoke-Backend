// Imports
import {
  createDiary,
  deleteDiary,
  fetchDiaries,
  fetchDiary,
  updateDiary
} from './diary.repository.js'

import {
  createReminder,
  fetchReminders,
  fetchReminder,
  updateReminder,
  deleteReminder
} from './reminder.repository.js'

import { 
  saveUser, 
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "./users.repository.js";

import { 
  saveChallenge, 
  fetchChallengesByUserID,
  fetchChallengeById,
  updateChallengeById,
  deleteChallengeById,
} from "./challenge.repository.js";

// Exports
export {
  //reminder func
  createReminder,
  fetchReminders,
  fetchReminder,
  updateReminder,
  deleteReminder,

  saveUser, 
  getUsers,
  getUser,
  deleteUser,
  updateUser,

  //diary func
  createDiary,
  deleteDiary,
  fetchDiaries,
  fetchDiary,
  updateDiary,

  //challenges func
  saveChallenge, 
  fetchChallengesByUserID,
  fetchChallengeById,
  updateChallengeById,
  deleteChallengeById
}
