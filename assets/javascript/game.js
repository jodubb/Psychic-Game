var won = 0;
var lost = 0;
var attempts = 10;
var usedArray = [];
var chosenLetter = chosenLetter;
var letters = "abcdefghijklmnopqrstuvwxyz";
var keystroke = "";

// Computer's random letter
var randomNumber = Math.floor(Math.random() * letters.length);
console.log("randomNumber", randomNumber);

chosenLetter = letters[randomNumber];
console.log("chosenLetter", chosenLetter);



// Player's guesses
document.onkeyup = function (event) {
    var playerGuess = event.key;
    keystroke = keystroke + playerGuess + ", ";
    document.getElementById("yourguesses").innerText = keystroke;


    console.log("playerGuess", playerGuess);
    // if the chosenletter matches the playerGuess, then win increases by one.

    if (chosenLetter == playerGuess) {
        won = won + 1;
        document.getElementById("won").innerText = won;
        console.log("won", won);
        resetGame();
        // attempts = 10;
        // randomNumber = Math.floor(Math.random() * letters.length);
        // chosenLetter = letters[randomNumber];
        // console.log("newchosenLetter", chosenLetter);
    } else {
        if (attempts > 0) {
            attempts = attempts - 1;
            document.getElementById("attempts").innerText = attempts;
            console.log("attempts", attempts);
        }

        else {
            lost = lost + 1;
            document.getElementById("lost").innerText = lost;
            console.log("lost", lost);
            resetGame();
            // attempts = 10;
            // randomNumber = Math.floor(Math.random() * letters.length);
            // chosenLetter = letters[randomNumber];
            // console.log("newchosenLetter", chosenLetter);
        }
        // Else attempts decreases by one. If attempts equal to zero, then losses increase by one.

    }

}

function resetGame() {
    attempts = 10;
    randomNumber = Math.floor(Math.random() * letters.length);
    chosenLetter = letters[randomNumber];
    console.log("newchosenLetter", chosenLetter);
    keystroke = "";
}

//  if playerguess equals chosenletter, then wins increases by one.

// Creating the Wins

