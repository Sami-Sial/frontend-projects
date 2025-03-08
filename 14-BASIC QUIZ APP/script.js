const questions = [
    {
        question: "Which is largest animal on Earth ?",
        answers: [
            { text: "Giraffe", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Dolphin", correct: false },
        ]
    },
    {
        question: "Which is largest desert on Earth ?",
        answers: [
            { text: "Dasht-e-Loot", correct: false },
            { text: "Sahara", correct: true },
            { text: "Thar", correct: false },
            { text: "Thal", correct: false },
        ]
    }
]

let score = 0;
let questionIndex = 0;
let questionEl = document.querySelector("#question");
let optionEl = document.querySelector("#options");
let nextBtn = document.querySelector("#next-btn");

function startQuiz() {
    questionIndex = 0;
    score = 0;
    nextBtn.innerText = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();

    let currQuestion = questions[questionIndex];
    let questionNo = questionIndex + 1;
    questionEl.innerText = questionNo + "." + currQuestion.question;

    nextBtn.style.display = "none";

    currQuestion.answers.forEach((answer) => {
        let btn = document.createElement("button");
        btn.innerText = answer.text;
        btn.classList.add("option");
        optionEl.append(btn);

        if (answer.correct) {
            btn.dataset.correct = answer.correct;
        }

        btn.addEventListener("click", selectAnswer);
    })
}

function resetState() {
    nextBtn.style.display = "none";
    while (options.firstChild) {
        options.removeChild(options.firstChild);
    }
}

function selectAnswer(e) {
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");

        score++;
    } else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(options.children).forEach((btn) => {
        if (btn.dataset.correct === "true") {
            btn.classList.add("correct");
        }
        btn.disabled = true;
    })
    nextBtn.style.display = "inline";
}

function showScore() {
    resetState();
    questionEl.innerText = `You scored ${score} out of ${questions.length}`;
    nextBtn.style.display = "inline";
    nextBtn.innerText = "play again";
}

function handleNextBtn() {
    questionIndex++;
    if (questionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextBtn.addEventListener("click", () => {
    if (questionIndex < questions.length) {
        handleNextBtn();
    } else {
        startQuiz();
    }
})

startQuiz();