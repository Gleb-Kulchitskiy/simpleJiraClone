import React, {Component} from 'react';
import PropTypes from 'prop-types';

import StyledPlainButton from './StyledPlainButton'

function PlainButton(props) {
  const {onClick, title} = props;

  return (
    <StyledPlainButton
      onCkick={onClick}
    >
      <span>{title}</span>
    </StyledPlainButton>
  )
}

PlainButton.propTypes = {};

export default PlainButton;