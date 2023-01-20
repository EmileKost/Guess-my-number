'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

// VERSION MADE TOGETHER WHILE WATCHING VIDEO
// const secretNumber = Math.floor(Math.random() * 20 + 1);
// console.log(secretNumber);

// let score = 20;
// document.querySelector('.score').textContent = score;

// const displayNumber = document.querySelector('.number');
// displayNumber.textContent = secretNumber;

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(`Your guess is ${guess}`);

//   if (!guess) {
//     console.log('Not a valid number');
//     document.querySelector('.message').textContent = 'No number!';
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'CORRECT NUMBER!!';
//   } else if (guess > secretNumber) {
//     document.querySelector('.message').textContent = 'TOO HIGH!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else if (guess < secretNumber) {
//     document.querySelector('.message').textContent = 'TOO LOW!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else if (guess !== secretNumber) {
//   }

//   if (score <= 0) {
//     score = 20;
//     document.querySelector('.message').textContent = 'GAME OVER...';
//     document.querySelector('.score').textContent = score;
//   }
// });

// MY OWN MORE OPTEMIZED CODE FOR THIS PROJECT

// X generate random number
// X display random number
// X Handle user input
// X check if 0
// check if above 20
// check when even
// check when to low
// check when to high
// chances counter countdown
// Handle counter reaces <0
// Handle highscore;

// const randomNumber = Math.floor(Math.random() * 20 + 1);
// const displayNumber = document.querySelector('.number');
// displayNumber.textContent = randomNumber;

// let message = document.querySelector('.message');

// const button = document.querySelector('.check');
// const guess = document.querySelector('.guess');
// const body = document.querySelector('body');
// let highScore = document.querySelector('.highscore');

// let counter = 20;
// const score = document.querySelector('.score');
// score.textContent = counter;

// button.addEventListener('click', function () {
//   let numberUser = Number(guess.value);

//   if (counter > 0) {
//     if (!numberUser || numberUser < 0) {
//       message.textContent = 'No Number...';
//     } else if (numberUser === randomNumber) {
//       message.textContent = 'YOU WIN!!!';
//       body.classList.add('green');
//       displayNumber.classList.add('wider');
//       highScore.textContent = counter;
//     } else if (numberUser < randomNumber) {
//       message.textContent = 'TOO LOW!';
//       counter--;
//       score.textContent = counter;
//     } else if (numberUser > randomNumber) {
//       message.textContent = 'TOO HIGH!';
//       counter--;
//       score.textContent = counter;
//     } else if (numerUser <= 0) {
//       message.textContent = 'Not a valid number..';
//     }
//   } else {
//     message.textContent = 'You lost...';
//   }
// });

//ONE TIME FROM SCRATCH AGAIN

// X Generate random number
// X Handle user input
// X Handle too big or too low number
// Compare user input with random number
// Reduce counter with every guess
// Set highscore if its the lowest guess
// Reset with "again"
// Set high score(see next video)

const body = document.querySelector('body');

const guessInput = document.querySelector('.guess');

const submitButton = document.querySelector('.check');
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let counter = 20;
let header = document.querySelector('.header-text');
score.textContent = counter;
let randomNumber = Math.floor(Math.random() * 20 + 1);
let highscore = 0;
let number = document.querySelector('.number');

const again = document.querySelector('.again');
let displayHighScore = document.querySelector('.highscore');

submitButton.addEventListener('click', function () {
  let guess = Number(guessInput.value);

  if (counter > 0) {
    if (!guess) {
      message.textContent = 'Not a number';
    } else if (guess <= 0) {
      message.textContent = 'Please enter a number from 1-20';
      message.style.transform = 'scale(.8)';
    } else if (guess > 20) {
      message.textContent = 'Number is too big..';
    } // Handle proper input (1-20)
    else if (guess === randomNumber) {
      message.textContent = 'CONGRATS, YOU WIN!!!';
      body.style.backgroundColor = '#b5e48c';
      header.textContent = 'YOU WIN!!!';
      number.textContent = randomNumber;
      if (counter > highscore) {
        highscore = counter;
        displayHighScore.textContent = highscore;
      }
      // REFACTORED CODE FOR THE DON'T REPAEAT YOURSELF PRINCIPLE
    } else if (guess !== randomNumber) {
      counter--;
      score.textContent = counter;
      guess < randomNumber
        ? (message.textContent = 'TOO LOW!')
        : (message.textContent = 'TOO HIGH!');
    }
  }
});

again.addEventListener('click', function () {
  randomNumber = Math.floor(Math.random() * 20 + 1);
  body.style.backgroundColor = '#222';
  counter = 20;
  score.textContent = counter;
  header.textContent = 'Guess My Number';
  message.textContent = 'Start guessing...';
  guessInput.value = '';

  //I THINK THIS WORKS THE SAME...
  // window.onload();
});
