import styled from 'styled-components';

export default styled.div`
  position: relative;
  
  .wrapper{
    margin:0;
    padding:0;
    
    .outer_layout{
      padding:20px 16px 0 16px;
      
      .inner_layout{
        padding: 8px 0 26px 16px;
        
        .svg_wrapper{
          position: relative;
          height: 32px;
          
          color: inherit;
          fill:currentColor;
          display:inline-block;
          user-select: none;
        }
      }
    }
  }
`