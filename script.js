'use strict';


//generate random number between 1-20
//let secretNumber = Math.trunc(Math.random() * 20) + 1;
let secretNumber = generateSecretNumber();
//Allows only 20 tries
let score = 20;
//Sets highscore
let highScore = 0;

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}
function generateSecretNumber() {
    return Math.trunc(Math.random() * 20) + 1;
}
function setBackgroundColor(color) {

    document.querySelector('body').style.backgroundColor = color;

}


//onclick even listener
document.querySelector('.check').addEventListener('click', function () {

    if (score > 1) {
        //converts .value to number because querySelector is always a string
        const guess = Number(document.querySelector('.guess').value);

        //when is no input it will be evaluated to a boolean, and 0 is falsy value so 0 will = false
        if (!guess) {

            displayMessage('No number!');
        }
        //When guess is wrong
        else if (guess != secretNumber) {
            document.querySelector('.message').textContent = guess > secretNumber ? 'Guess Lower!' : 'Guess Higher';
            score--;
            document.querySelector('.score').textContent = score;
        }
        //when guess is correct
        else if (guess === secretNumber) {
            //Displays winning message
            displayMessage('Correct!');

            //displays secretNumber
            document.querySelector('.number').textContent = secretNumber;

            //manipulates styles:
            setBackgroundColor("'#60b347'");

            document.querySelector('.number').style.width = '30rem';

            //update high score if new high score is more than the previous one
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;

            }

        }
    }
    else {
        displayMessage('Too many attempts - you lost!');
        score = 0;
        document.querySelector('.score').textContent = score;
    }

});
document.querySelector('.again').addEventListener('click', function () {
    //reset properties
    secretNumber = generateSecretNumber();
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing...');
    //reset styles:
    setBackgroundColor("'#222'");
    document.querySelector('.number').style.width = '15rem';


});
