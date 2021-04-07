import React from 'react';
import {
  NavbarContainer,
  ContentContainer,
  Option,
  OptionContainer,
} from './style';
import Link from 'next/link';

const NavBar: React.FC = ({ children }) => {
  return (
    <NavbarContainer>
      <OptionContainer>
        <Link href="/settings">
          <Option tabIndex={0}>Settings</Option>
        </Link>
      </OptionContainer>
      <OptionContainer>
        <Link href="/">
          <Option tabIndex={1}>Home</Option>
        </Link>
      </OptionContainer>
      <ContentContainer>{children}</ContentContainer>
    </NavbarContainer>
  );
};

export default NavBar;
