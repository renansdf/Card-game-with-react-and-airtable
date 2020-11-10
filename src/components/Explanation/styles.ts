import styled, { css } from 'styled-components';

interface IContainerProps {
  isVisible: boolean;
}

export const Container = styled.div<IContainerProps>`
  width: 50%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: auto;
  background: #a218b5;
  color: #fff;
  z-index:11;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform .5s;

  div{
    width: 90%;
    max-width: 500px;
  }

  h1{
    color: #fff;
    font-weight: 300;
    font-size: 40px;
    margin-bottom: 5px;
  }

  p{
    color: #fff;
    font-size: 20px;
  }

  p + p{
    margin-top: 15px;
  }

  button{
    background: #fff;
    color: #a218b5;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    font-size: 30px;
    font-weight: 600;
    padding-top: 2px;
    border:none;

    position: absolute;
    right: -30px;
  }

  button.open{
    display: none;
    background: #a218b5;
    color: #fff;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    right: -50px;
    justify-content: flex-end;
    padding-right: 20px;

    &:hover{
      background: #861296;
    }
  }

  ${props => !props.isVisible && css`
    transform: translateX(-100%);

    button.close{
      display: none;
    }

    button.open{
      display: flex;
    }
  `}
`;
