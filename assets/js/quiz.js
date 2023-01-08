const startMenu = document.getElementById('start-menu');
const mainQuiz = document.getElementById('main-quiz');
const gameOver = document.getElementById('game-over');



const startBtn = document.getElementById('start-button');
startBtn.addEventListener('click', startQuiz);
const question = document.getElementById('question');


function startQuiz() {
    console.log('Started')
    startMenu.classList.add('hidden');
    mainQuiz.classList.remove('hidden');
    nextQuestion();
}

function nextQuestion() {

}

const questions = [
    {
        question: 'What is',
        answers: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
        ]
    }
]