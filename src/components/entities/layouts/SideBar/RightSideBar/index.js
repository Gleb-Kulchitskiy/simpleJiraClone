import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom"

import StyledRightSideBar from './StyledRightSideBar';
import {default as TextLogo} from '../../../../generics/Logo'
import NavItem from '../../../../generics/NavItem';
import {navigation} from '../../../../../navigation';

function RightSideBar(props) {
  const {isCollapsed, location} = props;

  return (
    <StyledRightSideBar isCollapsed={isCollapsed}>
      <div className='right_side-bar_wrapper'>
        <div className='side-bar_wrapper'>
          <TextLogo/>
          <div className='wrapper'>
            <div className='dividing_line'>
              <div className={'dividing_line_pre'}>
                <nav className='nav_wrapper'>
                  {Object.values(navigation).map(item => (
                    <NavItem key={item.title} isActive={location.pathname === item.to} {...item}/>
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

RightSideBar.propTypes = {
  isCollapsed: PropTypes.bool,
  location: PropTypes.object
};

export default withRouter(RightSideBar)