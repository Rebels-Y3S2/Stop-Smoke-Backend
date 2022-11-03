import express from "express";
import {
  createChallengeController,
  getChallengesByUserIdController,
  getChallengeByIdController,
  updateChallengeByIdController,
  startChallengeByIdController,
  deleteChallengeByIdController,
} from "../controllers/index.js";

const challengeRouter = express.Router();

challengeRouter.post("/", createChallengeController);
challengeRouter.get("/users/:userId", getChallengesByUserIdController);
challengeRouter.get("/:id", getChallengeByIdController);
challengeRouter.put("/:id", updateChallengeByIdController);
challengeRouter.put("/:id/start", startChallengeByIdController);
challengeRouter.delete("/:id", deleteChallengeByIdController);

export default challengeRouter;
