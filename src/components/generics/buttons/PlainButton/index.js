import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {ReactComponent as Small_arrow_down} from '../../../../icons/svg/small_arrow_down.svg'

import StyledPlainButton from './StyledPlainButton'

class PlainButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isActive: false
    };
    this.buttonRef = React.createRef();
  }

  onClick = () => {
    const {onClick} = this.props;
    this.setState(({isOpen}) => ({
        isOpen: !isOpen,
        isActive: true
      }), () => onClick()
    )
  };

  render() {
    const {isOpen} = this.state;
    const {title, disabled, description, withArrow, render} = this.props;

    const isRenderProps = render && typeof render === 'function';

    const buttonTitle = <span>{title}</span>;
    const titleAndArrow = <>{buttonTitle}<Small_arrow_down/></>;

    return (
      <StyledPlainButton
        ref={this.buttonRef}
        title={description}
        disabled={disabled}
        onClick={this.onClick}
        isOpen={isOpen}
      >
        {withArrow ? titleAndArrow : buttonTitle}
        {isRenderProps && isOpen && render()}
      </StyledPlainButton>
    )
  }
}

PlainButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  description: PropTypes.string
};

export default PlainButton;