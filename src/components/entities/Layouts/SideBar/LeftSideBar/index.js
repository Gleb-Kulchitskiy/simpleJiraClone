import React from 'react';
import StyledLeftSideBar from './StyledLeftSideBar';
import ActiveIcon from '../../../../generics/ActiveIcon';
import ICONS from '../../../../../constants/icons';
import {PORTAL_NAVIGATION} from '../../../../../navigation'

const topIcons = [ICONS.LOGO, ICONS.STAR, ICONS.SEARCH, ICONS.PLUS];
const iconsBottom = [ICONS.BELL, ICONS.SQUARE, ICONS.QUESTION, ICONS.GEAR];

export default () => {

  return (
    <StyledLeftSideBar>
      <div className='linear-gradient'/>
      <div className='nav_wrapper'>
        <div className='top_nav'>
          {Object.values(PORTAL_NAVIGATION).map((navData, idx) => {
           return  <ActiveIcon key={navData.icon.alt} action={navData.action} main={idx === 0} svg={{...navData.icon}}
                        styles={{margin: idx === 0 ? '0 0 8px 0' : '0', fill: '#DEEDFF'}}/>
          })}
        </div>
        <div className='bottom_nav'>
          {iconsBottom.map((iconData, idx) => (
            <ActiveIcon key={iconData.alt} main={idx === 0} svg={{...iconData}} styles={{fill: '#DEEDFF'}}/>
          ))}
        </div>
      </div>
    </StyledLeftSideBar>
  )

}