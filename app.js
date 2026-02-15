function startGame() {
  let secretNumber = Math.ceil(Math.random() * 10);
  let guess;
  let attempts = 0;
  let maxAttempts = 3;


  alert("I have guessed a number from 1 to 10, You have 3 attempts to guess that number.");

  for (let i = 0; i < maxAttempts; i++) {
    let input = +prompt("Choose your number from (1-10)");
    guess = parseInt(input);

    if (isNaN(guess)) {
      alert("Enter a number, if not, then go and do your work.");
      break;
    }

    attempts++;

    if (guess === secretNumber) {
      alert("Hurray you won, Don't think that you are genius.");
      break;
    } else if (guess > secretNumber) {
      if (attempts !== maxAttempts) {
        alert("Too high, Please try again");
      } else if (attempts === maxAttempts) {
        alert(`Your attempts are over, The correct number was ${secretNumber}`);
        break;
      }
    } else if (guess < secretNumber) {
      if (attempts !== maxAttempts) {
        alert("Too low, Please try again");
      } else if (attempts === maxAttempts) {
        alert(`Your attempts are over, The correct number was ${secretNumber}`);
        break;
      }
    }

  }
}