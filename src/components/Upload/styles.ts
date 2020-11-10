import styled, { css } from 'styled-components';

interface ICSVContainerProps {
  isVisible: boolean;
}

export const CSVContainer = styled.div<ICSVContainerProps>`
  width: 50%;
  position: fixed;
  top: 0;
  left: auto;
  bottom: 0;
  right: 0;
  background: #3405A2;
  z-index: 9;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform .5s;

  section{
    width: 400px;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  p{
    color: #fff;
    margin-bottom: 30px;
  }

  button{
    background: #a218b5;
    color: #fff;
    border-radius: 5px;
    font-size: 13px;
    padding: 7px 16px;
    border: none;
    margin-top: 20px;
    align-self: flex-end;
    transition: background .3s;

    &:hover{
      background: #861296;
    }
  }

  ${props => !props.isVisible && css`
    transform: translateX(100%);
  `}
`;

export const UploadBox = styled.div`
  height: 180px;
  position: relative;

  label{
    color: #3405A2;
    background: #fff;
    position: absolute;
    left: 20px;
    top: -10px;
    padding: 2px 15px;
    border-radius: 30px;
  }

  > div > div{
    padding: 30px;
    background: #a218b5;
  }
`;
