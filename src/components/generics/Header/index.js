import React from 'react'
import StyledHeader from './StyledHeader';

export default function Header(props) {

  return (
    <StyledHeader>
      {props.children}
    </StyledHeader>
  )
}