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
 "toady", "twelfth", "unzip", "waxy", "yacht", "zealous", "zipzag", "zombie"];

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
  if (remainingWords === 0){
    // new game start
  } else {
    // next round
  } else if (guessesRemaining === 0) {
    // game over
  } 
}


}
