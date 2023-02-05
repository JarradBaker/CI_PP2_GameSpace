const X_CLASS = 'x';
const O_CLASS = 'o';

const gameSquares = document.querySelectorAll('[data-cell]')
const gameGrid = document.getElementsByClassName('game-grid')[0];

let oTurn;

startGame();


function startGame() {
    oTurn = false;
    
    gameSquares.forEach(square => {
        square.addEventListener('click', checkSquare, { once: true })
    })
    setHoverClass();
}


function checkSquare(e) {
    const square = e.target;
    const currentClass = oTurn ? O_CLASS : X_CLASS;

    placeSymbol(square, currentClass);

    changePlayer();

    setHoverClass();
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