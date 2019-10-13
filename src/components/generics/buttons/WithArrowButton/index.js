import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {ReactComponent as Small_arrow_down} from '../../../../icons/svg/small_arrow_down.svg'
import {ReactComponent as Small_arrow_right} from '../../../../icons/svg/small_arrow_right.svg';

class WithArrowButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
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
    if (this.buttonRef && !this.buttonRef.current.contains(event.target)) {
      this.setState({isOpen: false})
    }
  };

  onClick = () => {
    const {onClick = () => ({})} = this.props;

    this.setState(state => ({
      isOpen: !state.isOpen
    }), () => onClick(this.state.isOpen))
  };

  render() {
    const {title, render, leftSideArrow, mixin} = this.props;
    const {isOpen} = this.state;

    const isRenderProps = render && typeof render === 'function';

    const titleAndArrow = leftSideArrow ?
      <>{isOpen ? <Small_arrow_right/> : <Small_arrow_right/>}
        <splan>{title}</splan>
      </>
      : <><span>{title}</span><Small_arrow_down/></>;

    return (
      <WithArrowButton
        mixin={mixin}
        ref={this.buttonRef}
        onClick={this.onClick}
      >
        {titleAndArrow}
        {isRenderProps && this.props.render({isOpen})}
      </WithArrowButton>
    )
  }
}

WithArrowButton.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  leftSideArrow: PropTypes.bool
};

export default WithArrowButton