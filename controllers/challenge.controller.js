import responseMessages from '../utils/responseMessages.js'
import Success from '../utils/success.js'
import httpStatusCodes from '../utils/httpStatusCodes.js'
import {
    createChallengeService, 
    startChallengeService,
    getChallengesByUserIdService,
    getChallengeByIdService,
    updateChallengeByIdService,
    deleteChallengeByIdService
} from '../services/index.js'

// Create challenge controller logic
export const createChallengeController = async (req, res) => {
  try{
    const challenge = await createChallengeService(req.body)
    res.json(Success(challenge, responseMessages.SAVE_SUCCESS))
  }catch(error){
    res.json(error)
  }
}

// Fetch challenge controller logic
export const getChallengesByUserIdController = async (req, res) => {
  try{
    const challenges = await getChallengesByUserIdService(req.params.userId)
    challenges.length === 0
      ? res.status(httpStatusCodes.NO_CONTENT).json(responseMessages.NO_CONTENT)
      : res.json(Success(challenges, responseMessages.FETCH_SUCCESS))
  }catch(error){
    res.json(error)
  }
}

// Fetch challenge controller logic
export const getChallengeByIdController = async (req, res) => {
  try{
    const challenge = await getChallengeByIdService(req.params.id)
    !challenge
      ? res.status(httpStatusCodes.NO_CONTENT).json(responseMessages.NO_CONTENT)
      : res.json(Success(challenge, responseMessages.FETCH_SUCCESS))
  }catch(error){
    res.json(error)
  }
}

// Update challenge controller logic
export const updateChallengeByIdController = async (req, res) => {
  try{
    const challenge = await updateChallengeByIdService(req.params.id, req.body)
    !challenge
      ? res.status(httpStatusCodes.NO_CONTENT).json(responseMessages.NO_CONTENT)
      : res.json(Success(challenge, responseMessages.UPDATE_SUCCESS))
  }catch(error){
    res.json(error)
  }
}

export const startChallengeByIdController = async (req, res) => {
    try{
      const challenge = await startChallengeService(req.params.id);
      !challenge
        ? res.status(httpStatusCodes.NO_CONTENT).json(responseMessages.NO_CONTENT)
        : res.json(Success(challenge, responseMessages.UPDATE_SUCCESS))
    }catch(error){
      res.json(error)
    }
  }

// Delete challenge controller logic
export const deleteChallengeByIdController = async (req, res) => {
  try{
    const challenge = await deleteChallengeByIdService(req.params.id)
    !challenge
      ? res.status(httpStatusCodes.NO_CONTENT).json(responseMessages.NO_CONTENT)
      : res.json(Success(challenge, responseMessages.DELETE_SUCCESS))
  }catch(error){
    res.json(error)
  }
}
