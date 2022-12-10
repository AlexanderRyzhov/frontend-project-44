import { getRandomInt, runGame } from '../index.js';

const generateQuestion = () => {
  const maxValue = 100;
  const num = getRandomInt(maxValue);

  let correctAnswer;
  if (num % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  const question = `Question: ${num}!`;

  return [question, correctAnswer];
};

const runEvenGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(rules, generateQuestion);
};

export default runEvenGame;
