const startBtn = document.getElementById("strt-btn");
const timerInput = document.getElementById("timer-input");
const player1ScoreP = document.getElementById("player1Score");
const player2ScoreP = document.getElementById("player2Score");
let firstScore = 0;
let secondScore = 0;

function startGame() {}

// create a timer function that gets the time input and count down
function timer () {

}
// add event listener to start button that will trigger timer function
// create variables for player1 pressed S and player2 pressed L each time - update the count each key press
// update inner text of p tag according to the count times
// with if statement compare which player wins when the time is up and display which player wins
// reset the game when the game is over

function keyBoardEvents(e) {
  if (e.keyCode === 83) {
    // On 'S' Pressed
    firstScore++;
  } else if (e.keyCode === 76) {
    // On 'L' Pressed
    secondScore++;
  }
  console.log(firstScore);
  console.log(secondScore);
  player1ScoreP.innerText = firstScore;
  player2ScoreP.innerText = secondScore;
}

document.addEventListener("keypress", keyBoardEvents);
// function startGame() {}

// function keyBoardEvents(e) {
//   if (e.keyCode === 83) {
//     // On 'S' Pressed
//   } else if (e.keyCode === 76) {
//     // On 'L' Pressed
//   }
// }

// document.addEventListener("keypress", keyBoardEvents);