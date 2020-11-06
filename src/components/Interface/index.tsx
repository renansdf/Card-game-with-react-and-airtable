import React, { useState, useEffect, useCallback } from 'react';
import { Container, DecksContainer, Deck, Questions, UsedCards } from './styles';
import cardImg from '../../images/carta-bg.png';

interface IParsedLine {
  data: string[];
}

interface InterfaceProps {
  parsedCSV?: IParsedLine[];
}

interface IDeckData {
  name: string;
  cards: Array<string>;
}

interface ICard {
  question: string;
  valuation: 'bom' | 'regular' | 'ruim';
}

interface IRecordObject {
  fields: {
    [key: string]: string;
  }
}

interface IParsedLine {
  data: string[];
}

const Interface: React.FC<InterfaceProps> = ({ parsedCSV }) => {
  const [decks, setDecks] = useState<IDeckData[]>([]);
  const [card, setCard] = useState<ICard>({ question: '', valuation: 'regular' });
  const [usedCards, setUsedCards] = useState<ICard[]>([]);

  const getDecks = useCallback((parsedLines: IParsedLine[]) => {
    if (parsedLines) {
      const updatedDecks: IDeckData[] = [];

      const columnNames = parsedLines.shift();

      columnNames?.data.forEach(column => {
        updatedDecks.push({ name: column, cards: [] });
      });

      parsedLines.forEach((line, lineIndex) => {
        line.data.forEach((data, dataIndex) => {
          data && updatedDecks[dataIndex].cards.push(data);
        });
      });

      setDecks(updatedDecks);
    }
  }, []);

  const handleCardChoice = useCallback((deckName) => {
    if (card && card.question === '') {
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

  useEffect(() => {
    parsedCSV && getDecks(parsedCSV);
  }, [parsedCSV, getDecks]);

  return (
    <Container>
      <UsedCards>
        {usedCards && usedCards.map(card => (
          <div
            key={usedCards.findIndex((usedCard) => usedCard.question === card.question)}
            onClick={() => handleReuseCard(card.question, card.valuation, usedCards.findIndex((usedCard) => usedCard.question === card.question))}
          >
            {card.question}
            <span>{card.valuation}</span>
          </div>
        ))}
      </UsedCards>

      <Questions>
        <p>
          {card?.question}
        </p>
        <div>
          <button onClick={() => handleCardAnswer('bom')}>resposta boa</button>
          <button onClick={() => handleCardAnswer('regular')}>resposta regular</button>
          <button onClick={() => handleCardAnswer('ruim')}>resposta ruim</button>
        </div>
      </Questions>

      <DecksContainer>
        {decks && decks.map(deck => (
          <Deck key={deck.name}>
            <h2>{deck.name}</h2>
            <button onClick={() => handleCardChoice(deck.name)}><img src={cardImg} alt="Card" /></button>
          </Deck>
        ))}
      </DecksContainer>
    </Container>
  );
}

export default Interface;
