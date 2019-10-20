import styled from 'styled-components';

export default styled.div`
  height: 140px;
  max-width: 260px;
  min-width: 188px;
  width: 25%;
  display: flex;
  flex-direction: column;
  color: inherit;
  position: relative;
  margin-right: 12px;
  box-sizing: border-box;
  box-shadow: rgba(9, 30, 66, 0.25) 0 1px 1px, rgba(9, 30, 66, 0.31) 0 0 1px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  border-radius: 3px; 
  transition: box-shadow 0.3s ease-in-out 0s;
  
  &:hover{
    .top_content_wrapper{
     .star{
        opacity: 1;
      }
    }
  }
  
  .top_content_wrapper{
    display:flex;
    align-items: center;
    background-color: rgb(192, 182, 242);
    color: rgb(23, 43, 77);
    text-align: left;
    height: 40px;
    padding: 40px 16px 60px;
    border-radius: 3px;
    transition: background-color 0.6s ease-in 0s;
    cursor:pointer;
    
    .tooltip_overlap{
      padding:3px 6px;
      background-color: #172B4D;
      &:before, :after{
        content:none;
      }
    }
    
    &:hover{
     
      color: rgb(23, 43, 77);
      
      &::after{
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        opacity: 0.5;
        pointer-events: none;
        width: 100%;
        height: 100px;
        z-index: 2;
        background: rgba(9, 30, 66, 0.08);
      }
    }
    
    .top_content{
       display: flex;
       align-items: center;
       margin-top:40px;
      
      .content_wrapper{
        height: 38px;
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left:12px;
        margin-bottom: 3px;
      
        .project_name{
          text-overflow: ellipsis;
        }
        .project_type{
          font-size: 12px;
          color: inherit;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
    }  
    
    .star{
      position: absolute;
      top: 4px;
      right: 4px;
      opacity: ${props => props.starred ? 1 : 0};
      height: 32px;
      width: 32px;
      color: ${props => props.starred ? 'rgb(255, 171, 0)' : 'rgb(66, 82, 110)'};
      display:flex;
      justify-content: center;
      align-items: center;
      transition: background 0.1s ease-out,box-shadow 0.15s cubic-bezier(0.47,0.03,0.49,1.38), opacity 0.2s ease-in 0s;
      transition-duration: 0.1s,0.15s;
      &:hover{
        color:${props => props.starred ? 'rgb(255, 196,0)' : 'rgb(107,119,140)'};
        background: rgba(9,30,66,0.08);
      }
    }
  }
  
  .bottom_content_wrapper{
    width: 100%;
    height: 40px;
    background-color: white;
    font-size: 12px;
    display: flex;
    align-items: center;
    border-radius: 0 0 3px 3px;
    padding: 0 8px;
    
    .bottom_content{
      margin-left:4px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      cursor:pointer;
      max-width: 100%;
      text-align: center;
      white-space: nowrap;
      height: 2.28571em;
      line-height: 2.28571em;
      vertical-align: middle;
      color: rgb(80, 95, 121) !important;
      border-width: 0px;
      text-decoration: none;
      background: none;
      border-radius: 3px;
      padding: 0px 8px;
      transition: background 0.1s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
      outline: none !important;
      
      &:hover{
        background-color: rgba(9,30,66,0.08);
      }
      
      .board_name{
        margin-left:8px;
      }
    }
  }
`;