import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {ReactComponent as Small_arrow_down} from '../../../../icons/svg/small_arrow_down.svg'
import {ReactComponent as Small_arrow_right} from '../../../../icons/svg/small_arrow_right.svg';

import StyledWithAwworButton from './StyledWithArrowButton';

class WithArrowButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isFocused: false
    };
    this.buttonRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    const {dontClose} = this.props;

    if (this.buttonRef && !this.buttonRef.current.contains(event.target) && !dontClose) {
      this.setState({isOpen: false})
    }
    else if (this.buttonRef && !this.buttonRef.current.contains(event.target)) {
      this.setState({isFocused: false})
    }
    else {
      this.setState({isFocused: true})
    }
  };

  onClick = () => {
    const {onClick = () => ({})} = this.props;

    this.setState(state => ({
      isOpen: !state.isOpen
    }), () => onClick(this.state.isOpen))
  };

  render() {
    const {title, render, leftSideArrow, mixin,} = this.props;
    const {isOpen, isFocused} = this.state;

    const isRenderProps = render && typeof render === 'function';

    const titleAndArrow = leftSideArrow ?
      <>{isOpen ? <Small_arrow_down/> : <Small_arrow_right/>}
        <span>{title}</span>
      </>
      : <><span>{title}</span><Small_arrow_down/></>;

    return (
      <StyledWithAwworButton
        isFocused={isFocused}
        mixin={mixin}
        ref={this.buttonRef}
        onClick={this.onClick}
      >
        {titleAndArrow}
        {isRenderProps && render({isOpen})}
      </StyledWithAwworButton>
    )
  }
}

WithArrowButton.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  leftSideArrow: PropTypes.bool
};

export default WithArrowButton