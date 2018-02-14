// Required variables
var word = require("./Word.js");
var inquirer = require("inquirer");
var clear = require("clear");

// Global Variables
var currentWord, guessesRemaining, lettersRemaining, lettersGuessed;

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

 }
