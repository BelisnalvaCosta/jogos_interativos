# jogos_interativos

Coleção de pequenos jogos em HTML/CSS/JS com fins educativos e de prática.

## Jogo: jogo4-PergEResposta

Este é o jogo de Perguntas e Respostas. As principais mudanças/recursos incluídos:

- Perguntas embaralhadas a cada ciclo (não se repetem até que todas as perguntas sejam exibidas).
- Exibição do número da rodada e do progresso (ex.: "Rodada: 1 — Pergunta 2 de 4").
- Pontuação acumulada (por padrão, não zera automaticamente entre ciclos — se quiser zerar ao finalizar um ciclo, edite `script.js` e remova o comentário na linha indicada).
- Arquivos principais:
  - jogo4-PergEResposta/index.html
  - jogo4-PergEResposta/script.js
  - jogo4-PergEResposta/styles.css
  - imagens em jogo4-PergEResposta/images/

## Como usar localmente

1. Clone o repositório:
   ```
   git clone https://github.com/BelisnalvaCosta/jogos_interativos.git
   ```
2. Entre na pasta do jogo:
   ```
   cd jogos_interativos/jogo4-PergEResposta
   ```
3. Abra `index.html` no seu navegador (clique duas vezes ou use uma extensão de servidor local).

Se preferir, copie o conteúdo de `script.js` e cole onde preferir (por exemplo, inline em index.html) — o arquivo `script.js` está pronto para uso.

## Publicação gratuita (recomendações rápidas)

- GitHub Pages:
  1. Faça push das mudanças para a branch principal (`master`).
  2. No GitHub, vá em Settings → Pages e escolha a branch `master` e a pasta (root).
  3. O site ficará disponível em `https://BelisnalvaCosta.github.io/jogos_interativos/jogo4-PergEResposta/`.

- Netlify / Vercel:
  1. Crie conta e conecte ao GitHub.
  2. Selecione o repositório e a pasta raiz (não há build para site estático).
  3. Deploy automático a cada push.

## Licença

Este repositório está licenciado sob a MIT License — veja o arquivo `LICENSE`.

## Como aplicar as alterações no repositório (exemplo de sequência de comandos)

1. Crie a branch (se ainda não existir localmente):
   ```
   git checkout -b melhorias/perguntas-embaralhadas
   ```
2. Substitua `jogo4-PergEResposta/script.js` e `jogo4-PergEResposta/index.html` pelo novo conteúdo (ou copie/cole conforme preferir).
3. Adicione LICENSE no root do repositório.
4. Commit e push:
   ```
   git add .
   git commit -m "Embaralhar perguntas por rodada; adicionar exibição de rodada; adicionar LICENSE MIT"
   git push origin melhorias/perguntas-embaralhadas
   ```
5. Abra um Pull Request no GitHub e faça merge para `master`.

---
