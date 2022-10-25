import express from "express";
import {
    saveUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser,
} from '../controllers/index.js';

const userRouter = express.Router();

userRouter.post("/", saveUser);
userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id", updateUser);

export default userRouter;