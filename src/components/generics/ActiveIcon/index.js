import React from 'react';
import {connect} from 'react-redux';
import SIDEBAR_ACTIONS from '../../../redux/sidebarPortal/actions';
import sidebarPortalActions from '../../../redux/sidebarPortal/actions';
import StyledIcons from './StyledIcon';

const ActiveIcon = (props) => {
  const mapActionCreators = {
    [SIDEBAR_ACTIONS.SHOW_PORTAL]: props.showSidebarPortalAC
  };

  function onHandleClick() {
    const {action} = props;
    if (action) {
      return mapActionCreators[action]();
    }
    return null
  }

  const Icon = props.svg.icon;

  return (
    <StyledIcons main={props.main} styles={props.styles || {}}>
      <button onClick={onHandleClick}>
        <Icon/>
      </button>
    </StyledIcons>
  )
};

export default connect(null, {showSidebarPortalAC: sidebarPortalActions.showPortal})(ActiveIcon)