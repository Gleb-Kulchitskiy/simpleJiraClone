import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Transition} from 'react-transition-group';

import {components as portalComponents} from '../../portalComponents';

import StyledSidebarPortal from './StyledSideBarPortal';
import {ReactComponent as ArrowLeftBig} from '../../../../icons/svg/arrowLeftBig.svg';

import sidebarPortalActions from '../../../../redux/sidebarPortal/actions';

class SideBarPortal extends Component {

  state = {
    defaultTransitionState: {
      content: {
        transition: 'transform 0.5s ease-out',
        transform: 'translateX(-100%)'
      },
      shadow: {
        transition: 'visibility 0.45s',
        visibility: 'hidden'
      }
    },
    activeTransitionState: {
      content: {
        entered: {transform: 'translateX(0)'},
        exited: {transform: 'translateX(-100%)'},
      },
      shadow: {
        entered: {visibility: 'visible'},
        exited: {visibility: 'hidden'},
      }
    }
  };

  handleClick = () => {
    const {hideSidebarPortal} = this.props;
    hideSidebarPortal()
  };

  render() {
    const {isHidden, component, width, additionalData} = this.props;

    return (
      <StyledSidebarPortal width={width}>
        <div className='portal_wrapper'>
          <Transition in={!isHidden} timeout={0}>
            {state => (
              <div style={{
                ...this.state.defaultTransitionState.shadow,
                ...this.state.activeTransitionState.shadow[state]
              }}
                   className='background_wrapper'
              >
                <div className='background_shadow'/>
              </div>
            )}
          </Transition>
          <Transition in={!isHidden} timeout={0}>
            {state => {
              return (
                <div style={{
                  ...this.state.defaultTransitionState.content,
                  ...this.state.activeTransitionState.content[state]
                }} className='container'>
                  <div className='content_wrapper'>
                    <div className='left_portal_bar'>
                      <button className='portal_button' onClick={this.handleClick}>
                        <span className='svg_wrapper'><ArrowLeftBig/></span>
                      </button>
                    </div>
                    <div className='right_portal_bar'>
                      {portalComponents[component] && portalComponents[component].render(additionalData)}
                    </div>
                  </div>
                </div>
              )
            }}
          </Transition>
        </div>

      </StyledSidebarPortal>
    )
  }
}

SideBarPortal.propTypes = {
  isHidden: PropTypes.bool,
  component: PropTypes.string,
  width: PropTypes.string,
  additionalData: PropTypes.object
};

export default connect(({sidebarPortal}) => ({
    isHidden: sidebarPortal.isHidden,
    component: sidebarPortal.component,
    width: sidebarPortal.width,
    additionalData: sidebarPortal.additionalData
  }),
  {hideSidebarPortal: sidebarPortalActions.hidePortal})(SideBarPortal)