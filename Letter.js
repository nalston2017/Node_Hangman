// Letter.js should not require any other files
// Constructor named Letter
// Constructor should be able to either display an underlying character or a blank placeholder
var Letter = function(letter, guessed) {
  this.letter = letterString;
  // if the letter is false
  this.guessed = false;

  // return letter if guess is correct underscore if not
  this.output = function() {
    if (this.guessed === true) {
      return this.letter;
    } else {
      return "_";
    }
  };

  // Compare letters and guesses
  this.compareLetter = function(guess) {
    if (guess === this.letter) {
      this.guessed = true;
    }
  };
}; //End of letter function

module.exports = letter;
