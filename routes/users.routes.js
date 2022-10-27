import express from "express";
import {
    saveUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser,
} from '../controllers/index.js';
import {register, login} from "../services/index.js";

const userRouter = express.Router();

userRouter.post("/", saveUser);
userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id", updateUser);
userRouter.post('/register', register);
userRouter.post('/login', login);

export default userRouter;