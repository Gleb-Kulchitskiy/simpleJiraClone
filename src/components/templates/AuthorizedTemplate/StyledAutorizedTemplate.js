import styled from 'styled-components';

export default styled.div`
  .main_content_wrapper{
    margin-left:65px;
    padding-left:${props => props.isNavigationWidthFixed ? '240px' : '20px'};
    transition: padding-left 300ms cubic-bezier(0.2,0,0,1) 0s;
  }

`;