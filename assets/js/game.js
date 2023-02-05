const X_CLASS = 'x';
const O_CLASS = 'o';

const gameSquares = document.querySelectorAll('[data-cell]')

let oTurn;

gameSquares.forEach(square => {
    square.addEventListener('click', checkSquare, { once: true })
})

function checkSquare(e) {
    console.log('clicked');
}