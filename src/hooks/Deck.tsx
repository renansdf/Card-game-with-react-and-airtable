import React, { createContext, useCallback, useContext, useState } from "react";

interface IDeckData {
  name: string;
  isEmpty: boolean;
  cards: Array<string>;
}

interface IParsedLine {
  data: string[];
}

interface IDeckContextData {
  decks?: IDeckData[];
  isMenuVisible: boolean;
  setIsMenuVisible: (visibility: boolean) => void;
  setDecks: (updatedDecks: IDeckData[]) => void;
  uploadCSV: (uploadedCSV: IParsedLine[]) => void;
  useExampleDeck: () => void;
}

const DeckContext = createContext<IDeckContextData>({} as IDeckContextData);

const DeckProvider: React.FC = ({ children }) => {
  const [decks, setDecks] = useState<IDeckData[]>();
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(true);

  const uploadCSV = useCallback((uploadedCSV: IParsedLine[]) => {
    if (uploadedCSV) {
      const updatedDecks: IDeckData[] = [];

      const columnNames = uploadedCSV.shift();

      columnNames?.data.forEach(column => {
        updatedDecks.push({ name: column, isEmpty: false, cards: [] });
      });

      uploadedCSV.forEach((line, lineIndex) => {
        line.data.forEach((data, dataIndex) => {
          data && updatedDecks[dataIndex].cards.push(data);
        });
      });

      setDecks(updatedDecks);
      setIsMenuVisible(false);
    }
  }, []);

  const useExampleDeck = useCallback(() => {
    let updatedDecks: IDeckData[] = [
      {
        name: "deck one",
        isEmpty: false,
        cards: ["first example card from first deck", "second example card from first deck", "third example card from first deck", "fourth example card from first deck"]
      },
      {
        name: "deck two",
        isEmpty: false,
        cards: ["first example card from second deck", "second example card from second deck", "third example card from second deck"]
      }
    ];

    setDecks(updatedDecks);
    setIsMenuVisible(false);
  }, []);

  return (
    <DeckContext.Provider value={{ decks, isMenuVisible, setIsMenuVisible, setDecks, uploadCSV, useExampleDeck }}>
      {children}
    </DeckContext.Provider>
  );
}

function useDecks(): IDeckContextData {
  const context = useContext(DeckContext);

  if (!context) {
    throw new Error('Context must be used inside provider');
  }

  return context;
}

export { DeckProvider, useDecks }
