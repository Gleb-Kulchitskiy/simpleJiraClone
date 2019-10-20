import React from 'react'
import PropTypes from 'prop-types';

import StyledPlainCard from './StyledPlainCard'

function PlainCard(props) {

  const {link, title, text, onClick} = props;

  return (
    <StyledPlainCard
      onClick={onClick}
    >
      <div className='text_wrapper'>
        <span> {text}</span>
      </div>
      <a className='link' href={link}>
        <span className='link_text'>
          {title}
        </span>
      </a>

    </StyledPlainCard>
  )
}

PlainCard.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default PlainCard;