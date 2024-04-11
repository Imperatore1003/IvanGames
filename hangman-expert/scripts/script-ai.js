const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");

// To use a custom word list, replace this wordList array with your own
// wordList = [
//     {
//         word: "word",
//         hint: "hint",
//         reference: "reference"
//     }
// ];
const originalWordList = JSON.parse(JSON.stringify(wordList));

// Initializing game variables
let currentWord, correctLetters, wrongGuessCount, currentReference;
const maxGuesses = 6;

const resetGame = () => {
    // Ressetting game variables and UI elements
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = "images/hangman-0.svg";
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    gameModal.classList.remove("show");
}

const getRandomWord = () => {
    // Disabling play-again button
    playAgainBtn.setAttribute("disabled", "disabled");
    // Selecting a random word and hint from the wordList
    if (wordList.length == 0 ) {
        wordList = JSON.parse(JSON.stringify(originalWordList));
    }
    const index = Math.floor(Math.random() * wordList.length);
    const { word, hint, reference } = wordList[index];
    currentWord = word; // Making currentWord as random word
    currentReference = reference;
    wordList.splice(index, 1);
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
}

const gameOver = (isVictory) => {
    // Enabling play-again button
    playAgainBtn.removeAttribute("disabled");
    // After game complete.. showing modal with relevant details
    const modalText = isVictory ? `Hai trovato la parola:` : 'La parola corretta:';
    gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
    gameModal.querySelector("h4").innerText = isVictory ? 'Congratulazioni!' : 'Game Over!';
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
    document.getElementById("reference").innerHTML = `<a href="${currentReference}" target="_blank" rel="noopener noreferrer">Definizione utilizzata</a>`;
    gameModal.classList.add("show");
}

const initGame = (button, clickedLetter) => {
    // Checking if clickedLetter is exist on the currentWord
    if(currentWord.includes(clickedLetter)) {
        // Showing all correct letters on the word display
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        // If clicked letter doesn't exist then update the wrongGuessCount and hangman image
        wrongGuessCount++;
        hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
    }
    button.disabled = true; // Disabling the clicked button so user can't click again
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    // Calling gameOver function if any of these condition meets
    if(wrongGuessCount === maxGuesses) return gameOver(false);
    if(correctLetters.length === currentWord.length) return gameOver(true);
}

// Adding an event listener for keyboard input
document.addEventListener("keydown", function (event) {
    const pressedKey = event.key.toLowerCase();

    // Checking if the pressed key is a letter
    if (/^[a-zA-Z]$/.test(pressedKey)) {
        const buttons = document.querySelectorAll('.keyboard-button');
        const button = Array.from(buttons).find(btn => btn.innerText.toLowerCase() === pressedKey);
        if (button) {
            button.click(); // Simula il clic del pulsante
        }
    }
});

// Creating keyboard buttons and adding event listeners
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    button.classList.add("keyboard-button"); // Aggiungi la classe "keyboard-button"
    keyboardDiv.appendChild(button);

    button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);