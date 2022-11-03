import commonConstants from "./commonConstants.js"

export const jsonResponse = (isSuccessful, responseData, error) => {
  return {
    isSuccessful,
    responseData,
    errorMessage: error
  }
}

export const getTheNumberOfCigsPerDay = (smokingType) => {
  let noOfCigs = 1;
  switch(smokingType) {
    case commonConstants.ONCE_A_WEEK: {
      noOfCigs = 1/7;
      break;
    }
    case commonConstants.TWO_FIVE_A_WEEK: {
      noOfCigs = 2.5/7;
      break;
    }
    case commonConstants.ONCE_A_DAY: {
      noOfCigs = 7;
      break;
    }
    case commonConstants.MORE_THAN_ONCE_A_DAY: {
      noOfCigs = 3;
      break;
    }
    default: {
      noOfCigs = 7;
    }
  }
  return noOfCigs;
}

export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const incrementDate = (dateInput,increment) => {
  var increasedDate = new Date(dateInput.getTime() +(increment *86400000));
  return increasedDate;
}

export const getChallengePath = (challengeDuration) => {
  let challengePath;
  if (challengeDuration == 60) {
    challengePath = "../utils/challenges/60dayChallenges.json";
  } else if (challengeDuration == 30) {
    challengePath = "../utils/challenges/30dayChallenges.json";
  }
  return challengePath;
}

export const getChallengeType = (challengeType) => {
  let type;
  switch(challengeType) {
    case 0: {
      type = commonConstants.TYPE_0;
      break;
    }
    case 1: {
      type = commonConstants.TYPE_1;
      break;
    }
    case 2: {
      type = commonConstants.TYPE_2;
      break;
    }
    case 3: {
      type = commonConstants.TYPE_3;
      break;
    }
    case 4: {
      type = commonConstants.TYPE_4;
      break;
    }
    default: {
      type = commonConstants.TYPE_4;
    }
  }
  return type;
}