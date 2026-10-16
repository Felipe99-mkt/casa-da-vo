# Casa da Vó 3D

Um jogo em primeira pessoa, no navegador, para andar pela casa escaneada.

Este guia tem duas partes:

- **Parte 1:** jogar no seu computador (cerca de 5 minutos).
- **Parte 2:** colocar na internet com um link para compartilhar (cerca de 20 minutos, só na primeira vez).

---

# PARTE 1: Jogar no seu computador (Windows)

Por segurança, o navegador não abre o jogo se você clicar direto no `index.html`. Por isso o jogo precisa de um pequeno "servidor" rodando no seu computador. O arquivo `ABRIR_JOGO_WINDOWS.bat` faz isso sozinho, mas antes é preciso ter o Python instalado.

## Passo 1: Descompactar

1. Encontre o arquivo `casa-da-vo-jogo.zip` que você baixou (normalmente na pasta **Downloads**).
2. Clique nele com o **botão direito** e escolha **Extrair tudo...**
3. Clique em **Extrair**.
4. Vai abrir uma pasta. Entre na pasta **jogo**. Dentro dela você deve ver o `index.html`, o `ABRIR_JOGO_WINDOWS.bat` e as pastas `assets`, `css`, `js` e `vendor`.

## Passo 2: Instalar o Python (só na primeira vez)

Se você já tem o Python instalado, pule para o Passo 3.

1. Clique no menu **Iniciar** do Windows e digite **Microsoft Store**. Abra a loja.
2. Na busca da loja, digite **Python 3.12**.
3. Escolha o resultado **Python 3.12** publicado pela **Python Software Foundation**.
4. Clique em **Obter** (ou **Instalar**) e espere terminar.

## Passo 3: Abrir o jogo

1. Na pasta **jogo**, dê **dois cliques** em `ABRIR_JOGO_WINDOWS.bat`.
   - Se o Windows mostrar uma tela azul dizendo "O Windows protegeu o computador", clique em **Mais informações** e depois em **Executar assim mesmo**. O arquivo só liga o servidor local; você pode abri-lo no Bloco de Notas para conferir.
2. Vai abrir uma **janela preta**. Não feche essa janela enquanto estiver jogando.
3. Depois de uns 2 segundos, o navegador abre sozinho no endereço **http://localhost:8000**.
   - Se não abrir, abra o Chrome ou o Edge e digite `localhost:8000` na barra de endereço.
4. Espere a barra de carregamento chegar ao fim e clique em **Clique para entrar**.
5. Para parar de jogar, feche o navegador e depois feche a janela preta.

## Se algo der errado

| O que aparece | O que fazer |
|---|---|
| A janela preta diz "O Python não está instalado" | Faça o Passo 2 e abra o `.bat` de novo. |
| O navegador diz "Não é possível acessar esse site" | A janela preta foi fechada ou ainda está iniciando. Abra o `.bat` de novo e espere 5 segundos. |
| A tela fica parada em "Preparando texturas…" | Atualize a página com **F5**. Se continuar, me mande um print do console: aperte **F12** e abra a aba **Console**. |
| O jogo está lento | Aperte **F** para ver o FPS e me diga o número. |

---

# PARTE 2: Colocar na internet (GitHub Pages)

Ao final desta parte, você terá um link como `https://seu-usuario.github.io/casa-da-vo/` que qualquer pessoa pode abrir, sem instalar nada.

Vamos usar o **GitHub Desktop**, um programa gratuito em que tudo se faz com cliques. O site do GitHub não serve para isso porque não aceita arquivos maiores que 25 MB, e o modelo da casa tem 27 MB.

## Passo 1: Criar a conta no GitHub

1. Acesse **github.com** e clique em **Sign up**.
2. Preencha e-mail, senha e nome de usuário. **Anote o nome de usuário**, porque ele vai fazer parte do link.
3. Confirme o e-mail.

## Passo 2: Instalar o GitHub Desktop

1. Acesse **desktop.github.com** e clique em **Download for Windows**.
2. Abra o arquivo baixado. Ele instala sozinho.
3. Quando abrir, clique em **Sign in to GitHub.com**. O navegador vai pedir para autorizar: clique em **Authorize desktop**.
4. Na tela "Configure Git", deixe como está e clique em **Finish**.

## Passo 3: Criar o repositório (a "pasta" do projeto no GitHub)

1. No GitHub Desktop, clique no menu **File** e depois em **New repository...**
2. Preencha:
   - **Name:** `casa-da-vo` (sem acentos nem espaços; esse nome vai aparecer no link)
   - **Local path:** deixe o caminho que já aparece (normalmente `Documentos\GitHub`)
3. Clique em **Create repository**.

## Passo 4: Copiar os arquivos do jogo para o repositório

1. No GitHub Desktop, clique no menu **Repository** e depois em **Show in Explorer**. Abre uma pasta chamada `casa-da-vo`, quase vazia.
2. Em outra janela do Explorer, abra a pasta **jogo** que você descompactou na Parte 1.
3. Dentro da pasta **jogo**, aperte **Ctrl + A** para selecionar tudo e **Ctrl + C** para copiar.
4. Volte para a pasta `casa-da-vo` e aperte **Ctrl + V** para colar.
   - Se perguntar sobre substituir o `README.md`, escolha **Substituir**.
5. Confira se o `index.html` ficou **direto dentro** da pasta `casa-da-vo`, e não dentro de uma subpasta `jogo`. Isso é importante.

## Passo 5: Enviar para o GitHub

1. Volte ao GitHub Desktop. À esquerda aparece a lista de arquivos novos.
2. No canto de baixo, à esquerda, no campo **Summary**, escreva: `primeira versão`
3. Clique no botão azul **Commit to main**.
4. No topo, clique em **Publish repository**.
5. Na janelinha que abrir, **desmarque** a opção **Keep this code private**. O GitHub Pages gratuito só funciona com repositório público.
6. Clique em **Publish repository** e espere terminar o envio. Os cerca de 37 MB podem levar alguns minutos.

## Passo 6: Ligar o GitHub Pages

1. No GitHub Desktop, clique no menu **Repository** e depois em **View on GitHub**. Abre a página do repositório no navegador.
2. Clique na aba **Settings**, com ícone de engrenagem, no topo da página.
3. No menu da esquerda, clique em **Pages**.
4. Em **Build and deployment**:
   - em **Source**, escolha **Deploy from a branch**;
   - em **Branch**, escolha **main** e, ao lado, **/ (root)**;
   - clique em **Save**.
5. Espere de 1 a 3 minutos e atualize a página (F5). No topo vai aparecer **"Your site is live at ..."** com o link.
6. Clique no link para abrir o jogo. Esse é o link para compartilhar.

## Como atualizar depois

Quando eu te mandar uma versão nova:

1. Copie os arquivos novos para a pasta `casa-da-vo` (Repository → Show in Explorer), substituindo os antigos.
2. No GitHub Desktop, escreva um resumo (por exemplo, `ajuste de luz`), clique em **Commit to main** e depois em **Push origin**, no topo.
3. Em 1 ou 2 minutos o link já mostra a versão nova. Se não mostrar, aperte **Ctrl + F5** no navegador.

---

# No celular

O jogo detecta sozinho quando está num celular ou tablet e muda três coisas:

- **Controles de toque:** um círculo no canto esquerdo para andar, arrastar o dedo no resto da tela para olhar, e botões para pular (⤒), correr (») e pausar (☰).
- **Versão leve da casa:** 8,5 MB em vez de 27 MB, com texturas de 2048 px. Carrega rápido no 4G e não estoura a memória do celular. Fica um pouco menos nítida de perto.
- **Mais leve para rodar:** resolução limitada e sombras desligadas.

## Como abrir no celular

O jeito mais fácil é publicar primeiro (Parte 2) e abrir o link do GitHub Pages no navegador do celular (Chrome no Android, Safari no iPhone).

- **Android:** o jogo entra em tela cheia e deitado ao tocar em "Toque para entrar".
- **iPhone:** o Safari não permite tela cheia em sites. Gire o celular para deitado. Para esconder a barra do navegador, toque em **Compartilhar → Adicionar à Tela de Início** e abra pelo ícone criado.

## Truques

- No pause (☰), o painel de ajustes tem a pasta **Depuração**, com os mesmos atalhos do teclado: colisão, modo voo, posição, FPS e minimapa.
- Para ver a versão completa (27 MB) no celular, coloque `?hd` no fim do link, por exemplo `https://seu-usuario.github.io/casa-da-vo/?hd`.
- Para testar a versão leve no computador, use `?leve`.

---

# Controles

| Tecla | Ação |
|---|---|
| W A S D ou setas | andar |
| Mouse | olhar |
| Shift | correr |
| Espaço | pular |
| ESC | soltar o mouse, pausar e abrir o painel de ajustes |
| M | mostrar ou ocultar o minimapa |
| F | mostrar o FPS |
| V | mostrar a malha de colisão (em verde) |
| N | modo voo, sem colisão. Espaço ou E sobe; C ou Q desce |
| P | mostrar a posição atual (para escolher o ponto de nascimento) |
| R | voltar ao ponto de nascimento |

## Painel de ajustes (aparece quando você aperta ESC)

- **Escala:** o tamanho da casa. O padrão é 1, porque o escaneamento já está em metros.
- **Jogador:** altura dos olhos, largura do corpo, velocidade e pulo.
- **Nascimento:** onde o jogo começa. Ande até o lugar que quiser, aperte ESC e clique em **Usar posição atual**.
- **Luz:** troque entre **Original do escaneamento** e **Dinâmica** e ajuste a exposição (o brilho).
- **Copiar configuração:** copia todos os ajustes. Se quiser que eles valham para todo mundo que abrir o link, me mande o texto copiado, ou cole no arquivo `js/config.js` no lugar do que está lá.

Os ajustes ficam salvos só no seu navegador. **Restaurar padrão** desfaz tudo.

---

# Limitações conhecidas

- As três portas da parede comprida dão para cômodos que não foram escaneados. Elas estão bloqueadas e aparecem como um vão escuro.
- As prateleiras da cozinha ficaram borradas, e há uma mancha cinza acima da prateleira de carretéis. Isso vem do próprio escaneamento.
- A cadeira gamer flutua um pouco, porque os pés dela não foram capturados.
- A "luz dinâmica" muda pouco a aparência, já que a luz real está gravada na textura.

# Arquivos (para curiosos)

| Arquivo | O que é |
|---|---|
| `index.html` | a página do jogo |
| `ABRIR_JOGO_WINDOWS.bat` | liga o servidor local e abre o navegador |
| `js/config.js` | valores padrão (spawn, luz, velocidade...) |
| `js/main.js` | cena, carregamento, luz, painel, minimapa |
| `js/jogador.js` | física do jogador (colisão, chão, degraus) |
| `js/toque.js` | controles de toque do celular |
| `assets/casa.glb` | a casa em 3D para computador (27 MB) |
| `assets/casa_movel.glb` | a casa em 3D para celular (8,5 MB) |
| `assets/colisao.glb` | a versão simplificada usada para colisão |
| `assets/minimapa.jpg` | imagem do minimapa |
| `vendor/` | bibliotecas: Three.js 0.186.1 e three-mesh-bvh 0.9.16 |
