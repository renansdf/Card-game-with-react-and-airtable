import React from 'react';
import { useDecks } from '../../hooks/Deck';

import { CSVReader } from 'react-papaparse';
import { CSVContainer, UploadBox } from './styles';

const Upload: React.FC = () => {

  const { isMenuVisible, uploadCSV, useExampleDeck } = useDecks();

  return (
    <CSVContainer isVisible={isMenuVisible}>
      <section>
        <p>This action replaces the current decks!</p>
        <UploadBox>
          <label>click or drag .csv file here</label>
          <CSVReader onFileLoad={uploadCSV} />
        </UploadBox>
        <button onClick={useExampleDeck}>or use example deck</button>
      </section>
    </CSVContainer>
  );
}

export default Upload;
