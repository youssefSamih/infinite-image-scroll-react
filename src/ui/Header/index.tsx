import React from 'react';
import NavBar from 'ui/NavBar';
import { HeaderContainer } from './style';

const Header: React.FC = ({ children }) => {
  return (
    <HeaderContainer>
      <NavBar>{children}</NavBar>
    </HeaderContainer>
  );
};

export default Header;
