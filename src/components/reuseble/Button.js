import React from 'react'
import styled from 'styled-components';

export default function Button({ children, style, animation }) {
  return (
    <BTN className="slide" style={style} animation={animation}>
      {children}
    </BTN>
  );
}

const BTN = styled.button`
  outline: none;
  border: none;
  text-transform: uppercase;
  // padding: px;
  background-color: red;
  color: white;
  cursor: pointer;
  animation: ${(props) => props.animation};
  animation-duration: 2s;

  &:hover {
    background-color: white;
    color: red;

`;