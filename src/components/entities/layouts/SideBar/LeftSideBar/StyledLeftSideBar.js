import styled from 'styled-components';

export default styled.div`
  padding-top: 24px;
 
  width:64px;
  height:100%;
  
  background-color: #0747A6;
  //background-color: rgb(23, 44, 77);
  
  .linear-gradient{
    margin-left: 64px;
    bottom: 0px;
    left: -6px;
    opacity: 0.5;
    pointer-events: none;
    position: absolute;
    top: 0px;
    transition-duration: 0.22s;
    transition-property: left, opacity, width;
    transition-timing-function: cubic-bezier(0.2, 0, 0, 1);
    width: 6px;
    background: linear-gradient(to left, rgba(0, 0, 0, 0.2) 0px, rgba(0, 0, 0, 0.2) 1px, rgba(0, 0, 0, 0.1) 1px, rgba(0, 0, 0, 0) 100%);
  }
  
  .nav_wrapper{
    height: 100%;
    
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  
    overflow-y: hidden;
    
    .top_nav{
      padding: 0 0 16px 0;
    
      display:flex;
      flex-direction:column;
      justify-content: flex-start;
      align-items: center;
    }
  
    .bottom_nav{
      padding: 8px 0 20px 0;
    
      display:flex;
      flex-direction:column;
      justify-content: flex-start;
      align-items: center;
    }
  
  }
  
`;