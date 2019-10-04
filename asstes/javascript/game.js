console.log("hello")

//create variables for wins, losses, guessesLeft, guessesSoFar, alphabet, guessedLetter, computerLetter
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var alaphabet = ['a', 'b', 'c', 'd', 'e', 'f'];
var guessesLetter;
var computerLetter;
//variables for display #wins, #losses, #guessesLeft, guessesSoFar
var showWins = document.getElementById('wins')
var showLosses = document.getElementById('losses')
var showGuessesLeft = document.getElementById('guessesLeft')
var showYourGuessesSoFar = document.getElementById('yourGuessesSoFar')

showWins.innerText = wins
showLosses.innerText = losses
showWins.innerText = wins
showWins.innerText = wins

function computerPicks() {
    var randomNumber = Math.floor(Math.random() * alaphabet.length)
    computerLetter = alaphabet[randomNumber]
}
computerPicks()

console.log("real psychics look into the crystal ball of the console: ", computerLetter)
//eventListener document.onkeyup
document.onkeyup = function (event) {
    console.log(event)
    //TODO ICEBOX use event.keycode for input validation (97<x<112)
    if (event.key == computerLetter) {
        console.log("You're pshycic")
        wins++
        //below is like a reset--maybe we can turn this into a function
        guessesLeft = 9
        guessesSoFar = []
        computerPicks
    } else {
        guessesLeft--
        guessesSoFar.push(event.key)
        if (guessesLeft == 0) {
            console.log("you lose")
            losses++
        }
    }
    showWins.innerText = wins
    showLosses.innerText = losses
    //showWins.innerText = wins
    //showWins.innerText = wins
}