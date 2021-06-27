'use strict';
let number = RandomNumber();
let score = Number(20);
let highscore = 0;

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

function RandomNumber() {
    return Math.trunc(Math.random() * 20) + 1;
}

console.log(number);
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess);
    // case when there is now input
    if (!guess) {
        displayMessage('No Number');
    } else if (guess === number) {                      //when Number guessed correctly
        displayMessage('Congratulation you guessed it correctly');
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (highscore < score) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess !== number) {
        if (score > 1) {
            score -= 1;
            displayMessage(guess > number ? 'Too High' : 'Too Low');
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage('You lost the Game');
            document.querySelector('.score').textContent = 0;
        }

    }
});


// Again Functionality
document.querySelector('.again').addEventListener('click', function () {
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    number = RandomNumber();
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = 20;
});



