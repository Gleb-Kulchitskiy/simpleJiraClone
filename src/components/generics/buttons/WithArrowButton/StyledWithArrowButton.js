import styled, {css} from 'styled-components';

export default styled.button`
  position:relative;

  width:135px;
  height: 32px;
  
  display:flex;
  align-items: center;
  
  text-align: center;
  white-space: nowrap;
  line-height: 2.28571em;
  color: rgb(255, 255, 255) !important;
  border-width: 0px;
  text-decoration: none;
  background: rgb(0, 82, 204);
  border-radius: 3px;
  padding: 0px 8px;
  transition: background 0.1s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
  outline: none !important;
  
  &:hover{
    background: rgb(0, 101, 255);
  }
  
  span{
    margin: 0 4px;
    display:flex;
    align-items: center;
    font: 400 14px Arial;
    line-height: 2.28571em;
  }
  
  ${props=> props.mixin && props.mixin==='naked' && css `
    width:100%;
    height: 100%;
    border:none;
    color: rgb(0, 82, 204);
    cursor: pointer;
    
    &:focus{
     border-color:rgb(76,154,255);
    }
`}
`;