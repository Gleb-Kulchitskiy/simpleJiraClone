import React, {Component} from 'react';
import {connect} from 'react-redux';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';
import ReactTooltip from 'react-tooltip';

import navigationActions from '../../../../redux/navigation/actions';

import {ReactComponent as ArrowleftSvg} from '../../../../icons/svg/arrowLeft.svg';
import {ReactComponent as CollapsedMenuSvg} from '../../../../icons/svg/collapsed_menu.svg';

import StyledSideBar from './StyledSideBar';

class SideBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showCollapseButton: false
    }
  }

  fixNavigationWidth = () => {
    const {fixNavigationWidth, isWidthFixed} = this.props;
    fixNavigationWidth(!isWidthFixed);
  };

  toggleNavigation = (action) => () => {
    const {isCollapsed, collapseNavigation, isWidthFixed} = this.props;

    if (!isWidthFixed && isCollapsed && action === 'open') {
      collapseNavigation(!isCollapsed);
    }
    if (!isWidthFixed && !isCollapsed && action === 'close') {
      collapseNavigation(!isCollapsed);
    }
  };

  toggleCollapseButton = (action) => (e) => {

    const {isWidthFixed} = this.props;

    if (isWidthFixed && action) {

      this.setState({
        showCollapseButton: true
      })
    } else if (isWidthFixed && !action && e.target.id !== 'cursor_box') {

      this.setState({
        showCollapseButton: false
      })
    }
    else if (!isWidthFixed && action && e.target.id === 'cursor_box') {
      e.stopPropagation()
    }
  };

  render() {
    const {isCollapsed} = this.props;
    const {showCollapseButton} = this.state;

    return (
      <StyledSideBar onMouseEnter={this.toggleCollapseButton(true)} onMouseLeave={this.toggleCollapseButton(false)}
                     showCollapseButton={showCollapseButton} isCollapsed={isCollapsed}>
        <div className='navigation'>
          <LeftSideBar toggleNavigation={this.toggleNavigation}/>
          <RightSideBar isCollapsed={isCollapsed} toggleNavigation={this.toggleNavigation}/>
        </div>
        <div className='resize_wrapper' onMouseEnter={this.toggleNavigation('open')}>
          <div className='line'/>
          <div className='resize'>
            <div className='inner_line'/>
          </div>
          <div className='button_wrapper' onClick={this.fixNavigationWidth}>
            <button id='resize_button' data-tip data-for="collapse" className="resize_button">
              <div className='cursor_box' id='cursor_box'/>
              <span className='svg_wrapper'>
                {isCollapsed ? <CollapsedMenuSvg/> : <ArrowleftSvg/>}
              </span>
              <ReactTooltip className='tooltip' id='collapse' place='right' effect="solid" delayShow={500}>
                <span>Collapse</span>
                <span className='hot_key'>[</span>
              </ReactTooltip>
            </button>
          </div>
        </div>
      </StyledSideBar>
    )
  }
}

export default connect(state => ({
  isCollapsed: state.navigation.isCollapsed,
  isWidthFixed: state.navigation.isWidthFixed
}), {
  fixNavigationWidth: navigationActions.fixNavigationWidth,
  collapseNavigation: navigationActions.collapseNavigation
})(SideBar)