import React from 'react';
import { FiMenu } from 'react-icons/fi';

import { useDecks } from '../../hooks/Deck';

import { Container } from './styles';

const Explanation: React.FC = () => {
  const { decks, isMenuVisible, setIsMenuVisible } = useDecks();

  return (
    <Container isVisible={isMenuVisible}>
      <div>
        <h1>Deck Player</h1>
        <p>Drop your .csv file in the box to turn each column of the sheet into a deck of cards.</p>
        <p>You can play a card on the table by clicking on a deck.</p>
        <p>Each new card is picked at random and cannot be repeated.</p>
        <p>Once on the table, you can assign <span role="img" aria-label="star">⭐</span>s to it, and send it to the row of used cards on top.</p>
        <p>You can replay used cards by clicking on them.</p>
      </div>

      {decks && (
        <button className="close" onClick={() => setIsMenuVisible(false)}>X</button>
      )}

      <button className="open" onClick={() => setIsMenuVisible(true)} ><FiMenu size={20} /></button>
    </Container>
  );
}

export default Explanation;
