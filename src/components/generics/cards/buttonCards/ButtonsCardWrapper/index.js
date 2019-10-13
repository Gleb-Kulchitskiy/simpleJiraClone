import React from 'react'
import StandardCard from '../StandardCard';
import PropTypes from 'prop-types';

import StyleButtonCards from './StyledButtonsCardWrapper';

function ButtonsCardWrapper(props) {
  const {data = [], styles, onItemClick} = props;

  return (
    <StyleButtonCards styles={styles}>
      {
        data.map(({title, icon, content, type}) => (
          <StandardCard key={title} onClick={onItemClick(type)} title={title} icon={icon} content={content}/>
        ))
      }
    </StyleButtonCards>
  )
}

ButtonsCardWrapper.propTypes = {
  styles: PropTypes.object,
  data: PropTypes.array,
};

export default ButtonsCardWrapper;