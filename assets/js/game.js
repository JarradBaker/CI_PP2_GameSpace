// Used WebDev Simplified's tutorial, and added extra features

// Declaring the classes as constants and assigning the class name
const X_CLASS = 'x';
const O_CLASS = 'o';

// Declaring an array of different combinations that would make
// make a player win
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// Declaring the interactable elements of the game
const gameSquares = document.querySelectorAll('[data-cell]')
const gameGrid = document.getElementsByClassName('game-grid')[0];
const restartButton = document.getElementById('reset-game');
const winningText = document.getElementById('winning-text');

let oTurn;
let hasPlayerWon = false;

restartButton.addEventListener('click', startGame);

// Starting the game
startGame();

/**
 * Function to start the game. Resets the game squares and sets
 * the turn
 */
function startGame() {
    oTurn = false;
    hasPlayerWon = false;
    
    gameSquares.forEach(square => {
        square.classList.remove(X_CLASS);
        square.classList.remove(O_CLASS);
        square.removeEventListener('click', checkSquare);
        square.addEventListener('click', checkSquare, { once: true })
    })
    setHoverClass();
    winningText.innerText = "Who will win?";
}

/**
 * Function to check the game squares after every move a player
 * makes to see if it is a win or draw. 
 */
function checkSquare(e) {
    const square = e.target;
    const currentClass = oTurn ? O_CLASS : X_CLASS;

    if(!hasPlayerWon) {
        placeSymbol(square, currentClass);
    }

    if(checkWin(currentClass)){
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        changePlayer();
        setHoverClass();
    }
}

/**
 * Function to end the game and check whether it was a win, or a
 * draw, and display the required message
 */
function endGame(draw) {
    if(draw) {
        winningText.innerText = "It's a Draw!";
    } else {
        winningText.innerText = `${oTurn ? "O's" : "X's"} Wins!`;
        hasPlayerWon = true; 
    }
}

/**
 * Checks if every square has a class added to it. If every
 * square has a class it is a draw.
 */
function isDraw() {
    return [...gameSquares].every(square => {
        return square.classList.contains(X_CLASS) || square.classList.contains(O_CLASS);
    })
}

/**
 * Function to add the X or O class to the square.
 */
function placeSymbol(square, currentClass) {
    square.classList.add(currentClass);
}

/**
 * Changes the turn to the other player
 */
function changePlayer() {
    oTurn = !oTurn;
}

/**
 * Changes the hover effect depending on which player's turn it
 * is
 */
function setHoverClass(){
    gameGrid.classList.remove(O_CLASS);
    gameGrid.classList.remove(X_CLASS);
    
    if(oTurn) {
        gameGrid.classList.add(O_CLASS);
    } else {
        gameGrid.classList.add(X_CLASS);
    }
}

/**
 * Checks the WINNING_COMBINATIONS array to see if a player
 * has won the game or not
 */
function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return gameSquares[index].classList.contains(currentClass);
        })
    })
}