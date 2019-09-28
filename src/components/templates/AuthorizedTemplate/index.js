import React, {Component} from 'react';
import {connect} from 'react-redux';
import SideBar from '../../entities/Layouts/SideBar'
import SideBarPortal from '../../entities/Layouts/SideBarPortal';

import PortalActions from '../../../redux/sidebarPortal/actions'

class AuthorizedTemplate extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {isHidden} = this.props;

    return (
      <div>
        <SideBar/>
        <SideBarPortal/>
        {this.props.children}
      </div>
    )
  }
}

export default connect(
  (store) => ({isHidden: store.sidebarPortal.isHidden})
)(AuthorizedTemplate)