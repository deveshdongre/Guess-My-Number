'use strict';
const number = Math.trunc(Math.random() * 20) + 1;
let score = Number(20);

console.log(number);
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess);
    // case when there is now input
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number';
    } else if (guess === number) {                      //when Number guessed correctly
        document.querySelector('.message').textContent = 'Congratulation you guessed it correctly';
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

    } else if (guess > number) {                        //Number is greater than the guess
        if (score > 1) {
            score -= 1;

            document.querySelector('.message').textContent = 'Too High';
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You lost the Game';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < number) {                        //Number is smaller than the guess
        if (score > 1) {
            score -= 1;
            document.querySelector('.message').textContent = 'Too Low';
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You lost the Game';
            document.querySelector('.score').textContent = 0;
        }
    }
});





