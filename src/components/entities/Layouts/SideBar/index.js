import React, {Component} from 'react';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';
import {ReactComponent as ArrowleftSvg} from '../../../../icons/svg/arrowLeft.svg'

import StyledSideBar from './StyledSideBar';

export default class SideBar extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <StyledSideBar>
        <div className='navigation'>
          <LeftSideBar/>
          <RightSideBar/>
        </div>
        <div className='resize_wrapper'>
          <div className='line'/>
          <div className='resize'>
            <div className='inner_line'/>
          </div>
          <div className='button_wrapper'>
            <button id='resize_button' className="resize_button">
              <div className='cursor_box'/>
              <span className='svg_wrapper'>
                <ArrowleftSvg/>
              </span>
            </button>
          </div>
        </div>
      </StyledSideBar>
    )
  }
}