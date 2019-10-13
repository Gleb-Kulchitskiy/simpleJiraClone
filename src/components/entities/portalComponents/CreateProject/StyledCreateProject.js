import styled from 'styled-components';

export default styled.div`
  height: 100vh;
  margin-left:-64px;
  margin-top:23px;
  
  .create_project_container{
    width:100%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    margin:0 auto;
    max-width:1200px;
  }
  
  .create_project_template_wrapper{
    width:50%;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .create_project_image_wrapper{
      padding-bottom: 16px;
    }
    .create_project_title_wrapper{
      font-size: 1.42857em;
      font-style: inherit;
      line-height: 1.2;
      color: rgb(23, 43, 77);
      font-weight: 500;
      letter-spacing: -0.008em;
      margin-top: 0px;
      padding-bottom: 8px;
      text-align: center;
    }
    .create_project_content_wrapper{
      padding-bottom: 16px;
      color: rgb(107, 119, 140);
      font-weight: normal;
      text-align: center;
      width: 50%;
      margin: 0px auto;
      line-height: 1.42857 !important;
    }
  }
  
  .create-project_wrapper{
    width:50%;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
    .title{
      font-size: 2.07143em;
      font-style: inherit;
      line-height: 1.10345;
      color: rgb(23, 43, 77);
      font-weight: 600;
      letter-spacing: -0.01em;
      margin-top: 40px;
      margin-bottom: 8px;
    }
    
    .input_container{
      display:flex;
      flex-direction: column;
      
      .input_title{
        color: rgb(107, 119, 140);
        font-size: 12px;
        font-weight: 600;
        line-height: 1.33333;
        padding: 20px 0 4px;
      }
      
      .input_wrapper{
        width:350px;
        height: 40px;
      }
    }
    .advanced_button_container{
       width:350px;
       height: 24px;
    }
  }
`;