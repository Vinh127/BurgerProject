import styled from 'styled-components';

export const errorContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    min-height:100vh

`;

export const errorButton = styled.button`
  width: 200px;
  height: 48px;
  border-radius: 10px;
  background: rgb(17, 17, 17);
  color:white;
  font-weight: 550;
  outline: none;
  border: 1px solid rgb(17, 17, 17);
  text-transform: uppercase;
  letter-spacing: 4px;
  animation: all ease-in-out 600ms;
  box-shadow: 3px 6px 10px rgba(0,0,0,0.1);
  cursor:pointer;

`
