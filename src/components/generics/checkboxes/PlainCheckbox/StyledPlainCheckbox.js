import styled from 'styled-components';
import CheckMarkSVG from '../../../../icons/svg/check-mark-black.svg';

export default styled.div`
   
`;

export const StyledLabel = styled.label`
  position: relative;
  cursor:pointer;
  
  & .custom_checkbox::after{
      position: absolute;
      content: '';
      width: 13px;
      height: 13px;
      top: 4px;
      left: -17px;
      border: 1px solid #ddd;
      padding:0 2px;
    }
 
 & input:checked ~ .custom_checkbox::after{
   background:URL(${CheckMarkSVG}) no-repeat center center;
 }
`;

export const StyledInput = styled.input`
  opacity: 0;
  position:absolute;
`;