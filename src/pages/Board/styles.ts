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

export const SocialIcons = styled.div`
  position: absolute;
  top: calc(50% + 40px);
  left: 0px;
  right: auto;
  bottom: auto;

  display: flex;
  flex-direction: column;
  width: 60px;

  a{
    width: 50px;
    height: 50px;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    background: #a218b5;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a + a{
    margin-top: 10px;
  }

  img{
    width: 60%;
  }

  img.inverted{
    filter: invert(1);
  }
`;
