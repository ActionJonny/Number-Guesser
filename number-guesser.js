var guess = document.querySelector('.guess');
var eyg = document.querySelector('.eyg');
var userGuess = document.querySelector('.populate');
var message = document.querySelector('.message');
var clearButton = document.querySelector('.clear');
var resetGame = document.querySelector('.reset');
var randomNumber;
var max = 100;
var min = 1;
var greeting;

function generateRandomNumber(){
  return Math.floor(Math.random() * (max-min));
};

randomNumber = generateRandomNumber();

function resetIt() {
  eyg.value = "";
  userGuess.innerText = "";
  message.innerText = "";
};

function gameWinner() {
  generateRandomNumber;
}

function compare() {
  var userGuess = (parseInt(eyg.value))
  if (randomNumber === userGuess){
    greeting = 'Correct!';
    gameWinner;
  } else if (randomNumber > userGuess) {
    greeting = 'Too Low!'
  } else if (randomNumber < userGuess) {
    greeting = 'Too High!'
  }
  message.innerText = greeting
}

guess.addEventListener ('click', function() {
  userGuess.innerText = eyg.value;
  compare();
})

function clearMe() {
  eyg.value = "";
}

clearButton.addEventListener('click', clearMe)

resetGame.addEventListener('click', resetIt);
