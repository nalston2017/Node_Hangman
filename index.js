// Required variables
var word = require("./Word.js");
var inquirer = require("inquirer");
var clear = require("clear");

// Global Variables
var currentWord, wordObject, remainingWords, guessesRemaining, lettersRemaining, lettersGuessed, trash;

//Array of variables
var wordBank = ["awkward", "bangpipes", "banjo", "bungler", "croquet", "crypt", "dwarves", "fervid", "fishhook", "gazebo",
  "gypsy", "haiku", "haphazard", "hyphen", "jazzy", "jiffy", "jinx", "jukebox", "kayak", "kiosk", "klutz", "memento", "mystify",
  "numbskull", "ostracize", "oxygen", "phlegm", "pixel", "polka", "quad", "quip", "rhythmic", "rogue", "sphinx", "squawk",
  "toady", "twelfth", "unzip", "waxy", "yacht", "zealous", "zipzag", "zombie"
];

//Functions
var start = function() {
  clear();
  console.log("\n" + "Welcome to Node Hangman!!!" + "\n\n");
  generateWord();
}

var generateWord = function() {
  wordObject = {};
  guessesRemaining = 10;
  var randomWord = Math.floor(Math.random() * wordBank.length);
  currentWord = wordBank[randomWord];
  wordObject = new Word(currentWord);

  // Remove the word from the list
  wordBank.splice(randomWord, 1);
  remainingWords = wordBank.length;
  guess();
}

var guess = function() {
  clear();
  showLettersRemaining();

  if (lettersRemaining === 0) {
    if (remainingWords === 0) {
      end();
    } else {
      newGame();
    } else if (guessesRemaining === 0) {
      gameOver();
    } else {
      console.log(`Remaining Words: ${remainingWords}`);
      console.log(`Remaining Words: ${remainingWords.join(" ")}`);
      console.log(`Guesses Remaining: ${guessesRemaining}`);

      wordObject.letterString();

      inquirer.prompt([
        {
        type: "input",
        message: "Please enter a guess: ",
        name: "guess"
      }
    ]).then(function(response) {
        var Regex = /^[a-z]+$/i;
        if (response.guess.length === 1 && Regex.test(response.guess)) {
          var currentGuess = response.guess.toLowerCase();
          wordObject.guessLetter(currentGuess);
          lettersInWord(currentGuess);
          playerGuess();
        }

        var playerGuess = function() {
          clear();
          letterCount();

          if (lettersRemaining === 0) {
            if (remainingWords === 0) {
              end();
            } else {
              newGame();
            }
          } else if (remainingWords === 0) {
            gameOver();
          } else {
            console.log(`Remaining Words: ${remainingWords}`);
            console.log(`Remaining Words: ${remainingWords.join(" ")}`);
            console.log(`Guesses Remaining: ${guessesRemaining}`);

            wordObject.letterString();

            inquirer.prompt([{
              type: "input",
              message: "Please enter a guess: ",
              name: "guess"
            }]).then(function(response) {
              var Regex = /^[a-z]+$/i;
              if (response.guess.length === 1 && Regex.test(response.guess)) {
                var currentGuess = response.guess.toLowerCase();
                wordObject.guessLetter(currentGuess);
                playerGuess();
              } else {
                rules();
              }
            });
          }
        };

        var rules = function() {
          inquirer.prompt([
            {
              type: "confirm",
              message: "Do you understand that you can only type one letter at a time, right?",
              name: "confirm"
            }
          ]).then(function(response) {
            if (response.confirm === true) {
              playerGuess();
            } else {
              rules();
            }
          });
        }

      var lettersInWord = function(letterCheck) {
        if (currentWord.indexOf(letterCheck) === -1) {
        if (lettersGuessed.indexOf(letterCheck) === -1) {
          guessesRemaining--;
          lettersGuessed.push(letterCheck);
        }
        }
      }

var letterCount = function() {
  lettersRemaining = 0;
  for (var i = 0; i < wordObject.letterArray.length; i++) {
    wordObject.letterArray[i].guessed === false) {
      lettersRemaining++;
    }
  };
}

// get it to switch to new word or if all the words have been picked = end game
var newGame = function() {
  console.log("Congrats you have guessed correctly!\n\n");

  inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "What do you want to do?",
      choices: ["New Game", "Stop Playing"]
    }
  ]).then(function(response) {
    if (response === "New Game") {
    generateWord();
  } else {
    quit();
  }
});
}

var gameOver = function() {
  console.log("Sorry you have ran out of guesses. GAME OVER.");
  console.log(`The word was ${currentWord}.\n`);

  inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "What do you want to do?",
      choices: ["Play again", "Stop Playing"]
    }
  ]).then(function(response) {
    if (response.choice === "Play again") {
      clear();
      generateWord();
    } else {
    quit();
    }
  });
}

var quit = function() {
  clear();
  console.log("Sounds good. Catch ya next time cowboy.");
}

      })
    }
  }
}

start()
