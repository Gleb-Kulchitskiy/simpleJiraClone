import styled, {css} from 'styled-components';

export default styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  
  margin: ${props => props.styles.margin || 0};
  
  width:40px;
  height: 40px;
  
  fill:${props=> props.styles.fill || 'black'};
  
  ${props=>!props.main && css`
    padding:4px; 
  `}
 
  ${props => props.main && css` 
    &:hover{
      border:none;
      border-radius: 50%;
      background-color: #3b73af;
     
      button{
        background-color: #3b73af;
      }
     
      img{
        border-radius: 50%;
        background-color: #3b73af;
      }
    }`
  }
  
  
  button{
    -webkit-box-align: center;
    align-items: center;
    color: rgb(222, 235, 255);
    cursor: pointer;
    display: flex;
    font-size: inherit;
    -webkit-box-pack: center;
    justify-content: center;
    line-height: 1;
    position: relative;
    height: 32px;
    width: 32px;
    background-color: rgb(7, 71, 166);
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    border-radius: 50%;
    outline: none;
    padding: 0px;
    
     ${props => !props.main && css `
       &:hover{
         border:none;
         border-radius: 50%;
         background-color: #3b73af;
     
       img{
         border-radius: 50%;
         background-color: #3b73af;
       }
     `}  
   }
  }
  
`;