import React from 'react';
import GlobalStyle from './styles/global';
import Board from './pages/Board';

const Game: React.FC = () => {
  return (
    <>
      <Board />
      <GlobalStyle />
    </>
  );
};

export default Game;
