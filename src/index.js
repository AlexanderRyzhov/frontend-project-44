import readlineSync from 'readline-sync';

function getRandomIntInRange(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

function getRandomInt(max) {
  return getRandomIntInRange(0, max);
}

const getName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const runGame = (rulesMessage, generateQuestionAndAnswer) => {
  const name = getName();
  console.log(rulesMessage);

  const tries = 3;
  for (let i = 0; i < tries; i += 1) {
    const [question, correctAnswer] = generateQuestionAndAnswer();
    console.log(question);
    const userInput = readlineSync.question('Your answer: ');

    if (userInput !== correctAnswer) {
      console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export { getRandomInt, getRandomIntInRange, runGame };
