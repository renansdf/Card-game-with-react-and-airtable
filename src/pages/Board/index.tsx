import React, { useState } from 'react';
import { Container } from './styles';

import Interface from '../../components/Interface';

import { CSVReader } from 'react-papaparse';

interface IParsedLine {
  data: string[];
}

const Board: React.FC = () => {
  const [parsedFile, setParsedFile] = useState<IParsedLine[]>();

  function getDecks(payload: IParsedLine[]) {
    setParsedFile(payload);
  }

  return (
    <Container>
      <CSVReader onFileLoad={getDecks} />
      <Interface parsedCSV={parsedFile} />
    </Container>
  );
}

export default Board;
