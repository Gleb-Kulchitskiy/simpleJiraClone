import React, {Component} from 'react';
import StyledTooltip from './StyledTooltip';
import {Transition} from 'react-transition-group';

class Tooltip extends Component {

  constructor(props) {
    super(props);
    this.state = {
      top: 0,
      left: 0,
      defaultTransitionState: {
        transition: 'opacity 0.3s ease-out',
        opacity: 0
      },
      activeTransitionState: {
        entered: {opacity: 1},
      },
      transitionOn: false
    };

    this.toolTipRef = React.createRef();
  }

  componentDidMount() {
    const toolTipElement = this.toolTipRef.current;
    const parent = toolTipElement.parentElement;
    const parentBoundingRect = parent.getBoundingClientRect();
    //todo this logic is wrong refactor  this
    const positionY = parentBoundingRect.bottom - parentBoundingRect.height / 2 - 10;
    const positionX = parentBoundingRect.right + 5;

    this.setState({
      top: `${positionY}px`,
      left: `${positionX}px`,
      transitionOn:true
    })
  }

  render() {
    const {title, hotKey} = this.props;
    const {top, left, transitionOn} = this.state;
    return (
      <div ref={this.toolTipRef}>
        <Transition in={transitionOn} timeout={0.3}>
          {state => (
            <StyledTooltip style={{
              ...this.state.defaultTransitionState,
              ...this.state.activeTransitionState[state]
            }} top={top} left={left}>
              <span className='tooltip'>
                {title}
                {hotKey && <span className='hot_key'>{hotKey}</span>}
              </span>
            </StyledTooltip>
          )}
        </Transition>
      </div>
    )
  }
}

export default Tooltip;