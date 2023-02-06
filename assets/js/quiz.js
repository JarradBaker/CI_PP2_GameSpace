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
const inputBox = document.getElementById('input');
const resultsDiv = document.getElementById('results-div');
const submitBtn = document.getElementById('submit-score');
const instructionsBtn = document.getElementById('instructions');
const hiscoresBtn = document.getElementById('hiscores');
const questionArea = document.getElementById('question-area');

// Adding event listeners for the different interactables
startBtn.addEventListener('click', startQuiz);
answerOne.addEventListener('click', checkAnswer);
answerTwo.addEventListener('click', checkAnswer);
answerThree.addEventListener('click', checkAnswer);
answerFour.addEventListener('click', checkAnswer);
playAgainBtn.addEventListener('click', showStartMenu);
addHiscoreBtn.addEventListener('click', addHiscore)
submitBtn.addEventListener('click', submitHiscore);
instructionsBtn.addEventListener('click', showInstructions);
hiscoresBtn.addEventListener('click', showHiscores);

// Declaring the global variables
let randomNum;
let correctScoreValue = 0;
let life = 3;
let titleText = `<h1>Quiztion Time!</h1>`;

/**
 * Shows the start menu of the quiz
 */
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

/**
 * Checks whether the answer selected answer is correct
 * and adds 1 score if it is, or takes 1 life if it isn't
 */
function checkAnswer() {
    let correctAnswer = questions[randomNum].correct;
    if(this.innerText === correctAnswer) {
        incrementCorrectScore();
        nextQuestion();
    } else {
        decrementLifeScore();
        nextQuestion();
    }
}

/**
 * The function that increments the player's score
 */
function incrementCorrectScore() {
    ++correctScoreValue;
    correctScore.innerText = correctScoreValue; 
}

/**
 * The function that decremenets the player's lives
 */
function decrementLifeScore() {
    --life;
    if(life <= 0) {
        endGame();
    } else {
        lifeScore.innerText = life;
    }
}

/**
 * Shows the game over menu, and displays the score
 */
function endGame() {
    mainQuiz.classList.add('hidden');
    gameOver.classList.remove('hidden');
    scoreOutput.innerText = correctScoreValue;
}

/**
 * Shows the add hiscore menu
 */
function addHiscore() {
    resultsDiv.classList.add('hidden');
    inputHiscore.classList.remove('hidden'); 
}

/**
 * Allows the player to enter their hiscore and save it to
 * local storage
 */
function submitHiscore(){
    if(localStorage.getItem(inputBox.value)) {
        console.log("Hiscore Exists for this name")
        if(parseInt(localStorage.getItem(inputBox.value)) < correctScoreValue) {
            console.log("Score is higher than current, updating")
            localStorage.setItem(inputBox.value, correctScoreValue);
            inputHiscore.classList.add('hidden');
            resultsDiv.classList.remove('hidden');
            showStartMenu();
        } else {
            console.log("Score is lower, not updating")
            inputHiscore.classList.add('hidden');
            resultsDiv.classList.remove('hidden');
            showStartMenu();
        }
    } else {
        console.log("Hiscore not found for name")
        console.log("Adding hiscore")
        localStorage.setItem(inputBox.value, correctScoreValue);
        inputHiscore.classList.add('hidden');
        resultsDiv.classList.remove('hidden');
        showStartMenu();
    }
}

/**
 * Toggles the start menu between showing the game instructions 
 * and the title of the game.
 */
function showInstructions() {
    let instructionsText = `
    <h3>Click the answer to the question, and build your score up as high as you can. <br>The game ends when you lose your 3 lifes. Good luck!</h3>
    `;

    if(questionArea.innerHTML === instructionsText) {
        questionArea.innerHTML = titleText;
    } else {
        questionArea.innerHTML = instructionsText;
    }
}

/**
 * Sorts through the stored key value pairs in localStorage, and 
 * outputs the top 5 scores in order when the user presses the
 * hiscores button.
 */
function showHiscores() {

    let firstPlace = ["", 0];
    let secondPlace = ["", 0];
    let thirdPlace = ["", 0];
    let fourthPlace = ["", 0];
    let fifthPlace = ["", 0];

    for(let i = 0; i < localStorage.length; i++) {
        console.log('in the for');

        if(parseInt(localStorage.getItem(localStorage.key(i))) > firstPlace[1]) {
            if(firstPlace[1] !== null){
                secondPlace = [firstPlace[0], firstPlace[1]];
                firstPlace = [localStorage.key(i) , localStorage.getItem(localStorage.key(i))];
            } else{
                firstPlace = [localStorage.key(i) , localStorage.getItem(localStorage.key(i))];
            }
            
        } else if(parseInt(localStorage.getItem(localStorage.key(i))) > secondPlace[1]) {
            if(secondPlace[1] !== null){
                thirdPlace = [secondPlace[0], secondPlace[1]];
                secondPlace = [localStorage.key(i) , localStorage.getItem(localStorage.key(i))];
            } else{
                secondPlace = [localStorage.key(i) , localStorage.getItem(localStorage.key(i))];
            }

        } else if(parseInt(localStorage.getItem(localStorage.key(i))) > thirdPlace[1]) {
            if(thirdPlace[1] !== null){
                fourthPlace = [thirdPlace[0], thirdPlace[1]];
                thirdPlace = [localStorage.key(i) , localStorage.getItem(localStorage.key(i))];
            } else{
                thirdPlace = [localStorage.key(i) , localStorage.getItem(localStorage.key(i))];
            }

        } else if(parseInt(localStorage.getItem(localStorage.key(i))) > fourthPlace[1]) {
            if(fourthPlace[1] !== null){
                fifthPlace = [fourthPlace[0], fourthPlace[1]];
                fourthPlace = [localStorage.key(i) , localStorage.getItem(localStorage.key(i))];
            } else{
                fourthPlace = [localStorage.key(i) , localStorage.getItem(localStorage.key(i))];
            }

        } else if(parseInt(localStorage.getItem(localStorage.key(i))) > fifthPlace[1]) {
            fifthPlace = [localStorage.key(i) , localStorage.getItem(localStorage.key(i))];
        }

    }

    let hiscoreText = `
    <h3>1st: ${firstPlace[0]} : ${firstPlace[1]}<br>
        2nd: ${secondPlace[0]} : ${secondPlace[1]}<br>
        3rd: ${thirdPlace[0]} : ${thirdPlace[1]}<br>
        4th: ${fourthPlace[0]} : ${fourthPlace[1]}<br>
        5th: ${fifthPlace[0]} : ${fifthPlace[1]}</h3>
    `

    if(questionArea.innerHTML === hiscoreText) {
        questionArea.innerHTML = titleText;
    } else {
        questionArea.innerHTML = hiscoreText;
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