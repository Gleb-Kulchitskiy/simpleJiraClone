import styled from 'styled-components';

export default styled.input`
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: rgb(250, 251, 252);
  box-sizing: border-box;
  color: rgb(9, 30, 66);
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  line-height: 1.42857;
  max-width: 100%;
  overflow-wrap: break-word;
  border-color: rgb(223, 225, 230);
  border-radius: 3px;
  border-style: solid;
  flex: 1 0 auto;
  overflow: hidden;
  transition: background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s;
  border-width: 2px;
  padding: 6px;
  
  &:hover{
    background-color: rgb(235, 236, 240);
  }
  
  &:focus{
    border-color:rgb(76,154,255);
    outline: none;
    background-color: rgb(250, 251, 252);
  }
`;