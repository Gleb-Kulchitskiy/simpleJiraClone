import styled from 'styled-components';

export default styled.div`
  display: flex;
  
  .link_wrapper{
    width:100%;
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 12px 0 12px;
    cursor:pointer;
    
    border-radius: 2px;
    
    text-decoration: none;
    
    &:hover{
      background-color: #3b73af;
    }
    
    .icon_wrapper{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 16px;
      
      fill:#DEEBFF;
    }
    
    p{
      margin:0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 1.1428;
      color: #DEEBFF;
    }
  }
`;