import { getRandomInt, getRandomIntInRange, runGame } from '../index.js';

const generateQuestion = () => {
  const sequenceLenght = getRandomIntInRange(5, 11);
  const questionPosition = getRandomInt(sequenceLenght);

  const startMaxValue = 100;
  const startValue = getRandomInt(startMaxValue);

  const minStep = 1;
  const maxStep = 10;
  const step = getRandomIntInRange(minStep, maxStep);

  let correctAnswer;
  const items = [];
  for (let i = 0; i < sequenceLenght; i += 1) {
    const val = startValue + (i * step);
    if (i !== questionPosition) {
      items.push(val);
    } else {
      items.push('..');
      correctAnswer = val.toString();
    }
  }

  const question = `Question: ${items.join(' ')}`;

  return [question, correctAnswer];
};

const runProgressionGame = () => {
  const rulesMessage = 'What number is missing in the progression?';
  runGame(rules, generateQuestion);
};

export default runProgressionGame;
