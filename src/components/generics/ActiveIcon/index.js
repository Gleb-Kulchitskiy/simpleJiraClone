import React, {Component} from 'react';
import {connect} from 'react-redux';

import ToolTip from '../ToolTip';

import SIDEBAR_ACTIONS from '../../../redux/sidebarPortal/actions';
import sidebarPortalActions from '../../../redux/sidebarPortal/actions';

import StyledIcons from './StyledIcon';

class ActiveIcon extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isMouseInside: false,
      mapActionCreators: {
        [SIDEBAR_ACTIONS.SHOW_PORTAL]: this.props.showSidebarPortalAC
      }
    };
  }

  handleMouseEnter = () => {
    this.setState({
      isMouseInside: true
    })
  };

  handleMouseLeave = () => {
    this.setState({
      isMouseInside: false
    })
  };

  onHandleClick = () => {
    const {action, component} = this.props;
    const {mapActionCreators} = this.state;

    if (action) {
      return mapActionCreators[action]({component:component});
    }
    return null
  }

  render() {
    const {main, styles, toolTipTitle, toolTipHotKey} = this.props;
    const Icon = this.props.svg.icon;
    const {isMouseInside} = this.state;

    return (
      <StyledIcons onMouseEnter={this.handleMouseEnter}
                   onMouseLeave={this.handleMouseLeave}
                   main={main}
                   styles={styles || {}}>
        <button onClick={this.onHandleClick}>
          <Icon/>
        </button>
        {isMouseInside && toolTipTitle &&
        <ToolTip
          title={toolTipTitle}
          hotKey={toolTipHotKey}
        />
        }
      </StyledIcons>
    )
  }
};

export default connect(null, {showSidebarPortalAC: sidebarPortalActions.showPortal})(ActiveIcon)