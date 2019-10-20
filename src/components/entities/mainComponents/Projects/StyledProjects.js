import styled from 'styled-components';

export default styled.div`
  padding:24px 40px;
  
  .header_wrapper{
    display:flex;
    align-items:flex-start;
    justify-content: space-between;
  }
  
  .projects_wrapper{
    margin-top:26px;
    display:flex;
    flex-direction: column;
    
    .title{
      padding-bottom: 14px;
      color: rgb(94, 108, 132);
      font-size: 12px;
      font-weight: 600;
    }
    
    .projects_list_wrapper{
      display:flex;
      margin-bottom:32px;
      z-index:-1;
    }
  }
  
  .options_wrapper{
    margin-bottom:16px;
  }
`;