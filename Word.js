// Word.js should only require Letter.js
var Letter = require("./Letter.js");
// Word constructor that depends on the letter constructor
var Word = function(word) {
  // create an array for letter objects
  this.letterArray = [];

  for (var i = 0; i < word.length; i++) {
    var newLetter = new Letter(word[i]);
    // Push the loop to the letter Array
    this.letterArray.push(newLetter);
  }

  // create the the loops that puts out the underscore or letter
  this.letterString = function() {
    this.outputArray = [];
    for (var i = 0; i < this.letterArray.length; i++) {
      var output = this.letterArray[i].output();
      this.outputArray.push(output);
    }
    console.log(this.outputArray.join(" "));
    console.log("");
  };

  // check each letter of the letter array, creating the arguement of guessed letter
  this.guessLetter = function(guessedLetter) {
    for (var i = 0; i < thisletterArr.length; i++) {
      thisletterArr[i].checkLetter(guessedLetter);
    }
  };
};


module.exports = Word;
