import styled, { css } from 'styled-components';

interface IDeckProps {
  isEmpty: boolean;
}

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-between;
`;

export const DecksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  justify-content: space-evenly;
`;

export const Deck = styled.div<IDeckProps>`
  width: 200px;
  height: 30vh;
  transform: translateY(30%);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  h2{
    margin-bottom: 15px;
    font-size: 25px;
    text-align: center;
  }
  button{
    background: none;
    border: none;

    img{
      transition: all .4s;
      max-width: 100%;
      &:hover{
        transform: translateY(-20px);
      }
    }
  }

  p{
    text-align: center;
    max-width: 130px;
  }

  ${props => props.isEmpty && css`
    img{
      display: none;
    }
  `}
`;

export const Questions = styled.div`
  width: 90%;
  background-color: rgb(16 1 98 / 18%);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  border-radius: 11px;

  p{
    height: 24vh;
    font-size: 22px;
    max-width: 800px;
    text-align: center;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 20px;

    button{
      transition: all .4s;
      text-transform: uppercase;
      background: none;
      border: none;
      margin: 0px;
      background-color: #fff;
      color: #100162;
      border-radius: 0px;
      padding: 12px 15px;
      font-size: 13px;
      letter-spacing: .6px;
      box-shadow: 0 7px 0 0 #100162, 0 10px 5px 0px #e56df6;
      border-left: 1px solid #100162;
      border-right: 1px solid #100162;
      &:hover{
        transform: translateY(2px);
        box-shadow: 0 5px 0 0 #100162, 0 8px 5px 0px #e56df6;
      }
      &:first-child{
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
        border: none;
      }

      &:last-child{
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
        border: none;
      }
    }
  }
`;

export const UsedCards = styled.div`
  height: 35vh;
  padding: 5vh 0 10px;
  overflow: auto;
  width: 90%;
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  justify-content: flex-start;

  > div{
    width: 90%;
    max-width: 190px;
    height: auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 18px;
    font-size: 12px;
    line-height: 1.2em;
    overflow: auto;
    margin: 0 20px;
    color: #100162;
    border-radius: 7px;
    border: 1px solid #100162;
    box-shadow: 0px 9px 10px -11px #100162;
    position: relative;
    cursor: pointer;
    flex-shrink: 0;

    aside{
      display: block;
      position: absolute;
      bottom: 10px;
      background-color: #e9ff00;
      border-radius: 10px;
      padding: 0px 6px 1px;
    }
  }

  &::-webkit-scrollbar {
    height: 7px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #100162;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e56df6;
    outline: 1px solid #e56df6;
    border-radius: 10px;
  }
`;

