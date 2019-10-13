import styled from 'styled-components';

export default styled.div`
  position:fixed;
  z-index: 1000;
  top: ${props => props.top};
  left:${props => props.left};
  
  .tooltip{
    padding: 2px 5px;
    font-size: 12px;
    color: #ffffff;
    background-color: rgba(18,29,49,0.88);
    opacity: 0.9;
    border-radius: 2px;
    text-align: center;
  }
  
  .hot_key{
    padding: 0 7px;
    margin-left:5px;
    border-radius: 2px;
    background-color: rgba(145,145,145,0.99);
  }
`;