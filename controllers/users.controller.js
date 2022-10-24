import {
    saveUserService, 
    getUsersService,
} from '../services/index.js';
import Success from "../utils/success.js";

  export const saveUser = async (req, res) => {
      const user = await saveUserService(req.body);
      res.json(Success(user, "Successfully created User."));
  };
  
  export const getUsers = async (req, res) => {
    const users = await getUsersService();
    res.json(Success(users, "Successfully fetched Users."));
  };
  