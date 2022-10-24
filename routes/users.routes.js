import express from "express";
import {
    saveUser,
    getUsers,
    getUser,
} from '../controllers/index.js';

const userRouter = express.Router();

userRouter.post("/", saveUser);
userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);

export default userRouter;