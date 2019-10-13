import React from 'react';
import {connect} from 'react-redux';
import SideBar from '../../entities/Layouts/SideBar'
import SideBarPortal from '../../entities/Layouts/SideBarPortal';

import StyledAuthorizedTemplate from './StyledAutorizedTemplate';
import navigationActions from "../../../redux/navigation/actions";

function AuthorizedTemplate(props) {

  function hideSidebar() {
    const {isNavigationCollapsed, collapseNavigation, isNavigationWidthFixed} = props;

    if (!isNavigationWidthFixed && !isNavigationCollapsed ) {
      collapseNavigation(!isNavigationCollapsed);
    }
  }

  return (
    <StyledAuthorizedTemplate isNavigationWidthFixed={props.isNavigationWidthFixed}>
      <SideBar/>
      <SideBarPortal/>
      <div onMouseEnter={hideSidebar} className='main_content_wrapper'>
        {props.children}
      </div>
    </StyledAuthorizedTemplate>
  )
}

export default connect(state => ({
  isNavigationWidthFixed: state.navigation.isWidthFixed,
  isNavigationCollapsed: state.navigation.isCollapsed,
}), {
  collapseNavigation: navigationActions.collapseNavigation
})(AuthorizedTemplate)