function guessingGame(guess) {
  let gameOver = false;
  let answer = Math.floor(Math.random() * 100);
  let numOfGuess = 0;

  return function guess(guess) {
    if (gameOver) return "The game is over, you already won!";

    numOfGuess++;

    if (guess == answer) {
      gameOver = true;
      return `You win! You found ${answer} in ${numOfGuess} guesses.`;
    }
    if (guess < answer) return `${guess} is too low!`;
    if (guess > answer) return `${guess} is too high!`;
  };
}

module.exports = { guessingGame };
