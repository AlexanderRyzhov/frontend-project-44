import { getRandomInt, runGame } from '../index.js';

const getQuestionLimit = (operation) => {
  let maxValue;
  if (operation < 2) {
    maxValue = 100;
  } else {
    maxValue = 25;
  }
  return maxValue;
};

const generateQuestion = () => {
  const operations = ['+', '-', '*'];
  const operation = getRandomInt(3);
  const maxValue = getQuestionLimit(operation);

  const num1 = getRandomInt(maxValue);
  const num2 = getRandomInt(maxValue);

  let answer;
  switch (operation) {
    case 0:
      answer = num1 + num2;
      break;
    case 1:
      answer = num1 - num2;
      break;
    case 2:
      answer = num1 * num2;
      break;
    default:
  }

  const question = `Question: ${num1} ${operations[operation]} ${num2}!`;
  const correctAnswer = answer.toString();

  return [question, correctAnswer];
};

const calcGame = () => {
  const rules = 'What is the result of the expression?';
  runGame(rules, generateQuestion);
};

export default calcGame;
