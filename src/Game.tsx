import React from 'react';
import GlobalStyle from './styles/global';
import Board from './pages/Board';
import { DeckProvider } from './hooks/Deck';

const Game: React.FC = () => {
  return (
    <DeckProvider>
      <Board />
      <GlobalStyle />
    </DeckProvider>
  );
};

export default Game;
