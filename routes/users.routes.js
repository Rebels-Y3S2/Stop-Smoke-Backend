import express from "express";
import {
    saveUser,
    getUsers,
    getUser,
    deleteUser,
} from '../controllers/index.js';

const userRouter = express.Router();

userRouter.post("/", saveUser);
userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;