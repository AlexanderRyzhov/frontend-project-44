import { getRandomInt, getRandomIntInRange, runGame } from '../index.js';

const generateProgression = (sequenceLenght, startValue, step) => {
  const items = [];
  for (let i = 0; i < sequenceLenght; i += 1) {
    const val = startValue + (i * step);
    items.push(val);
  }
  return items;
};

const generateQuestionAndAnswer = () => {
  const minSequenceLenght = 5;
  const maxSequenceLenght = 11;
  const sequenceLenght = getRandomIntInRange(minSequenceLenght, maxSequenceLenght);

  const startMaxValue = 100;
  const startValue = getRandomInt(startMaxValue);

  const minStep = 1;
  const maxStep = 10;
  const step = getRandomIntInRange(minStep, maxStep);

  const items = generateProgression(sequenceLenght, startValue, step);
  const questionPosition = getRandomInt(sequenceLenght);

  const hiddenItem = items[questionPosition];
  items[questionPosition] = '..';

  const question = `Question: ${items.join(' ')}`;
  const correctAnswer = hiddenItem.toString();

  return [question, correctAnswer];
};

const runProgressionGame = () => {
  const rulesMessage = 'What number is missing in the progression?';
  runGame(rulesMessage, generateQuestionAndAnswer);
};

export default runProgressionGame;
