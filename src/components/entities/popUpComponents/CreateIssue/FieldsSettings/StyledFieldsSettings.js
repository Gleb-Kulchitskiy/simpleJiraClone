import styled from 'styled-components';

export default styled.div`
  position:absolute;
  top:40px;
  left:0;
  width:450px;
  max-height: 530px;
  z-index: 1;
  border: 1px solid #dfe1e6;
  box-shadow: 0 4px 8px -2px rgba(9,30,66,.28);
  background-color: #fff;
  border-radius: 3px;
  color: #172b4d;
  cursor: initial;
  
  .fields_header{
    border-bottom: 1px solid #ddd;
    padding: 10px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    line-height: 1;
    
    .fields_toggle_wrapper{
      padding-left: 40px;
      
      .fields_title{
        font-weight: bold;
      }
      
      .fields_toggle_all{
        color: ${props => props.activeSettings ? '#0052cc' : 'inherit'};
       cursor:${props => props.activeSettings ? 'pointer' : 'initial'};
       
        &:hover{
         color: ${props => props.activeSettings ? '#3572b0' : 'inherit'};
        }
        
        &::after{
          margin-left:6px;
          content:'';
          width:1px;
          height: 8px;
          border-left: 1px solid #ddd;
        }
      }
      .fields_custom{
        color: ${props => props.activeSettings ? 'inherit' : '#0052cc'};
        cursor:${props => props.activeSettings ? 'initial' : 'pointer'};
        margin:0;
       
        &:hover{
        color: ${props => !props.activeSettings ? '#3572b0' : 'inherit'};
        }
      }
    }
    
    .fields_link_wrapper{
      color: #0052cc;
      cursor:pointer;
      &:hover{
       color: #3572b0
      }
    }
  }
`;