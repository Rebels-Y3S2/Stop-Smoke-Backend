import {
    saveUserService, 
    getUsersService,
    getUserService,
    deleteUserService,
} from '../services/index.js';
import responseMessages from '../utils/responseMessages.js'
import Success from '../utils/success.js'
import httpStatusCodes from '../utils/httpStatusCodes.js'

  export const saveUser = async (req, res) => {
    try {
      const user = await saveUserService(req.body);
      res.json(Success(user, responseMessages.SAVE_SUCCESS))
    } catch (error) {
        res.json(error)
    }
  };
  
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
