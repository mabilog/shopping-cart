import React from 'react';
import styled from 'styled-components';

const STYLES = [
  'btn--primary',
  'btn--outline',
]

const SIZES = [
  'btn--medium',
  'btn--large',
]

const Button = ({
  children,
  type, 
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES(0); 
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES(0);

  return( 
    <Btn className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>{children}</Btn>
  )
}

const Btn = styled.button`
  padding: 8px 20px;
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    padding: 8px 20px;
    transition: all 0.3s ease-ease-out;
    background-color: white;
    color: #6568f4;
  }
`;

export default Button;