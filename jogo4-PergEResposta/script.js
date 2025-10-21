// script.js - embaralha perguntas a cada ciclo e mostra o número da rodada

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
const rodadaContainer = document.getElementById('rodada-container');

let shuffledIndices = [];
let position = 0;
let score = 0;
let rodada = 1;

function shuffleArray(array) {
    // Fisher-Yates shuffle
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function prepareNewCycle() {
    // cria array de índices [0..n-1] e embaralha
    shuffledIndices = shuffleArray(Array.from({ length: questions.length }, (_, i) => i));
    position = 0;
    updateRodadaDisplay();
}

function startGame() {
    score = 0;
    rodada = 1;
    prepareNewCycle();
    nextButton.innerText = 'Próxima';
    nextButton.classList.add('hide');
    showQuestion();
}

function updateRodadaDisplay() {
    if (!rodadaContainer) return;
    rodadaContainer.innerText = `Rodada: ${rodada}  — Pergunta ${position + 1} de ${questions.length}`;
}

function showQuestion() {
    resetState();
    const qIndex = shuffledIndices[position];
    const currentQuestion = questions[qIndex];
    questionContainer.innerText = currentQuestion.question;
    imageContainer.innerHTML = currentQuestion.image ? `<img src="${currentQuestion.image}" alt="Imagem da pergunta">` : '';
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.dataset.correct = answer.correct ? 'true' : 'false';
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
    updateRodadaDisplay();
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    resultContainer.innerText = '';
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    if (correct) {
        score++;
    }
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === 'true');
        button.disabled = true;
    });

    if (position < shuffledIndices.length - 1) {
        nextButton.classList.remove('hide');
    } else {
        showResult();
        nextButton.classList.remove('hide');
        nextButton.innerText = 'Reiniciar ciclo';
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
    resultContainer.innerText = `Você acertou ${score} de ${questions.length} perguntas no total.`;
}

nextButton.addEventListener('click', () => {
    if (position >= shuffledIndices.length - 1) {
        // fim do ciclo -> embaralha novamente e incrementa rodada
        shuffledIndices = shuffleArray(shuffledIndices);
        position = 0;
        rodada++;
        nextButton.innerText = 'Próxima';
        nextButton.classList.add('hide');
        showQuestion();
    } else {
        position++;
        nextButton.classList.add('hide');
        showQuestion();
    }
});

// Inicializa o jogo quando o script carregar
startGame();
