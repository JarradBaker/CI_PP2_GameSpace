const X_CLASS = 'x';
const O_CLASS = 'o';

const gameSquares = document.querySelectorAll('[data-cell]')
const gameGrid = document.getElementsByClassName('game-grid')[0];

let oTurn;

gameSquares.forEach(square => {
    square.addEventListener('click', checkSquare, { once: true })
})

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

}