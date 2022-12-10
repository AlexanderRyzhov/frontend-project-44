import { getRandomInt, runGame } from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestion = () => {
  const maxValue = 1000;
  const num = getRandomInt(maxValue);

  let correctAnswer;
  if (isPrime(num)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  const question = `Question: ${num}!`;

  return [question, correctAnswer];
};

const runPrimeGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(rules, generateQuestion);
};

export default runPrimeGame;
