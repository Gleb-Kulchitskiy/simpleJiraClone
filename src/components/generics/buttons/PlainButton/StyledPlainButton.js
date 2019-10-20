import styled, {css} from 'styled-components';

export default styled.button`
  position:relative;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  font-size: inherit;
  font-style: normal;
  font-weight: normal;
  max-width: 100%;
  text-align: center;
  white-space: nowrap;
  height: 2.28571em;
  line-height: 2.28571em;
  vertical-align: middle;
  width: auto;
  color: ${props => props.disabled ? 'rgb(165, 173, 186)' : 'rgb(80, 95, 121) !important'};
  border-width: 0;
  text-decoration: none;
  background: rgba(9, 30, 66, 0.04);
  border-radius: 3px;
  padding: 0 8px;
  transition: background 0.1s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
  outline: none !important;
  cursor:${props => props.disabled ? 'not-allowed' : 'pointer'};
  
  &:focus{
    outline: 0;
    box-shadow: 0 0 0 2px #4c9aff;
  }
  
  &:hover{
    background: ${props => props.disabled ? 'rgba(9, 30, 66, 0.04)' : 'rgba(9, 30, 66, 0.08)'};
  }
  
  span{
    align-items: center;
    align-self: center;
    max-width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    opacity: 1;
    flex: 1 1 auto;
    margin: 0px 4px;
    overflow: hidden;
    transition: opacity 0.3s ease 0s;
  }
  
  ${props => props.isOpen && css`
    background: #505f79;
    color: #f4f5f7 !important;
    
    &:focus{
      box-shadow: 0 0 0 2px #505f79;
    }
    
    &:hover{
      background: #505f79;
      color: #f4f5f7 !important;
    }
`}
`;