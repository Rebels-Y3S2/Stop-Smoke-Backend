import express from "express";
import {
    saveUser,
    getUsers,
} from '../controllers/index.js';

const userRouter = express.Router();

userRouter.post("/", saveUser);
userRouter.get("/", getUsers);

export default userRouter;