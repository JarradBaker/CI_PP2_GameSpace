const X_CLASS = 'x';
const O_CLASS = 'o';

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

const gameSquares = document.querySelectorAll('[data-cell]')
const gameGrid = document.getElementsByClassName('game-grid')[0];
const restartButton = document.getElementById('reset-game');
const winningText = document.getElementById('winning-text');

let oTurn;

restartButton.addEventListener('click', startGame);

startGame();


function startGame() {
    oTurn = false;
    
    gameSquares.forEach(square => {
        square.classList.remove(X_CLASS);
        square.classList.remove(O_CLASS);
        square.removeEventListener('click', checkSquare);
        square.addEventListener('click', checkSquare, { once: true })
    })
    setHoverClass();
    winningText.innerText = "Who will win?";
}


function checkSquare(e) {
    const square = e.target;
    const currentClass = oTurn ? O_CLASS : X_CLASS;

    placeSymbol(square, currentClass);

    if(checkWin(currentClass)){
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        changePlayer();
        setHoverClass();
    }
}


function endGame(draw) {
    if(draw) {
        winningText.innerText = "It's a Draw!";
    } else {
        winningText.innerText = `${oTurn ? "O's" : "X's"} Wins!`; 
    }
}

function isDraw() {
    return [...gameSquares].every(square => {
        return square.classList.contains(X_CLASS) || square.classList.contains(O_CLASS);
    })
}

function placeSymbol(square, currentClass) {
    square.classList.add(currentClass);
}

function changePlayer() {
    oTurn = !oTurn;
}

function setHoverClass(){
    gameGrid.classList.remove(O_CLASS);
    gameGrid.classList.remove(X_CLASS);

    if(oTurn) {
        gameGrid.classList.add(O_CLASS);
    } else {
        gameGrid.classList.add(X_CLASS);
    }
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return gameSquares[index].classList.contains(currentClass);
        })
    })
}