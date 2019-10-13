import React from 'react'
import PropTypes from 'prop-types';

import StyledPlainInput from './StyledPlainInput';

function PlainInput(props) {

  const {onChange, placeholder, value} = props;

  return (
    <StyledPlainInput
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  )
}

PlainInput.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default PlainInput;