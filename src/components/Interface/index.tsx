import React, { useState, useCallback } from 'react';
import { Container, DecksContainer, Deck, Questions, UsedCards } from './styles';
import cardImg from '../../images/carta-bg.png';
import { useDecks } from '../../hooks/Deck';

interface ICard {
  question: string;
  valuation: 'bom' | 'regular' | 'ruim';
}

const Interface: React.FC = () => {
  const [card, setCard] = useState<ICard>({ question: '', valuation: 'regular' });
  const [usedCards, setUsedCards] = useState<ICard[]>([]);

  const { decks, setDecks } = useDecks();

  const handleCardChoice = useCallback((deckName) => {
    if (card && decks && card.question === '') {
      const chosenDeck = decks.filter(deck => deck.name === deckName);
      const cards = chosenDeck[0].cards;
      if (cards.length > 0) {
        const selectedCardKey = Math.floor(Math.random() * cards.length);
        const question = cards[selectedCardKey];

        setCard({ question, valuation: 'regular' });

        let updatedDecks = decks;
        updatedDecks.forEach(deck => {
          if (deck.name === chosenDeck[0].name) {
            deck.cards.splice(selectedCardKey, 1);
            console.log(deck.cards.length);
            if (deck.cards.length === 0) {
              deck.isEmpty = true;
            }
          }
        });

        setDecks(updatedDecks);
      }
    }
  }, [decks, setCard, setDecks, card]);

  const handleCardAnswer = useCallback((valuation: 'bom' | 'regular' | 'ruim') => {
    if (card && card.question !== '') {
      setUsedCards([...usedCards, { question: card.question, valuation }]);
      setCard({ question: '', valuation: 'regular' });
    }
  }, [setUsedCards, card, usedCards, setCard]);

  const handleReuseCard = useCallback((question, valuation, index) => {
    if (card && card.question === '') {
      setCard({ question, valuation });
      const updatedUsedCards = usedCards;
      updatedUsedCards.splice(index, 1);
      setUsedCards(updatedUsedCards);
    }
  }, [setCard, setUsedCards, card, usedCards]);

  return (
    <Container>
      <UsedCards>
        {usedCards && usedCards.map(card => (
          <div
            key={usedCards.findIndex((usedCard) => usedCard.question === card.question)}
            onClick={() => handleReuseCard(card.question, card.valuation, usedCards.findIndex((usedCard) => usedCard.question === card.question))}
          >
            {card.question}
            <aside>
              {card.valuation === "ruim" && (<span role="img" aria-label="three stars">⭐</span>)}
              {card.valuation === "regular" && (<span role="img" aria-label="three stars">⭐⭐</span>)}
              {card.valuation === "bom" && (<span role="img" aria-label="three stars">⭐⭐⭐</span>)}
            </aside>
          </div>
        ))}
      </UsedCards>

      <Questions>
        <p>
          {card?.question}
        </p>
        <div>
          <button onClick={() => handleCardAnswer('ruim')}><span role="img" aria-label="one star">⭐</span></button>
          <button onClick={() => handleCardAnswer('regular')}><span role="img" aria-label="two stars">⭐⭐</span></button>
          <button onClick={() => handleCardAnswer('bom')}><span role="img" aria-label="three stars">⭐⭐⭐</span></button>
        </div>
      </Questions>

      <DecksContainer>
        {decks && decks.map(deck => (
          <Deck key={deck.name} isEmpty={deck.isEmpty}>
            <h2>{deck.name}</h2>
            {deck.isEmpty && (<p>this deck is out of cards</p>)}
            <button onClick={() => handleCardChoice(deck.name)}><img src={cardImg} alt="Card" /></button>
          </Deck>
        ))}
      </DecksContainer>
    </Container>
  );
}

export default Interface;
