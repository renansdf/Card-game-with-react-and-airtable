import styled from 'styled-components';
import trianguloCapa from '../../images/capa-bg.svg';
import trianguloMetade from '../../images/meio-triangulo-direita.svg';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: url(${trianguloCapa}), url(${trianguloMetade});
  background-repeat: no-repeat, no-repeat;
  background-position: top left, bottom right;
  color: #3405A2;
`;
