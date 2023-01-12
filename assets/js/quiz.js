// Declaring and assigning the main constants for the different
// game states.
const startMenu = document.getElementById('start-menu');
const mainQuiz = document.getElementById('main-quiz');
const gameOver = document.getElementById('game-over');

// Declaring and assigning the different elements of the game
// that will be interacted with.
const answerOne = document.getElementById('answer-one');
const answerTwo = document.getElementById('answer-two');
const answerThree = document.getElementById('answer-three');
const answerFour = document.getElementById('answer-four');
const correctScore = document.getElementById('correct-score');
const lifeScore = document.getElementById('life-score');
const question = document.getElementById('question');
const startBtn = document.getElementById('start-button');
const playAgainBtn = document.getElementById('play-again');
const addHiscoreBtn = document.getElementById('add-hiscore');
const scoreOutput = document.getElementById('score-output');
const resultsText = document.getElementById('results');
const inputHiscore = document.getElementById('input-hiscore');
const resultsDiv = document.getElementById('results-div');

startBtn.addEventListener('click', startQuiz);
answerOne.addEventListener('click', checkAnswer);
answerTwo.addEventListener('click', checkAnswer);
answerThree.addEventListener('click', checkAnswer);
answerFour.addEventListener('click', checkAnswer);
playAgainBtn.addEventListener('click', showStartMenu);
addHiscoreBtn.addEventListener('click', addHiscore)

let randomNum;
let correctScoreValue = 0;
let life = 3;

function showStartMenu() {
    correctScoreValue = 0;
    life = 3;
    gameOver.classList.add('hidden');
    startMenu.classList.remove('hidden');
    
}

/**
 * Hides the start menu, and shows the main game window,
 * then runs the nextQuestion function.
 */
function startQuiz() {
    console.log('Started')
    startMenu.classList.add('hidden');
    mainQuiz.classList.remove('hidden');
    correctScore.innerText = correctScoreValue; 
    lifeScore.innerText = life;
    nextQuestion();
}

/**
 * Gets a random number, and uses that to determine which
 * question and answers are shown. Outputs the question and
 * answers to the h1 and buttons.
 */
function nextQuestion() {
    randomNum = Math.floor(Math.random() * 10);
    question.innerText = questions[randomNum].question;
    answerOne.innerText = questions[randomNum].answers[0].text;
    answerTwo.innerText = questions[randomNum].answers[1].text;
    answerThree.innerText = questions[randomNum].answers[2].text;
    answerFour.innerText = questions[randomNum].answers[3].text;
    console.log(randomNum);
}

function checkAnswer() {
    let correctAnswer = questions[randomNum].correct;
    if(this.innerText === correctAnswer) {
        console.log("the answer is correct")
        incrementCorrectScore();
        nextQuestion();
    } else {
        console.log("the answer is incorrect")
        decrementLifeScore();
        nextQuestion();
    }
}

function incrementCorrectScore() {
    ++correctScoreValue;
    correctScore.innerText = correctScoreValue; 
}

function decrementLifeScore() {
    --life;
    if(life <= 0) {
        endGame();
    } else {
        lifeScore.innerText = life;
    }
}

function endGame() {
    mainQuiz.classList.add('hidden');
    gameOver.classList.remove('hidden');
    scoreOutput.innerText = correctScoreValue;
}

function addHiscore() {
    resultsDiv.classList.add('hidden');
    inputHiscore.classList.remove('hidden');
    
}

/**
 * Array of objects, each object has a question, and
 * an array of objects containing the question text, and 
 * whether that text is the correct answer of the four.
 */
const questions = [
    {
        question: 'What is Superman weak to?',
        answers: [
            { text: "Kryptonite" },
            { text: "Mithril" },
            { text: "Adamantium" },
            { text: "Steel" }
        ],
        correct: 'Kryptonite'
    },
    {
        question: 'What Hogwarts house is Harry Potter in?',
        answers: [
            { text: "Slytherin" },
            { text: "Hufflepuff" },
            { text: "Gryffindor" },
            { text: "Ravenclaw" }
        ],
        correct: 'Gryffindor'
    },
    {
        question: 'What is the capital of Finland?',
        answers: [
            { text: "Espoo" },
            { text: "Helsinki" },
            { text: "Turku" },
            { text: "Porvoo" }
        ],
        correct: 'Helsinki'
    },
    {
        question: 'In which decade was Madonna born?',
        answers: [
            { text: "1950s" },
            { text: "1940s" },
            { text: "1960s" },
            { text: "1930s" }
        ],
        correct: '1950s'
    },
    {
        question: 'Which country is brie cheese originally from?',
        answers: [
            { text: "Russia" },
            { text: "Sweeden" },
            { text: "Italy" },
            { text: "France" }
        ],
        correct: 'France'
    },
    {
        question: 'What is the capital of Iceland?',
        answers: [
            { text: "Selfoss" },
            { text: "Vik" },
            { text: "Akureyri" },
            { text: "Reykjavik" }
        ],
        correct: 'Reykjavik'
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers: [
            { text: "Da Vinci" },
            { text: "Picasso" },
            { text: "Van Gogh" },
            { text: "Monet" }
        ],
        correct: 'Da Vinci'
    },
    {
        question: 'What is the largest country in the world?',
        answers: [
            { text: "China" },
            { text: "Russia" },
            { text: "USA" },
            { text: "South Korea" }
        ],
        correct: 'Russia'
    },
    {
        question: 'What fruit takes the scientific name Mangifera indica?',
        answers: [
            { text: "Mandarin" },
            { text: "Macadamia" },
            { text: "Mango" },
            { text: "Melon" }
        ],
        correct: 'Mango'
    },
    {
        question: 'How many sides does a heptadecagon have?',
        answers: [
            { text: "15" },
            { text: "17" },
            { text: "13" },
            { text: "19" }
        ],
        correct: '17'
    }
]