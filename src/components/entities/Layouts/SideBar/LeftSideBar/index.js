import React from 'react';
import StyledLeftSideBar from './StyledLeftSideBar';
import ActiveIcon from '../../../../generics/ActiveIcon';
import {portalNavigationTop,portalNavigationBottom} from '../../../../../navigation'

export default (props) => {

  return (
    <StyledLeftSideBar onMouseEnter={props.toggleNavigation('close')}>
      <div className='linear-gradient'/>
      <div className='nav_wrapper'>
        <div className='top_nav'>
          {Object.values(portalNavigationTop).map((navData, idx) => (
            <ActiveIcon key={navData.icon.alt}
                        action={navData.action}
                        component={navData.component}
                        toolTipTitle={navData.toolTipTex}
                        toolTipHotKey={navData.hotKey}
                        main={idx === 0} svg={{...navData.icon}}
                        styles={{margin: idx === 0 ? '0 0 8px 0' : '0', fill: '#DEEDFF'}}/>
          ))}
        </div>
        <div className='bottom_nav'>
          {Object.values(portalNavigationBottom).map((navData) => (
            <ActiveIcon key={navData.icon.alt}
                        action={navData.action}
                        component={navData.component}
                        toolTipTitle={navData.toolTipTex}
                        toolTipHotKey={navData.hotKey}
                        svg={{...navData.icon}}
                        styles={{fill: '#DEEDFF'}}/>
          ))}
        </div>
      </div>
    </StyledLeftSideBar>
  )

}