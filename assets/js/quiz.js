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
const incorrectScore = document.getElementById('incorrect-score');
const question = document.getElementById('question');
const startBtn = document.getElementById('start-button');

const answerButtons = answerOne || answerTwo || answerThree || answerFour;

startBtn.addEventListener('click', startQuiz);
answerButtons.addEventListener('click', checkAnswer);

let randomNum;


/**
 * Hides the start menu, and shows the main game window,
 * then runs the nextQuestion function.
 */
function startQuiz() {
    console.log('Started')
    startMenu.classList.add('hidden');
    mainQuiz.classList.remove('hidden');
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
        //increment correct score
        //nextQuestion
    } else {
        //increment incorrect score
        //nextQuestion
    }
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