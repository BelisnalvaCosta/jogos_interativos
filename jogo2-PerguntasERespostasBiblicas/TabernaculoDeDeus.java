import java.util.Scanner;

public class TabernaculoDeDeus {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Arrays para armazenar perguntas, opções de resposta e respostas corretas
        String[] perguntas = {
                "Qual era o propósito principal do Tabernáculo mencionado em Êxodo 25:8?",
                "O que Deus pediu para ser trazido voluntariamente para a construção do Tabernáculo?",
                "Quais materiais foram usados para fazer o Tabernáculo?",
                "Qual era o nome do homem que Deus chamou para construir o Tabernáculo?"
        };

        String[][] opcoesResposta = {
                { "A) Ser um lugar de adoração a outros deuses",
                        "B) Ser um lugar de habitação de Deus no meio do povo de Israel",
                        "C) Ser um lugar para esconder tesouros" },
                { "A) Ouro e prata", "B) Flores e perfumes", "C) Ofertas voluntárias de todo coração" },
                { "A) Pedras preciosas", "B) Madeira de acácia, ouro, prata e bronze", "C) Madeira e barro" },
                { "A) Moisés", "B) Arão", "C) Bezalel" }
        };

        int[] respostasCorretas = { 1, 2, 1, 2 }; // Índice da reposta correta para cada pergunta

        int pontuacao = 0;

        System.out.println("Bem-vindo ao jogo do Tabernáculo de Deus!");
        System.out.println("Responda às perguntas sobre o Tabernáculo baseado em Êxodo 25:1-9.\n");

        // Loop para apresentar as perguntas e coletar respostas do jogador
        for (int i = 0; i < perguntas.length; i++) {
            System.out.println("Pergunta " + (i + 1) + ":");
            System.out.println(perguntas[i]);

            // Exibindo opções de resposta
            for (int j = 0; j < opcoesResposta[i].length; j++) {
                System.out.println(opcoesResposta[i][j]);
            }

            // Solicitando e validando a resposta do jogador
            System.out.print("Escolha a opção correta (A, B ou C): ");
            String respostaUsuario = scanner.nextLine().toUpperCase();
            int indiceRespostaUsuario = -1;

            // Convertendo a resposta do usuário para índice (0 para A, 1 para B, 2 para C)
            switch (respostaUsuario) {
                case "A":
                    indiceRespostaUsuario = 0;
                    break;
                case "B":
                    indiceRespostaUsuario = 1;
                    break;
                case "C":
                    indiceRespostaUsuario = 2;
                    break;
                default:
                    System.out.println("Opção inválida. Por favor, escolha entre A, B ou C.");
                    i--; // Para repetir a mesma pergunta
                    continue;
            }

            // Verifica se a resposta do usuário está correta
            if (indiceRespostaUsuario == respostasCorretas[i]) {
                System.out.println("Resposta correta!");
                pontuacao++;
            } else {
                System.out.println(
                        "Resposta incorreta. A resposta correta é: " + opcoesResposta[i][respostasCorretas[i]]);
            }

            System.out.println(); // Linha em branco para separar as perguntas
        }

        // Após responder todas as perguntas, exibe a pontuação final
        System.out.println("Fim do jogo!");
        System.out.println("Sua pontuação final: " + pontuacao + " de " + perguntas.length);

        scanner.close();
    }
}
