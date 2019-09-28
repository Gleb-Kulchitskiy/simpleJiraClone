import React from 'react';
import {Link} from 'react-router-dom';
import StyledNavLink from './StyledNavLink';

export default (props) => {
  const Icon = props.icon.icon;

  return <StyledNavLink>
    <Link className='link_wrapper' to={props.to}>
      <span className='icon_wrapper'>
        <Icon/>
      </span>
      <p className='title'>{props.title}</p>
    </Link>
  </StyledNavLink>
}