import {
    saveUserService, 
    getUsersService,
    getUserService,
    deleteUserService,
    updateUserService,
} from '../services/index.js';
import responseMessages from '../utils/responseMessages.js'
import Success from '../utils/success.js'
import httpStatusCodes from '../utils/httpStatusCodes.js'

// Create User controller logic
  export const saveUser = async (req, res) => {
    try {
      const user = await saveUserService(req.body);
      res.json(Success(user, responseMessages.SAVE_SUCCESS))
    } catch (error) {
        res.json(error)
    }
  };
  
// Fetch All users controller logic
  export const getUsers = async (req, res) => {
    try {
        const users = await getUsersService();
        users.length === 0
        ? res.status(httpStatusCodes.NO_CONTENT).json(responseMessages.NO_CONTENT)
        : res.json(Success(users, responseMessages.FETCH_SUCCESS))
      } catch (error) {
          res.json(error)
      }
  };
  
// Fetch User controller logic
  export const getUser = async (req, res) => {
    try {
        const user = await getUserService(req.params.id);
        !user
        ? res.status(httpStatusCodes.NO_CONTENT).json(responseMessages.NO_CONTENT)
        : res.json(Success(user, responseMessages.FETCH_SUCCESS))
      } catch (error) {
          res.json(error)
      }
  };

// Delete user controller logic
  export const deleteUser = async (req, res) => {
    try {
        const user = await deleteUserService(req.params.id);
        !user
        ? res.status(httpStatusCodes.NO_CONTENT).json(responseMessages.NO_CONTENT)
        : res.json(Success(user, responseMessages.DELETE_SUCCESS))
      } catch (error) {
          res.json(error)
      }
  };

// Update user controller logic
  export const updateUser = async (req, res) => {
    try{
      const user = await updateUserService(req.params.id, req.body)
      !user
        ? res.status(httpStatusCodes.NO_CONTENT).json(responseMessages.NO_CONTENT)
        : res.json(Success(user, responseMessages.UPDATE_SUCCESS))
    }catch(error){
      res.json(error)
    }
  }