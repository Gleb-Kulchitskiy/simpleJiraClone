import styled from 'styled-components';

export default styled.div`
  height:100vh;
  display: flex;
  flex-direction: row;
  position: fixed;
  left:0;
  top:0;
  
  .main_content{
    will-change: padding-left;
    padding-left: 240px;
    transition: padding-left 300ms cubic-bezier(0.2, 0, 0, 1) 0s;
    margin-left: 64px;
    margin-top: 0px;
    width: 0px;
    flex: 1 1 auto;
  }

  
  .navigation{
    display:flex;
    height: 100%;
    overflow: hidden;
  }
  
  .navigation_wrapper{
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
        color:${props=>props.isCollapsed? '#FFFFFF':'inherit'};
        cursor: pointer;
        height: 24px;
        opacity: ${props => props.showCollapseButton ? 0.9 : 0};
        position: absolute;
        top: 32px;
        transform: translate(-50%);
        width: 24px;
        background: ${props=> props.isCollapsed ? '0px center rgb(76, 154, 255)': '0px center white'};
        border-width: 0px;
        border-style: initial;
        border-color: initial;
        border-image: initial;
        border-radius: 50%;
        outline: 0px;
        padding: 0px;
        transition: background-color 100ms linear 0s, color 100ms linear 0s, opacity 300ms cubic-bezier(0.2, 0, 0, 1) 0s, transform 300ms cubic-bezier(0.2, 0, 0, 1) 0s;
        
        &:hover{
         color:#FFFFFF;
         background: 0px center rgb(76, 154, 255);
       }
        
        .cursor_box{
          position: absolute;
          left:-8px;
          right: -12px;
          top: -8px;
          bottom: -8px;
        }
      }
    }
    .tooltip{
      display: flex;
      align-items: center;
      padding: 2px 5px 2px 7px;
      letter-spacing: 0.4px;
      font-size: 12px;
      color: #ffffff;
      background-color: rgba(5,6,36,0.88);
      opacity: 0.9;
      border-radius: 3px;
      text-align: center;
      &::after{
        border:none;
      }
      &>span{
        display:flex;
      }
    }
    .hot_key{
      font-size: 13px;
      padding: 1px 7px;
      margin:2px 0;
      margin-left:5px;
      margin-right: 1px;
      border-radius: 2px;
      background-color: rgba(89,88,104,0.99);
    }
  }
`;
