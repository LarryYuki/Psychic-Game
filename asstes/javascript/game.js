var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var alaphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
var guessesLetter;
var computerLetter;

var showWins = document.getElementById('wins')
var showLosses = document.getElementById('losses')
var showGuessesLeft = document.getElementById('guessesLeft')
var showYourGuessesSoFar = document.getElementById('yourGuessesSoFar')

showWins.innerText = wins
showLosses.innerText = losses
showGuessesLeft.innerText = guessesLeft
showYourGuessesSoFar.innerText = yourGuessesSoFar

function computerPicks() {
    var randomNumber = Math.floor(Math.random() * alaphabet.length)
    computerLetter = alaphabet[randomNumber]
}
computerPicks()

document.onkeyup = function (event) {
    var guessesLetter = event.key;

    if (guessesLetter === alaphabet) {
        wins++;
        guessesLetter = 10;
        guessesSoFar.push(event.key);
    }

    if (event.key == computerLetter) {
        alert("You're pshycic")
        wins++
        guessesLeft = 10
        guessesSoFar = []
        computerPicks
    } else {
        guessesLeft--
        guessesSoFar.push(event.key)
        if (guessesLeft == 0) {
            alert("you lose")
            losses++
            guessesLeft = 10;
        }

    }
    var guessSoFarStr = "";
    for (let i = 0; i < guessesSoFar.length; i++) {
        guessSoFarStr += guessesSoFar[i] + ",";

    }
    console.log(guessSoFarStr)
    showWins.innerText = wins
    showLosses.innerText = losses
    showGuessesLeft.innerText = guessesLeft
    showYourGuessesSoFar.innerText = guessSoFarStr
}