const startMenu = document.getElementById('start-menu');
const mainQuiz = document.getElementById('main-quiz');
const gameOver = document.getElementById('game-over');
const answerOne = document.getElementById('answer-one');
const answerTwo = document.getElementById('answer-two');
const answerThree = document.getElementById('answer-three');
const answerFour = document.getElementById('answer-four');



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
    let randomNum = Math.floor(Math.random() * 10);
    question.innerText = questions[randomNum].question;
    answerOne.innerText = questions[randomNum].answers[0].text;
    answerTwo.innerText = questions[randomNum].answers[1].text;
    answerThree.innerText = questions[randomNum].answers[2].text;
    answerFour.innerText = questions[randomNum].answers[3].text;
    console.log(randomNum);
}

const questions = [
    {
        question: 'What is Superman weak to?',
        answers: [
            { text: "Kryptonite", correct: true },
            { text: "Mithril", correct: false },
            { text: "Adamantium", correct: false },
            { text: "Steel", correct: false },
        ]
    },
    {
        question: 'What Hogwarts house is Harry Potter in?',
        answers: [
            { text: "Slytherin", correct: false },
            { text: "Hufflepuff", correct: false },
            { text: "Gryffindor", correct: true },
            { text: "Ravenclaw", correct: false },
        ]
    },
    {
        question: 'What is the capital of Finland?',
        answers: [
            { text: "Espoo", correct: false },
            { text: "Helsinki", correct: true },
            { text: "Turku", correct: false },
            { text: "Porvoo", correct: false },
        ]
    },
    {
        question: 'In which decade was Madonna born?',
        answers: [
            { text: "1950s", correct: true },
            { text: "1940s", correct: false },
            { text: "1960s", correct: false },
            { text: "1930s", correct: false },
        ]
    },
    {
        question: 'Which country is brie cheese originally from?',
        answers: [
            { text: "Russia", correct: true },
            { text: "Sweeden", correct: false },
            { text: "Italy", correct: false },
            { text: "France", correct: true },
        ]
    },
    {
        question: 'What is the capital of Iceland?',
        answers: [
            { text: "Selfoss", correct: false },
            { text: "Vik", correct: false },
            { text: "Akureyri", correct: false },
            { text: "Reykjavik", correct: true },
        ]
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers: [
            { text: "Da Vinci", correct: true },
            { text: "Picasso", correct: false },
            { text: "Van Gogh", correct: false },
            { text: "Monet", correct: false },
        ]
    },
    {
        question: 'What is the largest country in the world?',
        answers: [
            { text: "China", correct: false },
            { text: "Russia", correct: true },
            { text: "USA", correct: false },
            { text: "South Korea", correct: false },
        ]
    },
    {
        question: 'What fruit takes the scientific name Mangifera indica?',
        answers: [
            { text: "Mandarin", correct: false },
            { text: "Macadamia", correct: false },
            { text: "Mango", correct: true },
            { text: "Melon", correct: false },
        ]
    },
    {
        question: 'How many sides does a heptadecagon have?',
        answers: [
            { text: "15", correct: false },
            { text: "17", correct: true },
            { text: "13", correct: false },
            { text: "19", correct: false },
        ]
    }
]