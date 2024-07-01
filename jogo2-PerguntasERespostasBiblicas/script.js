let perguntas = [
    "Qual era o propósito principal do Tabernáculo mencionado em Êxodo 25:8?",
    "O que Deus pediu para ser trazido voluntariamente para a construção do Tabernáculo?",
    "Quais materiais foram usados para fazer o Tabernáculo?",
    "Qual era o nome do homem que Deus chamou para construir o Tabernáculo?"
];

let opcoesResposta = [
    ["A) Ser um lugar de adoração a outros deuses", "B) Ser um lugar de habitação de Deus no meio do povo de Israel", "C) Ser um lugar para esconder tesouros"],
    ["A) Ouro e prata", "B) Flores e perfumes", "C) Ofertas voluntárias de todo coração"],
    ["A) Pedras preciosas", "B) Madeira de acácia, ouro, prata e bronze", "C) Madeira e barro"],
    ["A) Moisés", "B) Arão", "C) Bezalel"]
];

let respostasCorretas = [1, 2, 1, 2]; // Índice da resposta correta para cada pergunta

let pontuacao = 0;
let perguntaAtual = 0;

function iniciarJogo() {
    exibirPergunta();
}

function exibirPergunta() {
    let pergunta = document.getElementById("pergunta");
    let opcoes = document.getElementById("opcoes");
    let btnResponder = document.getElementById("btnResponder");
    let feedback = document.getElementById("feedback");
    let pontuacaoElement = document.getElementById("pontuacao");

    pergunta.innerHTML = perguntas[perguntaAtual];

    opcoes.innerHTML = "";
    opcoesResposta[perguntaAtual].forEach((opcao, index) => {
        let input = `<label><input type="radio" name="resposta" value="${index}"> ${opcao}</label>`;
        opcoes.innerHTML += input;
    });

    btnResponder.disabled = false;
    feedback.innerHTML = "";
    pontuacaoElement.innerHTML = "Pontuação: " + pontuacao;
}

function responder() {
    let opcoes = document.getElementsByName("resposta");
    let respostaUsuario = -1;

    for (let i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
            respostaUsuario = parseInt(opcoes[i].value);
            break;
        }
    }

    if (respostaUsuario === -1) {
        alert("Por favor, selecione uma resposta.");
        return;
    }

    let feedback = document.getElementById("feedback");

    if (respostaUsuario === respostasCorretas[perguntaAtual]) {
        feedback.innerHTML = "Resposta correta!";
        pontuacao++;
    } else {
        feedback.innerHTML = "Resposta incorreta. A resposta correta é: " + opcoesResposta[perguntaAtual][respostasCorretas[perguntaAtual]];
    }

    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        exibirPergunta();
    } else {
        let container = document.querySelector(".container");
        container.innerHTML = `<h1>Fim do jogo!</h1><p>Sua pontuação final: ${pontuacao} de ${perguntas.length}</p>`;
    }
}

// Iniciar o jogo quando a página carregar
document.addEventListener("DOMContentLoaded", iniciarJogo);
