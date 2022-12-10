import { getRandomInt, runGame } from '../index.js';

const generateQuestionAndAnswer = () => {
  const maxValue = 25;
  const num1 = getRandomInt(maxValue) + 1;
  const num2 = getRandomInt(maxValue) + 1;
  const minValue = Math.min(num1, num2);

  let gcd = 1;
  for (let i = 1; i < minValue; i += 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      gcd = i;
    }
  }

  const question = `Question: ${num1} ${num2}`;
  const correctAnswer = gcd.toString();

  return [question, correctAnswer];
};

const runGcdGame = () => {
  const rulesMessage = 'Find the greatest common divisor of given numbers.';
  runGame(rulesMessage, generateQuestionAndAnswer);
};

export default runGcdGame;
