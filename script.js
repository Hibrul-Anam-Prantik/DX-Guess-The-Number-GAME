'use strict';
// console.log(document.querySelector('.msg').textContent); // Getting text content - "Start guessing..."
// document.querySelector('.msg').textContent = '🎉 Correct Number!'; // Setting text content
// document.querySelector('.score').textContent = 13; // Setting score to 13
// document.querySelector('.number').textContent = 9;
// document.querySelector('.guess-number').value = 23; // Setting input value to 23
// console.log(document.querySelector('.guess-number').value); // Getting input value

const secretNum = Math.trunc(Math.random() * 20) + 1; // Generating random number between 1 to 20
document.querySelector('.check-btn').addEventListener('click', function () {
  const guessedNum = Number(document.querySelector('.guess-number').value);
  if (!guessedNum) console.log('⛔ Enter a valid Number!');
  else if (guessedNum > secretNum) console.log('📈 Too High!');
  else if (guessedNum < secretNum) console.log('📉 Too Low!');
  else console.log('🎉 Yep!! You got the Number!');
});
