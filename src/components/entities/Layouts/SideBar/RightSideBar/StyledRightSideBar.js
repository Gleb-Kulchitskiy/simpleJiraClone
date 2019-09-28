import styled from 'styled-components';

export default styled.div`
  position:relative;
  
  width: 240px;
  height: 100vh;
  
  transition: width 300ms cubic-bezier(0.2,0,0,1) 0s;
  
  .right_side-bar_wrapper{
    position:absolute;
    
    left:0;
    top:0;
    
    height: 100%;
    width:100%;
    min-width:240px;
    
    overflow-x: hidden;
    background-color: rgb(7,71,166);
    color: rgb(222,235,255);
    
    .side-bar_wrapper{
      display: flex;
      flex-direction: column;
      
      height: 100%;
      width: 100%;
      
      overflow-x: hidden;
      overflow-y: auto;
      
      .wrapper{
        position: relative;
        flex:1 1 100%;
        overflow-y: hidden;
        
        .dividing_line{
          position: relative;
          
          height: 100%;
          width:100%;
          
          overflow: hidden;
          
          &::before{
            position: absolute;
            top:0;
            left:16px;
            right: 0;
            
            flex: 0 1 0%;
            
            content: '';
            display: block;
            height: 2px;
            z-index: 1;
            
            background-color: rgb(5,54,127);
            border-radius: 1px;
          }
          
          .dividing_line_pre{
            position: relative;
            height: 100%;
            
            display: flex;
            flex-direction: column;
            flex-basis: 100%;
            justify-content: flex-start;
            
            overflow-y: auto;
            
            &::before{
              position: relative;
              height: 2px;
              margin-left: 16px;
              display: block;
              z-index: 2;
              content: '';
              flex-shrink: 0;
              background-color: #0747A6;
              border-radius: 1px;
            }
            
            .nav_wrapper{
              padding: 0 16px 12px 16px;
            }
          }
        }
      }
    }
  }
`;
