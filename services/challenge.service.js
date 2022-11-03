import { readFile } from "fs/promises";
import {
  deleteChallengeById,
  fetchChallengeById,
  fetchChallengesByUserID,
  saveChallenge,
  updateChallengeById,
} from "../repository/index.js";
import commonConstants from "../utils/commonConstants.js";
import {
  getChallengePath,
  getChallengeType,
  getRandomNumber,
  incrementDate,
} from "../utils/serviceUtilities.js";

const createChallenge = async (challengeDuration, smokingType) => {
  const challenges = JSON.parse(
    await readFile(
      new URL(getChallengePath(challengeDuration), import.meta.url)
    )
  );
  const tasks = JSON.parse(
    await readFile(new URL("../utils/challenges/tasks.json", import.meta.url))
  );
  const newChallenge = {};
  newChallenge.tasks = [];
  var today = new Date();
  newChallenge.name = commonConstants.MY_CHALLENGE;
  newChallenge.duration = challengeDuration;
  newChallenge.type = smokingType;
  const tasksLength = tasks.length;

  challenges[getChallengeType(smokingType)].forEach((challenge, index) => {
    let task1;
    let task2;
    do {
      task1 = getRandomNumber(0, tasksLength - 1);
      task2 = getRandomNumber(0, tasksLength - 1);
    } while (task1 === task2);

    challenge.date = incrementDate(today, index);
    challenge.tasks = [tasks[task1], tasks[task2]];

    newChallenge.tasks.push(challenge);
  });

  return newChallenge;
};

export const startChallengeService = (challengeId) => {
  const startDate = new Date();
  return updateChallengeById(challengeId, { startDate, isStarted: true });
};

export const createChallengeService = async ({
  userId,
  duration: challengeDuration,
  type: smokingType
}) => {
  console.log('cat')
  const challenge = await createChallenge(challengeDuration, smokingType);
  challenge.userId = userId;
  console.log(challengeDuration, smokingType)
  return saveChallenge(challenge);
};

export const updateChallengeByIdService = async (challengeId,{
  duration: challengeDuration,
  type: smokingType
}) => {
  const updatedChallenge = await createChallenge(
    challengeDuration,
    smokingType
  );
  return updateChallengeById(challengeId, updatedChallenge);
};

export const getChallengeByIdService = (challengeId) => {
  return fetchChallengeById(challengeId);
};

export const getChallengesByUserIdService = (userId) => {
  return fetchChallengesByUserID(userId);
};

export const deleteChallengeByIdService = (challengeId) => {
  return deleteChallengeById(challengeId);
};
