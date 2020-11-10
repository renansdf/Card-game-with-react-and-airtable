## Introdução | Vértice - Game Oficina de Facilitação

Esta aplicação foi desenvolvida inicialmente para apoiar o processo educativo da oficina de facilitação da Vértice de Setembro 2020. A oficina porém ganhou outro formato e passou a utilizar [o seguinte repositório](https://github.com/renansdf/jogo-oficina-de-facilitacao). A principio esta aplicação seria um jogo de cartas com diferentes funções: em cada carta haveriam perguntas, ações ou narrativas que seriam ativadas ao longo do jogo. Por isso foi necessário criar nomes para os decks, sorteio de cartas e a possibilidade de jogar um carta novamente.

### Atual estado desta aplicação
Durante o desenvolvimento foi necessário criar uma interface de jogo onde os decks de cartas pudessem ser carregados por uma planilha. Esta premissa foi mantida e adaptada para receber uploads de .csv e criar os decks de carta a partir das colunas da planilha, onde a primeira linha de uma coluna seria o título do deck e as demais linhas seriam suas cartas. 

- Inicialmente as cartas eram inseridas em uma planilha do AirTable e carregadas na aplicação via uma API.
- Na primeira versão todo o gerenciamento dos decks era feito em um único componente, mas agora esse gerenciamento é feito usando um hook de contexto do React.

### Requisitos não funcionais
- Cartas são alimentadas por planilhas.
- Durante uma sessão de jogo apenas um jogador mexe no tabuleiro e deve compartilhar sua tela com os demais.

### Requisitos funcionais
- Ao acessar a aplicação e a qualquer momento durante a interação o usuário deve poder atualizar a planilha de .csv e portanto os decks de cartas.
- Cartas que já foram usadas devem poder ser jogadas novamente e ter seu valor (⭐) alterado.
