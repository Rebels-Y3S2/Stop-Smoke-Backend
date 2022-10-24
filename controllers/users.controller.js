import {
    saveUserService, 
} from '../services/index.js';
import Success from "../utils/success.js";

  export const saveUser = async (req, res) => {
      const user = await saveUserService(req.body);
      res.json(Success(user, "Successfully created User."));
  };
  

  