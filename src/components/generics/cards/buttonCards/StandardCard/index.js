import React from 'react'
import PropTypes from 'prop-types';

import StyledStandartCard from './StyledStandardCard';

function StandardCard(props) {

  return (
    <StyledStandartCard
      onClick={props.onClick}
    >
      <div className='card_wrapper'>
        <div className='card_icon_wrapper'>
          {props.icon}
        </div>
        <div className='card_content_wrapper'>
          <div className='card_title'>{props.title}</div>
          <div className='card_content'>{props.content}</div>
        </div>
      </div>
    </StyledStandartCard>
  )
}

StandardCard.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  content: PropTypes.string
};

export default StandardCard;