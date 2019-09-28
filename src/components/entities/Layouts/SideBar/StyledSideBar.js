import styled from 'styled-components';

export default styled.div`
  height:100vh;
  display: flex;
  flex-direction: row;
  position: fixed;
  left:0;
  top:0;
  
  &:hover{
    #resize_button{
      opacity: 1;
    }
  }
  
  .navigation{
    display:flex;
    height: 100%;
    overflow: hidden;
  }
  
  .resize_wrapper{
    position:relative;
    width:24px;
    
    color: rgb(107, 119, 140);
    
    &:hover{
      color: rgb(76,154,255);
    }
    
    .line{
      position: absolute;
      top:0;
      left:0;
      bottom:0;
      opacity: 0.5;
      pointer-events: none;
      transition-duration: 0.22s;
      transition-property: left, opacity, width;
      transition-timing-function: cubic-bezier(0.2, 0,0,1);
      width:3px;
      background: linear-gradient(to left, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.2) 1px, rgba(0,0,0,0.1) 1px, rgba(0,0,0,0) 100%);
    }
    
    .resize{
      position: relative;
      width: 24px;
      height: 100%;
      left: -4px;
      cursor: ew-resize;
      
      &:hover{
        .inner_line{
          opacity: 1;
        }
      }
      
      .inner_line{
        background-color: rgb(76, 154, 255);
        position: absolute;
        height: 100%;
        width:2px;
        opacity: 0;
        left:3px;
        transition: opacity 200ms ease 0s;
      }
    }
    
    .button_wrapper{
      color:inherit;
      
      .resize_button{
        box-shadow: rgba(9, 30, 66, 0.08) 0px 0px 0px 1px, rgba(9, 30, 66, 0.08) 0px 2px 4px 1px;
       color:inherit;
        cursor: pointer;
        height: 24px;
        opacity: 0;
        position: absolute;
        top: 32px;
        transform: translate(-50%);
        width: 24px;
        background: 0px center white;
        border-width: 0px;
        border-style: initial;
        border-color: initial;
        border-image: initial;
        border-radius: 50%;
        outline: 0px;
        padding: 0px;
        transition: background-color 100ms linear 0s, color 100ms linear 0s, opacity 300ms cubic-bezier(0.2, 0, 0, 1) 0s, transform 300ms cubic-bezier(0.2, 0, 0, 1) 0s;
        
        .cursor_box{
          position: absolute;
          left:-8px;
          right: -12px;
          top: -8px;
          bottom: -8px;
          
          .svg_wrapper{
            color: currentColor;
            display: inline-block;
            fill: rgba(255,255,255);
            flex-shrink: 0;
            line-height: 1;
          }
        }
      }
    }
  }
`;
