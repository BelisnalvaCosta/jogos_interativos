const questions = [
    {
        question: "O que Deus enviou aos israelitas para comer no deserto?",
        answers: [
            { text: "Pães", correct: false },
            { text: "Codornizes e maná", correct: true },
            { text: "Peixes", correct: false },
            { text: "Frutas", correct: false }
        ],
        image: "images/codornEMana.jpg"
    },
    {
        question: "Como era o maná descrito na Bíblia?",
        answers: [
            { text: "Parecido com grãos de coentro, branco e com sabor de mel", correct: true },
            { text: "Parecido com trigo, amarelo e com sabor de manteiga", correct: false },
            { text: "Parecido com arroz, marrom e sem sabor", correct: false },
            { text: "Parecido com milho, dourado e com sabor de açúcar", correct: false }
        ],
        image: "images/mana.jpg"
    },
    {
        question: "O que Moisés ordenou que os israelitas fizessem com o maná?",
        answers: [
            { text: "Coletassem o suficiente para um dia", correct: true },
            { text: "Coletassem o suficiente para uma semana", correct: false },
            { text: "Coletassem o suficiente para um mês", correct: false },
            { text: "Não coletassem", correct: false }
        ],
        image: "images/Moises.jpg"
    },
    {
        question: "O que aconteceu com o maná que foi guardado até o dia seguinte?",
        answers: [
            { text: "Apodreceu e criou vermes", correct: true },
            { text: "Continuou bom para comer", correct: false },
            { text: "Se transformou em ouro", correct: false },
            { text: "Desapareceu", correct: false }
        ],
        image: "images/manaEmprodecidos.jpg"
    }
];

const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const imageContainer = document.getElementById('image-container');

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = 'Próxima';
    nextButton.classList.add('hide');
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerText = currentQuestion.question;
    imageContainer.innerHTML = `<img src="${currentQuestion.image}" alt="Imagem da pergunta">`;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    resultContainer.innerText = '';
    imageContainer.innerHTML = '';
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    if (correct) {
        score++;
    }
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === 'true');
    });
    if (currentQuestionIndex < questions.length - 1) {
        nextButton.classList.remove('hide');
    } else {
        showResult();
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function showResult() {
    nextButton.classList.add('hide');
    resultContainer.innerText = `Você acertou ${score} de ${questions.length} perguntas!`;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion();
});

startGame();