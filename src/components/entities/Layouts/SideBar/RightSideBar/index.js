import React from 'react';
import StyledRightSideBar from './StyledRightSideBar';
import {default as TextLogo} from '../../../../generics/Logo'
import NavItem from '../../../../generics/NavItem';
import {NAVIGATION} from '../../../../../navigation';


export default (props) => {
  return (
    <StyledRightSideBar>
      <div className='right_side-bar_wrapper'>
        <div className='side-bar_wrapper'>
          <TextLogo/>
          <div className='wrapper'>
            <div className='dividing_line'>
              <div className={'dividing_line_pre'}>
                <nav className='nav_wrapper'>
                  {Object.values(NAVIGATION).map(item => (
                    <NavItem key={item.title} {...item}/>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

    </StyledRightSideBar>
  )

}