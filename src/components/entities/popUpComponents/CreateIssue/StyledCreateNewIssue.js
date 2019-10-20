import styled from 'styled-components';

export default styled.div`
  width:810px;
  margin-top:5%;
  margin-bottom:5%;
  background-color: #FFFFFF;
  
  .header{
    padding:16px 32px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    
    .buttons_wrapper{
      display:flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Header = styled.h2`
  font-size: 20px;
  line-height: 1.5;
  margin: 0;
  overflow: hidden;
  padding: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: normal;
  color:#172b4d;
`;