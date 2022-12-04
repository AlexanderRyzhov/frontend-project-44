import readlineSync from 'readline-sync';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const tries = 3;
  for (let i = 0; i < tries; i += 1) {
    const num = getRandomInt(100);

    let correctAnswer;
    if (num % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

    console.log(`Question: ${num}!`);
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

export default evenGame;
