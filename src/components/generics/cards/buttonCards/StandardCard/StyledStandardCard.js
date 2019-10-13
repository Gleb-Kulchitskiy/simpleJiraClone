import styled from 'styled-components';

export default styled.div`
  width:328px;
  cursor: pointer;
  padding: 8px 12px 7px;
  
  .card_wrapper{
    margin:4px;
    display:flex;
  }
  
  &:hover{
    background-color: rgb(244, 245, 247);
  }
  
  .card_icon_wrapper{
    margin-right: 8px;
  }
  
  .card_content_wrapper{
    display:flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .card_title{
    font-size: 16px;
    margin-bottom: 8px;
    color: rgb(23, 43, 77);
    line-height: 1.23;
  }
  
  .card_content{
    color: rgb(122, 134, 154);
    text-align: left;
    text-overflow: ellipsis;
    white-space: normal;
    line-height: 1.14286;
    padding-bottom: 1px;
    flex: 1 1 auto;
    overflow: hidden;
  }
`;