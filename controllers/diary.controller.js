  import responseMessages from '../utils/responseMessages.js'
  import Success from '../utils/success.js'
  import httpStatusCodes from '../utils/httpStatusCodes.js'
  import {
    createDiaryService,
    deleteDiaryService,
    fetchDiariesService,
    fetchDiaryService,
    updateDiaryService
  } from '../services/index.js'
  
  // Create diary controller logic
  export const createDiaryController = async (req, res) => {
    try{
      const diary = await createDiaryService(req.body)
      res.json(Success(diary, responseMessages.SAVE_SUCCESS))
    }catch(error){
      res.json(error)
    }
  }
  
  // Fetch diaries controller logic
  export const fetchDiariesController = async (req, res) => {
    try{
      const diaries = await fetchDiariesService(req.params.userId)
      diaries.length === 0
        ? res.status(httpStatusCodes.NO_CONTENT).json(responseMessages.NO_CONTENT)
        : res.json(Success(diaries, responseMessages.FETCH_SUCCESS))
    }catch(error){
      res.json(error)
    }
  }
  
  // Fetch diary controller logic
  export const fetchDiaryController = async (req, res) => {
    try{
      const diary = await fetchDiaryService(req.params.id)
      !reminder
        ? res.status(httpStatusCodes.NO_CONTENT).json(responseMessages.NO_CONTENT)
        : res.json(Success(diary, responseMessages.FETCH_SUCCESS))
    }catch(error){
      res.json(error)
    }
  }
  
  // Update diary controller logic
  export const updateDiaryController = async (req, res) => {
    try{
      const diary = await updateDiaryService(req.params.id, req.body)
      !diary
        ? res.status(httpStatusCodes.NO_CONTENT).json(responseMessages.NO_CONTENT)
        : res.json(Success(diary, responseMessages.UPDATE_SUCCESS))
    }catch(error){
      res.json(error)
    }
  }
  
  // Delete diary controller logic
  export const deleteDiaryController = async (req, res) => {
    try{
      const diary = await deleteDiaryService(req.params.id)
      !diary
        ? res.status(httpStatusCodes.NO_CONTENT).json(responseMessages.NO_CONTENT)
        : res.json(Success(diary, responseMessages.DELETE_SUCCESS))
    }catch(error){
      res.json(error)
    }
  }
  