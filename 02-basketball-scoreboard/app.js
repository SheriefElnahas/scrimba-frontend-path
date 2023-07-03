// Select Players Score
let playerOneScore = document.querySelector('.player-one-score');
let playerTwoScore = document.querySelector('.player-two-score');

// Make Players Score 0
playerOneScore.textContent = playerTwoScore.textContent = 0;

// Select Players Buttons
const playerOneButtons = document.querySelectorAll('.player-one button');
const playerTwoButtons = document.querySelectorAll('.player-two button');

// Helper Function For Increment Buttons
function incrementLogic(event, playerScore) {
  // Figure out which number was clicked
  const buttonNumber = +event.target.textContent[1];

  // Add the number to the current score and store that in a variable
  let score = +playerScore.textContent + buttonNumber;

  // Update player score
  playerScore.textContent = score;
}

// Change color of the player depending on who is the winner
function winnerSoFar(playerOneScore, playerTwoScore) {
  // Extract each player score and convert it to a number
  let firstPlayerScore = +playerOneScore.textContent;
  let secondPlayerScore = +playerTwoScore.textContent;

  // If player one is the winner
  if (firstPlayerScore > secondPlayerScore) {
    // Change player one color to green and playet two color to red
    playerOneScore.style.color = '#2be52b';
    playerTwoScore.style.color = '#F94F6D';

    // If player two is the winner
  } else if (secondPlayerScore > firstPlayerScore) {
    // Change player one color to green and playet two color to red
    playerTwoScore.style.color = '#2be52b';
    playerOneScore.style.color = '#F94F6D';
    // Draw case
  } else if (firstPlayerScore === secondPlayerScore) {
    // Made them both teal
    playerOneScore.style.color = playerTwoScore.style.color = '#005d68';
  }
}

playerOneButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    incrementLogic(e, playerOneScore);
    winnerSoFar(playerOneScore, playerTwoScore);
  });
});

playerTwoButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    incrementLogic(e, playerTwoScore);
    winnerSoFar(playerOneScore, playerTwoScore);
  });
});
