import { User } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveUser = (data) =>
    User.create(data)
    .then((user) => {
      return Promise.resolve(user);
    })
  .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

