import styled, { css } from 'styled-components';
import trianguloCapa from '../../images/capa-bg.svg';
import trianguloMetade from '../../images/meio-triangulo-direita.svg';

interface ICSVContainerProps {
  isVisible: boolean;
}

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

export const CSVContainer = styled.div<ICSVContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #3405A2;

  display: flex;
  align-items: center;
  justify-content: center;

  section{
    width: 400px;
    position: relative;
  }

  h1{
    color: #fff;
    font-weight: 300;
    font-size: 40px;
  }

  p{
    color: #fff;
  }

  label{
    color: #3405A2;
    background: #fff;
    position: absolute;
    left: 20px;
    bottom: 35px;
    padding: 2px 15px;
    border-radius: 30px;
  }

  p + p{
    margin-top: 10px;
  }

  div{
    margin-top: 30px;
  }

  ${props => props.isVisible && css`
    display: none;
  `}
`;
