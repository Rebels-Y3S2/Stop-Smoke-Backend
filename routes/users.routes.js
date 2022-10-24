import express from "express";
import {
    saveUser,
} from '../controllers/index.js';

const userRouter = express.Router();

userRouter.post("/", saveUser);

export default userRouter;