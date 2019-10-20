import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Transition} from 'react-transition-group';
import {connect} from 'react-redux';

import StyledPopUp from './StyledPopUp';
import {components as popUpComponents} from "../../popUpComponents";

class PopUp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      defaultTransitionState: {
        transition: 'visibility 0.45s',
        visibility: 'hidden'
      },

      activeTransitionState: {

        entered: {visibility: 'visible'},
        exited: {visibility: 'hidden'},

      }
    }
  }

  render() {

    const {isHidden, additionalData, component} = this.props;
    console.log('component--', component)
    return (
      <StyledPopUp>
        <div>
          <Transition in={!isHidden} timeout={0}>
            {state => (
              <div style={{
                ...this.state.defaultTransitionState,
                ...this.state.activeTransitionState[state]
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
                  ...this.state.defaultTransitionState,
                  ...this.state.activeTransitionState[state]
                }} className='container'>
                  {popUpComponents[component] && popUpComponents[component].render(additionalData)}
                </div>
              )
            }}
          </Transition>
        </div>
      </StyledPopUp>
    )
  }
}

PopUp.propTypes = {
  isHidden: PropTypes.bool,
  additionalData: PropTypes.object,
  component: PropTypes.string
};

export default connect(({popUp}) => ({
  isHidden: popUp.isHidden,
  additionalData: popUp.additionalData,
  component: popUp.component
}))(PopUp);