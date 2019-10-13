import styled from 'styled-components';

export default styled.button`
  align-items: baseline;
  box-sizing: border-box;
  display: inline-flex;
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
  color: rgb(80, 95, 121) !important;
  border-width: 0px;
  text-decoration: none;
  background: rgba(9, 30, 66, 0.04);
  border-radius: 3px;
  padding: 0px 8px;
  transition: background 0.1s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
  outline: none !important;
  cursor:pointer;
  
  &:hover{
    background: rgba(9, 30, 66, 0.08);
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
`;