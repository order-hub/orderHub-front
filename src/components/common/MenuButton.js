import React from 'react';
import styled from 'styled-components';

const MenuButton = ({ onClick, children, style }) => (
  <StyledButton onClick={onClick} style={style}>
    {children}
  </StyledButton>
);

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 24px;
  cursor: pointer;
  background-color: #E5E7EB; 
  border-radius: 3px;
  height: 50px;
  width: 50%;
`;

export default MenuButton;
