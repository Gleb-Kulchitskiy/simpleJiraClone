import styled from 'styled-components';

export default styled.div`
  .background_wrapper{
    position: fixed;
    z-index: 500;
    width:100vw;
    height: 100vh;

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
    }
  }
  
  .container{
    position: fixed;
    z-index: 501;
    display: flex;
    justify-content: center;
    align-items: center;
    width:100vw;
    height: 100vh;
  }
`;