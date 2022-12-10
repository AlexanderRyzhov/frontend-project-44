import readlineSync from 'readline-sync';

function getRandomInt(max) {
  return getRandomIntInRange(0, max);
}

function getRandomIntInRange(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

const getName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const runGame = (rules, generateQuestion) => {
  const name = getName();
  console.log(rules);

  const tries = 3;
  for (let i = 0; i < tries; i += 1) {
    const [question, correctAnswer] = generateQuestion();
    console.log(question);
    const userInput = readlineSync.question('Your answer: ');

    if (userInput !== correctAnswer) {
      console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }

    console.log('Correct!');

    if (i === (tries - 1)) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export { getRandomInt, getRandomIntInRange, runGame };
