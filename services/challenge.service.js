import { readFile } from "fs/promises";
import { getRandomNumber, incrementDate } from "../utils/serviceUtilities.js";

export const createChallengeService = async (
  challengeDuration,
  smokingType
) => {
  const challenges = JSON.parse(
    await readFile(
      new URL("../utils/challenges/30dayChallenges.json", import.meta.url)
    )
  );
  const tasks = JSON.parse(
    await readFile(new URL("../utils/challenges/tasks.json", import.meta.url))
  );
  const newChallenge = {};
  newChallenge.name = "My Challenge";
  newChallenge.tasks = [];
  const tasksLength = tasks.length;
  var today = new Date();

  challenges.type1.forEach((challenge, index) => {
    let task1;
    let task2;
    do {
      task1 = getRandomNumber(0, tasksLength - 1);
      task2 = getRandomNumber(0, tasksLength - 1);
    } while (task1 === task2);

    challenge.date = incrementDate(today, index);
    challenge.tasks = [tasks[task1], tasks[task2]];

    newChallenge.tasks.push(challenge)

  });

  console.log(newChallenge)
};
