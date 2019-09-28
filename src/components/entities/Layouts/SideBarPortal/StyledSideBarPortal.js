import styled from 'styled-components';

export default styled.div`

 
  .background_wrapper{
    //transition: opacity 220ms cubic-bezier(0.2, 0, 0, 1);
    //opacity: 1;
    position: fixed;
    z-index: 500;
    width:100vw;
    height: 100vh;
  //  transform:translateY(-50%);
    
    .background_shadow{
      bottom: 0;
      left:0;
      opacity: 1;
      pointer-events: initial;
      position: fixed;
      right: 0;
      top:0;
      z-index: 500;
      background: rgba(9,30,66,0.54);
      //transition: opacity 220ms ease 0s;
    }
  }



.container{
   
    position: absolute;
    width: 600px;
    height: 100vh;
    z-index: 501;
    
    .content_wrapper{
     
      left:0;
      top:0;
      display: flex;
      height: 100vh;
      width: 100%;
      
      z-index: 501;
      overflow: hidden;
      background-color: rgb(255, 255, 255);
     /* transition:1s;
      transform:translateX(0%);*/
      
      //transition: transform 1220ms cubic-bezier(0.2, 0, 0, 1) 0s, width 220ms cubic-bezier(0.2, 0, 0, 1) 0s;
     
      .left_portal_bar{
        padding:24px 0 16px 0;
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        align-items: center;
        height: 100vh;
        width: 64px;
        color: rgb(66,82, 110);
        
        .portal_button{
          display: flex;
          justify-content: center;
          align-items: center;
          cursor:pointer;
          height: 40px;
          width:40px;
          margin-bottom:16px;
          background:0 center;
          border-width:0;
          border-radius: 50%;
          padding:0;
          color:currentColor;
          
          &:hover{
            background-color: rgba(9,30,66,0.08)
          }
          &:focus{
            outline:none;
          }
          
          .svg_wrapper{
            color:currentColor;
            fill: rgb(255,255,255);
            flex-shrink:0;
            line-height: 1
          }
        }
      }
      
      .right_portal_bar{
      width:100%
       text-align: right;
      }
    }
  }
`;