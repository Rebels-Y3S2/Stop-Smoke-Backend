import { readFile } from "fs/promises";
import { saveChallenge } from "../repository/challenge.repository.js";
import commonConstants from "../utils/commonConstants.js";
import {
  getChallengePath,
  getChallengeType,
  getRandomNumber,
  incrementDate,
} from "../utils/serviceUtilities.js";

export const createChallenge = async (
  challengeDuration,
  smokingType
) => {
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

export const startChallenge = () => {
  const startDate = new Date();
}

export const createChallengeService = async (challengeDuration,
  smokingType) => {
    const chal = await createChallenge(challengeDuration,
      smokingType);
      saveChallenge(chal).then(res => console.log(res)).catch(err => console.log(err))

      console.log(chal);
    //saveChallenge();
}