const secretNumber = Math.round(Math.random() * 20);
let restart = document.querySelector(".restart");
let secret = document.querySelector(".secret");
let check = document.querySelector(".check");
let input = document.querySelector(".input");
let inputValue = input.value;
let result = document.querySelector(".result");
let resultScore = document.querySelector(".score");
let resultHighScore = document.querySelector(".highscore");
let score = 20;
let highscore = 0;
resultScore.innerHTML = `💯 Score: ${score}`;
resultHighScore.innerHTML = `🥇 High score :${highscore}`;
check.addEventListener("click", () => {
  if (input.value == secretNumber) {
    document.body.style.backgroundColor = "greenyellow";
    document.body.style.color = "black";
    highscore = score;
    resultScore.innerHTML = `💯 Score: ${score}`;
    resultHighScore.innerHTML = `🥇 High score :${highscore}`;
    secret.innerHTML = secretNumber;
    result.innerHTML =
      "🎉 you won! please press the restart button to restart game and get a higher score!";
  } else {
    score--;
    resultScore.innerHTML = `💯 Score: ${score}`;
    input.value < secretNumber
      ? (result.innerHTML = "🔻 too low")
      : (result.innerHTML = "⬆️ too high");
  }
  if (score <= 0) {
    score = 0;
    resultScore.innerHTML = `💯 Score: ${score}`;
    document.body.style.backgroundColor = "red";
    document.body.style.color = "black";
    result.innerHTML =
      "🚫 you lose please press the restart button to restart game!";
  }

  console.log("clicked");
});

const restartGame = () => {
  document.body.style.backgroundColor = "rgb(49, 49, 49)";
  document.body.style.color = "white";
  score = 20;
  resultScore.innerHTML = `💯 Score: ${score}`;
  input.value = "";
  result.innerHTML = "Select a number!";
  secret.innerHTML = "?";
};

restart.addEventListener("click", () => restartGame());
