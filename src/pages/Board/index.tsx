import React, { useEffect, useState } from 'react';
import { Container, CSVContainer } from './styles';

import Interface from '../../components/Interface';

import { CSVReader } from 'react-papaparse';

interface IParsedLine {
  data: string[];
}

const Board: React.FC = () => {
  const [parsedFile, setParsedFile] = useState<IParsedLine[]>();
  const [hasFile, setHasFile] = useState<boolean>(false);

  function getDecks(payload: IParsedLine[]) {
    setParsedFile(payload);
    setHasFile(true);
  }

  useEffect(() => {

  }, []);

  return (
    <Container>
      <CSVContainer isVisible={!!hasFile}>
        <section>
          <h1>Deck Player</h1>
          <p>drop your .csv file below to manage each column of the sheet as a deck of cards.</p>
          <p>you can play a card on the table by clicking on a deck.</p>
          <p>each new card is picked at random and cannot be repeated.</p>
          <p>each new card is picked at random and cannot be repeated.</p>

          <label>click or drag file here</label>
          <CSVReader onFileLoad={getDecks} />
        </section>
      </CSVContainer>
      <Interface parsedCSV={parsedFile} />
    </Container>
  );
}

export default Board;
