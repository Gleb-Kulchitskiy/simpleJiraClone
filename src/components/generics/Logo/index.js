import React from 'react';
import StyledLogo from './StyledLogo';
import {ReactComponent as TextLogo} from '../../../icons/svg/textLogo.svg';


export default ()=>(
  <StyledLogo>
    <div className='wrapper'>
      <div className='outer_layout'>
        <div className='inner_layout'>
          <span className='svg_wrapper'>
           <TextLogo/>
          </span>
        </div>
      </div>
    </div>
  </StyledLogo>
)