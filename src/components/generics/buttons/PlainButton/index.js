import React, {Component} from 'react';
import PropTypes from 'prop-types';

import StyledPlainButton from './StyledPlainButton'

function PlainButton(props) {
  const {onClick, title, disabled} = props;

  return (
    <StyledPlainButton
      disabled={disabled}
      onClick={onClick}
    >
      <span>{title}</span>
    </StyledPlainButton>
  )
}

PlainButton.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  disabled: PropTypes.bool
};

export default PlainButton;