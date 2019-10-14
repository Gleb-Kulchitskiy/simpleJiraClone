import React, {Component} from 'react'
import PropTypes from 'prop-types';

import StyledImageButton from './StyledImageButton';

class ImageButton extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  onButtonClick = () => {
    const {onClick} = this.props;

    this.setState(state => ({
      isOpen: !state.isOpen
    }), () => onClick())
  };

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

  render() {
    const {onClick, render} = this.props;
    const {isOpen} = this.state;

    const isRenderProps = render && typeof render === 'function';

    return (
      <StyledImageButton
        onClick={this.onButtonClick}
      >
        {this.props.children}
        {isRenderProps && this.props.render({isOpen})}
      </StyledImageButton>
    )
  }
}

ImageButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.element
};

export default ImageButton;