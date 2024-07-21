"use strict";

//referencing the player class form the html
const player01 = document.querySelector(".player--0");
const player02 = document.querySelector(".player--1");

//To reset the score of the two players to zero
const firstPlayer01 = document.getElementById("score--0");
const secondPlayer02 = document.getElementById("score--1");

const dice01 = document.querySelector(".dice"); //referencing the class of the image
const btnRoll = document.querySelector(".btn--roll"); // referencing the roll dice class
const btnHold = document.querySelector(".btn--hold")// referencing the btn hold class

const current01 = document.getElementById("current--0");
const current02 = document.getElementById("current--1");


//define each player score that has been called by Id
firstPlayer01.textContent = 0;
secondPlayer02.textContent = 0;
dice01.classList.add("hidden"); // to hid the image

let scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;

btnRoll.addEventListener('click', function(){
dice01.classList.remove("hidden");

//to generate random number
const dice = Math.trunc(Math.random() * 6) +1; // learnt in this line of code that is the amount you restrict the random number to select, that it will select with coresspondence to the quantity of what is linked to it.

//to display random image
dice01.src = `./image/dice-${dice}.png`; //.src is reference the source of the image linked to the btn roll

//

if(dice != 1){
    //display the score
currentScore += dice;  //assign the current score to the dice number value.
// current02.textContent = currentScore;
document.getElementById(`current--${activePlayer}`).textContent = currentScore;
} else {
    // switch player
document.getElementById(`current--${activePlayer}`).textContent = 0;

activePlayer = activePlayer === 0 ? 1 : 0;  
currentScore = 0;
player01.classList.toggle("player--active");
player02.classList.toggle("player--active");

}
});


//btn

btnHold.addEventListener('click', function(){

    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent
    = scores[activePlayer];

    if(scores[activePlayer] >= 20){
    document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");


    }else{

    }
});

