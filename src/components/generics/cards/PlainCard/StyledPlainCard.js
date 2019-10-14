import styled from 'styled-components';

export default styled.div`
  width:328px;
  padding:16px 24px;
  text-align: left;
  color: rgb(9, 30, 66);
  max-height: 448px;
  max-width: 448px;
  z-index: 300;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;
  background: rgb(255, 255, 255);
  
  .text_wrapper{
    padding: 0px 8px;
    margin: 0px 4px;
    line-height: 1.42857;
  }
  
  .link{
    padding: 0 8px;
    text-decoration: none;
    cursor: pointer;
    
    .link_text{
      margin: 0px 4px;
      line-height: 2.28571em;
      color: rgb(0, 82, 204) !important;
    }
    
    &:hover{
      text-decoration: underline;
      text-decoration-color: rgb(0, 82, 204);
    }
  }
`;