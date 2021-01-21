'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    displayMessage(`🎉 Correct : ${guess}`);
    if (!guess) {
        displayMessage(`⚡ No Number`);
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#004b23';
        document.querySelector('.number').style.width = '30rem';
        displayMessage(`🎉 Correct`);
        if (highScore < score) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? `📈 Too hight` : `📉 Too low`);
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('body').style.backgroundColor = '#6e1423';
            displayMessage(`👿 You Lose`);
            document.querySelector('.score').textContent = score - 1;
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    const secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = '20';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#293241';
    document.querySelector('.number').style.width = '15rem';
})