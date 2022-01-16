'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number 😀'; 

document.querySelector('.number').textContent = 50;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 97;
*/
//== Handlling click events

// event lister --> mouse click, mouse moving , key press

let secretNumber = Math.trunc (Math.random()*20)+1;
let score = 20;
let highscore = 0;

//for the message
const displayMessage  = function(message){
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener
('click', function()
{
    const guess = Number (document.querySelector('.guess').value);
    // console.log(guess, typeof guess);


    // no input //
    if(!guess){
        displayMessage('⛔ No Number ⛔');
    }

    //wining logic start//


    else if(guess === secretNumber){
        displayMessage('Congratulation Right Guess 🏆🏆🏆 ');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').style.color = 'red';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
     //wining logic end//
    
     // when guess in wrong

    else if(guess !== secretNumber) /*guess is differnt from secret number*/
    {
        
        if(score > 0){
            displayMessage(guess > secretNumber ? 'Too High 📈' : 'Too Low 📉')
            score--;
           document.querySelector('.score').textContent = score;
        } else{
            displayMessage('You Lose The Game');
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
        }

    }

     //when guess is high
 /*   else if(guess > secretNumber){

        if(score > 0){
            document.querySelector('.message').textContent = 'Too High 📈';
            score--;
           document.querySelector('.score').textContent = score;
        } else{
            document.querySelector('.message').textContent = 'You Lose The Game';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
        }

    }

    // when guess is low
    else if(guess < secretNumber){

        if(score > 0){
            document.querySelector('.message').textContent = 'Too Low 📉';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'You Lose The Game';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
        }
    }
    */
})

document.querySelector('.again').addEventListener('click' ,function(){


    score = 20;
    
    displayMessage('Start guessing...');
    secretNumber = Math.trunc (Math.random()*20)+1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').style.color = 'black';
    
    
    
    

})