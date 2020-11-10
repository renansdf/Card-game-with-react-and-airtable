## Introdução | Vértice - Game Oficina de Facilitação

Esta aplicação foi desenvolvida inicialmente para apoiar o processo educativo da oficina de facilitação da Vértice de Setembro 2020. A oficina porém ganhou outro formato e passou a utilizar [o seguinte repositório](https://github.com/renansdf/jogo-oficina-de-facilitacao).

### Resumo
Jogo de perguntas e respostas para ser usado no processo de instruir os jogadores sobre metodologias de facilitação de processos.

### Requisitos não funcionais
- Front end em React
- Cartas são alimentadas por planilhas
- Apenas um jogador mexe no tabuleiro e deve compartilhar sua tela

### Regras
**Regras de jogadores**
- Quanto tempo um jogador tem para responder uma pergunta?
- Como um jogador é selecionado para responder a pergunta?
- Como os jogadores podem pedir ajuda aos demais jogadores ao responder uma pergunta?

**Regras de facilitação**
- Qual deve ser o critério para o facilitador selecionar a próxima carta no início de uma rodada?

### Requisitos funcionais
**Montagem**
- Uma pessoa (o convidado) deve assumir o papel do “cliente”. Seu objetivo é julgar as respostas dos jogadores e atribuir uma nota à cada uma: bom, médio ou ruim
- Uma pessoa deve assumir o papel do facilitador. Apenas este papel interage com a interface do jogo. Este deve compartilhar sua tela para que todos possam visualizar o andamento
- Um grupo de pessoas deve assumir o papel de jogadores, e sua responsabilidade durante a experiência é responder as perguntas a fim de satisfazer o cliente
- Facilitador deve poder criar uma sessão de jogo alimentando a matriz com uma planilha organizada em perguntas, destinos e histórias
- O Tempo de duração da sessão deve ser previamente estabelecido

**Rodada**
- Facilitador deve poder selecionar a próxima carta de um dentre os três decks de perguntas, destinos e histórias. Para fazer a seleção, ele deve seguir as regras de facilitação
- A carta deve ser revelada e deve expor três gradações: boa resposta, resposta neutra e resposta ruim
- O jogador designado pelo grupo deve responder a pergunta de acordo com as regras de jogadores
- O cliente deve julgar a resposta e atribuir-lhe uma nota. O facilitador deve selecionar a nota que o cliente deu
- A carta com a pergunta visível e a nota atribuída devem permanecer visíveis na interface
- Inicia-se outra rodada

**Condição de vitória**
- O jogo deve terminar quando o limite de tempo do grupo acabar
- O jogo deve terminar quando o cliente estiver satisfeito e determinar o fim da experiência
