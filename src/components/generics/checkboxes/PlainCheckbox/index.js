import React from 'react'
import PropTypes from 'prop-types';

import StyledPlainCheckbox, {StyledLabel, StyledInput} from './StyledPlainCheckbox';

function PlainCheckbox(props) {
  const {label, checked, uniqueKey} = props;

  function onClick(e) {
    props.onClick({
      uniqueKey,
      checked: e.target.checked
    })
  }

  return (
    <StyledPlainCheckbox>
      <StyledLabel>
        <StyledInput
          checked={checked}
          type='checkbox'
          onChange={onClick}
        />
        <span className='custom_checkbox'>{label}</span>
      </StyledLabel>
    </StyledPlainCheckbox>
  )
}

PlainCheckbox.propTypes = {
  uniqueKey: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired
};

export default PlainCheckbox;