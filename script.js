'use strict';
const number = Math.trunc(Math.random() * 20) + 1;
let score = Number(20);

console.log(number);
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess);

    if (!guess) {
        document.querySelector('.message').textContent = 'No Number';
    } else if (guess === number) {
        document.querySelector('.message').textContent = 'Congratulation you guessed it correctly';
    } else if (guess > number) {
        score -= 1;
        console.log(`now score ${score}`);
        document.querySelector('.message').textContent = 'Too High';
        document.querySelector('.score').textContent = score;
    } else if (guess < number) {
        score -= 1;
        console.log(`now score ${score}`);
        document.querySelector('.message').textContent = 'Too Low';
        document.querySelector('.score').textContent = score;
    }
});





