import React from 'react';

import Explanation from '../../components/Explanation';
import Upload from '../../components/Upload';
import Interface from '../../components/Interface';

import { Container, SocialIcons } from './styles';

import rfLogo from '../../images/logo-rf.png';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';

const Board: React.FC = () => {
  return (
    <Container>
      <Explanation />
      <Upload />
      <SocialIcons>
        <a href="https://blog.defreitas.xyz/" target="_blank" rel="noopener noreferrer" ><img className="inverted" src={rfLogo} alt="Renan de Freitas Logo" /></a>
        <a href="https://github.com/renansdf/" target="_blank" rel="noopener noreferrer" ><img className="inverted" src={github} alt="Renan de Freitas Logo" /></a>
        <a href="https://www.linkedin.com/in/renan-freitas-60138b2a/" target="_blank" rel="noopener noreferrer" ><img className="inverted" src={linkedin} alt="Renan de Freitas Logo" /></a>
      </SocialIcons>
      <Interface />
    </Container>
  );
}

export default Board;
