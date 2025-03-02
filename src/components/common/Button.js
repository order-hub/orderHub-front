import React from 'react';
import styled from 'styled-components';

const Button = ({ onClick, children, style }) => (
  <StyledButton onClick={onClick} style={style}>
    {children}
  </StyledButton>
);

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #E5E7EB; 
  border-radius: 10px;
  height: 40px;
  white-space: nowrap;
`;

export default Button;
