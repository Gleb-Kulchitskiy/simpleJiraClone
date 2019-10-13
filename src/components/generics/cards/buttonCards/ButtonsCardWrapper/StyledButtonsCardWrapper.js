import styled from 'styled-components';

export default styled.div`
  position: absolute;
  top: ${props => props.styles.top};
  right: ${props => props.styles.right};
  bottom: ${props => props.styles.bottom};
  left: ${props => props.styles.left};
  
  z-index: 400;
  
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;
  box-sizing: border-box;
  max-height: 317.5px;
  background: rgb(255, 255, 255);
  border-radius: 3px;
  overflow: auto;
  padding: 4px 0px;
`;